// 计算当前渔力
function getFishingPower() {
	let FP = 0; // FP = fishing power
	// 不同鱼竿提供不同渔力
	FP += setup.terraFishingRod[V.options.fishingrod_held].fishing_power;
	// 不同鱼饵提供不同渔力
	if (V.Bait !== "None")
		FP += setup.terraBait[V.Bait].fishing_power;
	// 装备渔夫盔甲部件，每件提供5渔力
	V.terra_armor_slots.forEach((armor) => {
		if (getAllArmorList().includes(armor))
			if (setup.terraArmor[armor].set === "angler")
				FP += 5;
	});
	// 使用钓鱼药水提供15渔力
	if (V.Fishing_Potion_countdown)
		FP += 15;
	// 醉酒状态提供5渔力
	if (V.drunk > 0)
		FP += 5;
	// 装备钓鱼浮标或其升级物提供10渔力
	if (Object.values(V.terra_accessories_slots).find(accessory => setup.terraAccessories[accessory].type === "bobber"))
		FP += 10;
	// 装备渔夫耳环提供10渔力
	if (V.terra_accessories_slots.includes("Angler_Earring"))
		FP += 10;
	// 装备渔夫渔具袋提供10渔力
	if (V.terra_accessories_slots.includes("Angler_Tackle_Bag"))
		FP += 10;
	// 装备防熔岩渔具袋提供10渔力
	if (V.terra_accessories_slots.includes("Lavaproof_Tackle_Bag"))
		FP += 10;
	// 装备万能渔具包提供共60渔力
	if (V.terra_accessories_slots.includes("Supreme_Bait_Tackle_Box_Fishing_Station"))
		FP += 60;
	// 装备浮游圈提供5渔力
	if (V.terra_accessories_slots.includes("Inner_Tube"))
		FP += 5;
	// 装备附魔珍珠提供10渔力
	if (V.terra_accessories_slots.includes("Enchanted_Pearl"))
		FP += 10;
	// 阴天提供10%渔力加成，雨雪天提供20%渔力加成
	switch (Weather.name) {
		case "lightClouds":
		case "heavyClouds":
			FP *= 1.1;
			break;
		case "lightPrecipitation":
		case "heavyPrecipitation":
		case "thunderStorm":
			FP *= 1.2;
			break;
	}
	// 6:00-7:30，19:30-21:00提供30%渔力加成
	if (Time.hour === 6 || (Time.hour === 7 && Time.minute <= 30) || (Time.hour === 19 && Time.minute >= 30) || Time.hour === 20)
		FP *= 1.3;
	// 9:00-15:00，22:30-3:30降低20%渔力
	if (between(Time.hour,9,14) || (Time.hour === 22 && Time.minute >= 30) || Time.hour >= 23 || Time.hour <= 2 || (Time.hour === 3 && Time.minute <= 30))
		FP *= 0.8;
	// 月相影响渔力
	let moonPhase = Time.date.moonPhaseFraction;
	if (moonPhase === 0)
		FP *= 0.9;
	else if ((moonPhase > 0 && moonPhase < 0.25) || (moonPhase > 0.75 && moonPhase < 1))
		FP *= 0.95;
	else if ((moonPhase > 0.25 && moonPhase < 0.5) || (moonPhase > 0.5 && moonPhase < 0.75))
		FP *= 1.05;
	else if (moonPhase === 0.5)
		FP *= 1.1;
	// 渔力值赋值
	V.fishing_power = FP;
}
window.getFishingPower = getFishingPower;

// 计算咬钩所需时间，并生成此次抛竿的渔获
/*
	由于熔岩钓鱼时，有可能出现判定得到的钓鱼品位不存在对应渔获（V.fishing_harvest === undefined）的情况，需进入重新计时。具体解释如下：

	当次抛竿后，咬钩计数器从0开始计数，达到660时，若检定通过，尝试生成此次渔获；若检定失败，则进行新一轮的咬钩计数器(该检定通过概率与渔力高低有关)。
	如果在熔岩钓鱼，渔获就有可能生成失败(即判定得到的钓鱼品位不存在对应渔获)，此时也进入新一轮的咬钩计数器。
	这应该就是熔岩钓鱼平均时长更久的原因：低品位不存在对应渔获，需要重新进入计数器以进行新一轮的咬钩计数器并检定渔获。蜂蜜同理。
	最后渔获生成成功后，需要调用对应的图标与名称，用于可能的声呐药水显示，和后续获得渔获的相关数量变化。
*/
function fishingCastTime() {
	getFishingPower();
	let FCT = 0; // FCT = fishing cast time
	for (let catch_counter = 0; ; FCT += 1) {
		catch_counter += random(30,60);
		catch_counter += V.fishing_power * 2;
		catch_counter += V.fishing_power / 3 >= random(1,100) ? random(30,60) : 0;
		if (catch_counter >= 660) {
			if ((V.fishing_power + 75) / 2 >= random(1,100)) {
				fishingHarvestPre();
				if (V.fishing_harvest === "None")
					break;
				else if (V.fishing_harvest === undefined)
					catch_counter = fishingCastCounterReset();
				else {
					FCT += 1;
					break;
				}
			} else
				catch_counter = fishingCastCounterReset();
		}
		if (FCT >= 45) {
			fishingHarvestPre();
			break;
		}
	}
	// 咬钩时间赋值
	T.fishing_cast_time = FCT;
}
window.fishingCastTime = fishingCastTime;

