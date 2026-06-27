// 秋风白桦所需的写法
window.terraTimeEventMB = function () {
	// 每分钟事件 - 药水效果、草药生长和魔光护符
    maplebirch.dynamic.regTimeEvent('onMin', 'terraMinute', {
        action: (timeData) => {
            const fragment = document.createDocumentFragment();
            const passedMinutes = Math.floor(timeData.passed / 60) || 0;

			// 药水生效时间
			if (V.terra_accessories_slots.includes("Supreme_Bait_Tackle_Box_Fishing_Station") && V.options.trueSBTBFS) {
				V.Fishing_Potion_countdown = "Infinite";
				V.Sonar_Potion_countdown = "Infinite";
				V.Crate_Potion_countdown = "Infinite";
			} else {
				if (V.Fishing_Potion_countdown === "Infinite") delete V.Fishing_Potion_countdown;
				if (V.Sonar_Potion_countdown === "Infinite") delete V.Sonar_Potion_countdown;
				if (V.Crate_Potion_countdown === "Infinite") delete V.Crate_Potion_countdown;
				if (V.Fishing_Potion_countdown) {
					V.Fishing_Potion_countdown -= passedMinutes;
					V.Fishing_Potion_countdown = V.Fishing_Potion_countdown <= 0 ? undefined : V.Fishing_Potion_countdown;
				}
				if (V.Sonar_Potion_countdown) {
					V.Sonar_Potion_countdown -= passedMinutes;
					V.Sonar_Potion_countdown = V.Sonar_Potion_countdown <= 0 ? undefined : V.Sonar_Potion_countdown;
				}
				if (V.Crate_Potion_countdown) {
					V.Crate_Potion_countdown -= passedMinutes;
					V.Crate_Potion_countdown = V.Crate_Potion_countdown <= 0 ? undefined : V.Crate_Potion_countdown;
				}
			}
			if (V.Warmth_Potion_countdown) {
				V.Warmth_Potion_countdown -= passedMinutes;
				V.Warmth_Potion_countdown = V.Warmth_Potion_countdown <= 0 ? undefined : V.Warmth_Potion_countdown;
			}

			// 手搓random()
			function random(min, max) {
				if (!max) {
					max = min;
					min = 0;
				}
				return Math.floor(Math.random() * (max - min + 1) + min);
			}
			// 草药的自然生成，以及生长
			for (let m=1; m <= passedMinutes; m++) { // 每分钟检定一次，希望植株太多的时候游戏不会崩（）
				const updateRate = V.terra_herb_updateRate; // 草药更新概率默认为1/550，之后也许可以将这个数值设定为可供玩家自行调整的形式
				for (const location of Object.keys(V.terra_herb_plots)) { // 地点
					for (const plot of Object.keys(V.terra_herb_plots[location])) { // 种植区块
						// 区块信息与地块信息
						const plotInfo = V.terra_herb_plots[location][plot];
						const bedInfo = setup.terraHerbBed[plotInfo.bed];
						// 对于属于自然环境的种植区块，当植株少于3棵时，尝试生成1棵新植株，防止灭绝（）
						if (plotInfo.natural && Object.keys(plotInfo.plots).length < 3 && random(1,updateRate) === 1) {
							let emptyPlot = [1,2,3,4,5,6,7,8,9,10];
							emptyPlot.delete(Object.keys(plotInfo.plots));
							plotInfo.plots[emptyPlot.random()] = {
								name: bedInfo.herb_name,
								stage: "sprout",
							}
						}
						// 检查每棵植株，进行生长阶段变化判定
						for (const herbId of Object.keys(plotInfo.plots)) {
							const herbInfo = plotInfo.plots[herbId];
							// 发芽期-成熟期判定
							if (herbInfo.stage === "sprout") {
								if (random(1,updateRate) === 1) {
									// 进行两次1/50判定，第二次判定会在第一次失败后执行
									if (random(1,50) === 1) {
										// 寒颤棘额外有个1/2判定
										herbInfo.stage = bedInfo.herb_name !== "Shiverthorn" ? "mature" : random(0,1) ? "mature" : "sprout";
									} else if (random(1,50) === 1) { // 第二次判定通过后，如果植株满足对应条件，也会生长到成熟期
										switch (bedInfo.herb_name) {
											case "Daybloom":
												if (Time.dayState !== "night") herbInfo.stage = "mature";
												break;
											case "Moonglow":
												if (Time.dayState === "night") herbInfo.stage = "mature";
												break;
											case "Waterleaf":
												if (["lightPrecipitation","heavyPrecipitation","thunderStorm"].includes(Weather.name)) herbInfo.stage = "mature";
												break;
											case "Fireblossom":
												if (plotInfo.natural) herbInfo.stage = "mature";
												break;
											case "Blinkroot":
												if (plotInfo.natural) herbInfo.stage = "mature";
												break;
										}
									}
								}
							} else { // 成熟期-开花期判定
								switch (bedInfo.herb_name) {
									case "Daybloom": // 太阳花：日间开花
										herbInfo.stage = Time.dayState !== "night" ? "blossom" : "mature";
										break;
									case "Moonglow": // 月光草：夜间开花
										herbInfo.stage = Time.dayState === "night" ? "blossom" : "mature";
										break;
									case "Waterleaf": // 水叶草：降水时开花
										herbInfo.stage = ["lightPrecipitation","heavyPrecipitation","thunderStorm"].includes(Weather.name) ? "blossom" : "mature";
										break;
									case "Fireblossom": // 火焰花：黄昏时开花
										herbInfo.stage = Time.dayState === "dusk" ? "blossom" : "mature";
										break;
									case "Shiverthorn": // 每分钟小概率开花，之后不会变回成熟期
										if (random(1,updateRate) === 1 && random(1,30) === 1) herbInfo.stage = "blossom";
										break;
									case "Blinkroot": // 闪耀根：每分钟小概率更新，检定通过后在成熟期与开花期之间转换
										if (random(1,updateRate) === 1 && random(1,3) !== 1) {
											switch (herbInfo.stage) {
												case "mature":
													if (random(1,2) === 1) herbInfo.stage = "blossom";
													break;
												case "blossom":
													if (random(1,5) === 1) herbInfo.stage = "mature";
													break;
											}
										}
										break;
									case "Deathweed": // 死亡草：血月或满月时开花
										herbInfo.stage = (Time.isBloodMoon() || Time.date.moonPhaseFraction === 0.5) ? "blossom" : "mature";
										break;
								}
							}
						}
					}
				}
			} // 又一个“登神长阶”（确信）

			// 魔光护符降低意识
			if (V.options.Magiluminescence_awareness_effect && V.terra_accessories_slots.includes("Magiluminescence")) {
				V.Magiluminescence_timer += timeData.min;
				T.Magiluminescence_temp = 0 - Math.floor(V.Magiluminescence_timer / 30);
				if (T.Magiluminescence_temp < 0) {
					fragment.append(wikifier("<<awareness _Magiluminescence_temp>>"));
					V.Magiluminescence_timer += T.Magiluminescence_temp * 30;
				}
			}
		}
	});

	// 每小时事件 - 黎明重置
    maplebirch.dynamic.regTimeEvent('onHour', 'terraHourResetDawn', {
		cond: (timeData) => 
			!V.daily.terraDawnCheck &&
			((timeData.prevDate.hour < 6 && (timeData.currentDate.hour >= 6 || timeData.currentDate.day !== timeData.prevDate.day)) ||
			(timeData.currentDate.day !== timeData.prevDate.day && timeData.currentDate.hour >= 6)),
		action: (timeData) => {
			V.daily.terraDawnCheck = true;
			terraResetDawn();
		},
		exact: true,
	});

	// 每小时事件 - 黄昏重置
	maplebirch.dynamic.regTimeEvent('onHour', 'terraHourResetDusk', {
		cond: (timeData) => 
			!V.daily.terraDuskCheck &&
			((timeData.prevDate.hour < 18 && (timeData.currentDate.hour >= 18 || timeData.currentDate.day !== timeData.prevDate.day)) ||
			(timeData.currentDate.day !== timeData.prevDate.day && timeData.currentDate.hour >= 18)),
		action: (timeData) => {
			V.daily.terraDuskCheck = true;
			if (V.Traveling_Merchant_arrive) V.Traveling_Merchant_leave_message = true;
		},
		exact: true,
	});

	// 每日事件 - 血月后幽灵状态重置以及月相调整
    maplebirch.dynamic.regTimeEvent('onDay', 'terraDay', {
        cond: (timeData) => Time.monthDay !== Time.lastDayOfMonth && V.Bloody_Tear_used,
        action: (timeData) => {
			V.moonstate = "morning";
			wikifier("checkWraith", true);
		}
	});

	// 每周事件 - 森林商店和金表重置
	maplebirch.dynamic.regTimeEvent('onWeek', 'terraWeek', {
        action: (timeData) => {
			// 手搓random()
			function random(min, max) {
				if (!max) {
					max = min;
					min = 0;
				}
				return Math.floor(Math.random() * (max - min + 1) + min);
			}
			// 森林商店
			delete V.bait_forest_shop_main;
			if (random(1,3) === 1) {
				if (random(1,9) === 1) {
					V.bait_forest_shop_main = "Stinkbug";
				}
			} else if (random(1,13) === 1) {
				V.bait_forest_shop_main = random(1,3) === 1 ? "Ladybug" : "Butterfly";
			}
			if (V.bait_forest_shop_main === undefined) {
				V.bait_forest_shop_main = [
					"Worm",
					"Firefly",
					"Snail",
					"Grasshopper",
					"Maggot",
					"Dragonfly"
				].random();
			}
			delete V.bait_forest_shop_received;

			// 金表
			terraAlarmResetWeekly();
		}
	});
};

