function characteristicBonusUI() {
	const boots = V.terra_accessories_slots.find(accessory => setup.terraAccessories[accessory].type === "boots");
	if (boots) {
		T.athleticsConfig.modifier = Math.floor(T.athleticsConfig.modifier * 1.1);
		T.athleticsConfig.modTypes.good.pushUnique(setup.terraAccessories[boots].cn_name);
	}
	if (V.terra_accessories_slots.includes("Inner_Tube")) {
		T.swimmingConfig.modifier = Math.floor(T.swimmingConfig.modifier * 1.05);
		T.swimmingConfig.modTypes.good.pushUnique("浮游圈");
	}
	if (V.terra_accessories_slots.includes("Lucky_Horseshoe")) {
		T.skulduggeryConfig.modifier = Math.floor(T.skulduggeryConfig.modifier * 1.05);
		T.skulduggeryConfig.modTypes.good.pushUnique("幸运马掌");
		T.dancingConfig.modifier = Math.floor(T.dancingConfig.modifier * 1.05);
		T.dancingConfig.modTypes.good.pushUnique("幸运马掌");
		T.swimmingConfig.modifier = Math.floor(T.swimmingConfig.modifier * 1.05);
		T.swimmingConfig.modTypes.good.pushUnique("幸运马掌");
		T.athleticsConfig.modifier = Math.floor(T.athleticsConfig.modifier * 1.05);
		T.athleticsConfig.modTypes.good.pushUnique("幸运马掌");
		T.tendingConfig.modifier = Math.floor(T.tendingConfig.modifier * 1.05);
		T.tendingConfig.modTypes.good.pushUnique("幸运马掌");
		T.housekeepingConfig.modifier = Math.floor(T.housekeepingConfig.modifier * 1.05);
		T.housekeepingConfig.modTypes.good.pushUnique("幸运马掌");
	}
}
window.characteristicBonusUI = characteristicBonusUI;