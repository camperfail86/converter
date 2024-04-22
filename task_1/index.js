import {encoded, translations} from './data.js'

const decode = (encoded, translations) => {
	const result = {}
	for (var index in encoded) {
		for (var key in encoded[index]) {
			if (key === "groupId" || key === "service" || key === "formatSize" || key === "ca") {
				result[key] = encoded[index][key];
			} else if (encoded[index][key] === null) {
				result[key] = null
			} else {
				result[key] = translations[+encoded[index][key]]
			}
		}
	}
	return result
}
console.log(decode(encoded, translations))
