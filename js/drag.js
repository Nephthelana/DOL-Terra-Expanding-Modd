//Drag
//取消原版不允许被放置的属性
function allowDropTEM(ev) {
	ev.preventDefault();
}
window.allowDropTEM = allowDropTEM;

//记录被拖拽的div的id
function dragTEM(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}
window.dragTEM = dragTEM;

//拖拽入饰品栏时，将饰品加入饰品栏中
function dropAccessoriesSlots(ev) {
	ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
	if (getAllAccessoriesList().includes(data) && V.terra_accessories_slots.length < 6 && !T.accessory_equipped_type.includes(setup.terraAccessories[data].type)) {
		V.terra_accessories_slots.pushUnique(data);
		V.terra_vanity_accessories_slots.delete(data);
		Wikifier.wikifyEval("<<UpdateAccessoriesSlots>>");
		Wikifier.wikifyEval("<<UpdateVanityAccessoriesSlots>>");
		Wikifier.wikifyEval("<<UpdateAccessoryList>>");
		Wikifier.wikifyEval("<<vanityAccessoryTransformation>>");
		Wikifier.wikifyEval("<<updatesidebarimg>>");
	}
}
window.dropAccessoriesSlots = dropAccessoriesSlots;

//拖拽入时装栏时，将饰品加入时装栏中
function dropVanityAccessoriesSlots(ev) {
	ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
	if (getAllAccessoriesList().includes(data) && V.terra_vanity_accessories_slots.length < 6) {
		V.terra_vanity_accessories_slots.pushUnique(data);
		V.terra_accessories_slots.delete(data);
		Wikifier.wikifyEval("<<UpdateAccessoriesSlots>>");
		Wikifier.wikifyEval("<<UpdateVanityAccessoriesSlots>>");
		Wikifier.wikifyEval("<<UpdateAccessoryList>>");
		Wikifier.wikifyEval("<<vanityAccessoryTransformation>>");
		Wikifier.wikifyEval("<<updatesidebarimg>>");
	}
}
window.dropVanityAccessoriesSlots = dropVanityAccessoriesSlots;

//拖拽入饰品列表时，从饰品栏/时装栏中卸下饰品
function dropAccessoryList(ev) {
	ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
	if (getAllAccessoriesList().includes(data)) {
		V.terra_accessories_slots.delete(data);
		V.terra_vanity_accessories_slots.delete(data);
		Wikifier.wikifyEval("<<UpdateAccessoriesSlots>>");
		Wikifier.wikifyEval("<<UpdateVanityAccessoriesSlots>>");
		Wikifier.wikifyEval("<<UpdateAccessoryList>>");
		Wikifier.wikifyEval("<<vanityAccessoryTransformation>>");
		Wikifier.wikifyEval("<<updatesidebarimg>>");
	}
}
window.dropAccessoryList = dropAccessoryList;

//饰品栏内饰品互换位置
function dropAccessoriesSwitch(ev) {
	ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
	if (getAllAccessoriesList().includes(data)) {
		if (V.terra_accessories_slots.includes(data)) {
			T.targetId=ev.currentTarget.id;
			var index1=findIndexTEM(V.terra_accessories_slots,data);
			var index2=findIndexTEM(V.terra_accessories_slots,T.targetId);
			T.temp=V.terra_accessories_slots[index1];
			V.terra_accessories_slots[index1]=V.terra_accessories_slots[index2];
			V.terra_accessories_slots[index2]=T.temp;
			Wikifier.wikifyEval("<<UpdateAccessoriesSlots>>");
		} else if (V.terra_accessories_slots.length < 6 && !T.accessory_equipped_type.includes(setup.terraAccessories[data].type)) {
			V.terra_accessories_slots.pushUnique(data);
			V.terra_vanity_accessories_slots.delete(data);
			Wikifier.wikifyEval("<<UpdateAccessoriesSlots>>");
			Wikifier.wikifyEval("<<UpdateVanityAccessoriesSlots>>");
			Wikifier.wikifyEval("<<UpdateAccessoryList>>");
		}
	}
}
window.dropAccessoriesSwitch = dropAccessoriesSwitch;

