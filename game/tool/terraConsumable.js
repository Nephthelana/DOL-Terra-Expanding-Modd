setup.terraConsumable = {
	"Bloody_Tear": {
		name: "Bloody_Tear",
		cn_name: "血泪",
		type: "consumable",
		material: false,
		amount: V.Bloody_Tear || 0,
		icon: "tool/Bloody_Tear.png",
		des: "在夜晚使用以召唤血月。这不会影响原本的血月周期。<br><i><span class='red'>使用它即表示你同意承担召唤血月将会带来的所有后果</span></i><br><i>“诅咒之夜太可怕了。”</i>",
		use: "<<Bloody_Tear_use>>",
	},
	"Mana_Crystal": {
		name: "Mana_Crystal",
		cn_name: "魔力水晶",
		type: "consumable",
		material: false,
		amount: V.Mana_Crystal || 0,
		icon: "tool/Mana_Crystal.png",
		des: "用坠落之星的魔力汇聚而成，使用后可以对已有的催眠特质起到抵消作用，使随机一项催眠特质降级",
		use: "<<Mana_Crystal_use>>",
	},
}

function getAllConsumableList() {
	let all_consumable_list = Object.keys(setup.terraConsumable);
	return all_consumable_list;
}
window.getAllConsumableList = getAllConsumableList;

function getConsumableObtained() {
	for (let consumable in setup.terraConsumable) {
        setup.terraConsumable[consumable].amount = V[consumable];
    }
    let consumable_obtained = Object.keys(setup.terraConsumable);
    return consumable_obtained.filter(consumable => {
        return setup.terraConsumable[consumable].amount > 0;
    });
}
window.getConsumableObtained = getConsumableObtained;