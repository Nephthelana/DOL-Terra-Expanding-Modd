setup.terraFishingPlace = {
	"lake_fishing_rock": {
		name: "lake_fishing_rock",
		cn_name: "森林湖钓鱼岩",
		type: "town",
		icon: "<<lakeicon 'fishing'>>",
		entrance: "Lake Fishing Rock",
		unlock_conditions: "垂钓<<fishingskillRank 0>>，森林湖钓鱼岩",
	},
	"beach": {
		name: "beach",
		cn_name: "海滩",
		type: "town",
		icon: "<<icon 'beach.gif'>>",
		entrance: "Beach",
		unlock_conditions: "垂钓<<fishingskillRank 0>>，海滩",
	},
	"barb_street": {
		name: "barb_street",
		cn_name: "倒钩街的运河",
		type: "town",
		icon: "<<barbicon>>",
		entrance: "Barb Street",
		unlock_conditions: "垂钓<<fishingskillRank 100>>，倒钩街",
	},
	"moor": {
		name: "moor",
		cn_name: "雷米庄园门口的沙地",
		type: "town",
		icon: "<<mooricon 'remy'>>",
		entrance: "Moor",
		unlock_conditions: "垂钓<<fishingskillRank 200>>，荒原中深入至雷米庄园的位置",
	},
	"honey": {
		name: "honey",
		cn_name: "森林蜂蜜池",
		type: "town",
		icon: "<<ind>>",
		entrance: "Forest",
		unlock_conditions: "垂钓<<fishingskillRank 300>>，森林中摘取野蜂巢的事件中，或森林中足够深入的地方(比森林湖更远，但不到尽头)",
	},
	"farm_woodland": {
		name: "farm_woodland",
		cn_name: "农场",
		type: "town",
		icon: "<<farmicon 'barn'>>",
		entrance: "Farm Work",
		unlock_conditions: "垂钓<<fishingskillRank 400>>，艾利克斯的农场(需要已解锁安全屋)",
	},
	"temple_garden": {
		name: "temple_garden",
		cn_name: "神殿的花园",
		type: "town",
		icon: "<<templeicon 'garden'>>",
		entrance: "Temple Garden",
		unlock_conditions: "垂钓<<fishingskillRank 400>>，神殿的花园(需要加入神殿)",
	},
	"wolf_cave_clearing": {
		name: "wolf_cave_clearing",
		cn_name: "狼窝的溪流",
		type: "town",
		icon: "<<wolfcaveicon 'stream'>>",
		entrance: "Wolf Cave Clearing",
		unlock_conditions: "垂钓<<fishingskillRank 500>>，狼洞外面的空地(需要获得<<print $bestialitydisable is 'f' ? '斯德哥尔摩综合征：狼群' : '斯德哥尔摩综合征：狼人'>>)",
	},
	"bird_tower": {
		name: "bird_tower",
		cn_name: "鹰塔的雨水池",
		type: "town",
		icon: "<<birdicon 'rainwater'>>",
		entrance: "Bird Tower",
		unlock_conditions: "垂钓<<fishingskillRank 600>>，鹰塔(需要获得斯德哥尔摩综合征：巨鹰)",
	},
	"eden_clearing": {
		name: "eden_clearing",
		cn_name: "伊甸小屋的泉水",
		type: "town",
		icon: "<<lakeicon 'pond'>>",
		entrance: "Eden Clearing",
		unlock_conditions: "垂钓<<fishingskillRank 700>>，伊甸小屋外的空地(需要获得斯德哥尔摩综合征：伊甸)",
	},
	"bog": {
		name: "bog",
		cn_name: "沼泽",
		type: "town",
		icon: "<<foresticon 'bog'>>",
		entrance: "Bog",
		unlock_conditions: "垂钓<<fishingskillRank 800>>，沼泽(需要发现沼泽)",
	},
	"trash": {
		name: "trash",
		cn_name: "垃圾场深处的沸水池",
		type: "town",
		icon: "<<landfillicon>>",
		entrance: "Trash",
		unlock_conditions: "垂钓<<fishingskillRank 900>>，垃圾填埋场足够深入的地方",
	},
	"park": {
		name: "park",
		cn_name: "公园喷泉",
		type: "town",
		icon: "<<parkicon 'fountain'>>",
		entrance: "Park",
		unlock_conditions: "垂钓<<fishingskillRank 1000>>，公园",
	},
	"school_pool": {
		name: "school_pool",
		cn_name: "学校泳池",
		type: "town",
		icon: "<<swimmingicon>>",
		entrance: "School Pool",
		unlock_conditions: "垂钓<<fishingskillRank 100>>，学校游泳池，未在上课期间",
	},
	"ice": {
		name: "ice",
		cn_name: "地下永冻湖",
		type: "town",
		icon: "<<icon 'location/underground_ice_lake.png'>>",
		entrance: "Underground Ice Lake",
		unlock_conditions: "垂钓<<fishingskillRank 0>>，科学 <a class='lblue'>B</a> ，老教堂墓穴中“小溪流淌”字样的位置",
	},
	"lava": {
		name: "lava",
		cn_name: "地下熔岩湖",
		type: "town",
		icon: "<<icon 'location/underground_lava_lake.png'>>",
		entrance: "Underground Lava Lake",
		unlock_conditions: "垂钓<<fishingskillRank 0>>，科学 <a class='green'>A*</a> ，历史 <a class='green'>A*</a> ，意志 <a class='teal'>5级</a> ，走私者洞穴最深处的位置",
	},
	"temple_garden_artificial": {
		name: "temple_garden_artificial",
		cn_name: "老教堂墓地庭院的人工钓鱼池",
		type: "artificial",
		icon: "<<foresticon 'churchyard'>>",
		entrance: "Churchyard",
		unlock_conditions: "垂钓<<fishingskillRank 400>>，在施粥所工作一次后，前往老教堂墓地完成建造",
	},
	"wolf_cave_clearing_artificial": {
		name: "wolf_cave_clearing_artificial",
		cn_name: "狼穴洞口附近的人工钓鱼池",
		type: "artificial",
		icon: "<<foresticon>>",
		entrance: "Forest",
		unlock_conditions: "垂钓<<fishingskillRank 500>>，被黑狼追杀一次后，前往森林深处完成建造",
	},
	"bird_tower_artificial": {
		name: "bird_tower_artificial",
		cn_name: "高塔塔底的人工钓鱼池",
		type: "artificial",
		icon: "<<birdicon 'tower'>>",
		entrance: "Moor",
		unlock_conditions: "垂钓<<fishingskillRank 600>>，被巨鹰追杀一次后，前往荒原最深处，高塔塔底完成建造",
	},
	"eden_clearing_artificial": {
		name: "eden_clearing_artificial",
		cn_name: "猎人小屋附近的人工钓鱼池",
		type: "artificial",
		icon: "<<foresticon>>",
		entrance: "Forest",
		unlock_conditions: "垂钓<<fishingskillRank 700>>，被猎人追杀一次后，前往森林深处完成建造",
	},
	"rocky_hillock": {
		name: "rocky_hillock",
		cn_name: "海岛的天湖",
		type: "island",
		icon: "<<ind>>",
		entrance: "Island",
		unlock_conditions: "",
	},
	"waterfall": {
		name: "waterfall",
		cn_name: "海岛的瀑布湖",
		type: "island",
		icon: "<<ind>>",
		entrance: "Island",
		unlock_conditions: "",
	},
	"gulch": {
		name: "gulch",
		cn_name: "海岛的洞穴湖",
		type: "island",
		icon: "<<ind>>",
		entrance: "Island",
		unlock_conditions: "",
	}
}