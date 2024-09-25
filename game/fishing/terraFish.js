setup.terraFish = {
	"Salmon": {
        name: "Salmon",
        cn_name: "三文鱼",
		material: true,
        type: "cookable",
        price: 7.5,
        amount: V.Salmon || 0,
        icon: "fishing/fish/Salmon.png",
        consumed: "<<set $Salmon -= 1>>"
    },
    "Bass": {
        name: "Bass",
        cn_name: "鲈鱼",
		material: true,
        type: "cookable",
        price: 5,
        amount: V.Bass || 0,
        icon: "fishing/fish/Bass.png",
        consumed: "<<set $Bass -= 1>>"
    },
	"Shrimp": {
        name: "Shrimp",
        cn_name: "虾",
		material: true,
        type: "cookable",
        price: 15,
        amount: V.Shrimp || 0,
        icon: "fishing/fish/Shrimp.png",
        consumed: "<<set $Shrimp -= 1>>"
    },
	"Tuna": {
        name: "Tuna",
        cn_name: "金枪鱼",
		material: true,
        type: "cookable",
        price: 7.5,
        amount: V.Tuna || 0,
        icon: "fishing/fish/Tuna.png",
        consumed: "<<set $Tuna -= 1>>"
    },
	"Red_Snapper": {
        name: "Red_Snapper",
        cn_name: "红鲷鱼",
		material: true,
        type: "cookable",
        price: 7.5,
        amount: V.Red_Snapper || 0,
        icon: "fishing/fish/Red_Snapper.png",
        consumed: "<<set $Red_Snapper -= 1>>"
    },
	"Trout": {
        name: "Trout",
        cn_name: "鳟鱼",
		material: true,
        type: "cookable",
        price: 5,
        amount: V.Trout || 0,
        icon: "fishing/fish/Trout.png",
        consumed: "<<set $Trout -= 1>>"
    },
	"Golden_Carp": {
        name: "Golden_Carp",
        cn_name: "金鲤鱼",
		material: false,
        type: "fish",
        price: 1000,
        amount: V.Golden_Carp || 0,
        icon: "fishing/fish/Golden_Carp.png",
        consumed: "<<set $Golden_Carp -= 1>>"
    },
	"Stinkfish": {
        name: "Stinkfish",
        cn_name: "臭味鱼",
		material: true,
        type: "potion",
        price: 25,
        amount: V.Stinkfish || 0,
        icon: "fishing/fish/Stinkfish.png",
        consumed: "<<set $Stinkfish -= 1>>"
    },
	"Armored_Cavefish": {
        name: "Armored_Cavefish",
        cn_name: "装甲洞穴鱼",
		material: true,
        type: "potion",
        price: 15,
        amount: V.Armored_Cavefish || 0,
        icon: "fishing/fish/Armored_Cavefish.png",
        consumed: "<<set $Armored_Cavefish -= 1>>"
    },
	"Specular_Fish": {
        name: "Specular_Fish",
        cn_name: "镜面鱼",
		material: true,
        type: "potion",
        price: 7.5,
        amount: V.Specular_Fish || 0,
        icon: "fishing/fish/Specular_Fish.png",
        consumed: "<<set $Specular_Fish -= 1>>"
    },
	"Flounder": {
        name: "Flounder",
        cn_name: "偏口鱼",
		material: true,
        type: "cookable",
        price: 1.5,
        amount: V.Flounder || 0,
        icon: "fishing/fish/Flounder.png",
        consumed: "<<set $Flounder -= 1>>"
    },
	"Rock_Lobster": {
        name: "Rock_Lobster",
        cn_name: "岩石龙虾",
		material: true,
        type: "cookable",
        price: 10,
        amount: V.Rock_Lobster || 0,
        icon: "fishing/fish/Rock_Lobster.png",
        consumed: "<<set $Rock_Lobster -= 1>>"
    },
	"Honeyfin": {
        name: "Honeyfin",
        cn_name: "蜂蜜鱼",
		material: true,
        type: "potion",
        price: 15,
        amount: V.Honeyfin || 0,
        icon: "fishing/fish/Honeyfin.png",
        consumed: "<<set $Honeyfin -= 1>>"
    },
	"Double_Cod": {
        name: "Double_Cod",
        cn_name: "双鳍鳕鱼",
		material: true,
        type: "potion",
        price: 15,
        amount: V.Double_Cod || 0,
        icon: "fishing/fish/Double_Cod.png",
        consumed: "<<set $Double_Cod -= 1>>"
    },
	"Variegated_Lardfish": {
        name: "Variegated_Lardfish",
        cn_name: "斑驳油鱼",
		material: true,
        type: "potion",
        price: 15,
        amount: V.Variegated_Lardfish || 0,
        icon: "fishing/fish/Variegated_Lardfish.png",
        consumed: "<<set $Variegated_Lardfish -= 1>>"
    },
	"Neon_Tetra": {
        name: "Neon_Tetra",
        cn_name: "霓虹脂鲤",
		material: true,
        type: "potion",
        price: 15,
        amount: V.Neon_Tetra || 0,
        icon: "fishing/fish/Neon_Tetra.png",
        consumed: "<<set $Neon_Tetra -= 1>>"
    },
	"Chaos_Fish": {
        name: "Chaos_Fish",
        cn_name: "混沌鱼",
		material: true,
        type: "potion",
        price: 300,
        amount: V.Chaos_Fish || 0,
        icon: "fishing/fish/Chaos_Fish.png",
        consumed: "<<set $Chaos_Fish -= 1>>"
    },
	"Prismite": {
        name: "Prismite",
        cn_name: "七彩矿鱼",
		material: true,
        type: "potion",
        price: 100,
        amount: V.Prismite || 0,
        icon: "fishing/fish/Prismite.png",
        consumed: "<<set $Prismite -= 1>>"
    },
	"Princess_Fish": {
        name: "Princess_Fish",
        cn_name: "公主鱼",
		material: true,
        type: "potion",
        price: 25,
        amount: V.Princess_Fish || 0,
        icon: "fishing/fish/Princess_Fish.png",
        consumed: "<<set $Princess_Fish -= 1>>"
    },
	"Damselfish": {
        name: "Damselfish",
        cn_name: "雀鲷",
		material: false,
        type: "fish",
        price: 1000,
        amount: V.Damselfish || 0,
        icon: "fishing/fish/Damselfish.png",
        consumed: "<<set $Damselfish -= 1>>"
    },
	"Frost_Minnow": {
        name: "Frost_Minnow",
        cn_name: "寒霜绦鱼",
		material: true,
        type: "potion",
        price: 15,
        amount: V.Frost_Minnow || 0,
        icon: "fishing/fish/Frost_Minnow.png",
        consumed: "<<set $Frost_Minnow -= 1>>"
    },
	"Atlantic_Cod": {
        name: "Atlantic_Cod",
        cn_name: "大西洋鳕鱼",
		material: true,
        type: "cookable",
        price: 7.5,
        amount: V.Atlantic_Cod || 0,
        icon: "fishing/fish/Atlantic_Cod.png",
        consumed: "<<set $Atlantic_Cod -= 1>>"
    },
	"Flarefin_Koi": {
        name: "Flarefin_Koi",
        cn_name: "闪鳍锦鲤",
		material: true,
        type: "potion",
        price: 50,
        amount: V.Flarefin_Koi || 0,
        icon: "fishing/fish/Flarefin_Koi.png",
        consumed: "<<set $Flarefin_Koi -= 1>>"
    },
	"Obsidifish": {
        name: "Obsidifish",
        cn_name: "黑曜石鱼",
		material: true,
        type: "potion",
        price: 15,
        amount: V.Obsidifish || 0,
        icon: "fishing/fish/Obsidifish.png",
        consumed: "<<set $Obsidifish -= 1>>"
    },
	"Greenwave_Loach": {
        name: "Greenwave_Loach",
        cn_name: "绿波泥鳅",
		material: false,
        type: "fish",
        price: 1000,
        amount: V.Greenwave_Loach || 0,
        icon: "fishing/fish/Greenwave_Loach.png",
        consumed: "<<set $Greenwave_Loach -= 1>>"
    },
	"Sunken_Sailfish": {
        name: "Sunken_Sailfish",
        cn_name: "沉沦帆鱼",
		material: true,
        type: "potion",
        price: 70,
        amount: V.Sunken_Sailfish || 0,
        icon: "fishing/fish/Sunken_Sailfish.png",
        consumed: "<<set $Sunken_Sailfish -= 1>>"
    },
	"Prismatic_Guppy": {
        name: "Prismatic_Guppy",
        cn_name: "棱晶孔雀鱼",
		material: true,
        type: "cookable",
        price: 5,
        amount: V.Prismatic_Guppy || 0,
        icon: "fishing/fish/Prismatic_Guppy.png",
        consumed: "<<set $Prismatic_Guppy -= 1>>"
    },
	"Charred_Lasher": {
        name: "Charred_Lasher",
        cn_name: "焦黑鞭笞者",
		material: false,
        type: "fish",
        price: 1000,
        amount: V.Charred_Lasher || 0,
        icon: "fishing/fish/Charred_Lasher.png",
        consumed: "<<set $Charred_Lasher -= 1>>"
    },
	"Coastal_Demonfish": {
        name: "Coastal_Demonfish",
        cn_name: "海岸恶魔鱼",
		material: true,
        type: "potion",
        price: 8,
        amount: V.Coastal_Demonfish || 0,
        icon: "fishing/fish/Coastal_Demonfish.png",
        consumed: "<<set $Coastal_Demonfish -= 1>>"
    },
	"Crag_Bullhead": {
        name: "Crag_Bullhead",
        cn_name: "硫火崖回鱼",
		material: true,
        type: "cookable",
        price: 5,
        amount: V.Crag_Bullhead || 0,
        icon: "fishing/fish/Crag_Bullhead.png",
        consumed: "<<set $Crag_Bullhead -= 1>>"
    },
}

function getAllFishList() {
	for (let fish in setup.terraFish) {
        setup.terraFish[fish].amount = V[fish] || 0;
    }
    let all_fish_list = Object.keys(setup.terraFish);
	return all_fish_list;
}
window.getAllFishList = getAllFishList

function getFishObtainedList() {
	for (let fish in setup.terraFish) {
        setup.terraFish[fish].amount = V[fish] || 0;
    }
    let fish_obtained = Object.keys(setup.terraFish);
    return fish_obtained.filter(fish => {
        return setup.terraFish[fish].amount > 0;
    });
}
window.getFishObtainedList = getFishObtainedList;