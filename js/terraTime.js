function terraDailyReset() {
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
		fragment.append(wikifier("travelingMerchantShopListSetup"));
		V.Traveling_Merchant_arrive_message = true;
	} else {
		delete V.Traveling_Merchant_arrive;
		delete V.traveling_merchant_shop_list;
	}
}
window.terraDailyReset = terraDailyReset;

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

new TimeEvent('onHour', 'terraHour')
	.Action(timeData => {
		// 垂钓S的成就
		const fragment = document.createDocumentFragment();
		const earnFeat = featName => {
			if (!V.feats.currentSave[featName]) fragment.append(wikifier("earnFeat", `"${featName}"`));
		};
		if (V.fishingskill >= 1000) earnFeat("Kong Jun");
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