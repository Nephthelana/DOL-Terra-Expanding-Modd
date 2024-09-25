setup.terraFood = {
	"Shucked_Oyster": {
        name: "Shucked_Oyster",
        cn_name: "去壳牡蛎",
		material: false,
        type: "food",
        amount: V.Shucked_Oyster || 0,
        icon: "food/Shucked_Oyster.png",
		des: "- 饥饿值<br><i>\"噢，壳！\"</i>",
		use: "<<set $Shucked_Oyster -= 1>><<hunger -200>>",
		use_hint: "<<lhunger>>"
    },
	"Sashimi": {
        name: "Sashimi",
        cn_name: "生鱼片",
		material: true,
        type: "food",
        obtained: V.Sashimi || 0,
        icon: "food/Sashimi.png",
		des: "- 饥饿值<br><i>\"是生的！异国风味！\"</i>",
		use: "<<set $Sashimi -= 1>><<hunger -200>>",
		use_hint: "<<lhunger>>"
    },
	"Cooked_Shrimp": {
        name: "Cooked_Shrimp",
        cn_name: "熟虾",
		material: false,
        type: "food",
        amount: V.Cooked_Shrimp || 0,
        icon: "food/Cooked_Shrimp.png",
		des: "- 饥饿值<br><i>\"烧、煮、烤、烘...\"</i>",
		use: "<<set $Cooked_Shrimp -= 1>><<hunger -200>>",
		use_hint: "<<lhunger>>"
    },
	"Cooked_Fish": {
        name: "Cooked_Fish",
        cn_name: "熟鱼",
		material: false,
        type: "food",
        amount: V.Cooked_Fish || 0,
        icon: "food/Cooked_Fish.png",
		des: "- - 饥饿值<br><i>\"薯条在哪里！？\"</i>",
		use: "<<set $Cooked_Fish -= 1>><<hunger -400>>",
		use_hint: "<<llhunger>>"
    },
	"Lobster_Tail": {
        name: "Lobster_Tail",
        cn_name: "龙虾尾",
		material: false,
        type: "food",
        amount: V.Lobster_Tail || 0,
        icon: "food/Lobster_Tail.png",
		des: "- - 饥饿值<br><i>\"加一点黄油就很美味了\"</i>",
		use: "<<set $Lobster_Tail -= 1>><<hunger -400>>",
		use_hint: "<<llhunger>>"
    },
	"Seafood_Dinner": {
        name: "Seafood_Dinner",
        cn_name: "海鲜大餐",
		material: false,
        type: "food",
        amount: V.Seafood_Dinner || 0,
        icon: "food/Seafood_Dinner.png",
		des: "- - - 饥饿值<br><i>\"我，海鲜，吃掉。\"</i>",
		use: "<<set $Seafood_Dinner -= 1>><<hunger -800>>",
		use_hint: "<<lllhunger>>"
    },
}

function getAllFoodList() {
	let all_food_list = Object.keys(setup.terraFood);
	return all_food_list;
}
window.getAllFoodList = getAllFoodList

function getFoodObtained() {
	for (let food in setup.terraFood) {
        setup.terraFood[food].amount = V[food];
    }
    let food_obtained = Object.keys(setup.terraFood);
    return food_obtained.filter(food => {
        return setup.terraFood[food].amount > 0;
    });
}
window.getFoodObtained = getFoodObtained;