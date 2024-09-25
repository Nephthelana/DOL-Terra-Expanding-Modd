setup.terraAnglerFurniture = {
	"Bunnyfish_Trophy": {
        name: "Bunnyfish_Trophy",
        cn_name: "兔兔纪念章",
        type: "furniture",
        obtained: V.Bunnyfish_Trophy,
        item_icon: "furniture_item/Bunnyfish_Trophy.png",
		placed_icon: "furniture_placed/Bunnyfish_Trophy_placed.png",
    },
	"Compass_Rose": {
        name: "Compass_Rose",
        cn_name: "罗盘针",
        type: "furniture",
        obtained: V.Compass_Rose,
        item_icon: "furniture_item/Compass_Rose.png",
		placed_icon: "furniture_placed/Compass_Rose_placed.png",
    },
	"Couch_Gag": {
        name: "Couch_Gag",
        cn_name: "沙发笑话",
        type: "furniture",
        obtained: V.Couch_Gag,
        item_icon: "furniture_item/Couch_Gag.png",
		placed_icon: "furniture_placed/Couch_Gag_placed.png",
    },
	"Crustography": {
        name: "Crustography",
        cn_name: "甲壳摄影",
        type: "furniture",
        obtained: V.Crustography,
        item_icon: "furniture_item/Crustography.png",
		placed_icon: "furniture_placed/Crustography_placed.png",
    },
	"Fangs": {
        name: "Fangs",
        cn_name: "獠牙",
        type: "furniture",
        obtained: V.Fangs,
        item_icon: "furniture_item/Fangs.png",
		placed_icon: "furniture_placed/Fangs_placed.png",
    },
	"Goldfish_Trophy": {
        name: "Goldfish_Trophy",
        cn_name: "金鱼纪念章",
        type: "furniture",
        obtained: V.Goldfish_Trophy,
        item_icon: "furniture_item/Goldfish_Trophy.png",
		placed_icon: "furniture_placed/Goldfish_Trophy_placed.png",
    },
	"Life_Preserver": {
        name: "Life_Preserver",
        cn_name: "救生圈",
        type: "furniture",
        obtained: V.Life_Preserver,
        item_icon: "furniture_item/Life_Preserver.png",
		placed_icon: "furniture_placed/Life_Preserver_placed.png",
    },
	"Not_So_Lost_In_Paradise": {
        name: "Not_So_Lost_In_Paradise",
        cn_name: "并未如此迷失在乐园",
        type: "furniture",
        obtained: V.Not_So_Lost_In_Paradise,
        item_icon: "furniture_item/Not_So_Lost_In_Paradise.png",
		placed_icon: "furniture_placed/Not_So_Lost_In_Paradise_placed.png",
    },
	"Pillagin_Me_Pixels": {
        name: "Pillagin_Me_Pixels",
        cn_name: "海贼像素画",
        type: "furniture",
        obtained: V.Pillagin_Me_Pixels,
        item_icon: "furniture_item/Pillagin_Me_Pixels.png",
		placed_icon: "furniture_placed/Pillagin_Me_Pixels_placed.png",
    },
	"Seaweed_Planter": {
        name: "Seaweed_Planter",
        cn_name: "海草花盆",
        type: "furniture",
        obtained: V.Seaweed_Planter,
        item_icon: "furniture_item/Seaweed_Planter.png",
		placed_icon: "furniture_placed/Seaweed_Planter_placed.png",
    },
	"Sharkteeth_Trophy": {
        name: "Sharkteeth_Trophy",
        cn_name: "鲨牙纪念章",
        type: "furniture",
        obtained: V.Sharkteeth_Trophy,
        item_icon: "furniture_item/Sharkteeth_Trophy.png",
		placed_icon: "furniture_placed/Sharkteeth_Trophy_placed.png",
    },
	"Ship_in_a_Bottle": {
        name: "Ship_in_a_Bottle",
        cn_name: "船舶瓶",
        type: "furniture",
        obtained: V.Ship_in_a_Bottle,
        item_icon: "furniture_item/Ship_in_a_Bottle.png",
		placed_icon: "furniture_placed/Ship_in_a_Bottle_placed.png",
    },
	"Ships_Wheel": {
        name: "Ships_Wheel",
        cn_name: "舵轮",
        type: "furniture",
        obtained: V.Ships_Wheel,
        item_icon: "furniture_item/Ships_Wheel.png",
		placed_icon: "furniture_placed/Ships_Wheel_placed.png",
    },
	"Silent_Fish": {
        name: "Silent_Fish",
        cn_name: "沉默的鱼",
        type: "furniture",
        obtained: V.Silent_Fish,
        item_icon: "furniture_item/Silent_Fish.png",
		placed_icon: "furniture_placed/Silent_Fish_placed.png",
    },
	"Swordfish_Trophy": {
        name: "Swordfish_Trophy",
        cn_name: "剑鱼纪念章",
        type: "furniture",
        obtained: V.Swordfish_Trophy,
        item_icon: "furniture_item/Swordfish_Trophy.png",
		placed_icon: "furniture_placed/Swordfish_Trophy_placed.png",
    },
	"The_Duke": {
        name: "The_Duke",
        cn_name: "公爵",
        type: "furniture",
        obtained: V.The_Duke,
        item_icon: "furniture_item/The_Duke.png",
		placed_icon: "furniture_placed/The_Duke_placed.png",
    },
	"Treasure_Map": {
        name: "Treasure_Map",
        cn_name: "宝藏地图",
        type: "furniture",
        obtained: V.Treasure_Map,
        item_icon: "furniture_item/Treasure_Map.png",
		placed_icon: "furniture_placed/Treasure_Map_placed.png",
    },
	"Wall_Anchor": {
        name: "Wall_Anchor",
        cn_name: "墙锚",
        type: "furniture",
        obtained: V.Wall_Anchor,
        item_icon: "furniture_item/Wall_Anchor.png",
		placed_icon: "furniture_placed/Wall_Anchor_placed.png",
    },
	"What_Lurks_Below": {
        name: "What_Lurks_Below",
        cn_name: "下面潜伏着什么",
        type: "furniture",
        obtained: V.What_Lurks_Below,
        item_icon: "furniture_item/What_Lurks_Below.png",
		placed_icon: "furniture_placed/What_Lurks_Below_placed.png",
    },
}

function getAllAnglerFurnitureList() {
	let all_angler_furniture_list = Object.keys(setup.terraAnglerFurniture);
	return all_angler_furniture_list;
}
window.getAllAnglerFurnitureList = getAllAnglerFurnitureList

function getAnglerFurnitureObtained() {
	for (let furniture in setup.terraAnglerFurniture) {
        setup.terraAnglerFurniture[furniture].obtained = V[furniture];
    }
    let angler_furniture_obtained = Object.keys(setup.terraAnglerFurniture);
    return angler_furniture_obtained.filter(request => {
        return setup.terraAnglerFurniture[request].obtained === true;
    });
}
window.getAnglerFurnitureObtained = getAnglerFurnitureObtained;