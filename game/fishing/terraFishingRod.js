setup.terraFishingRod = {
	"Golden_Fishing_Rod": {
		name: "Golden_Fishing_Rod",
		cn_name: "金钓竿",
		type: "undefined",
		obtained: V.Golden_Fishing_Rod,
		fishing_power: 50,
		fishing_distance_power: 16,
		icon: "fishing/fishing_pole/Golden_Fishing_Rod.png",
		icon_bobber: "fishing/bobber/Bobber_(Golden).png",
		des: "50渔力，每次收线减少16距离",
	},
	"Hotline_Fishing_Hook": {
		name: "Hotline_Fishing_Hook",
		cn_name: "熔线钓钩",
		type: "undefined",
		obtained: V.Hotline_Fishing_Hook,
		fishing_power: 45,
		fishing_distance_power: 15,
		icon: "fishing/fishing_pole/Hotline_Fishing_Hook.png",
		icon_bobber: "fishing/bobber/Bobber_(Hotlines).png",
		des: "45渔力，每次收线减少15距离。允许在沸水/熔岩中钓鱼",
	},
	"Sitting_Ducks_Fishing_Pole": {
		name: "Sitting_Ducks_Fishing_Pole",
		cn_name: "冤大头钓竿",
		type: "undefined",
		obtained: V.Sitting_Ducks_Fishing_Pole,
		fishing_power: 40,
		fishing_distance_power: 14,
		icon: "fishing/fishing_pole/Sitting_Ducks_Fishing_Pole.png",
		icon_bobber: "fishing/bobber/Bobber_(Sitting_Ducks).png",
		des: "40渔力，每次收线减少14距离",
	},
	"Fiberglass_Fishing_Pole": {
		name: "Fiberglass_Fishing_Pole",
		cn_name: "玻璃钢钓竿",
		type: "undefined",
		obtained: V.Fiberglass_Fishing_Pole,
		fishing_power: 30,
		fishing_distance_power: 13,
		icon: "fishing/fishing_pole/Fiberglass_Fishing_Pole.png",
		icon_bobber: "fishing/bobber/Bobber_(Fiberglass).png",
		des: "30渔力，每次收线减少13距离",
	},
	"Scarab_Fishing_Rod": {
		name: "Scarab_Fishing_Rod",
		cn_name: "甲虫钓竿",
		type: "undefined",
		obtained: V.Scarab_Fishing_Rod,
		fishing_power: 30,
		fishing_distance_power: 13,
		icon: "fishing/fishing_pole/Scarab_Fishing_Rod.png",
		icon_bobber: "fishing/bobber/Bobber_(Scarab).png",
		des: "30渔力，每次收线减少13距离",
	},
	"Slurper_Pole": {
		name: "Slurper_Pole",
		cn_name: "饮食者钓竿",
		type: "undefined",
		obtained: V.Slurper_Pole,
		fishing_power: 25,
		fishing_distance_power: 12,
		icon: "fishing/fishing_pole/Slurper_Pole.png",
		icon_bobber: "fishing/bobber/Bobber_(Slurper).png",
		des: "25渔力，每次收线减少12距离。允许在沸水/熔岩中钓鱼",
	},
	"Chum_Caster": {
		name: "Chum_Caster",
		cn_name: "鱼饵投掷者",
		type: "undefined",
		obtained: V.Chum_Caster,
		fishing_power: 25,
		fishing_distance_power: 12,
		icon: "fishing/fishing_pole/Chum_Caster.png",
		icon_bobber: "fishing/bobber/Bobber_(Bloody).png",
		des: "25渔力，每次收线减少12距离。增加血月期间钓到敌怪的概率",
	},
	"Reinforced_Fishing_Pole": {
		name: "Reinforced_Fishing_Pole",
		cn_name: "强化钓竿",
		type: "undefined",
		obtained: V.Reinforced_Fishing_Pole,
		fishing_power: 20,
		fishing_distance_power: 11,
		icon: "fishing/fishing_pole/Reinforced_Fishing_Pole.png",
		icon_bobber: "fishing/bobber/Bobber_(Reinforced).png",
		des: "20渔力，每次收线减少11距离",
	},
	"Wood_Fishing_Pole": {
		name: "Wood_Fishing_Pole",
		cn_name: "木钓竿",
		type: "undefined",
		obtained: V.Wood_Fishing_Pole,
		fishing_power: 20,
		fishing_distance_power: 10,
		icon: "fishing/fishing_pole/Wood_Fishing_Pole.png",
		icon_bobber: "fishing/bobber/Bobber_(Wooden).png",
		des: "15渔力，每次收线减少10距离",
	},
}

function getAllFishingRodList() {
	let all_fishing_rod_list = Object.keys(setup.terraFishingRod);
	return all_fishing_rod_list;
}
window.getAllFishingRodList = getAllFishingRodList;

function getFishingRodObtainedList() {
	for (let fishing_rod in setup.terraBait) {
        setup.terraBait[fishing_rod].obtained = V[fishing_rod];
    }
    let fishing_rod_obtained = Object.keys(setup.terraFishingRod);
    return fishing_rod_obtained.filter(fishing_rod => {
        return setup.terraFishingRod[fishing_rod].obtained === true;
    });
}
window.getFishingRodObtainedList = getFishingRodObtainedList;