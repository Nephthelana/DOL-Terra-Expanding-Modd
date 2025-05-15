function terraReloadVariables() {
	// 任务鱼
	V.fishing_request_selection_list = Object.keys(setup.terraRequestFish);
	V.fishing_request_selection_list.delete("Bloody_Manowar");
	V.fishing_request_selection = V.fishing_request_selection || V.fishing_request_selection_list.random();
	V.fishing_request_fish = V.fishing_request_fish || [];
	V.fishing_requests_finished_count = V.fishing_requests_finished_count || 0;
	
	// 渔夫任务奖励家具
	V.angler_furniture_obtained = V.angler_furniture_obtained || [];

	// 物品数量：药水、鱼饵、宝匣、普通鱼、垃圾、消耗品、食物、纯材料类物品
	for (const p of Object.keys(setup.terraPotion)) {
		const pi = setup.terraPotion[p];
		V[pi.name] = V[pi.name] || 0;
	}
	for (const b of Object.keys(setup.terraBait)) {
		const bi = setup.terraBait[b];
		V[bi.name] = V[bi.name] || 0;
	}
	for (const cr of Object.keys(setup.terraCrate)) {
		const cri = setup.terraCrate[cr];
		V[cri.name] = V[cri.name] || 0;
	}
	for (const fi of Object.keys(setup.terraFish)) {
		const fii = setup.terraFish[fi];
		V[fii.name] = V[fii.name] || 0;
	}
	for (const t of Object.keys(setup.terraTrash)) {
		const ti = setup.terraTrash[t];
		V[ti.name] = V[ti.name] || 0;
	}
	for (const co of Object.keys(setup.terraConsumable)) {
		const coi = setup.terraConsumable[co];
		V[coi.name] = V[coi.name] || 0;
	}
	for (const fo of Object.keys(setup.terraFood)) {
		const foi = setup.terraFood[fo];
		V[foi.name] = V[foi.name] || 0;
	}
	for (const m of Object.keys(setup.terraMaterial).filter(pm => setup.terraMaterial[pm].type === "material")) {
		const mi = setup.terraMaterial[m];
		V[mi.name] = V[mi.name] || 0;
	}

	// 森林商店鱼饵初始化
	V.bait_forest_shop_main = V.bait_forest_shop_main || "Worm";
	V.bait_forest_shop = V.bait_forest_shop || "Worm";

	// 向导的新手任务
	V.guide_mod_hint_pre = V.guide_mod_hint_pre || [];

	// 晶塔收集
	V.pylon_collected = V.pylon_collected || [];
	if (V.pylon_bedroom_unlock) {
		V.pylon_collected.pushUnique("Bedroom");
		delete V.pylon_bedroom_unlock;
	}
	if (V.pylon_eden_cabin_unlock) {
		V.pylon_collected.pushUnique("Eden Cabin");
		delete V.pylon_eden_cabin_unlock;
	}
	if (V.pylon_farm_bedroom_unlock) {
		V.pylon_collected.pushUnique("Farm Bedroom");
		delete V.pylon_farm_bedroom_unlock;
	}
	if (V.pylon_hawks_tower_unlock) {
		V.pylon_collected.pushUnique("Hawks Tower");
		delete V.pylon_hawks_tower_unlock;
	}
	if (V.pylon_wolfcave_unlock) {
		V.pylon_collected.pushUnique("Wolfcave");
		delete V.pylon_wolfcave_unlock;
	}

	// dom罗宾拓展联动
	V.fishing_request_robin = V.fishing_request_robin || [];
	V.robin_fishing_place_unlocked = V.robin_fishing_place_unlocked || [];

	// 盔甲栏/饰品栏/时装栏
	V.terra_armor_slots = V.terra_armor_slots || ["Armor_Helmet","Armor_Shirt","Armor_Pants"];
	V.terra_accessories_slots = V.terra_accessories_slots || [];
	V.terra_vanity_accessories_slots = V.terra_vanity_accessories_slots || [];

	// 修复血月天塔柱的bug
	if (V.blood_moon_monolith === "get") V.blood_moon_monolith = 0;

	// 海岛制作站
	V.island_build_cooking = V.island_build_cooking || [];

	// 统计数据
	V.fishing_bitten_count = V.fishing_bitten_count || 0;
	V.fishing_harvest_count = V.fishing_harvest_count || 0;
	V.fishing_failed_count = V.fishing_failed_count || 0;
	V.RPS_win_count = V.RPS_win_count || 0;
	V.RPS_none_count = V.RPS_none_count || 0;
	V.PRS_lose_count = V.PRS_lose_count || 0;
	V.pylon_teleport_count = V.pylon_teleport_count || 0;
	V.unload_crate_count = V.unload_crate_count || {};
	for (const cr of Object.keys(setup.terraCrate).filter(pcr => setup.terraCrate[pcr].type === "crate")) {
		const cri = setup.terraCrate[cr];
		V.unload_crate_count[cri.name] = V.unload_crate_count[cri.name] || 0;
	}
	V.crafting_count = V.crafting_count || {};
	for (const cs of ["Work_Bench","Iron_Anvil","Cooking_Pot","Tinkerers_Workshop","Hellforge"]) {
		V.crafting_count[cs] = V.crafting_count[cs] || 0;
	}

	// 阁楼制作站初始化
	V.orphanage_loft_crafting_station = V.orphanage_loft_crafting_station || [];

	// 落星概率初始化
	if (V.Meteor_Shower === undefined) fallenStarRateSet();

	// 计算魔光护符降低意识的变量
	V.Magiluminescence_timer = V.Magiluminescence_timer || 0;

	//快捷键默认关闭
	V.terraHotKeys =V.terraHotKeys || false;

	// 图鉴初始化：任务鱼列表、普通鱼列表、宝匣列表、鱼饵列表
	V.bestiary = V.bestiary || {};
	V.bestiary.request_fish = V.bestiary.request_fish || {};
	for (const brf of Object.keys(setup.terraRequestFish)) {
		const brfi = setup.terraRequestFish[brf];
		if (V.bestiary_request_fish_list !== undefined) {
			if (V.bestiary_request_fish_list.includes(brfi.name)) {
				V.bestiary.request_fish[brfi.name] = {};
				V.bestiary.request_fish[brfi.name].catch_count = V.bestiary_request_fish_catch_count[brfi.name];
			}
		}
	}
	delete V.bestiary_request_fish_list;
	delete V.bestiary_request_fish_catch_count;

	V.bestiary.fish = V.bestiary.fish || {};
	for (const bf of Object.keys(setup.terraFish)) {
		const bfi = setup.terraFish[bf];
		if (V.bestiary_fish_list !== undefined) {
			if (V.bestiary_fish_list.includes(bfi.name)) {
				V.bestiary.fish[bfi.name] = {};
				V.bestiary.fish[bfi.name].catch_count = V.bestiary_fish_catch_count[bfi.name];
			}
		}
	}
	delete V.bestiary_fish_list;
	delete V.bestiary_fish_catch_count;

	V.bestiary.crate = V.bestiary.crate || {};
	for (const bc of Object.keys(setup.terraCrate).filter(pc => setup.terraCrate[pc].type === "crate")) {
		const bci = setup.terraCrate[bc];
		if (V.bestiary_crate_list !== undefined) {
			if (V.bestiary_crate_list.includes(bci.name)) {
				V.bestiary.crate[bci.name] = {};
				V.bestiary.crate[bci.name].catch_count = V.bestiary_crate_catch_count[bci.name];
			}
		}
	}
	delete V.bestiary_crate_list;
	delete V.bestiary_crate_catch_count;

	V.bestiary.bait = V.bestiary.bait || {};
	for (const bb of Object.keys(setup.terraBait).filter(pb => setup.terraBait[pb].type !== "boss_summoner")) {
		const bbi = setup.terraBait[bb];
		if (V['bestiary_'+bbi.name]) {
			V.bestiary.bait[bbi.name] = {};
			V.bestiary.bait[bbi.name].catch_count = 0;
			delete V['bestiary_'+bbi.name];
		} else if (V.bestiary_bait_list !== undefined) { 
			if (V.bestiary_bait_list.includes(bbi.name)) {
				V.bestiary.bait[bbi.name] = {};
				V.bestiary.bait[bbi.name].catch_count = V.bestiary_bait_catch_count[bbi.name];
			}
		}
	}
	delete V.bestiary_bait_list;
	delete V.bestiary_bait_catch_count;

	// 宠物列表
	if (V.pet_list === undefined) {
		V.pet_list = [];
		for (const p of Object.keys(setup.terraPet)) {
			const pi = setup.terraPet[p];
			if (V[pi.name] === true || V[pi.name] === "equipped") {
				V.pet_list.pushUnique(pi.name);
			}
			delete V[pi.name];
		}
	}
	V.bedroom_pets = V.bedroom_pets || {};

	// 闹钟功能
	V.terraAlarmList = V.terraAlarmList || {};

	// 战斗计数器
	V.defeated_counter = V.defeated_counter || {
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

	// v0.2.2 删除$terra_bedroom_furniture，并将其中的"Royal_Delight"加入$pet_list
	if (V.terra_bedroom_furniture !== undefined) {
		if (V.terra_bedroom_furniture.includes("Royal_Delight")) {
			V.pet_list.pushUnique("Royal_Delight");
		}
		delete V.terra_bedroom_furniture;
	}

	// v0.2.5 
	// 删除多余的$fishingrod，因为现在可以通过持有的鱼竿数量来判断玩家身上是否有鱼竿
	delete V.fishingrod;
	// 调整闹钟列表的格式
	for (const a of Object.keys(V.terraAlarmList)) {
		if (V.terraAlarmList[a].day !== undefined) {
			V.terraAlarmList[a].days = [`${V.terraAlarmList[a].day}`];
			delete V.terraAlarmList[a].day;
		}
		if (typeof V.terraAlarmList[a].phase === "string") {
			V.terraAlarmList[a].phase = [`${V.terraAlarmList[a].phase}`]
		}
	}

	// v0.2.7
	// 删除渔夫的NPC属性，因为模组中只用到其性别
	if (V.NPCNameList.includes("Angler") || Object.values(V.NPCName).filter(npc => npc.nam === "Angler").length > 0) {
		V.options.terraGender = {
			Angler: V.NPCName.find(npc => npc.nam === "Angler").gender || "m",
		};
		V.NPCNameList.delete("Angler");
		Object.values(V.NPCName).filter(npc => npc.nam === "Angler").forEach(npcInfo => {V.NPCName.delete(npcInfo);})
	}
}
window.terraReloadVariables = terraReloadVariables;