// 重置咬钩计数器
function fishingCastCounterReset() {
	if (["trash","lava"].includes(V.fishing_place)) {
		let lavaproof = 0;
		lavaproof += V.terra_accessories_slots.includesAny("Lavaproof_Fishing_Hook","Lavaproof_Tackle_Bag","Supreme_Bait_Tackle_Box_Fishing_Station") ? 1 : 0;
		lavaproof += ["Lavafly","Magma_Snail","Hell_Butterfly"].includes(V.Bait) ? 1 : 0;
		lavaproof += ["Hotline_Fishing_Hook","Slurper_Pole"].includes(V.options.fishingrod_held) ? 1 : 0;
		if (lavaproof >= 2)
			return 240;
		else
			return 0;
	}
	else
		return 0;
}
window.fishingCastCounterReset = fishingCastCounterReset;

// 生成渔获
function fishingHarvestPre() {
	// 在学校游泳池只能钓上来内裤。之后可能加入宝匣？
	if (V.fishing_place === "school_pool") {
		V.fishing_harvest = {
			name: "swim_underwear",
			cn_name: ["内裤","四角裤","三角裤","平角短裤","丁字裤","泳裤","平角裤","露臀内裤","比基尼裤"].random(),
		} // 内裤没有对应图标。声呐药水处需要对此增加判断
		V.fishing_difficulty = 0;
		return;
	}

	// 血月期间有1/6概率钓到敌怪
	if (Time.isBloodMoon() && !["lava","honey"].includes(V.fishing_place)) {
		let bloodMoonEnemyChance = V.options.fishingrod_held === "Chum_Caster" ? 3 : 6;
		if (random(1,bloodMoonEnemyChance) === 1) {
			switch (random(1,1)) { // 后续可能新增其他敌怪，起占位作用
			case 1:
				V.fishing_harvest = {
					name: "Dreadnautilus",
					cn_name: "<span class='red'>恐惧鹦鹉螺</span>",
				} // 恐惧鹦鹉螺没有对应图标。声呐药水处需要对此增加判断
				V.fishing_difficulty = 1.5;
				break;
			}
			return;
		}
	}

	// 渔力较低时，有概率钓上垃圾；在公园钓鱼时必定钓上来垃圾
	if (V.fishing_place === "park" || ((100 - Math.log(V.fishing_power) * 25) >= random(1,100) && V.fishing_place !== "lava")) {
		if (V.fishing_place === "bird_tower" && random(1,7) <= 3) {
			V.fishing_harvest = {
				name: "feathers",
				cn_name: "羽毛",
				icon: "birdTower/feather.png",
			}
		} else {
			let fishing_harvest_temp = getAllTrashList().random();
			V.fishing_harvest = {
				name: setup.terraTrash[fishing_harvest_temp].name,
				cn_name: setup.terraTrash[fishing_harvest_temp].cn_name,
				icon: setup.terraTrash[fishing_harvest_temp].icon,
			}
		}
		V.fishing_difficulty = 0;
		return;
	}

	// 当前钓鱼点是否钓到当日任务鱼
	let requestFish = setup.terraRequestFish[V.fishing_request_selection];
	if (V.fishing_request_finished_daily !== true && !V.fishing_request_fish.includes(V.fishing_request_selection) && requestFish.catching_place.includes(V.fishing_place) && random(1,5) === 1) {
		V.fishing_harvest = {
			name: requestFish.name,
			cn_name: requestFish.cn_name,
			icon: requestFish.icon,
		}
		V.fishing_difficulty = 0.75;
		V.fishing_harvest.bestiary_type = "request_fish";
		return;
	}

	// 渔获品位判定
	if (V.fishing_power >= random(1,4500)) // "极度罕见"渔获判定通过概率
		var catch_quality = "extremely_rare";
	else if (V.fishing_power >= random(1,2250)) // "非常罕见"渔获判定通过概率
		var catch_quality = "very_rare";
	else if (V.fishing_power > 262.5 && random(1,4) === 1) // "罕见"渔获判定通过概率，上限1/4
		var catch_quality = "rare";
	else if (V.fishing_power >= random(1,1050))
		var catch_quality = "rare";
	else if (V.fishing_power > 100 && random(1,3) === 1) // "不常见"渔获判定通过概率，上限1/3
		var catch_quality = "uncommon";
	else if (V.fishing_power >= random(1,300))
		var catch_quality = "uncommon";
	else if (V.fishing_power > 75 && random(1,2) === 1) // "常见"渔获判定通过概率，上限1/2
		var catch_quality = "common";
	else if (V.fishing_power >= random(1,150))
		var catch_quality = "common";
	else // 以上都不通过时，稀有度为"丰富"
		var catch_quality = "plentiful";
	T.fishing_harvest_catch_quality = catch_quality;

	// 钓鱼点为熔岩且渔获品位较低时，此次判定无渔获
	if (V.fishing_place === "lava" && ["uncommon","common","plentiful"].includes(catch_quality)) {
		delete V.fishing_harvest;
		return;
	}

	// "宝匣"判定通过概率，无药水10%，有宝匣药水增加15%，有附魔珍珠增加10%
	let fishing_crate_chance = 10;
	fishing_crate_chance += V.Crate_Potion_countdown ? 15 : 0;
	fishing_crate_chance += V.terra_accessories_slots.includes("Enchanted_Pearl") ? 10 : 0;
	T.fishing_crate_chance = fishing_crate_chance;

	// "宝匣"判定通过时，渔获为宝匣
	if (random(1,100) <= fishing_crate_chance && V.fishing_place !== "honey") {
		let fishing_harvest_temp_list = [];
		getAllCrateList().forEach((crate) => {
			let crateInfo = setup.terraCrate[crate];
			if (crateInfo.type === "crate" && crateInfo.rarity.includes(catch_quality) && crateInfo.catching_place.includes(V.fishing_place)) {
				fishing_harvest_temp_list.pushUnique(crateInfo.name);
			}
		});
		let fishing_harvest_temp = fishing_harvest_temp_list.last();
		V.fishing_harvest = {
			name: setup.terraCrate[fishing_harvest_temp].name,
			cn_name: setup.terraCrate[fishing_harvest_temp].cn_name,
			icon: setup.terraCrate[fishing_harvest_temp].icon,
		};
		V.fishing_difficulty = 1;
		V.fishing_harvest.bestiary_type = "crate";
		return;
	}

	// 稀有度为"非常稀有"时的特殊情况：宠物/工具
	if (catch_quality === "extremely_rare") {
		switch (V.fishing_place) {
		case "lava":
			switch (random(1,3)) {
			case 1:
				V.fishing_harvest = {
					name: "Bottomless_Lava_Bucket",
					cn_name: "无底熔岩桶",
					icon: "tool/Bottomless_Lava_Bucket.png",
				}
				V.fishing_difficulty = 1.5;
				return;
			case 2:
				V.fishing_harvest = {
					name: "Demon_Conch",
					cn_name: "恶魔海螺",
					icon: "tool/Demon_Conch.png",
				}
				V.fishing_difficulty = 1.5;
				return;
			}
			break;
		case "bird_tower":
		case "bird_tower_artificial":
			if (!V.pet_list.includes("Rusted_Jingle_Bell")) {
				V.fishing_harvest = {
					name: "Rusted_Jingle_Bell",
					cn_name: "锈蚀铃铛",
					icon: "pet/pet_item/Rusted_Jingle_Bell.png",
				}
				V.fishing_difficulty = 1.5;
				return;
			}
		default:
			if (!V.pet_list.includes("Zephyr_Fish") && V.fishing_place !== "lava") {
				V.fishing_harvest = {
					name: "Zephyr_Fish",
					cn_name: "和风鱼",
					icon: "pet/pet_item/Zephyr_Fish.png",
				}
				V.fishing_difficulty = 1.5;
				return;
			}
		}
	}

	// 特殊的普通鱼：牡蛎/鱼饵
	switch (V.fishing_place) {
	case "moor":
		if (["extremely_rare","very_rare","rare","uncommon"].includes(catch_quality)) {
			V.fishing_harvest = {
				name: "Oyster",
				cn_name: "牡蛎",
				icon: "fishing/crates/Oyster.png",
			}
			V.fishing_difficulty = 0.75;
			return;
		}
	case "beach":
	case "bog":
		if (["extremely_rare","very_rare","rare"].includes(catch_quality)) {
			V.fishing_harvest = {
				name: "Pink_Jellyfish_bait",
				cn_name: "粉水母",
				icon: "fishing/bait/Pink_Jellyfish_bait.png",
			}
			V.fishing_difficulty = 1;
			V.fishing_harvest.bestiary_type = "bait";
			return;
		}
	case "barb_street":
	case "gulch":
	case "wolf_cave_clearing":
	case "wolf_cave_clearing_artificial":
	case "ice":
		if (["very_rare","rare"].includes(catch_quality) && random(1,2) === 1) { // 增加一个1/2以触发臭味鱼
			if (random(1,2) === 1) {
				V.fishing_harvest = {
					name: "Blue_Jellyfish_bait",
					cn_name: "蓝水母",
					icon: "fishing/bait/Blue_Jellyfish_bait.png",
				}
			} else {
				V.fishing_harvest = {
					name: "Green_Jellyfish_bait",
					cn_name: "绿水母",
					icon: "fishing/bait/Green_Jellyfish_bait.png",
				}
			}
			V.fishing_difficulty = 1;
			V.fishing_harvest.bestiary_type = "bait";
			return;
		}
	}

	// 排除以上情况后，应该只剩下了普通鱼
	let fishing_harvest_temp_list = [];
	getAllFishList().forEach((fish) => {
		let fishInfo = setup.terraFish[fish];
		if (fishInfo.rarity.includes(catch_quality) && fishInfo.catching_place.includes(V.fishing_place)) {
			fishing_harvest_temp_list.pushUnique(fishInfo.name);
		}
	});
	let fishing_harvest_temp = fishing_harvest_temp_list.random();
	V.fishing_harvest = {
		name: setup.terraFish[fishing_harvest_temp].name,
		cn_name: setup.terraFish[fishing_harvest_temp].cn_name,
		icon: setup.terraFish[fishing_harvest_temp].icon,
	};
	V.fishing_difficulty = setup.terraFish[fishing_harvest_temp].difficulty;
	V.fishing_harvest.bestiary_type = "fish";

	// 用于排查错误：运行到这里还没确定渔获的情况
	V.fishing_harvest = V.fishing_harvest === undefined ? "None" : V.fishing_harvest;

	return;
}
window.fishingHarvestPre = fishingHarvestPre;

