function terraStartOnly() {
	// 任务鱼
	V.fishing_request_selection_list = Object.keys(setup.terraRequestFish);
	V.fishing_request_selection_list.delete("Bloody_Manowar");
	V.fishing_request_selection = V.fishing_request_selection_list.random();
	V.fishing_request_fish = [];
	V.fishing_requests_finished_count = 0;

	// NPC性别选项（目前只有渔夫性别可选）
	V.options.terraGender = {};

	// 渔夫任务奖励家具
	V.angler_furniture_obtained = [];

	// 物品数量：药水、鱼饵、宝匣、普通鱼、垃圾、消耗品、食物、纯材料类物品
	for (const p of Object.keys(setup.terraPotion)) {
		const pi = setup.terraPotion[p];
		V[pi.name] = 0;
	}
	for (const b of Object.keys(setup.terraBait)) {
		const bi = setup.terraBait[b];
		V[bi.name] = 0;
	}
	for (const cr of Object.keys(setup.terraCrate)) {
		const cri = setup.terraCrate[cr];
		V[cri.name] = 0;
	}
	for (const fi of Object.keys(setup.terraFish)) {
		const fii = setup.terraFish[fi];
		V[fii.name] = 0;
	}
	for (const t of Object.keys(setup.terraTrash)) {
		const ti = setup.terraTrash[t];
		V[ti.name] = 0;
	}
	for (const co of Object.keys(setup.terraConsumable)) {
		const coi = setup.terraConsumable[co];
		V[coi.name] = 0;
	}
	for (const fo of Object.keys(setup.terraFood)) {
		const foi = setup.terraFood[fo];
		V[foi.name] = 0;
	}
	for (const m of Object.keys(setup.terraMaterial).filter(pm => setup.terraMaterial[pm].type === "material")) {
		const mi = setup.terraMaterial[m];
		V[mi.name] = 0;
	}

	// 森林商店鱼饵初始化，第一周固定为蠕虫类，第一天固定为蠕虫
	V.bait_forest_shop_main = "Worm";
	V.bait_forest_shop = "Worm";
	
	// 向导的新手任务
	V.guide_mod_hint_pre = [];

	// 晶塔收集
	V.pylon_collected = [];

	// dom罗宾拓展联动
	V.fishing_request_robin = [];
	V.robin_fishing_place_unlocked = [];

	// 盔甲栏/饰品栏/时装栏
	V.terra_armor_slots = ["Armor_Helmet","Armor_Shirt","Armor_Pants"];
	V.terra_accessories_slots = [];
	V.terra_vanity_accessories_slots = [];

	// 海岛制作站
	V.island_build_cooking = [];

	// 统计数据
	V.fishing_bitten_count = 0;
	V.fishing_harvest_count = 0;
	V.fishing_failed_count = 0;
	V.RPS_win_count = 0;
	V.RPS_none_count = 0;
	V.PRS_lose_count = 0;
	V.pylon_teleport_count = 0;
	V.unload_crate_count = {};
	for (const cr of Object.keys(setup.terraCrate).filter(pcr => setup.terraCrate[pcr].type === "crate")) {
		const cri = setup.terraCrate[cr];
		V.unload_crate_count[cri.name] = 0;
	}
	V.crafting_count = {
		Work_Bench: 0,
		Iron_Anvil: 0,
		Cooking_Pot: 0,
		Tinkerers_Workshop: 0,
		Hellforge: 0,
	}

	// 阁楼制作站初始化
	V.orphanage_loft_crafting_station = [];

	// 落星概率初始化
	fallenStarRateSet();
	
	// 计算魔光护符降低意识的变量
	V.Magiluminescence_timer = 0;

	// 快捷键默认关闭
	V.terraHotKeys = false;

	// 图鉴初始化：任务鱼列表、普通鱼列表、宝匣列表、鱼饵列表
	V.bestiary = {
		request_fish: {},
		fish: {},
		crate: {},
		bait: {},
	}
	
	// 宠物列表
	V.pet_list = [];
	V.bedroom_pets = {};

	// 闹钟功能
	V.terraAlarmList = {};

	// 战斗计数器
	V.defeated_counter = {
		namedNPC: {},
		human: {},
		beast: {},
		tentacle: {},
		plant: {},
	};

	// 地下永冻湖和地下熔岩湖的图像
	setup.LocationImages.underground_ice_lake = {
		folder: "underground_ice_lake",
		base: {
			default: {
				image: "base.png",
			}
		}
	}
	setup.LocationImages.underground_lava_lake = {
		folder: "underground_lava_lake",
		base: {
			default: {
				image: "base.png",
			}
		}
	}
}
window.terraStartOnly = terraStartOnly;

function fallenStarRateSet() {
	V.Meteor_Shower = random(1,10) === 1;
	V.fallen_star_rate = V.Meteor_Shower ? random(300,500) : random(1,3) === 1 ? random(100,150) : 100;
}
window.fallenStarRateSet = fallenStarRateSet;