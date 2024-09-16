setup.terraArmor = {
	"Angler_Hat": {
        name: "Angler_Hat",
        cn_name: "渔夫帽",
        type: "helmet",
        set: "angler",
        obtained: V.Angler_Hat,
        icon: "armor/Angler_Hat.png",
        icon_item: "armor/Angler_Hat_item.png",
		des: "渔力增加5",
		set_bonus: "套装奖励：降低20%诱惑值"
    },
	"Angler_Vest": {
        name: "Angler_Vest",
        cn_name: "渔夫背心",
        type: "shirt",
        set: "angler",
        obtained: V.Angler_Vest,
        icon: "armor/Angler_Vest.png",
        icon_item: "armor/Angler_Vest_item.png",
		des: "渔力增加5",
		set_bonus: "套装奖励：降低20%诱惑值"
    },
	"Angler_Pants": {
        name: "Angler_Pants",
        cn_name: "渔夫裤",
        type: "pants",
        set: "angler",
        obtained: V.Angler_Pants,
        icon: "armor/Angler_Pants.png",
        icon_item: "armor/Angler_Pants_item.png",
		des: "渔力增加5",
		set_bonus: "套装奖励：降低20%诱惑值"
    }
}

function getAllArmorList() {
	let all_armor_list = Object.keys(setup.terraArmor);
	return all_armor_list;
}
window.getAllArmorList = getAllArmorList

function getArmorObtained() {
	for (let armor in setup.terraArmor) {
        setup.terraArmor[armor].obtained = V[armor];
    }
    let armor_obtained = Object.keys(setup.terraArmor);
    return armor_obtained.filter(armor => {
        return setup.terraArmor[armor].obtained === true;
    });
}
window.getArmorObtained = getArmorObtained;