//时装栏内饰品互换位置
function dropVanityAccessoriesSwitch(ev) {
	ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
	if (getAllAccessoriesList().includes(data)) {
		if (V.terra_vanity_accessories_slots.includes(data)) {
			T.targetId=ev.currentTarget.id;
			var index1=findIndexTEM(V.terra_vanity_accessories_slots,data);
			var index2=findIndexTEM(V.terra_vanity_accessories_slots,T.targetId);
			T.temp=V.terra_vanity_accessories_slots[index1];
			V.terra_vanity_accessories_slots[index1]=V.terra_vanity_accessories_slots[index2];
			V.terra_vanity_accessories_slots[index2]=T.temp;
			Wikifier.wikifyEval("<<UpdateVanityAccessoriesSlots>>");
		} else if (V.terra_vanity_accessories_slots.length < 6)  {
			V.terra_vanity_accessories_slots.pushUnique(data);
			V.terra_accessories_slots.delete(data);
			Wikifier.wikifyEval("<<UpdateAccessoriesSlots>>");
			Wikifier.wikifyEval("<<UpdateVanityAccessoriesSlots>>");
			Wikifier.wikifyEval("<<UpdateAccessoryList>>");
		}
	}
}
window.dropVanityAccessoriesSwitch = dropVanityAccessoriesSwitch;

//拖拽入盔甲栏时，将盔甲加入盔甲栏中
function dropArmorSlots(ev) {
	ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
	if (getAllArmorList().includes(data)) {
		var armor = setup.terraArmor[data];
		switch (armor.type) {
			case "helmet":
				V.terra_armor_slots[0] = data;
				break;
			case "shirt":
				V.terra_armor_slots[1] = data;
				break;
			case "pants":
				V.terra_armor_slots[2] = data;
				break;
		}
		Wikifier.wikifyEval("<<UpdateArmorSlots>>");
		Wikifier.wikifyEval("<<UpdateArmorList>>");
	}
}
window.dropArmorSlots = dropArmorSlots;

//拖拽入盔甲列表时，从盔甲栏中卸下盔甲
function dropArmorList(ev) {
	ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
	if (getAllArmorList().includes(data)) {
		var armor = setup.terraArmor[data];
		switch (armor.type) {
			case "helmet":
				V.terra_armor_slots[0] = "Armor_Helmet";
				break;
			case "shirt":
				V.terra_armor_slots[1] = "Armor_Shirt";
				break;
			case "pants":
				V.terra_armor_slots[2] = "Armor_Pants";
				break;
		}
		Wikifier.wikifyEval("<<UpdateArmorSlots>>");
		Wikifier.wikifyEval("<<UpdateArmorList>>");
	}
}
window.dropArmorList = dropArmorList;

//宠物列表内宠物互换位置
function dropPetListSwitch(ev) {
	ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
	if (V.pet_list.includes(data)) {
		T.targetId=ev.currentTarget.id;
		var index1=findIndexTEM(V.pet_list,data);
		var index2=findIndexTEM(V.pet_list,T.targetId);
		T.temp=V.pet_list[index1];
		V.pet_list[index1]=V.pet_list[index2];
		V.pet_list[index2]=T.temp;
		Wikifier.wikifyEval("<<UpdatePetList>>");
		window.modImgLoaderHooker.replaceAllImageInHtmlElement(document.body);
	}
}
window.dropPetListSwitch = dropPetListSwitch;

//调取List中NPC名称的序号用于互换次序
function findIndexTEM(arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1; // 如果元素不存在于数组中，返回-1
}
window.findIndexTEM = findIndexTEM;

//在某些浏览器中防止拖拽出现新的标签页
document.body.ondrop = function (ev) {
	ev.preventDefault()
	ev.stopPropagation()
  }