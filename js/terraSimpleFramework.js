(() => {
	window.modSC2DataManager.getModLoadController().addLifeTimeCircleHook(
	'terrariaExpand',
	{
		ModLoaderLoadEnd: async () => {
			// 枫桦叶提供的检测模组版本的方法 Thanks！
			function parseVersion(versionString) {
				return versionString.split('.').map(Number);
			}
			function compareVersions(vLoaded, vRequired) {
				let vl = parseVersion(vLoaded);
				let vr = parseVersion(vRequired);
				let vLength = Math.max(vr.length, vl.length);
				for (let i=0; i < vLength; i++) {
					let num1 = vl[i] || 0;
					let num2 = vr[i] || 0;
					if (num1 > num2) return 1;
					if (num1 < num2) return 0;
				}
				return 1;
			}
			const logger = window.modUtils.getLogger();

			if (window.modUtils.getMod('Simple Frameworks')) {
				// 检测框架版本是否大于v2.0.5
				if (compareVersions(window.modUtils.getMod('Simple Frameworks').version, "2.0.5") === 1) {
					logger.log(`[Terraria Expand Mod] 检测到简易框架模组(Simple Frameworks){v:${window.modUtils.getMod('Simple Frameworks').version}}`);
					iMod.modData.modList.pushUnique("Terraria Expand Mod");
					simpleFrameworks.onInit(() => {
						// 时间事件
						terraTimeEventSF();
					});

					simpleFrameworks.addto('iModOptions', 'terraOptions');
					simpleFrameworks.addto('iModStatist', 'terraStatistics');
					simpleFrameworks.addto('ModSkillsBox', 'fishingskill');
					simpleFrameworks.addto('iModHeader', 
						{
							widget: 'terraFallenStar',
							exclude: ['Start', 'Start2']
						},
						{
							widget: 'vanityAccessoryTransformation',
							exclude: ['Start', 'Start2']
						},
						{
							widget: 'terraAlarmClock',
							exclude: ['Start', 'Start2']
						}
					);
					simpleFrameworks.addto('iModFooter', 
						{
							passage: ['Sewers Webs', 'Sewers Wood','Sewers Residential','Sewers Scrap','Sewers Workshop','Sewers Chute','Sewers Shrooms','Sewers Mud','Sewers Commercial','Sewers Ruins','Sewers Hole','Sewers Rubble','Sewers Industrial','Sewers Algae','Sewers Waterfall','Sewers Lake'],
							widget: 'GPSOldSewerMap',
						},
						{
							passage: ['Catacombs', 'Catacombs Prison', 'Catacombs Ridge', 'Catacombs Mud', 'Catacombs Masonry', 'Catacombs Barrow', 'Catacombs Stream', 'Catacombs Stalagmites', 'Catacombs Bores', 'Catacombs Engravings', 'Catacombs Museum', 'Catacombs Statues', 'Catacombs Compound', 'Catacombs Chasm', 'Catacombs Sarcophagi'],
							widget: 'GPSCatacombs',
						},
						{
							passage: ['Docks Sneak'],
							widget: 'GPSDocks',
						},
						{
							exclude: ['Start', 'Start2'],
							widget: 'terra_temperature',
						},
						{
							passage: ['Tentacle Plains'],
							widget: 'GPSTentaclePlains',
						},
						{
							passage: ['Forest', 'Churchyard', 'Lake Shore', 'Lake Firepit', 'Lake Waterfall', 'Lake Fishing Rock', 'Lake Campsite', 'Forest Brook'],
							widget: 'GPSForest',
						},
						{
							passage: ['Beach Cave'],
							widget: 'GPSBeachCave',
						},
						{
							exclude: ['Start', 'Start2'],
							widget: 'GPSBirdHunt',
						},
						{
							passage: ['Moor'],
							widget: 'GPSMoor',
						}
					);
				} else {
					logger.error(`[Terraria Expand Mod] 检测到简易框架模组(Simple Frameworks)版本过低，至少需要{v:2.0.5}，而当前简易框架模组版本为{v:${window.modUtils.getMod('Simple Frameworks').version}}。请更新简易框架模组`);
				}
			} else {
				logger.error(`[Terraria Expand Mod] 未检测到简易框架模组(Simple Frameworks)。请加载简易框架模组`);
			}
		},
	}
)
})();

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