function weatherBloodMoonByMonolith() {
	return (Weather.bloodMoon && V.blood_moon_monolith && !Time.isBloodMoon() && !(Time.date.day === Time.date.lastDayOfMonth && Time.date.hour > 12) && !(Time.date.day === 1 && Time.date.hour < 12));
}
window.weatherBloodMoonByMonolith = weatherBloodMoonByMonolith;