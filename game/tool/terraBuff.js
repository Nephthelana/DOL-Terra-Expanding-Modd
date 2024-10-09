setup.terraBuff = {
	"Fishing": {
        name: "Fishing",
        cn_name: "钓鱼",
		variable_name: "Fishing_Potion_countdown",
		des: "提高15渔力",
        type: "positive",
        activated: V.Fishing_Potion_countdown || 0,
		icon: "buff_icon/Fishing_(buff).png",
    },
	"Sonar": {
        name: "Sonar",
        cn_name: "声呐",
		variable_name: "Sonar_Potion_countdown",
		des: "在钓鱼时显示渔获的名称",
        type: "positive",
        activated: V.Sonar_Potion_countdown || 0,
		icon: "buff_icon/Sonar_(buff).png",
    },
	"Crate": {
        name: "Crate",
        cn_name: "宝匣",
		variable_name: "Crate_Potion_countdown",
		des: "增加15%钓到宝匣的概率",
        type: "positive",
        activated: V.Crate_Potion_countdown || 0,
		icon: "buff_icon/Crate_(buff).png",
    },
	"Drunk": {
        name: "Drunk",
        cn_name: "醉酒",
		variable_name: "drunk",
		des: "降低压力的增长速度，并增加疲劳的增长速度。醉酒程度越大，效果越明显",
        type: "negative",
        activated: V.drunk || 0,
		icon: "buff_icon/Tipsy_(buff).png",
    },
	"Drugged": {
        name: "Drugged",
        cn_name: "春药",
		variable_name: "drugged",
		des: "阻止发出求救性的尖叫。减少达到性高潮时损失的性奋值，在一天中体验的性高潮次数越多，此效果越弱",
        type: "negative",
        activated: V.drugged || 0,
		icon: "buff_icon/Lovestruck_(buff).png",
    },
	"Hallucinogen": {
        name: "Hallucinogen",
        cn_name: "致幻",
		variable_name: "hallucinogen",
		des: "带来<i>\"严重幻觉\"</i>特质",
        type: "negative",
        activated: V.hallucinogen || 0,
		icon: "buff_icon/Cerebral_Mindtrick_(buff).png",
    },
}

function getAllBuffList() {
	let all_buff_list = Object.keys(setup.terraBuff);
	return all_buff_list;
}
window.getAllBuffList = getAllBuffList;

function getBuffActivated() {
	for (let buff in setup.terraBuff) {
        setup.terraBuff[buff].activated = V[setup.terraBuff[buff].variable_name];
    }
    let buff_activated = Object.keys(setup.terraBuff);
    return buff_activated.filter(buff => {
        return setup.terraBuff[buff].activated > 0;
    });
}
window.getBuffActivated = getBuffActivated;