// 钓鱼小游戏初始化准备
function fishingPrepare() {
	V.fishing_distance = 50;
	V.fishing_integrity = V.terra_accessories_slots.includesAny("High_Test_Fishing_Line","Angler_Tackle_Bag","Lavaproof_Tackle_Bag","Supreme_Bait_Tackle_Box_Fishing_Station") ? 5 : 3;
	V.fishing_distance_power = setup.terraFishingRod[V.options.fishingrod_held].fishing_distance_power;
	V.fishingphase = 0;
	V.fish_relax_count = 0;
	V.fish_struggle_count = 0;
}
window.fishingPrepare = fishingPrepare;

// 成功钓到鱼的结算
function fishingHarvest() {
	// 获得对应物品
	switch (V.fishing_harvest.name) {
	case "swim_underwear":
		V.panties_held += 1;
		break;
	case "feathers":
		V.bird.materials.feathers += 1;
		break;
	case "Bottomless_Lava_Bucket":
		V[V.fishing_harvest.name] = true;
		break;
	case "Demon_Conch":
		if (!["Demon_Conch","Shellphone"].some(a => V[a])) V[V.fishing_harvest.name] = true;
		break;
	case "Rusted_Jingle_Bell":
	case "Zephyr_Fish":
		V.pet_list.pushUnique(V.fishing_harvest.name);
		break;
	default:
		if (V.fishing_harvest.bestiary_type === "request_fish")
			V.fishing_request_fish.pushUnique(V.fishing_harvest.name);
		else
			V[V.fishing_harvest.name] += 1;
	}
	// 图鉴数据统计
	if (V.fishing_harvest.bestiary_type) {
		bestiaryStatistics(V.fishing_harvest.bestiary_type, V.fishing_harvest.name, 1);
	}
}
window.fishingHarvest = fishingHarvest;