// 简易框架所需的写法
window.terraTimeEventSF = function () {
	new TimeEvent('onMin', 'terraMinute')
		.Action(timeData => {
			const fragment = document.createDocumentFragment();
			// 药水生效时间
			if (V.terra_accessories_slots.includes("Supreme_Bait_Tackle_Box_Fishing_Station") && V.options.trueSBTBFS) {
				V.Fishing_Potion_countdown = "Infinite";
				V.Sonar_Potion_countdown = "Infinite";
				V.Crate_Potion_countdown = "Infinite";
			} else {
				if (V.Fishing_Potion_countdown === "Infinite") delete V.Fishing_Potion_countdown;
				if (V.Sonar_Potion_countdown === "Infinite") delete V.Sonar_Potion_countdown;
				if (V.Crate_Potion_countdown === "Infinite") delete V.Crate_Potion_countdown;
				if (V.Fishing_Potion_countdown) {
					V.Fishing_Potion_countdown -= timeData.min;
					V.Fishing_Potion_countdown = V.Fishing_Potion_countdown <= 0 ? undefined : V.Fishing_Potion_countdown;
				}
				if (V.Sonar_Potion_countdown) {
					V.Sonar_Potion_countdown -= timeData.min;
					V.Sonar_Potion_countdown = V.Sonar_Potion_countdown <= 0 ? undefined : V.Sonar_Potion_countdown;
				}
				if (V.Crate_Potion_countdown) {
					V.Crate_Potion_countdown -= timeData.min;
					V.Crate_Potion_countdown = V.Crate_Potion_countdown <= 0 ? undefined : V.Crate_Potion_countdown;
				}
			}
			if (V.Warmth_Potion_countdown) {
				V.Warmth_Potion_countdown -= timeData.min;
				V.Warmth_Potion_countdown = V.Warmth_Potion_countdown <= 0 ? undefined : V.Warmth_Potion_countdown;
			}

			// 手搓random()
			function random(min, max) {
				if (!max) {
					max = min;
					min = 0;
				}
				return Math.floor(Math.random() * (max - min + 1) + min);
			}
			// 草药的自然生成，以及生长
			for (let m=1; m <= timeData.min; m++) { // 每分钟检定一次，希望植株太多的时候游戏不会崩（）
				const updateRate = V.terra_herb_updateRate; // 草药更新概率默认为1/550，之后也许可以将这个数值设定为可供玩家自行调整的形式
				for (const location of Object.keys(V.terra_herb_plots)) { // 地点
					for (const plot of Object.keys(V.terra_herb_plots[location])) { // 种植区块
						// 区块信息与地块信息
						const plotInfo = V.terra_herb_plots[location][plot];
						const bedInfo = setup.terraHerbBed[plotInfo.bed];
						// 对于属于自然环境的种植区块，当植株少于3棵时，尝试生成1棵新植株，防止灭绝（）
						if (plotInfo.natural && Object.keys(plotInfo.plots).length < 3 && random(1,updateRate) === 1) {
							let emptyPlot = [1,2,3,4,5,6,7,8,9,10];
							emptyPlot.delete(Object.keys(plotInfo.plots));
							plotInfo.plots[emptyPlot.random()] = {
								name: bedInfo.herb_name,
								stage: "sprout",
							}
						}
						// 检查每棵植株，进行生长阶段变化判定
						for (const herbId of Object.keys(plotInfo.plots)) {
							const herbInfo = plotInfo.plots[herbId];
							// 发芽期-成熟期判定
							if (herbInfo.stage === "sprout") {
								if (random(1,updateRate) === 1) {
									// 进行两次1/50判定，第二次判定会在第一次失败后执行
									if (random(1,50) === 1) {
										// 寒颤棘额外有个1/2判定
										herbInfo.stage = bedInfo.herb_name !== "Shiverthorn" ? "mature" : random(0,1) ? "mature" : "sprout";
									} else if (random(1,50) === 1) { // 第二次判定通过后，如果植株满足对应条件，也会生长到成熟期
										switch (bedInfo.herb_name) {
											case "Daybloom":
												if (Time.dayState !== "night") herbInfo.stage = "mature";
												break;
											case "Moonglow":
												if (Time.dayState === "night") herbInfo.stage = "mature";
												break;
											case "Waterleaf":
												if (["lightPrecipitation","heavyPrecipitation","thunderStorm"].includes(Weather.name)) herbInfo.stage = "mature";
												break;
											case "Fireblossom":
												if (plotInfo.natural) herbInfo.stage = "mature";
												break;
											case "Blinkroot":
												if (plotInfo.natural) herbInfo.stage = "mature";
												break;
										}
									}
								}
							} else { // 成熟期-开花期判定
								switch (bedInfo.herb_name) {
									case "Daybloom": // 太阳花：日间开花
										herbInfo.stage = Time.dayState !== "night" ? "blossom" : "mature";
										break;
									case "Moonglow": // 月光草：夜间开花
										herbInfo.stage = Time.dayState === "night" ? "blossom" : "mature";
										break;
									case "Waterleaf": // 水叶草：降水时开花
										herbInfo.stage = ["lightPrecipitation","heavyPrecipitation","thunderStorm"].includes(Weather.name) ? "blossom" : "mature";
										break;
									case "Fireblossom": // 火焰花：黄昏时开花
										herbInfo.stage = Time.dayState === "dusk" ? "blossom" : "mature";
										break;
									case "Shiverthorn": // 每分钟小概率开花，之后不会变回成熟期
										if (random(1,updateRate) === 1 && random(1,30) === 1) herbInfo.stage = "blossom";
										break;
									case "Blinkroot": // 闪耀根：每分钟小概率更新，检定通过后在成熟期与开花期之间转换
										if (random(1,updateRate) === 1 && random(1,3) !== 1) {
											switch (herbInfo.stage) {
												case "mature":
													if (random(1,2) === 1) herbInfo.stage = "blossom";
													break;
												case "blossom":
													if (random(1,5) === 1) herbInfo.stage = "mature";
													break;
											}
										}
										break;
									case "Deathweed": // 死亡草：血月或满月时开花
										herbInfo.stage = (Time.isBloodMoon() || Time.date.moonPhaseFraction === 0.5) ? "blossom" : "mature";
										break;
								}
							}
						}
					}
				}
			} // 又一个“登神长阶”（确信）

			// 魔光护符降低意识
			if (V.options.Magiluminescence_awareness_effect && V.terra_accessories_slots.includes("Magiluminescence")) {
				V.Magiluminescence_timer += timeData.min;
				T.Magiluminescence_temp = 0 - Math.floor(V.Magiluminescence_timer / 30);
				if (T.Magiluminescence_temp < 0) {
					fragment.append(wikifier("<<awareness _Magiluminescence_temp>>"));
					V.Magiluminescence_timer += T.Magiluminescence_temp * 30;
				}
			}
	});

	new TimeEvent('onHour', 'terraHourFeat')
		.Action(timeData => {
			// 垂钓S的成就
			const fragment = document.createDocumentFragment();
			const earnFeat = featName => {
				if (!V.feats.currentSave[featName]) fragment.append(wikifier("earnFeat", `"${featName}"`));
			};
			if (V.fishingskill >= 1000) earnFeat("Kong Jun");
	});

	new TimeEvent('onHour', 'terraHourResetDawn')
		.Cond((timeData) => 
			!V.daily.terraDawnCheck &&
			((timeData.prev.hour < 6 && (timeData.current.hour >= 6 || timeData.current.day !== timeData.prev.day)) ||
			(timeData.current.day !== timeData.prev.day && timeData.current.hour >= 6))
		)
		.Action(timeData => {
			V.daily.terraDawnCheck = true;
			terraResetDawn();
	});

	new TimeEvent('onHour', 'terraHourResetDusk')
		.Cond((timeData) => 
			!V.daily.terraDuskCheck &&
			((timeData.prev.hour < 18 && (timeData.current.hour >= 18 || timeData.current.day !== timeData.prev.day)) ||
			(timeData.current.day !== timeData.prev.day && timeData.current.hour >= 18))
		)
		.Action(timeData => {
			V.daily.terraDuskCheck = true;
			if (V.Traveling_Merchant_arrive) V.Traveling_Merchant_leave_message = true;
	});

	new TimeEvent('onDay', 'terraDay')
		// 使用血月过夜后，正确地调整月相为'morning'
		.Cond((timeData) => Time.monthDay !== Time.lastDayOfMonth && V.Bloody_Tear_used)
		.Action(timeData => {
			V.moonstate = "morning";
			wikifier("checkWraith", true);
	});

	new TimeEvent('onWeek', 'terraWeek')
		.Action(timeData => {
			function random(min, max) {
				if (!max) {
					max = min;
					min = 0;
				}
				return Math.floor(Math.random() * (max - min + 1) + min);
			}
			// 森林商店
			delete V.bait_forest_shop_main;
			if (random(1,3) === 1) {
				if (random(1,9) === 1) {
					V.bait_forest_shop_main = "Stinkbug";
				}
			} else if (random(1,13) === 1) {
				V.bait_forest_shop_main = random(1,3) === 1 ? "Ladybug" : "Butterfly";
			}
			if (V.bait_forest_shop_main === undefined) {
				V.bait_forest_shop_main = [
					"Worm",
					"Firefly",
					"Snail",
					"Grasshopper",
					"Maggot",
					"Dragonfly"
				].random();
			}
			delete V.bait_forest_shop_received;

			// 金表
			terraAlarmResetWeekly();
	});
};

