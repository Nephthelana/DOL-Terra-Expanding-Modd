$(document).on("keyup", function (e){
	/* 未选中输入框	*/
	if ($("input:focus").length === 0) {
		if(V.terraHotKeys) {
			if(!V.options.voidBagKey)V.options.voidBagKey = "v";
			if(!V.options.equipmentKey)V.options.equipmentKey = "e";
			if(!V.options.toolKey)V.options.toolKey = "t";
		} else {
			delete V.options.voidBagKey;
			delete V.options.equipmentKey;
			delete V.options.toolKey;
		}
		/* 虚空袋 */
		if (e.key == V.options.voidBagKey) {
			e.preventDefault();
			if(T.currentOverlay == "voidBagOverlay"){
				closeOverlay();
			}else{
				T.buttons.toggle();
				updateOptions();
				T.currentOverlay = "voidBagOverlay";
				$("#customOverlay").removeClass("hidden").parent().removeClass("hidden");
				$("#customOverlay").attr("data-overlay", T.currentOverlay);
				Wikifier.wikifyEval("<<replace #customOverlayTitle>><<titleFishingharvests>><</replace>><<replace #customOverlayContent>><<fishingharvests>><</replace>>");
			}
			return false;
		}
		/* 装备	*/
		if (e.key == V.options.equipmentKey) {
			e.preventDefault();
			if(T.currentOverlay == "terraExpandEquipmentOverlay"){
				closeOverlay();
			}else{
				T.buttons.toggle();
				updateOptions();
				T.currentOverlay = "terraExpandEquipmentOverlay";
				$("#customOverlay").removeClass("hidden").parent().removeClass("hidden");
				$("#customOverlay").attr("data-overlay", T.currentOverlay);
				Wikifier.wikifyEval("<<replace #customOverlayTitle>><<terraExpandEquipmentTitle>><</replace>><<replace #customOverlayContent>><<terraExpandEquipment>><</replace>>");
			}
			return false;
		}
		/* 工具	*/
		if (e.key == V.options.toolKey) {
			e.preventDefault();
			if(T.currentOverlay == "terraExpandToolOverlay"){
				closeOverlay();
			}else{
				T.buttons.toggle();
				updateOptions();
				T.currentOverlay = "terraExpandToolOverlay";
				$("#customOverlay").removeClass("hidden").parent().removeClass("hidden");
				$("#customOverlay").attr("data-overlay", T.currentOverlay);
				Wikifier.wikifyEval("<<replace #customOverlayTitle>><<terraExpandToolTitle>><</replace>><<replace #customOverlayContent>><<terraExpandTool>><</replace>>");
			}
			return false;
		}
	}
});