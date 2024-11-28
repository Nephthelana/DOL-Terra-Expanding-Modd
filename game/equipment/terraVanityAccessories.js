setup.terraVanityAccessories = {
	"Angel_Halo": {
        name: "Angel_Halo",
        cn_name: "天使光环",
		material: false,
        type: "transformation",
        obtained: V.Angel_Halo,
        icon: "vanity_accessories/Angel_Halo.png",
		des: "一个天使的光环！装备后获得仅自己可见的天使光环，并防止天使转化点数衰退(时装栏内不生效)",
    },
	"Demon_Horns": {
        name: "Demon_Horns",
        cn_name: "恶魔角",
		material: false,
        type: "transformation",
        obtained: V.Demon_Horns,
        icon: "vanity_accessories/Demon_Horns.png",
		des: "一对恶魔的犄角！装备后获得仅自己可见的恶魔犄角，并防止恶魔转化点数衰退(时装栏内不生效)(不会防止对应的惩罚)",
    },
}

function getAllVanityAccessoriesList() {
	let all_vanity_accessories_list = Object.keys(setup.terraVanityAccessories);
	return all_vanity_accessories_list;
}
window.getAllVanityAccessoriesList = getAllVanityAccessoriesList;

function getVanityAccessoriesObtained() {
	for (let accessory in setup.terraVanityAccessories) {
        setup.terraVanityAccessories[accessory].obtained = V[accessory];
    }
    let accessory_obtained = Object.keys(setup.terraVanityAccessories);
    return accessory_obtained.filter(accessory => {
        return setup.terraVanityAccessories[accessory].obtained === true;
    });
}
window.getVanityAccessoriesObtained = getVanityAccessoriesObtained;