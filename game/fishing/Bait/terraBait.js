setup.terraBait = {
	"Apprentice_Bait": {
        name: "Apprentice_Bait",
        cn_name: "学徒诱饵",
        type: "bait",
        amount: V.Apprentice_Bait || 0,
		fishing_power: 15,
        icon: "fishing/bait/Apprentice_Bait.png",
		consumed: "<<set $Apprentice_Bait -= 1>>",
    },
	"Journeyman_Bait": {
        name: "Journeyman_Bait",
        cn_name: "熟手诱饵",
        type: "bait",
        amount: V.Journeyman_Bait || 0,
		fishing_power: 30,
        icon: "fishing/bait/Journeyman_Bait.png",
		consumed: "<<set $Journeyman_Bait -= 1>>",
    },
	"Master_Bait": {
        name: "Master_Bait",
        cn_name: "大师诱饵",
        type: "bait",
        amount: V.Master_Bait || 0,
		fishing_power: 50,
        icon: "fishing/bait/Master_Bait.png",
		consumed: "<<set $Master_Bait -= 1>>",
    },
	"Worm": {
        name: "Worm",
        cn_name: "蠕虫",
        type: "bait",
        amount: V.Worm || 0,
		fishing_power: 25,
        icon: "fishing/bait/Worm.png",
		consumed: "<<set $Worm -= 1>>",
    },
	"Enchanted_Nightcrawler": {
        name: "Enchanted_Nightcrawler",
        cn_name: "附魔夜行者",
        type: "bait",
        amount: V.Enchanted_Nightcrawler || 0,
		fishing_power: 35,
        icon: "fishing/bait/Enchanted_Nightcrawler.png",
		consumed: "<<set $Enchanted_Nightcrawler -= 1>>",
    },
	"Firefly": {
        name: "Firefly",
        cn_name: "萤火虫",
        type: "bait",
        amount: V.Firefly || 0,
		fishing_power: 20,
        icon: "fishing/bait/Firefly.png",
		consumed: "<<set $Firefly -= 1>>",
    },
	"Lightning_Bug": {
        name: "Lightning_Bug",
        cn_name: "荧光虫",
        type: "bait",
        amount: V.Lightning_Bug || 0,
		fishing_power: 35,
        icon: "fishing/bait/Lightning_Bug.png",
		consumed: "<<set $Lightning_Bug -= 1>>",
    },
	"Snail": {
        name: "Snail",
        cn_name: "蜗牛",
        type: "bait",
        amount: V.Snail || 0,
		fishing_power: 10,
        icon: "fishing/bait/Snail.png",
		consumed: "<<set $Snail -= 1>>",
    },
	"Glowing_Snail": {
        name: "Glowing_Snail",
        cn_name: "发光蜗牛",
        type: "bait",
        amount: V.Glowing_Snail || 0,
		fishing_power: 15,
        icon: "fishing/bait/Glowing_Snail.png",
		consumed: "<<set $Glowing_Snail -= 1>>",
    },
	"Grasshopper": {
        name: "Grasshopper",
        cn_name: "蚱蜢",
        type: "bait",
        amount: V.Grasshopper || 0,
		fishing_power: 10,
        icon: "fishing/bait/Grasshopper.png",
		consumed: "<<set $Grasshopper -= 1>>",
    },
	"Monarch_Butterfly": {
        name: "Monarch_Butterfly",
        cn_name: "帝王蝶",
        type: "bait",
        amount: V.Monarch_Butterfly || 0,
		fishing_power: 5,
        icon: "fishing/bait/Monarch_Butterfly.png",
		caught: "<<set $Monarch_Butterfly += 1>>",
		consumed: "<<set $Monarch_Butterfly -= 1>>",
    },
	"Sulphur_Butterfly": {
        name: "Sulphur_Butterfly",
        cn_name: "黄粉蝶",
        type: "bait",
        amount: V.Sulphur_Butterfly || 0,
		fishing_power: 10,
        icon: "fishing/bait/Sulphur_Butterfly.png",
		caught: "<<set $Sulphur_Butterfly += 1>>",
		consumed: "<<set $Sulphur_Butterfly -= 1>>",
    },
	"Zebra_Swallowtail_Butterfly": {
        name: "Zebra_Swallowtail_Butterfly",
        cn_name: "带凤蝶",
        type: "bait",
        amount: V.Zebra_Swallowtail_Butterfly || 0,
		fishing_power: 15,
        icon: "fishing/bait/Zebra_Swallowtail_Butterfly.png",
		caught: "<<set $Zebra_Swallowtail_Butterfly += 1>>",
		consumed: "<<set $Zebra_Swallowtail_Butterfly -= 1>>",
    },
	"Ulysses_Butterfly": {
        name: "Ulysses_Butterfly",
        cn_name: "翠凤蝶",
        type: "bait",
        amount: V.Ulysses_Butterfly || 0,
		fishing_power: 20,
        icon: "fishing/bait/Ulysses_Butterfly.png",
		caught: "<<set $Ulysses_Butterfly += 1>>",
		consumed: "<<set $Ulysses_Butterfly -= 1>>",
    },
	"Julia_Butterfly": {
        name: "Julia_Butterfly",
        cn_name: "珠袖蝶",
        type: "bait",
        amount: V.Julia_Butterfly || 0,
		fishing_power: 25,
        icon: "fishing/bait/Julia_Butterfly.png",
		caught: "<<set $Julia_Butterfly += 1>>",
		consumed: "<<set $Julia_Butterfly -= 1>>",
    },
	"Red_Admiral_Butterfly": {
        name: "Red_Admiral_Butterfly",
        cn_name: "红蛱蝶",
        type: "bait",
        amount: V.Red_Admiral_Butterfly || 0,
		fishing_power: 30,
        icon: "fishing/bait/Red_Admiral_Butterfly.png",
		caught: "<<set $Red_Admiral_Butterfly += 1>>",
		consumed: "<<set $Red_Admiral_Butterfly -= 1>>",
    },
	"Purple_Emperor_Butterfly": {
        name: "Purple_Emperor_Butterfly",
        cn_name: "紫蛱蝶",
        type: "bait",
        amount: V.Purple_Emperor_Butterfly || 0,
		fishing_power: 35,
        icon: "fishing/bait/Purple_Emperor_Butterfly.png",
		caught: "<<set $Purple_Emperor_Butterfly += 1>>",
		consumed: "<<set $Purple_Emperor_Butterfly -= 1>>",
    },
	"Tree_Nymph_Butterfly": {
        name: "Tree_Nymph_Butterfly",
        cn_name: "帛斑蝶",
        type: "bait",
        amount: V.Tree_Nymph_Butterfly || 0,
		fishing_power: 50,
        icon: "fishing/bait/Tree_Nymph_Butterfly.png",
		caught: "<<set $Tree_Nymph_Butterfly += 1>>",
		consumed: "<<set $Tree_Nymph_Butterfly -= 1>>",
    },
	"Hell_Butterfly": {
        name: "Hell_Butterfly",
        cn_name: "地狱蝴蝶",
        type: "lavaproof",
        amount: V.Hell_Butterfly || 0,
		fishing_power: 25,
        icon: "fishing/bait/Hell_Butterfly.png",
		consumed: "<<set $Hell_Butterfly -= 1>>",
    },
	"Maggot": {
        name: "Maggot",
        cn_name: "蝇蛆",
        type: "bait",
        amount: V.Maggot || 0,
		fishing_power: 22,
        icon: "fishing/bait/Maggot.png",
		consumed: "<<set $Maggot -= 1>>",
    },
	"Stinkbug": {
        name: "Stinkbug",
        cn_name: "臭虫",
        type: "bait",
        amount: V.Stinkbug || 0,
		fishing_power: 10,
        icon: "fishing/bait/Stinkbug.png",
		consumed: "<<set $Stinkbug -= 1>>",
    },
	"Ladybug": {
        name: "Ladybug",
        cn_name: "瓢虫",
        type: "bait",
        amount: V.Ladybug || 0,
		fishing_power: 17,
        icon: "fishing/bait/Ladybug.png",
		consumed: "<<set $Ladybug -= 1>>",
    },
	"Gold_Butterfly": {
        name: "Gold_Butterfly",
        cn_name: "金蝴蝶",
        type: "bait",
        amount: V.Gold_Butterfly || 0,
		fishing_power: 50,
        icon: "fishing/bait/Gold_Butterfly.png",
		caught: "<<set $Gold_Butterfly += 1>>",
		consumed: "<<set $Gold_Butterfly -= 1>>",
    },
	"Gold_Grasshopper": {
        name: "Gold_Grasshopper",
        cn_name: "金蚱蜢",
        type: "bait",
        amount: V.Gold_Grasshopper || 0,
		fishing_power: 50,
        icon: "fishing/bait/Gold_Grasshopper.png",
		consumed: "<<set $Gold_Grasshopper -= 1>>",
    },
	"Gold_Worm": {
        name: "Gold_Worm",
        cn_name: "金蠕虫",
        type: "bait",
        amount: V.Gold_Worm || 0,
		fishing_power: 50,
        icon: "fishing/bait/Gold_Worm.png",
		consumed: "<<set $Gold_Worm -= 1>>",
    },
	"Gold_Ladybug": {
        name: "Gold_Ladybug",
        cn_name: "金瓢虫",
        type: "bait",
        amount: V.Gold_Ladybug || 0,
		fishing_power: 50,
        icon: "fishing/bait/Gold_Ladybug.png",
		consumed: "<<set $Gold_Ladybug -= 1>>",
    },
	"Truffle_Worm": {
        name: "Truffle_Worm",
        cn_name: "松露虫",
        type: "boss_summoner",
        amount: V.Truffle_Worm || 0,
		fishing_power: 666,
        icon: "fishing/bait/Truffle_Worm.png",
		consumed: "<<set $Truffle_Worm -= 1>>",
    },
}

function getAllBaitList() {
	let all_bait_list = Object.keys(setup.terraBait);
	return all_bait_list;
}
window.getAllBaitList = getAllBaitList

function getBaitObtainedList() {
	for (let bait in setup.terraBait) {
        setup.terraBait[bait].amount = V[bait] || 0;
    }
    let bait_obtained = Object.keys(setup.terraBait);
    return bait_obtained.filter(bait => {
        return setup.terraBait[bait].amount > 0;
    });
}
window.getBaitObtainedList = getBaitObtainedList;