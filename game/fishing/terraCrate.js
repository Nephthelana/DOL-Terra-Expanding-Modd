setup.terraCrate = {
	"Golden_Crate": {
        name: "Golden_Crate",
        cn_name: "金匣",
        type: "crate",
        amount: V.Golden_Crate || 0,
        icon: "fishing/crates/Golden_Crate.png",
		unload: "<<Golden_Crate_unload>>"
    },
	"Iron_Crate": {
        name: "Iron_Crate",
        cn_name: "铁匣",
        type: "crate",
        amount: V.Iron_Crate || 0,
        icon: "fishing/crates/Iron_Crate.png",
		unload: "<<Iron_Crate_unload>>"
    },
	"Wooden_Crate": {
        name: "Wooden_Crate",
        cn_name: "木匣",
        type: "crate",
        amount: V.Wooden_Crate || 0,
        icon: "fishing/crates/Wooden_Crate.png",
		unload: "<<Wooden_Crate_unload>>"
    },
	"Ocean_Crate": {
        name: "Ocean_Crate",
        cn_name: "海洋匣",
        type: "crate",
        amount: V.Ocean_Crate || 0,
        icon: "fishing/crates/Ocean_Crate.png",
		unload: "<<Ocean_Crate_unload>>"
    },
	"Oasis_Crate": {
        name: "Oasis_Crate",
        cn_name: "绿洲匣",
        type: "crate",
        amount: V.Oasis_Crate || 0,
        icon: "fishing/crates/Oasis_Crate.png",
		unload: "<<Oasis_Crate_unload>>"
    },
	"Jungle_Crate": {
        name: "Jungle_Crate",
        cn_name: "丛林匣",
        type: "crate",
        amount: V.Jungle_Crate || 0,
        icon: "fishing/crates/Jungle_Crate.png",
		unload: "<<Jungle_Crate_unload>>"
    },
	"Hallowed_Crate": {
        name: "Hallowed_Crate",
        cn_name: "神圣匣",
        type: "crate",
        amount: V.Hallowed_Crate || 0,
        icon: "fishing/crates/Hallowed_Crate.png",
		unload: "<<Hallowed_Crate_unload>>"
    },
	"Sky_Crate": {
        name: "Sky_Crate",
        cn_name: "天空匣",
        type: "crate",
        amount: V.Sky_Crate || 0,
        icon: "fishing/crates/Sky_Crate.png",
		unload: "<<Sky_Crate_unload>>"
    },
	"Sunken_Crate": {
        name: "Sunken_Crate",
        cn_name: "沉沦匣",
        type: "crate",
        amount: V.Sunken_Crate || 0,
        icon: "fishing/crates/Sunken_Crate.png",
		unload: "<<Sunken_Crate_unload>>"
    },
	"Sulphurous_Crate": {
        name: "Sulphurous_Crate",
        cn_name: "硫海匣",
        type: "crate",
        amount: V.Sulphurous_Crate || 0,
        icon: "fishing/crates/Sulphurous_Crate.png",
		unload: "<<Sulphurous_Crate_unload>>"
    },
	"Brimstone_Crate": {
        name: "Brimstone_Crate",
        cn_name: "硫火匣",
        type: "crate",
        amount: V.Brimstone_Crate || 0,
        icon: "fishing/crates/Brimstone_Crate.png",
		unload: "<<Brimstone_Crate_unload>>"
    },
	"Oyster": {
        name: "Oyster",
        cn_name: "牡蛎",
        type: "crate",
        amount: V.Oyster || 0,
        icon: "fishing/crates/Oyster.png",
		unload: "<<Oyster_unload>>"
    },
}

function getAllCrateList() {
	for (let crate in setup.terraCrate) {
        setup.terraCrate[crate].amount = V[crate] || 0;
    }
    let all_crate_list = Object.keys(setup.terraCrate);
	return all_crate_list;
}
window.getAllCrateList = getAllCrateList

function getCrateObtainedList() {
	for (let crate in setup.terraCrate) {
        setup.terraCrate[crate].amount = V[crate] || 0;
    }
    let crate_obtained = Object.keys(setup.terraCrate);
    return crate_obtained.filter(crate => {
        return setup.terraCrate[crate].amount > 0;
    });
}
window.getCrateObtainedList = getCrateObtainedList;