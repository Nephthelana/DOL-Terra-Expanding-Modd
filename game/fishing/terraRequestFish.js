setup.terraRequestFish = {
	"Amanita_Fungifin": {
        name: "Amanita_Fungifin",
        cn_name: "毒菌鱼",
        type: "request",
        obtained: V.Amanita_Fungifin,
		catching_place: ["wolf_cave_clearing","wolf_cave_clearing_artificial"],
        icon: "fishing/quest_fish/Amanita_Fungifin.png",
		angler_des: "\"我在发光蘑菇地中发现了这个惊人的地方！一切都是蓝的！我正在采摘蓝光湖畔的一些蘑菇，其中一只蘑菇突然咬了我一口，然后游走了！我想以其人之道还治其人之身，并狂咬它一顿！我的意思是，你去把它弄回来给我！\"",
		cute_angler_des: "\"我在森林发现了惊人的地方！一个盆地，一切都是蓝的！到处都是发光蘑菇！而且盆地中央还有一片蓝光湖畔！我在蓝光湖打窝的时候，湖面漂浮的一只蘑菇突然咬了我一口，然后游走了！这让我感到有点生气，能请你帮我把它抓回来吗？我也要咬它一口！\"",
		catching_place_des: "<<fishing_request_place_wolf_cave_clearing>>",
		robin_react: "\"小心，\"你用力地抓着这条鱼的尾巴，避免它一个用力就扭过头来咬你，\"这鱼凶得很，还是我拿着吧。\"<br><br>"
    },
	"Angelfish": {
        name: "Angelfish",
        cn_name: "天使鱼",
        type: "request",
        obtained: V.Angelfish,
		catching_place: ["eden_clearing","eden_clearing_artificial"],
        icon: "fishing/quest_fish/Angelfish.png",
		angler_des: "\"你知道吗，天空中漂浮着许多神奇的岛屿？你肯定不知道！因为这个世界里根本没有！他们说，天使住在天上，我相信这些天使都有鳍和鳃，在那游来游去！我相信你肯定能抓一个给我！\"",
		cute_angler_des: "\"你知道，人们总说天使住在天上，天空中好像漂浮着许多岛屿，岛屿上又有湖，那么我相信这些天使都有鳍和鳃，在那游来游去！你帮我抓一条这样的鱼吗？我想看看天上的鱼和地上的鱼有什么区别。\"",
		catching_place_des: "<<fishing_request_place_eden_clearing>>"
    },
	"Batfish": {
        name: "Batfish",
        cn_name: "蝙蝠鱼",
        type: "request",
        obtained: V.Batfish,
		catching_place: ["barb_street","wolf_cave_clearing","wolf_cave_clearing_artificial"],
        icon: "fishing/quest_fish/Batfish.png",
		angler_des: "\"呐呐呐呐呐呐呐，蝙蝠鱼！意思是去地下深挖，抓住它，再带来给我！\"",
		cute_angler_des: "\"呐呐呐呐呐...我是说，蝙蝠鱼！他们一般在地下生活，麻烦你帮我抓住它，在水里游的蝙蝠有够吸引眼球的。\"",
		catching_place_des: "<<fishing_request_place_barb_street>>/<<fishing_request_place_wolf_cave_clearing>>"
    },
	"Bonefish": {
        name: "Bonefish",
        cn_name: "骷髅鱼",
        type: "request",
        obtained: V.Bonefish,
		catching_place: ["barb_street","wolf_cave_clearing","wolf_cave_clearing_artificial"],
        icon: "fishing/quest_fish/Bonefish.png",
		angler_des: "\"如果看到地下水中漂浮着鱼骨，我通常不怎么好奇，但是这只鱼骨竟然在游泳！什么，你以为在 <<if $saveName isnot \"\">>$saveName<<else>>$saveId<</if>> 中还能动的只有人类的骷髅吗？去抓一只给我，这样我可以把它钉在别人的床上！\"",
		cute_angler_des: "\"一般来说在地下洞穴的水里看到鱼骨不是什么稀奇事，但是这只鱼骨竟然还活着！我是说，我不知道它是不是活着，但是它在游泳！我知道 <<if $saveName isnot \"\">>$saveName<<else>>$saveId<</if>> 有能自由活动的人骷髅，但我不知道还有鱼的！麻烦你帮我抓一条回来，我要确认一下它到底为什么还能动。\"",
		catching_place_des: "<<fishing_request_place_barb_street>>/<<fishing_request_place_wolf_cave_clearing>>"
    },
	"Bumblebee_Tuna": {
        name: "Bumblebee_Tuna",
        cn_name: "大黄蜂金枪鱼",
        type: "request",
        obtained: V.Bumblebee_Tuna,
		catching_place: ["honey"],
        icon: "fishing/quest_fish/Bumblebee_Tuna.png",
		angler_des: "\"在 <<if $saveName isnot \"\">>$saveName<<else>>$saveId<</if>> 的森林中有许多光怪陆离的生物！比如说，我看见过这种鱼，像一只超级大黄蜂！我对蜜蜂过敏，所以你必须去把它给我抓来！它的味道肯定像金枪鱼和蜂蜜三明治！\"",
		cute_angler_des: "\"在 <<if $saveName isnot \"\">>$saveName<<else>>$saveId<</if>> 的森林中有许多光怪陆离的生物，比如说一只在水里游的超级大黄蜂！不过我想在水里游就不能叫黄蜂而是鱼了吧...我对蜜蜂过敏，所以只能麻烦你了，等你抓上来之后我们一起尝尝，它的味道肯定像金枪鱼和蜂蜜三明治！\"",
		catching_place_des: "<<fishing_request_place_honey>>"
    },
	"Bunnyfish": {
        name: "Bunnyfish",
        cn_name: "兔兔鱼",
        type: "request",
        obtained: V.Bunnyfish,
		catching_place: ["lake_fishing_rock"],
        icon: "fishing/quest_fish/Bunnyfish.png",
		angler_des: "\"我正在森林里钓鱼，对吧？你猜发生了什么！一只兔兔朝我跳了过来！然后，又有一只跳过来，又有一只……突然间我就被兔兔包围了！甚至有一只从水里向我游过来，但它没有腿！我惊讶地从椅子上跌下来，把所有兔兔都吓跑了！我想要那条兔兔鱼作为宠物，因此你最好去把它抓来给我！马上！\"",
		cute_angler_des: "\"昨天我正在森林里钓鱼，你猜发生了什么？不，不是怪物，是兔子！一只又一只的兔子从我身边经过，突然有一只兔子水里向我游过来！我是说，长得像兔子但是没有腿的毛茸茸鱼！我惊讶的从椅子上站了起来，那条兔子鱼被吓跑了，能请你帮我把它抓回来吗？我我想知道它吃不吃萝卜！\"",
		catching_place_des: "<<fishing_request_place_lake_fishing_rock>>"
    },
	"Catfish": {
        name: "Catfish",
        cn_name: "猫鱼",
        type: "request",
        obtained: V.Catfish,
		catching_place: ["farm_woodland"],
        icon: "fishing/quest_fish/Catfish.png",
		angler_des: "\"我终于找到一只喜欢水的丛林猫！我想这是因为它还有鱼的天性。我不知道为什么会这样，我也不想知道。我只是希望它能到我手里，你得快点！\"",
		cute_angler_des: "\"我听说有一种喜欢水的猫！严格来说是鱼，但是它长得跟猫一样！还是说其实是猫但是能在在水里游呢...算了！等你把它抓回来我们就能决定是养在笼子里还是鱼缸里了！\"",
		catching_place_des: "<<fishing_request_place_farm_woodland>>"
    },
	"Cloudfish": {
        name: "Cloudfish",
        cn_name: "云鱼",
        type: "request",
        obtained: V.Cloudfish,
		catching_place: ["eden_clearing","eden_clearing_artificial"],
        icon: "fishing/quest_fish/Cloudfish.png",
		angler_des: "\"有谣言说天上漂浮着岛屿，岛上有惊人的宝藏！但是谁会在意呢，更有意思的是，云彩中有时会形成湖泊，湖泊中游荡着云朵做成的鱼！我想尝尝它的味道，所以你最好去把它抓来给我！\"",
		cute_angler_des: "\"有传言说天上漂浮着许多岛屿，岛上有许多宝藏！更有意思的是，云彩中有时会形成湖泊，湖泊中游荡着云朵做成的鱼！对你来说宝藏是宝箱里的东西，对我来说宝藏是云朵做的鱼！我想知道吃云是什么感觉的，所以能拜托你你把它抓来吗？\"",
		catching_place_des: "<<fishing_request_place_eden_clearing>>"
    },
	"Clownfish": {
        name: "Clownfish",
        cn_name: "小丑鱼",
        type: "request",
        obtained: V.Clownfish,
		catching_place: ["beach"],
        icon: "fishing/quest_fish/Clownfish.png",
		angler_des: "\"我在海边看到过这条亮橙色的彩鱼，它在疯狂地游来游去，好像在找走丢的家人！去把它抓来给我，这样又会有一条游出来找它！\"",
		cute_angler_des: "\"我在海边看到过一条明橙色的鱼，它在疯狂地游来游去，好像在逃离什么东西！能请你去把它带回来吗？在岸上就不会有东西追赶它了。\"",
		catching_place_des: "<<fishing_request_place_beach>>"
    },
	"Demonic_Hellfish": {
        name: "Demonic_Hellfish",
        cn_name: "恶魔地狱鱼",
        type: "request",
        obtained: V.Demonic_Hellfish,
		catching_place: ["wolf_cave_clearing","wolf_cave_clearing_artificial"],
        icon: "fishing/quest_fish/Demonic_Hellfish.png",
		angler_des: "\"我听说在地狱，所有恶魔的王其实是一条鱼！想像一下，如果你去抓一条给我，我将拥有强大的王权！\"",
		cute_angler_des: "\"我听说在地狱，恶魔的臣服对象其实是一条恶魔鱼！虽然更有可能只是另一种类型的恶魔...但是在鱼缸养一只恶魔，很酷不是吗？\"",
		catching_place_des: "<<fishing_request_place_wolf_cave_clearing>>"
    },
	"Derpfish": {
        name: "Derpfish",
        cn_name: "跳跳鱼",
        type: "request",
        obtained: V.Derpfish,
		catching_place: ["farm_woodland"],
        icon: "fishing/quest_fish/Derpfish.png",
		angler_des: "\"树林里的那些跳跳兽是我见过的最可怕的怪物！好的一面是，有时候它们没有腿！这些是生活在水中的，就没那么可怕了！马上去给我抓一只，这样我可以品尝它们的味道，还不会被吓个半死！\"",
		cute_angler_des: "\"树林里的那些跳跳兽的机动力令人恐惧，但好消息是，有部分跳跳兽生活在水中，也不会跳！虽然不会跳的跳跳兽不能称之为'跳跳兽'了,但是我想它们的味道口感是一样的！能帮我抓一只回来吗？我们可以搞一顿跳跳宴！\"",
		catching_place_des: "<<fishing_request_place_farm_woodland>>"
    },
	"Dirtfish": {
        name: "Dirtfish",
        cn_name: "土鱼",
        type: "request",
        obtained: V.Dirtfish,
		catching_place: ["lake_fishing_rock","barb_street"],
        icon: "fishing/quest_fish/Dirtfish.png",
		angler_des: "\"正当我在收线钓起一条大鱼时，这个僵尸从森林湖中蹦出来，不仅很搞笑还会说话，然后开始大说特说这种用土做成的'凶残'的鱼！他说，这鱼能闷死十个像他这个块头的小伙子……我要得到它！马上！\"",
		cute_angler_des: "\"之前我在森林钓鱼时，有一只僵尸从湖中蹦出来，吓得我立刻掏出了防狼喷雾，不过它并没有攻击我的意图，还会说话，然后开始大说特说有只'凶残'的土鱼！他说，这鱼能闷死十个像他这个块头的小伙子，说完它就走进了旁边的洞窟消失不见了...但是我对它说的这句话还是耿耿于怀，能请你帮忙找找吗？\"",
		catching_place_des: "<<fishing_request_place_lake_fishing_rock>>/<<fishing_request_place_barb_street>>"
    },
	"Dynamite_Fish": {
        name: "Dynamite_Fish",
        cn_name: "雷管鱼",
        type: "request",
        obtained: V.Dynamite_Fish,
		catching_place: ["lake_fishing_rock"],
        icon: "fishing/quest_fish/Dynamite_Fish.png",
		angler_des: "\"曾经有个爆破专家在森林里的湖中弄丢了一捆雷管，一直很着急。他有那么多炸药，丢的那捆炸药有这么重要吗？显然，因为这捆炸药长出了鳍，开始游走了！我不知道他做炸药的材料是哪儿弄的，但那一捆肯定已经走火入魔了！钓回来给我，我一直想要一条自杀式炸弹鱼！不要问为什么...\"",
		cute_angler_des: "\"曾经有个爆破专家因为在森林里的湖中弄丢了一捆雷管而着急，他有那么多炸药，丢了一捆炸药不至于着急吧？你猜他为什么会急？那是因为他丢的不是炸药，而是他的宠物鱼！虽然它也可以称为炸药——因为它确实会爆炸。\"",
		catching_place_des: "<<fishing_request_place_lake_fishing_rock>>"
    },
	"Fallen_Starfish": {
        name: "Fallen_Starfish",
        cn_name: "坠落星鱼",
        type: "request",
        obtained: V.Fallen_Starfish,
		catching_place: ["lake_fishing_rock","eden_clearing","eden_clearing_artificial"],
        icon: "fishing/quest_fish/Fallen_Starfish.png",
		angler_des: "\"我喜欢收集天上落下来的亮黄色星星！如果落在某个人的脑袋上，我会更喜欢。但是...但是...我最喜欢的还是星星落在水中变成鱼！那条鱼简直酷毙了，而你又这么牛，快去抓来给我！\"",
		cute_angler_des: "\"我喜欢收集天上落下来的亮黄色星星！它们闪亮亮的！我听说有些掉进森林水里的星星长出鳍和鳃，变成一条星星鱼！会游泳的闪亮亮，太酷了！根据记载，除了森林，它们也有掉进天湖里也有可能变成鱼，能请你给我抓一条回来吗？拜托拜托啦\"",
		catching_place_des: "<<fishing_request_place_lake_fishing_rock>>/<<fishing_request_place_eden_clearing>>"
    },
	"Fish_of_Cthulhu": {
        name: "Fish_of_Cthulhu",
        cn_name: "克苏鲁鱼",
        type: "request",
        obtained: V.Fish_of_Cthulhu,
		catching_place: ["lake_fishing_rock","eden_clearing","eden_clearing_artificial"],
        icon: "fishing/quest_fish/Fish_of_Cthulhu.png",
		angler_des: "\"显然，恶魔眼有时是两栖的。它们不飞，它们游！我想知道有人在浴缸中发现一条时会有怎样的表情！它们总是在同一个区域晃悠。所以，你要钓一条给我！\"",
		cute_angler_des: "\"我听其他人说他们在森林的湖里见过在水里游的恶魔眼，它们不会飞，只会游泳！真可惜不是我遇见的，鉴于它们同类会飞，我有理由怀疑天湖里可能也有繁殖的恶魔眼，能请你帮我抓一条回来吗？我的怪鱼缸空空的！\"",
		catching_place_des: "<<fishing_request_place_lake_fishing_rock>>/<<fishing_request_place_eden_clearing>>"
    },
	"Fishotron": {
        name: "Fishotron",
        cn_name: "骷髅王鱼",
        type: "request",
        obtained: V.Fishotron,
		catching_place: ["wolf_cave_clearing","wolf_cave_clearing_artificial"],
        icon: "fishing/quest_fish/Fishotron.png",
		angler_des: "\"我不知道哪种情况更惨：骷髅鱼还是长了手的骷髅鱼。这条深藏在洞穴中的骷髅王鱼真把我吓了一跳！我认为它和旧下水道的那个老人被同一个恶魔掌控着！我给你两个胆，你去把它抓来给我！\"",
		cute_angler_des: "\"不知道哪种情况更吓人：骷髅鱼还是长手的骷髅鱼。这条深藏在洞穴中的骷髅王鱼真把我吓了一跳！我合理怀疑它和旧下水道的那个老人被同一个恶魔掌控着！能请你把它抓过来吗？或许我们可以一起研究一下它。\"",
		catching_place_des: "<<fishing_request_place_wolf_cave_clearing>>"
    },
	"Guide_Voodoo_Fish": {
        name: "Guide_Voodoo_Fish",
        cn_name: "向导巫毒鱼",
        type: "request",
        obtained: V.Guide_Voodoo_Fish,
		catching_place: ["wolf_cave_clearing","wolf_cave_clearing_artificial"],
        icon: "fishing/quest_fish/Guide_Voodoo_Fish.png",
		angler_des: "\"地狱的恶魔真的很喜欢巫毒娃娃，但我觉得有一个娃娃身藏着特别多的魔法！它变成了一条鱼，还可以对自己施法。我命令你给我带一个来！如果是我的话，我会小心沸腾的熔岩，因为它会把你烧死，这样我就得不到鱼了！\"",
		cute_angler_des: "\"地狱的恶魔真的很喜欢巫毒娃娃，我听说有其中一个娃娃身上被施了太多魔法，变成了一条鱼，还可以对自己施法，将自己传送到了距离地狱有一段高度的地方，你能带一条回来吗？或许这小家伙可以让我们更了解恶魔魔法！\"",
		catching_place_des: "<<fishing_request_place_wolf_cave_clearing>>"
    },
	"Harpyfish": {
        name: "Harpyfish",
        cn_name: "鸟妖鱼",
        type: "request",
        obtained: V.Harpyfish,
		catching_place: ["lake_fishing_rock","eden_clearing","eden_clearing_artificial"],
        icon: "fishing/quest_fish/Harpyfish.png",
		angler_des: "\"我正要在山上的湖畔睡觉时，这条鱼向我俯冲下来。它在飞！它长着一张女人的脸，还有羽毛！我想我叫得比她还大声！嘿，她把我吓成那样，你去让她付出代价！\"",
		cute_angler_des: "\"今天我在森林垂钓的时候，有一条鱼尖啸着向我俯冲下来！没错！一条鱼！尖啸！俯冲！从高空！它长着一张女人的脸，还有羽毛！虽然它只是一头扎进了水里，然后消失不见了，但是真的吓坏我了，我叫得比她还大声！嘿\"",
		catching_place_des: "<<fishing_request_place_lake_fishing_rock>>/<<fishing_request_place_eden_clearing>>"
    },
	"Hungerfish": {
        name: "Hungerfish",
        cn_name: "饿鬼鱼",
        type: "request",
        obtained: V.Hungerfish,
		catching_place: ["bird_tower","bird_tower_artificial"],
        icon: "fishing/quest_fish/Hungerfish.png",
		angler_des: "\"有一个饿死鬼，是由血肉墙变形而成，像小鱼一样，漫无目的地在地狱游泳，很恶心，但我现在就要！\"",
		cute_angler_des: "\"据说有一只饿鬼从血肉之墙的身上脱离了下来，在靠近地狱的洞穴里漫无目的在游泳，很恶心，很危险，但也很稀有！我觉得我打不过它，所以只能拜托你帮我抓过来啦！\"",
		catching_place_des: "<<fishing_request_place_bird_tower>>"
    },
	"Jewelfish": {
        name: "Jewelfish",
        cn_name: "珠宝鱼",
        type: "request",
        obtained: V.Jewelfish,
		catching_place: ["barb_street","bird_tower","bird_tower_artificial"],
        icon: "fishing/quest_fish/Jewelfish.png",
		angler_des: "\"哦哦，我马上就要发大财啦！在洞穴的深处，有一种宝石做的鱼！别问我怎么做，我不知道，我知道的是，这种鱼非常美丽，你去把它抓来给我！\"",
		cute_angler_des: "\"据说在洞穴的深处，有一种宝石做的鱼！别问我怎么出现的，我也不知道，虽然我没见过宝石鱼，但是我见过宝石！它们透亮美丽，那这种宝石做的鱼应该也一样美丽吧！能麻烦你抓一条吗？我打赌一定能让我的鱼缸增色不少！\"",
		catching_place_des: "<<fishing_request_place_barb_street>>/<<fishing_request_place_bird_tower>>"
    },
	"Mirage_Fish": {
        name: "Mirage_Fish",
        cn_name: "幻象鱼",
        type: "request",
        obtained: V.Mirage_Fish,
		catching_place: ["temple_garden","temple_garden_artificial"],
        icon: "fishing/quest_fish/Mirage_Fish.png",
		angler_des: "\"我告诉你，在更深处的神圣之地可以找到一些有趣的小动物！它们闪耀着疯狂的紫色，让我眼花缭乱！这鱼是绝对野生的，因此我希望你能抓一条给我！\"",
		cute_angler_des: "\"你知道吗？在神圣之地的深处可以找到一些有特殊能力的小动物！比如一条会瞬移的鱼！我没开玩笑，它们闪耀着疯狂的紫色，一会变换一次位置，让人眼花缭乱！这种有特殊能力的鱼，只能拜托你啦～\"",
		catching_place_des: "<<fishing_request_place_temple_garden>>"
    },
	"Mudfish": {
        name: "Mudfish",
        cn_name: "泥鱼",
        type: "request",
        obtained: V.Mudfish,
		catching_place: ["farm_woodland"],
        icon: "fishing/quest_fish/Mudfish.png",
		angler_des: "\"经过丛林的水域时，要注意脚下！为什么？不，我不担心你会被食人鱼吃掉。我担心你会踩到我最喜欢的一种鱼，泥鱼！我还希望，你会抓一条来给我当宠物！\"",
		cute_angler_des: "\"经过丛林的水域时，要注意脚下！不，我说的不是食人鱼，它们还比较好发现，我说的是泥鱼！听名字就知道了，它们长得跟泥土一模一样，很滑，还会咬人！能拜托你帮我带一条回来吗？我很好奇它们吃起来是不是也是泥味的。\"",
		catching_place_des: "<<fishing_request_place_farm_woodland>>"
    },
	"Pixiefish": {
        name: "Pixiefish",
        cn_name: "妖精鱼",
        type: "request",
        obtained: V.Pixiefish,
		catching_place: ["temple_garden","temple_garden_artificial"],
        icon: "fishing/quest_fish/Pixiefish.png",
		angler_des: "\"有一种十分十分罕见的妖精，长了太多翅膀，所以完全飞不起来！它在蓝色草地环绕的池中与鱼儿一起游来游去。我的鱼缸需要一盏灯，所以我想让你把那个妖精抓来给我！\"",
		cute_angler_des: "\"有一种十分罕见的妖精，比别的妖精多了一对翅膀，你以为会飞得更快？恰恰相反，它们因为太重完全飞不起来！所以它们只好在蓝草湖中与鱼儿一起游来游去，刚好我的鱼缸晚上有点看不清，如果能有一只妖精照明就太好了，所以能麻烦你帮我把它抓回来吗？先谢谢你啦。\"",
		catching_place_des: "<<fishing_request_place_temple_garden>>"
    },
	"Scarab_Fish": {
        name: "Scarab_Fish",
        cn_name: "甲虫鱼",
        type: "request",
        obtained: V.Scarab_Fish,
		catching_place: ["moor"],
        icon: "fishing/quest_fish/Scarab_Fish.png",
		angler_des: "\"我读过这个古老的故事，讲的是一条长得像魔法金龟子的鱼！说白了就是甲虫！在哪里能找到它？你说呢？咄，在沙漠！别那样看着我...是真的！那里其实是有水的！我想去，但我怕我的眼珠子被秃鹰啄掉。所以……还是你去吧！\"",
		cute_angler_des: "\"我之前读到过一个古老的故事，讲的是一种长得像魔法金龟子的鱼，就是甲虫，现在想想感觉说的应该是真的，能请你帮忙去沙漠的绿洲里找找吗？我...我害怕那些秃鹫，所以只能拜托你了...\"",
		catching_place_des: "<<fishing_request_place_moor>>"
    },
	"Scorpio_Fish": {
        name: "Scorpio_Fish",
        cn_name: "蝎子鱼",
        type: "request",
        obtained: V.Scorpio_Fish,
		catching_place: ["moor"],
        icon: "fishing/quest_fish/Scorpio_Fish.png",
		angler_des: "\"我敢肯定有人告诉过你沙漠里没有水，真是愚蠢至极！大错特错！沙漠里有种叫绿洲的地方，那里就有水！你说有水就会有什么！？没错，有鱼！那些奇怪的鱼会叮你、咬你，用尽各种方法折磨你！这是一种很适合我的宠物，也是一个很适合你的任务！\"",
		cute_angler_des: "\"沙漠里有许多种类的蝎子，听说还有一种生活在水里的蝎子！呃，好吧，我也不知道活在水里还能不能称为蝎子，但是它确实有蝎子的双鳌和蝎尾，而且蝎尾也有毒！所以能拜托你给我带一只吗？我怕秃鹫\"",
		catching_place_des: "<<fishing_request_place_moor>>"
    },
	"Slimefish": {
        name: "Slimefish",
        cn_name: "史莱姆鱼",
        type: "request",
        obtained: V.Slimefish,
		catching_place: ["lake_fishing_rock"],
        icon: "fishing/quest_fish/Slimefish.png",
		angler_des: "\"森林里的史莱姆有点恶心。史莱姆鱼更恶心！我可不想与史莱姆们一起游泳，所以你快去从水里抓一条给我！\"",
		cute_angler_des: "\"森林里的史莱姆有点恶心，黏糊糊的，路过的地方还会被沾上粘液，但是水里的史莱姆鱼更恶心！它们身上的粘液会覆盖整个水面！但是我想到了个好玩的点子，所以能请你给我带一条吗？\"",
		catching_place_des: "<<fishing_request_place_lake_fishing_rock>>"
    },
	"Spiderfish": {
        name: "Spiderfish",
        cn_name: "蜘蛛鱼",
        type: "request",
        obtained: V.Spiderfish,
		catching_place: ["barb_street","bird_tower","bird_tower_artificial"],
        icon: "fishing/quest_fish/Spiderfish.png",
		angler_des: "\"我看到一条八条腿的鱼！不！不可能！你为我钓它，这样到我手里的时候就是死的了！这是我最后一次去这么深的洞穴钓鱼！\"",
		cute_angler_des: "\"我在洞穴深处看到了一条八条腿的鱼！我鱼桶都被吓飞了！能不能请你帮我把它钓起来，要死的！不然我以后都不敢去这么深的洞穴钓鱼了呜呜呜呜！\"",
		catching_place_des: "<<fishing_request_place_barb_street>>/<<fishing_request_place_bird_tower>>"
    },
	"Tropical_Barracuda": {
        name: "Tropical_Barracuda",
        cn_name: "热带梭鱼",
        type: "request",
        obtained: V.Tropical_Barracuda,
		catching_place: ["farm_woodland"],
        icon: "fishing/quest_fish/Tropical_Barracuda.png",
		angler_des: "\"食人鱼和鲨鱼都很丑！太太太丑了！你知道吗？有一种鱼长得很漂亮，但可以把你的脸咬掉。顺便说，我愿意付两铂金币来让这事发生。不过关键是，你要抓一条给我。一定要在你的脸被咬掉之前，把它交给我！\"",
		cute_angler_des: "\"在狠鱼里，食人鱼和鲨鱼都很丑！太丑了！但是你知道吗？有一种狠鱼长得很漂亮！热带梭鱼！非常凶狠！但是非常漂亮！这种鱼我对付不了，只能交给强大的你了，能请你带一条给我吗？抓鱼的时候小心，就像我说的，它们能把人的脸咬掉！\"",
		catching_place_des: "<<fishing_request_place_farm_woodland>>"
    },
	"Unicorn_Fish": {
        name: "Unicorn_Fish",
        cn_name: "独角兽鱼",
        type: "request",
        obtained: V.Unicorn_Fish,
		catching_place: ["temple_garden","temple_garden_artificial"],
        icon: "fishing/quest_fish/Unicorn_Fish.png",
		angler_des: "\"神圣之地真的是一个很美丽的地方，到处都是独角兽和彩虹这些奇幻美好的东西！我说真的！我甚至在湖里看到一条独角兽鱼！你能帮我抓一条回来吗？我想养一条独角兽当宠物！拜托拜托～\"",
		cute_angler_des: "\"独角兽和彩虹都是好东西！它们无处不在，甚至在水中。真的，我居然在圣湖中看到一条独角兽鱼！你的任务就是把它钓起来，我会拿它当宠物！\"",
		catching_place_des: "<<fishing_request_place_temple_garden>>"
    },
	"Wyverntail": {
        name: "Wyverntail",
        cn_name: "飞龙尾",
        type: "request",
        obtained: V.Wyverntail,
		catching_place: ["eden_clearing","eden_clearing_artificial"],
        icon: "fishing/quest_fish/Wyverntail.png",
		angler_des: "\"我知道一些你...你不知道的事！好吧，我告诉你，有一只可怕的怪物在星空中飞来飞去！这不是我自己编出来的！它叫飞龙！可是，可是，你已经知道了，是不是？你不知道的是，它们的出生和成长历程和蝌蚪一样！所以，它们实际上像……像青蛙！开始行动，给我抓一只！\"",
		cute_angler_des: "\"你这样的博学多识的人一定知道，天上有一种强大的生物在云海游弋，对，我说的就是飞龙，但是你知道他们是怎么成长的吗？你不知道？太好了！我终于知道些你不知道的东西了！咳，他们的成长历程和青蛙一样，幼年时没有脚，不会飞，随着成长逐渐长出脚，成年之后才会飞！所以它们其实是太空青蛙！嗯，作为告诉你消息的交换，麻烦你帮我钓一条幼崽吧！我想观察它们怎么长的！\"",
		catching_place_des: "<<fishing_request_place_eden_clearing>>"
    },
	"Zombie_Fish": {
        name: "Zombie_Fish",
        cn_name: "僵尸鱼",
        type: "request",
        obtained: V.Zombie_Fish,
		catching_place: ["lake_fishing_rock"],
        icon: "fishing/quest_fish/Zombie_Fish.png",
		angler_des: "\"你相信吗？！我晚上在森林里抓到一条已经死了的鱼！然后，它想吃我！我把它扔掉，然后扭头就跑！现在，我要把它钉在别人的梳妆台上，看看会发生什么，所以你去把那条鱼给我抓回来，好吗？！\"",
		cute_angler_des: "\"你肯定猜不到我昨天遇到了什么了！昨晚我在在森林里抓到一条已经死了的鱼，或者说我以为已经死了的鱼，然后，它突然活过来想吃我！吓得我反手把它扔得老远，然后扭头就跑！但是我冷静了下来，突然很想知道为什么死鱼会动，或者说它到底死没有，能麻烦你帮我把它带回来吗？\"",
		catching_place_des: "<<fishing_request_place_lake_fishing_rock>>"
    },
	"Brimlish": {
        name: "Brimlish",
        cn_name: "小硫火鱼",
        type: "request",
        obtained: V.Brimlish,
		catching_place: ["trash"],
        icon: "fishing/quest_fish/Brimlish.png",
		angler_des: "\"硫磺火元素的孩子们掉进了地狱的岩浆中。据说他们都化作了鱼，现在我要你给我搞到一条，这样我新准备的岩浆鱼缸就能派上用场了！\"",
		cute_angler_des: "\"硫磺火元素的孩子们掉进了地狱的岩浆中，据说他们都化作了鱼...麻烦你帮我带一条回来吧，我相信在我新准备的岩浆鱼缸里，它们会生活地更好！\"",
		catching_place_des: "<<fishing_request_place_trash>>"
    },
	"Eutrophic_Sandfish": {
        name: "Eutrophic_Sandfish",
        cn_name: "富养沙地鱼",
        type: "request",
        obtained: V.Eutrophic_Sandfish,
		catching_place: ["bird_tower","bird_tower_artificial"],
        icon: "fishing/quest_fish/Eutrophic_Sandfish.png",
		angler_des: "\"你知道沙漠里的蜥蜴往地下钻的太深会发生什么吗？我知道，它们超酷的！可惜它们太滑了我没抓住。你，现在就去把它抓来，这样我就有新的宠物了！\"",
		cute_angler_des: "\"你知道沙漠里的蜥蜴往地下钻的太深会发生什么吗？我知道，它们超酷的！可惜它们太滑了我没抓住。如果你能帮我抓一条来的话，我就可以有新的宠物了！\"",
		catching_place_des: "<<fishing_request_place_bird_tower>>"
    },
	"Serpentuna": {
        name: "Serpentuna",
        cn_name: "巨蛇金枪鱼",
        type: "request",
        obtained: V.Serpentuna,
		catching_place: ["bird_tower","bird_tower_artificial"],
        icon: "fishing/quest_fish/Serpentuna.png",
		angler_des: "\"海蛇其实还是很漂亮的，只要你不贸然侵入他们的领地。现在我命令你给我抓一条来作为给我的惊喜，限你一天之内完成！\"",
		cute_angler_des: "\"海蛇其实还是很漂亮的，只要你不贸然侵入他们的领地。如果你今天抓了一条的话，我想我们可以一起研究一下这种鱼。\"",
		catching_place_des: "<<fishing_request_place_bird_tower>>"
    },
	"Slurpfish": {
        name: "Slurpfish",
        cn_name: "饮食者鱼",
        type: "request",
        obtained: V.Slurpfish,
		catching_place: ["trash"],
        icon: "fishing/quest_fish/Slurpfish.png",
		angler_des: "\"我知道我知道，要你去臭气熏天的垃圾场里钓鱼简直是不讲道理。我正准备这样做。还不快去？鱼可不会自己上钩！\"",
		cute_angler_des: "\"我知道，在臭气熏天的垃圾场里钓鱼是一种折磨。但这种鱼正是那些臭味的罪魁祸首之一！我想我们可以做些什么。\"",
		catching_place_des: "<<fishing_request_place_trash>>"
    },
	"Surf_Clam": {
        name: "Surf_Clam",
        cn_name: "碎浪蛤",
        type: "request",
        obtained: V.Surf_Clam,
		catching_place: ["bird_tower","bird_tower_artificial"],
        icon: "fishing/quest_fish/Surf_Clam.png",
		angler_des: "\"你知道蛤很美味吗？流言说荒原某处住着一大群蛤，光是说说就觉得饿了。给我抓一只来，让我练习练习烹饪技巧，也顺便解解馋。\"",
		cute_angler_des: "\"你知道蛤很美味吗？流言说荒原某处住着一大群蛤，光是说说就觉得饿了。我需要这样一只蛤来让我练习练习烹饪技巧，也顺便解解馋。你会帮我品鉴一下的，对吧？\"",
		catching_place_des: "<<fishing_request_place_bird_tower>>"
    },
	"Bloody_Manowar": {
        name: "Bloody_Manowar",
        cn_name: "血腥战神",
        type: "request",
        obtained: V.Bloody_Manowar,
		catching_place: ["lake_fishing_rock"],
        icon: "fishing/quest_fish/Bloody_Manowar.png",
		angler_des: "\"噢！别靠近我！我被一条血水母蜇了！怕你孤陋寡闻不知道血水母是什么，所以我告诉你，它是整个 <<if $saveName isnot \"\">>$saveName<<else>>$saveId<</if>> 中最凶险的水母！如果你敢，去那个血月笼罩下的森林湖，把它抓来！\"",
		cute_angler_des: "\"嘶...哦，我没事，谢谢关心，这只是被一只血腥战神蜇了，听名字就知道，它们是整个 <<if $saveName isnot \"\">>$saveName<<else>>$saveId<</if>> 中最凶狠的水母，但也是最鲜美的！如果可以的话，我想请你帮我抓一条来，让我们一起好好料理它们一顿！对，我说的是吃的那种料理。\"",
		catching_place_des: "<<fishing_request_place_lake_fishing_rock>>，血月期间"
    }
}

function getAllRequestFishList() {
	let all_request_fish_list = Object.keys(setup.terraRequestFish);
	return all_request_fish_list;
}
window.getAllRequestFishList = getAllRequestFishList

function getRequestFishObtained() {
	for (let request in setup.terraRequestFish) {
        setup.terraRequestFish[request].obtained = V[request];
    }
    let request_fish_obtained = Object.keys(setup.terraRequestFish);
    return request_fish_obtained.filter(request => {
        return setup.terraRequestFish[request].obtained === true;
    });
}
window.getRequestFishObtained = getRequestFishObtained;