// widget生产器
const terraFishing = {
	create(name, fn) {
		if (this[name] === undefined && !Macro.get(name)) {
			DefineMacro(name, function () {
				this.output.append(fn(...this.args));
			});
			this[name] = fn;
		} else {
			console.error(`A function with the name "${name}" already exists in statDisplay.`);
		}
	}
}
window.terraFishing = terraFishing;

// 鱼饵消耗
terraFishing.create("baitConsumed", () => {
	const fragment = document.createDocumentFragment();
	const sWikifier = text => {fragment.append(Wikifier.wikifyEval(text));};

	if (V.Bait !== "None") {
		T.bait = setup.terraBait[V.Bait];
		// 金蠕虫消耗概率固定为5%
		if (V.Bait === "Gold_Worm" && random(1,20) == 1) {
			V[T.bait.name] -= 1;
		} else if (random(1, 6 * (V.terra_accessories_slots.includesAny("Tackle_Box","Angler_Tackle_Bag","Lavaproof_Tackle_Bag","Supreme_Bait_Tackle_Box_Fishing_Station") ? 2 : 1) + T.bait.fishing_power) <= 6) {
			V[T.bait.name] -= 1;
		}
		if (V[T.bait.name] <= 0) {
			V.Bait = "None";
			sWikifier(`你用掉了最后一个<<icon \`T.bait.icon\`>>${T.bait.cn_name}。<br>`);
		} else {
			sWikifier(`你还剩下${V[T.bait.name]}个<<icon \`T.bait.icon\`>>${T.bait.cn_name}。<br>`);
		}
	} else {
		sWikifier(``);
	}
	return fragment;
});

