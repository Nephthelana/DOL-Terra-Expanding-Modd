setup.terraPotion = {
	"Fishing_Potion": {
        name: "Fishing_Potion",
        cn_name: "钓鱼药水",
        type: "potion",
        amount: V.Fishing_Potion || 0,
        item_icon: "potions/Fishing_Potion.png",
		buff_icon: "buff_icon/Fishing_(buff).png",
		des: "提高渔力，持续8小时",
		use: "<<set $Fishing_Potion -= 1>><<set $Fishing_Potion_countdown = 480>>"
    },
	"Sonar_Potion": {
        name: "Sonar_Potion",
        cn_name: "声呐药水",
        type: "potion",
        amount: V.Sonar_Potion || 0,
        item_icon: "potions/Sonar_Potion.png",
		buff_icon: "buff_icon/Sonar_(buff).png",
		des: "你能看到是什么在咬你的鱼钩，持续8小时",
		use: "<<set $Sonar_Potion -= 1>><<set $Sonar_Potion_countdown = 480>>"
    },
	"Crate_Potion": {
        name: "Crate_Potion",
        cn_name: "宝匣药水",
        type: "potion",
        amount: V.Crate_Potion || 0,
        item_icon: "potions/Crate_Potion.png",
		buff_icon: "buff_icon/Crate_(buff).png",
		des: "钓上宝匣的几率更大，持续4小时",
		use: "<<set $Crate_Potion -= 1>><<set $Crate_Potion_countdown = 240>>"
    },
	"Warmth_Potion": {
        name: "Warmth_Potion",
        cn_name: "保暖药水",
        type: "potion",
        amount: V.Warmth_Potion || 0,
        item_icon: "potions/Warmth_Potion.png",
		buff_icon: "buff_icon/Warmth_(buff).png",
		des: "起到保暖效果，持续15小时",
		use: "<<set $Warmth_Potion -= 1>><<set $Warmth_Potion_countdown = 900>>"
    },
}

function getAllPotionList() {
	let all_potion_list = Object.keys(setup.terraPotion);
	return all_potion_list;
}
window.getAllPotionList = getAllPotionList;

function getPotionObtained() {
	for (let potion in setup.terraPotion) {
        setup.terraPotion[potion].amount = V[potion];
    }
    let potion_obtained = Object.keys(setup.terraPotion);
    return potion_obtained.filter(potion => {
        return setup.terraPotion[potion].amount > 0;
    });
}
window.getPotionObtained = getPotionObtained;