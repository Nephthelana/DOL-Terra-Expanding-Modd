// 放在weekPassed()里
function terraAlarmResetWeekly() {
	for (let i in Object.keys(V.terraAlarmList)) {
		let alarm = V.terraAlarmList[Object.keys(V.terraAlarmList)[i]];
		if (alarm.phase === "alarmed") {
			alarm.phase = "alarmPre";
		} else if (["alarming","alarmPre"].includes(alarm.phase)) {
			alarm.phase = "alarmingPassedAWeek";
		}
	}
}
window.terraAlarmResetWeekly = terraAlarmResetWeekly;