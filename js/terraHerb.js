function herbInteract(herbId) {
	const harvestType = T.plotInfo.harvest_type;
	const herbInfo = T.plotInfo.plots[herbId];
	// 种植盆在这里的功能不变，即草药种植在种植盆内时，再生法杖只能收获开花期的草药
	// 环境保护指南在这里的功能修改为，防止在无法获得种子的情况下收获草药
	if (herbInfo) { // 如果该格子是有种植草药的，则被认为在尝试进行收获，根据地块种类、草药阶段、环境保护指南、收获方式决定交互的结果
		if (T.plotInfo.planter_box) { // 判断该草药是否种植在种植盆内
			switch (herbInfo.stage) {
				case "blossom": // 种植盆内的开花期植株，无论何种情况可以直接收获
					herbHarvest(herbId);
					break;
				case "mature": // 种植盆内的成熟期植株，只能关闭环境保护指南后手动收获
					if (harvestType === "byHand" && !V.options.Environmental_Preservation) {
						herbHarvest(herbId);
						break;
					}
				// 种植盆内的发芽期植株，无法收获也不能破坏
			}
		} else {
			switch (herbInfo.stage) {
				case "blossom": //物块上的开花期植株，无论何种情况可以直接收获
					herbHarvest(herbId);
					break;
				case "mature": // 物块上的成熟期植株，只能关闭环境保护指南，或使用再生法杖收获
					if (!V.options.Environmental_Preservation || harvestType === "staff") {
						herbHarvest(herbId);
						break;
					}
				case "sprout": // 物块上的发芽植株，在环境保护指南未开启时收获会直接破坏，无产物
					if (!V.options.Environmental_Preservation) {
						delete T.plotInfo.plots[herbId];
						break;
					}
			}
		}
	} else {
		// 如果该格子没有种植草药，则被认为在尝试进行种植
		const bedHerb = setup.terraHerbBed[T.plotInfo.bed].herb_name;
		if (V[bedHerb + "_Seed"] > 0) {
			T.plotInfo.plots[herbId] = {
				name: bedHerb,
				stage: "sprout",
			}
			V[bedHerb + "_Seed"] -= 1;
		}
	}
	// 交互完成后更新页面中的一些内容：草药数量统计、背包中的草药及其种子数量、地块中的草药图像
	Wikifier.wikifyEval("<<herbDataUpdate>>");
	Wikifier.wikifyEval("<<replace #herbPlot" + herbId + ">><<herbPlotIcon " + herbId + ">><</replace>>");
	Wikifier.wikifyEval("<<replace #plotPlanterInfo>><<plotPlanterInfo>><</replace>>");
}
window.herbInteract = herbInteract;

function herbHarvest(herbId) {
	const harvestType = T.plotInfo.harvest_type;
	const herbInfo = T.plotInfo.plots[herbId];
	if (harvestType === "staff") {
		T.harvest_herb = random(1,2);
		T.harvest_seed = random(1,5);
	} else {
		T.harvest_herb = 1;
		T.harvest_seed = herbInfo.stage === "blossom" ? random(1,3) : 0;
	}
	V[herbInfo.name] += T.harvest_herb;
	V[herbInfo.name + "_Seed"] += T.harvest_seed;
	delete T.plotInfo.plots[herbId];
	Wikifier.wikifyEval("<<replace #plotPlanterInfo>><<plotPlanterInfo>><</replace>>");
}
window.herbHarvest = herbHarvest;

function terraAutoHarvest () {
	// 智能一键收获
	const harvestType = T.plotInfo.harvest_type;
	T.harvest_herb = 0;
	T.harvest_seed = 0;
	Object.keys(T.plotInfo.plots).forEach(id => {
		const herbStage = T.plotInfo.plots[id].stage;
		// 根据地块种类与收获方式决定被收获的草药以及产出
		if (T.plotInfo.planter_box) {
			if (herbStage === 'blossom') {
				T.harvest_herb += harvestType === "staff" ? random(1,2) : 1;
				T.harvest_seed += harvestType === "staff" ? random(1,5) : random(1,3);
				delete T.plotInfo.plots[id];
				Wikifier.wikifyEval("<<replace #herbPlot" + id + ">><<herbPlotIcon " + id + ">><</replace>>");
			}
		} else {
			if (harvestType === "staff") {
				if (["blossom","mature"].includes(herbStage)) {
					T.harvest_herb += random(1,2);
					T.harvest_seed += random(1,5);
					delete T.plotInfo.plots[id];
					Wikifier.wikifyEval("<<replace #herbPlot" + id + ">><<herbPlotIcon " + id + ">><</replace>>");
				}
			} else {
				if (herbStage === "blossom") {
					T.harvest_herb += 1;
					T.harvest_seed += random(1,3);
					delete T.plotInfo.plots[id];
					Wikifier.wikifyEval("<<replace #herbPlot" + id + ">><<herbPlotIcon " + id + ">><</replace>>");
				}
			}
		}
	})
	V[T.bedInfo.herb_name] += T.harvest_herb;
	V[T.bedInfo.herb_name + "_Seed"] += T.harvest_seed;
	Wikifier.wikifyEval("<<herbDataUpdate>>");
	Wikifier.wikifyEval("<<replace #plotPlanterInfo>><<plotPlanterInfo>><</replace>>");
}
window.terraAutoHarvest = terraAutoHarvest;

function terraAutoPlant () {
	// 智能一键种植
	if (V[T.bedInfo.herb_name + "_Seed"] > 0) {
		for (let id=1; V[T.bedInfo.herb_name + "_Seed"] > 0 && id <= T.plotArea; id++) {
			if (!T.plotInfo.plots[id]) {
				T.plotInfo.plots[id] = {
					name: T.bedInfo.herb_name,
					stage: "sprout",
				};
				V[T.bedInfo.herb_name + "_Seed"] -= 1;
				Wikifier.wikifyEval("<<replace #herbPlot" + id + ">><<herbPlotIcon " + id + ">><</replace>>");
			}
		}
		Wikifier.wikifyEval("<<herbDataUpdate>>");
		Wikifier.wikifyEval("<<replace #plotPlanterInfo>><<plotPlanterInfo>><</replace>>");
	}
}
window.terraAutoPlant = terraAutoPlant;