// 渔夫任务奖励
terraFishing.create("fishing_request_reward", () => {
	const fragment = document.createDocumentFragment();
	const sWikifier = text => {fragment.append(Wikifier.wikifyEval(text));};

	// 计算“罕见度降低量”，具体参考泰拉瑞亚wiki
	let rarity_reduction = 
		V.fishing_requests_finished_count <=  50 ? (1    - V.fishing_requests_finished_count * 0.01) :
		V.fishing_requests_finished_count <= 100 ? (0.5  - V.fishing_requests_finished_count * 0.005) :
		V.fishing_requests_finished_count <= 150 ? (0.25 - V.fishing_requests_finished_count * 0.002) :
		0.15;
	rarity_reduction *= 0.9;

	// 主要任务奖励（必定出现）
	for (const r of Object.keys(setup.fishingRequestRewardMain)) {
		T.rInfo = setup.fishingRequestRewardMain[r];
		if (T.rInfo.condition()) {
			if (T.rInfo.rarity() == 1) {
				T.rInfo.reward();
				sWikifier(`<<icon \`T.rInfo.icon\`>>${T.rInfo.cn_name}`);
				break;
			} else if (random(1 , Math.round(T.rInfo.rarity() * rarity_reduction)) == 1) {
				T.rInfo.reward();
				sWikifier(`<<icon \`T.rInfo.icon\`>>${T.rInfo.cn_name}`);
				break;
			}
		}
	}

	// 钱币奖励
	let money = Math.round((100 + 10 * (V.fishing_requests_finished_count - 1)) * random(80,120) / 100) * 100;
	money = money >= 100000 ? 100000 : money; // 如果奖励金额超过1000，则设为1000
	sWikifier(`<<money ${money} '渔夫任务'>>`);
	sWikifier(`、<<printmoney ${money}>>`);

	// 家具奖励
	if (V.fishing_requests_finished_count >= random(1,100)) {
		T.anglerFurniture = setup.terraAnglerFurniture[getAllAnglerFurnitureList().random()];
		V.angler_furniture_obtained.pushUnique(T.anglerFurniture.name);
		sWikifier(`、<<icon \`T.anglerFurniture.item_icon\`>>${T.anglerFurniture.cn_name}`);
	}

	// 鱼饵奖励
	if ((100 + V.fishing_requests_finished_count) >= random(1,200)) {
		let bait = 1;
		[25,50,100,150,200,250].forEach(n => {
			if (V.fishing_requests_finished_count >= random(1,n)) bait++;
		})
		if (random(1,15) == 1) {var baitType = "Master_Bait";}
		else if (random(1,5) == 1) {var baitType = "Journeyman_Bait";}
		else {var baitType = "Apprentice_Bait";}
		T.bait_type_info = setup.terraBait[baitType];
		sWikifier(`<<bestiaryStatistics "bait" ${baitType} ${bait}>>`);
		sWikifier(`、<<icon \`T.bait_type_info.icon\`>>${T.bait_type_info.cn_name}(${bait})`);
	}

	sWikifier(`。`);
	return fragment;
});

function fishingEnd() {
	delete V.fishing_distance_power;
	delete V.fishing_distance;
	delete V.fishing_integrity;
	delete V.fishingphase;
	delete V.fish_relax_count;
	delete V.fish_struggle_count;
	delete V.fishing_difficulty;
}
window.fishingEnd = fishingEnd;