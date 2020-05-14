export default (data, element) => data.reduce((acc, next) => {
	if(next[element] > acc.max) {
		acc.max = next[element]
	}

	if(next[element] < acc.min) {
		acc.min = next[element]
	}

	return acc
},{max: -Infinity, min: Infinity})