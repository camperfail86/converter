import {encoded, translations} from './data.js'
const decode = (encoded, translations) => {
	let array = []
	for (let index in encoded) {
		const result = {}
		for (let key in encoded[index]) {
			if (key === "groupId" || key === "service" || key === "formatSize" || key === "ca") {
				result[key] = encoded[index][key];
			} else if (encoded[index][key] === null) {
				result[key] = null
			} else {
				result[key] = translations[+encoded[index][key]]
			}
		}
		array.push(result)
	}
	return array
}

console.log(decode(encoded, translations))
