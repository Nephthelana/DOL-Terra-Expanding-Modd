setup.terraTool = {
	"Magic_Conch": {
        name: "Magic_Conch",
        cn_name: "魔法海螺",
        type: "tool",
        obtained: V.Magic_Conch,
        icon: "tool/Magic_Conch_item.png",
		des: "每日可使用一次，将你传送至海滩",
		use: "<<terra_tool_use_Magic_Conch>>"
    },
	"Demon_Conch": {
        name: "Demon_Conch",
        cn_name: "恶魔海螺",
        type: "tool",
        obtained: V.Demon_Conch,
        icon: "tool/Demon_Conch_item.png",
		des: "每日可使用一次，将你传送至地下岩浆湖(暂未实装，目前为传送至海滩)",
		use: "<<terra_tool_use_Demon_Conch>>"
    },
	"Snake_Charmers_Flute": {
        name: "Snake_Charmers_Flute",
        cn_name: "耍蛇者长笛",
        type: "tool",
        obtained: V.Snake_Charmers_Flute,
        icon: "tool/Snake_Charmers_Flute_item.png",
		des: "使用后生成一条蛇可供攀爬。",
		use: "<<terra_tool_use_Snake_Charmers_Flute>>"
    },
	"Torrential_Tear": {
        name: "Torrential_Tear",
        cn_name: "洪流之泪",
        type: "tool",
        obtained: V.Torrential_Tear,
        icon: "tool/Torrential_Tear_item.png",
		des: "使用以控制在接下来至少六小时内的天气，在那之后会回到原本的天气模拟。",
		use: "<<terra_tool_use_Torrential_Tear>>"
    },
	"Bottomless_Water_Bucket": {
        name: "Bottomless_Water_Bucket",
        cn_name: "无底水桶",
        type: "tool",
        obtained: V.Bottomless_Water_Bucket,
        icon: "tool/Bottomless_Water_Bucket_item.png",
		des: "可以倒出无限的水。谁会想用这个来把自己浇成落汤鸡呢？",
		use: "<<terra_tool_use_Bottomless_Water_Bucket>>"
    },
	"Gravediggers_Shovel": {
        name: "Gravediggers_Shovel",
        cn_name: "掘墓者铲子",
        type: "tool",
        obtained: V.Gravediggers_Shovel,
        icon: "tool/Gravediggers_Shovel_item.png",
		des: "只有在建造人工钓鱼池时才用得到它。<i>\"你明白了吗？\"</i>",
		use: "<<terra_tool_use_Gravediggers_Shovel>>"
    },
	"Bug_Net": {
        name: "Bug_Net",
        cn_name: "虫网",
        type: "tool",
        obtained: V.Bug_Net,
        icon: "tool/Bug_Net_item.png",
		des: "完成前置任务后，可以用来和罗宾在森林捕捉小动物。",
		use: "<<terra_tool_use_Bug_Net>>"
    },
	"Golden_Bug_Net": {
        name: "Golden_Bug_Net",
        cn_name: "金虫网",
        type: "tool",
        obtained: V.Golden_Bug_Net,
        icon: "tool/Golden_Bug_Net_item.png",
		des: "完成前置任务后，可以用来和罗宾在森林捕捉小动物。也可以捕捉熔岩小动物(未实装)！",
		use: "<<terra_tool_use_Golden_Bug_Net>>"
    },
	"Staff_of_Regrowth": {
        name: "Staff_of_Regrowth",
        cn_name: "再生法杖",
        type: "tool",
        obtained: V.Staff_of_Regrowth,
        icon: "tool/Staff_of_Regrowth_item.png",
		des: "用它进行采集可提高炼金植物的采集量(相关功能未实装)",
		use: "<<terra_tool_use_Staff_of_Regrowth>>"
    },
	"Starfury": {
        name: "Starfury",
        cn_name: "星怒",
        type: "tool",
        obtained: V.Starfury,
        icon: "tool/Starfury_item.png",
		des: "这不该算工具吧？",
		use: "<<terra_tool_use_Starfury>>"
    },
}

function getAllToolList() {
	let all_tool_list = Object.keys(setup.terraTool);
	return all_tool_list;
}
window.getAllToolList = getAllToolList

function getToolObtained() {
	for (let tool in setup.terraTool) {
        setup.terraTool[tool].obtained = V[tool];
    }
    let tool_obtained = Object.keys(setup.terraTool);
    return tool_obtained.filter(tool => {
        return setup.terraTool[tool].obtained === true;
    });
}
window.getToolObtained = getToolObtained;