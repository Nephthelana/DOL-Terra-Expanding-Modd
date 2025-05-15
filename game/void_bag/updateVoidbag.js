// 抄自原版function updateOptions()，用于在切换鱼竿后更新页面(但这样并不能更新侧边栏)
function updateVoidbag() {
	if (["terraExpandToolOverlay","terraExpandEquipmentOverlay"].includes(T.currentOverlay) && T.optionsRefresh && V.passage !== "Start") {
		updatehistorycontrols();
		const optionsData = clone(V.options);
		const tmpButtons = T.buttons;
		const tmpKey = T.key;

		if (!State.restore(true)) return; // don't do anything if state couldn't be restored
		V.options = optionsData;
		State.show();

		T.key = tmpKey;
		T.buttons = tmpButtons;
		T.buttons.setupTabs();
		if (T.key !== "options") {
			T.buttons.setActive(T.buttons.activeTab);
		}
		Weather.Observables.checkForUpdate();
	}
}
window.updateVoidbag = updateVoidbag;