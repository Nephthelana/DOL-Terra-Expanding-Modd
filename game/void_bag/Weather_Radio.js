//该部分js绝大部分内容来自于dol原版的 02-weather-generation.js 文件
function weatherInAnHour(forecastHour) {
		const currentTimeStamp = Time.date.timeStamp + 3600 * forecastHour;

		let currentKeyPoint = null;
		let nextKeyPoint = null;

		// Get the current and next weather key points
		for (const keyPoint of V.weatherObj.keypointsArr) {
			if (keyPoint.timestamp <= currentTimeStamp) {
				currentKeyPoint = keyPoint;
			}
			if (keyPoint.timestamp > currentTimeStamp && !nextKeyPoint) {
				nextKeyPoint = keyPoint;
			}
		}

		// Failsafe if no next key point is found for the day, assume weather stays the same
		if (!nextKeyPoint && currentKeyPoint) {
			return currentKeyPoint.value;
		}

		currentKeyPoint ??= { timestamp: currentTimeStamp, value: nextKeyPoint.value };

		const current = Weather.genSettings.weatherTypes[currentKeyPoint.value];
		const next = Weather.genSettings.weatherTypes[nextKeyPoint.value];

		// Calculate the fraction of time passed between the current and next key points
		const fraction = (currentTimeStamp - currentKeyPoint.timestamp) / (nextKeyPoint.timestamp - currentKeyPoint.timestamp);

		// Interpolate the weather value
		const interpolatedValue = Math.round(current.value + (next.value - current.value) * fraction);

		if (V.weatherObj?.name !== null) {
			const currentWeatherType = Weather.genSettings.weatherTypes.find(type => type.name === V.weatherObj.name);
			if (currentWeatherType.value === interpolatedValue) {
				return createObjectByTypeTEM(currentWeatherType);
			}
		}

		if (current.value === interpolatedValue) {
			const newObj = createObjectByTypeTEM(current);
			V.weatherObj.name = newObj.name;
			const targetOvercast = resolveValue(Weather.genSettings.weatherTypes.find(type => type.name === Weather.name).overcast);
			V.weatherObj.targetOvercast = targetOvercast * (Weather.bloodMoon ? setup.SkySettings.fade.overcast.bloodMoonMaxValue : 1);
			return newObj;
		}

		return findClosestWeatherTypeTEM(interpolatedValue);
	}

window.weatherInAnHour = weatherInAnHour;

function createObjectByTypeTEM(obj) {
	return {
		defines: obj,
		name: obj.name,
		tanningModifier: obj.tanningModifier,
		precipitationIntensity: obj.precipitationIntensity,
	};
}
window.createObjectByTypeTEM = createObjectByTypeTEM;

function findClosestWeatherTypeTEM(interpolatedValue) {
	const closestTypes = Weather.genSettings.weatherTypes.reduce(
		(acc, type) => {
			const difference = Math.abs(type.value - interpolatedValue);
			if (difference < acc.minDifference) {
				return { minDifference: difference, types: [type] };
			}
			if (difference === acc.minDifference) {
				acc.types.push(type);
			}
			return acc;
		},
		{ minDifference: Number.MAX_VALUE, types: [] }
	).types;

	// Randomly choose one type if there are multiple options with the same int value
	const chosenType = closestTypes[Weather.activeRenderer.rng.randomInt(0, closestTypes.length - 1)];
	const newObj = createObjectByTypeTEM(chosenType);

	V.weatherObj.name = chosenType.name;
	const targetOvercast = resolveValue(Weather.genSettings.weatherTypes.find(type => type.name === Weather.name).overcast);
	V.weatherObj.targetOvercast = targetOvercast * (Weather.bloodMoon ? setup.SkySettings.fade.overcast.bloodMoonMaxValue : 1);
	return newObj;
}
window.findClosestWeatherTypeTEM = findClosestWeatherTypeTEM;