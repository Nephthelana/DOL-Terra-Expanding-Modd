// widget生产器
const terraEffect = {
	create(name, fn) {
		if (this[name] === undefined && !Macro.get(name)) {
			DefineMacro(name, function () {
				this.output.append(fn(...this.args));
			});
			this[name] = fn;
		} else {
			console.error(`A function with the name "${name}" already exists in statDisplay.`);
		}
	}
}
window.terraEffect = terraEffect;

// 创建名为“terraEffect”的widget
terraEffect.create("terraEffect", () => {
	const fragment = document.createDocumentFragment();

	const sWikifier = text => {fragment.append(Wikifier.wikifyEval(text));};

	if (V.Traveling_Merchant_arrive_message) {
		sWikifier('<span class=\"teal\"><i>旅商已到达梅尔街的码头！</i></span><br><br>');
		delete V.Traveling_Merchant_arrive_message;
	}

	if (V.Traveling_Merchant_leave_message) {
		sWikifier('<span class=\"blue\"><i>旅商已离开！</i></span><br><br>');
		delete V.Traveling_Merchant_leave_message;
	}

	if (V.Angel_Halo_nessage) {
		sWikifier('<<icon "accessories/Angel_Halo.png">><span class="gold"><i>天使光环牢牢束缚住了你体内因纯洁不足而试图逸散的天使气息。</i></span><br><br>');
		delete V.Angel_Halo_nessage;
	}

	if (V.Demon_Horns_nessage) {
		sWikifier('<<icon "accessories/Demon_Horns.png">><span class="gold"><i>恶魔角抵抗着你体内太多的纯洁，阻止了你体内恶魔之力的流失。</i></span><br><br>');
		delete V.Demon_Horns_nessage;
	}

	return fragment;
});