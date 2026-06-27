// 暂时不改这个文件名，用来在github内显示详细更新细节
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

			if (window.modUtils.getMod('maplebirch')) {
				// 检测秋风白桦框架版本是否大于v3.1.6
				if (compareVersions(window.modUtils.getMod('maplebirch').version, "3.1.6") === 1) {
					logger.log(`[Terraria Expand Mod] 检测到秋枫白桦框架模组(maplebirch){v:${window.modUtils.getMod('maplebirch').version}}`);
					maplebirch.modList.pushUnique("Terraria Expand Mod");
					maplebirch.tool.onInit(() => {
						// 时间事件
						terraTimeEventMB();
					});

					maplebirch.tool.addTo('Options', 'terraOptions');
					maplebirch.tool.addTo('Statistics', 'terraStatistics');
					maplebirch.tool.addTo('SkillsBox', 'fishingskill');
					maplebirch.tool.addTo('Header', 
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
					maplebirch.tool.addTo('Footer', 
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
					logger.error(`[Terraria Expand Mod] 检测到秋枫白桦框架模组(maplebirch)版本过低，至少需要{v:3.1.6}，而当前秋枫白桦框架模组版本为{v:${window.modUtils.getMod('maplebirch').version}}。请更新秋枫白桦框架模组`);
				}
			} else if (window.modUtils.getMod('Simple Frameworks')) {
				// 检测简易框架版本是否大于v2.0.5
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
				logger.error(`[Terraria Expand Mod] 未检测到秋枫白桦框架模组(maplebirch)。请加载所需的前置模组`);
			}
		},
	}
)
})();