function terraResetDawn() {
	const fragment = document.createDocumentFragment();

	// 每日6点刷新任务鱼种类、重置已完成任务鱼状态、重置渔夫猜拳
	V.fishing_request_selection = Time.monthDay === Time.lastDayOfMonth ? "Bloody_Manowar" : V.fishing_request_selection_list.random();
	delete V.fishing_request_finished_daily;
	delete V.fishing_request_asked;
	delete V.Angler_RPS_daily;
	delete V.fishing_request_punishment;

	//每日6点刷新森林商店小动物家具小种类
	switch (V.bait_forest_shop_main) {
		case "Butterfly": 
			if (random(1,400) === 1) {
				V.bait_forest_shop = "Gold_Butterfly";
			} else {
				V.bait_forest_shop = [
					"Monarch_Butterfly",
					"Sulphur_Butterfly",
					"Zebra_Swallowtail_Butterfly",
					"Ulysses_Butterfly",
					"Julia_Butterfly",
					"Red_Admiral_Butterfly",
					"Purple_Emperor_Butterfly",
					"Tree_Nymph_Butterfly"
				].random();
			}
			break;
		case "Ladybug": 
			V.bait_forest_shop = random(1,400) === 1 ? "Gold_Ladybug" : "Ladybug";
			break;
		case "Dragonfly":
			if (random(1,400) === 1) {
				V.bait_forest_shop = "Gold_Dragonfly";
			} else {
				V.bait_forest_shop = [
					"Black_Dragonfly",
					"Blue_Dragonfly",
					"Green_Dragonfly",
					"Orange_Dragonfly",
					"Red_Dragonfly",
					"Yellow_Dragonfly"
				].random();
			}
			break;
		case "Stinkbug":
			V.bait_forest_shop = "Stinkbug";
			break;
		case "Worm":
			V.bait_forest_shop = random(1,400) === 1 ? "Gold_Worm" : random(1,10) === 1 ? "Enchanted_Nightcrawler" : "Worm";
			break;
		case "Firefly":
			V.bait_forest_shop = random(1,10) === 1 ? "Lightning_Bug" : "Firefly";
			break;
		case "Snail":
			V.bait_forest_shop = random(1,10) === 1 ? "Glowing_Snail" : "Snail";
			break;
		case "Grasshopper":
			V.bait_forest_shop = random(1,400) === 1 ? "Gold_Grasshopper" : "Grasshopper";
			break;
		case "Maggot":
			V.bait_forest_shop = "Maggot";
			break;
	}

	// 清除血泪带来的效果
	delete V.Bloody_Tear_used;
	fragment.append(wikifier("clearWraith"));

	// 流星雨事件概率：1/10
	fallenStarRateSet();

	// 老教堂墓地生长阿比盖尔之花（未实装）
	// if (V.Abigails_Flower_grown !== true && Time.days >= random(1,100)) {
	// 	V.Abigails_Flower_grown = true;
	// }

	// 地下永冻湖的冰洞重新结冰
	V.underground_ice_lake_broken = V.underground_ice_lake_broken > 0 ? (V.underground_ice_lake_broken - 1) : undefined;

	// 旅商到达
	if (random(1,5) === 1) {
		V.Traveling_Merchant_arrive = true;
		travelingMerchantShopListSetup();
		V.Traveling_Merchant_arrive_message = true;
	} else {
		delete V.Traveling_Merchant_arrive;
		delete V.traveling_merchant_shop_list;
	}
}
window.terraResetDawn = terraResetDawn;