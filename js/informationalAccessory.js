// 放在weekPassed()里
function terraAlarmResetWeekly() {
	for (let i in Object.keys(V.terraAlarmList)) {
		let alarm = V.terraAlarmList[Object.keys(V.terraAlarmList)[i]];
		for (let alarmDaysIndex = 0; alarmDaysIndex < alarm.days.length; alarmDaysIndex++) {
			alarm.phase[alarmDaysIndex] = alarm.phase[alarmDaysIndex] === "alarmed" ? "alarmPre" : ["alarming","alarmPre"].includes(alarm.phase[alarmDaysIndex]) ? "alarmingPassedAWeek" : alarm.phase[alarmDaysIndex];
		}
	}
}
window.terraAlarmResetWeekly = terraAlarmResetWeekly;

// 新增闹钟，最烧脑的一集
function alarmAdd() {
	// 将输入的新闹钟的信息记录下来
	T.newAlarm.days = [];
	if (T.newAlarm.type === "oneTime") {
		T.newAlarm.days.pushUnique(T.newAlarm.weekday);
	} else {
		for (const ads of ["1","2","3","4","5","6","7"]) {
			if (T.newAlarm["weekday" + ads]) {
				T.newAlarm.days.pushUnique(ads);
			}
		}
		if (T.newAlarm.days.length <= 0) {
			Wikifier.wikifyEval("<<replace #alarmSettingHint>><span class='red'>至少选择一个日期！</span><</replace>>");
			return;
		}
	}
	T.newAlarm.hour = (V.options.timestyle === "ampm" && T.newAlarm.AmPm === "pm") ? (T.newAlarm.hourTemp + 12) : T.newAlarm.hourTemp;

	if (Object.keys(V.terraAlarmList).length <= 0) { // 闹钟列表中还没有闹钟时，简单地把新闹钟作为第一个即可
		alarmAdding(1);
	} else {
		for (let an = 1; an <= Object.keys(V.terraAlarmList).length; an++) {
			let alarm = V.terraAlarmList["No" + an]; // 遍历闹钟列表中的闹钟
			// 如果新闹钟的时间点位于闹钟列表的中间，将对应位置后面的闹钟往后挪一位，然后加入新闹钟
			if (T.newAlarm.hour < alarm.hour || (T.newAlarm.hour === alarm.hour && T.newAlarm.minute <= alarm.minute)) {
				for (let t = Object.keys(V.terraAlarmList).length; t >= an; t--) {
					V.terraAlarmList["No" + (t+1)] = V.terraAlarmList["No" + t];
				}
				alarmAdding(an);
				return;
			} else if (an >= Object.keys(V.terraAlarmList).length) { // 如果新闹钟的时间点位于闹钟列表的末尾，在闹钟列表最后一位加上新闹钟
				alarmAdding(an + 1);
				return;
			}
		}
	}
}
window.alarmAdd = alarmAdd;

function alarmAdding(ind) {
	V.terraAlarmList["No" + ind] = {
		type: T.newAlarm.type,
		days: T.newAlarm.days,
		hour: T.newAlarm.hour,
		minute: T.newAlarm.minute,
		text: T.newAlarm.text,
		phase: []
	}
	for (const nad of T.newAlarm.days) {
		if (Time.weekDay > parseInt(nad) || (Time.weekDay === parseInt(nad) && Time.hour > T.newAlarm.hour) || (Time.weekDay === parseInt(nad) && Time.hour === T.newAlarm.hour && Time.minute > T.newAlarm.minute)) {
			V.terraAlarmList["No" + ind].phase.push("alarmed");
		} else {
			V.terraAlarmList["No" + ind].phase.push("alarmPre");
		}
	}
	Wikifier.wikifyEval("<<replace #alarmSettingHint>><span class='green fading'>新闹钟已添加。</span><</replace>>");
}
window.alarmAdding = alarmAdding;

function alarmDelete(ind) {
	for (let ad = parseInt(ind.replace("No","")); ad <= Object.keys(V.terraAlarmList).length; ad++) {
		if (V.terraAlarmList["No" + (ad + 1)]) {
			V.terraAlarmList["No" + ad] = V.terraAlarmList["No" + (ad + 1)];
		} else {
			delete V.terraAlarmList["No" + ad];
		}
	}
}
window.alarmDelete = alarmDelete;