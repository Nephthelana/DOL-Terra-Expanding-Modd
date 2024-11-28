setup.terraTrash = {
	"Old_Shoe": {
        name: "Old_Shoe",
        cn_name: "旧鞋",
        type: "trash",
        amount: V.Old_Shoe || 0,
        icon: "fishing/fish/Old_Shoe.png",
    },
	"Seaweed_junk": {
        name: "Seaweed_junk",
        cn_name: "海草",
        type: "trash",
        amount: V.Seaweed_junk || 0,
        icon: "fishing/fish/Seaweed_junk.png",
    },
	"Tin_Can": {
        name: "Tin_Can",
        cn_name: "锡罐",
        type: "trash",
        amount: V.Tin_Can || 0,
        icon: "fishing/fish/Tin_Can.png",
    },
	"Joja_Cola": {
        name: "Joja_Cola",
        cn_name: "Joja可乐",
        type: "trash",
        amount: V.Joja_Cola || 0,
        icon: "fishing/fish/Joja_Cola.png",
    },
}

function getAllTrashList() {
    let all_trash_list = Object.keys(setup.terraTrash);
	return all_trash_list;
}
window.getAllTrashList = getAllTrashList;

function getTrashObtainedList() {
	for (let trash in setup.terraTrash) {
        setup.terraTrash[trash].amount = V[trash] || 0;
    }
    let trash_obtained = Object.keys(setup.terraTrash);
    return trash_obtained.filter(trash => {
        return setup.terraTrash[trash].amount > 0;
    });
}
window.getTrashObtainedList = getTrashObtainedList;