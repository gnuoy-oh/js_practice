let btnElements = document.querySelectorAll(".btn_result");
let txtResultEl = document.querySelector(".txt_result");
let btnElsLength = btnElements.length;
let i = 0;

const maxReducer = (accumulator, currentElement) => accumulator > currentElement ? accumulator : currentElement;
const minReducer = (accumulator, currentElement) => accumulator < currentElement ? accumulator : currentElement;
const avgReducer = (accumulator, currentElement, index) => (accumulator + currentElement)/index;

/* 최대값 */
const getMaxNum = arr => {
	const maxNum = arr.reduce(maxReducer)
	const result = `최대값은 ${maxNum} 입니다.`
	console.log(result)
	return result
	};

/* 최소값 */
const getMinNum = arr => {
	const minNum = arr.reduce(minReducer)
	const result = `최소값은 ${minNum} 입니다.`
	console.log(result)
	return result
};

/* 평균값 */
const getAverageNum = arr => {
	const avgNum = arr.reduce(avgReducer)
	const result = `최소값은 ${avgNum} 입니다.`
	console.log(result)
	return result
};

/* 홀수값 */
const getOddNum = arr => {
	const oddArr = arr.filter( value => value%2 === 1)
	const result = `최소값은 ${oddArr} 입니다.`
	console.log(result)
	return result

};

const viewResult = result => {
	txtResultEl.innerHTML = result;
};

// index 입력
const getInputNumber = () => {
	let arr = [];
	for (let i = 0; i < 5; i++) {
		arr.push(Number(prompt(i + 1 + "인덱스 숫자 입력")));
	}
	console.log(arr);
	console.log(typeof arr[0]);
	return arr;
};

// index array 담아줌
const inputArr = getInputNumber();

// click event 
const getResult = e => {
	let resultType = e.currentTarget.getAttribute("data-result-type");
	let result = 0;
	switch (resultType) {
		case "max":
			result = getMaxNum(inputArr);
			break;
		case "min":
			result = getMinNum(inputArr);
			break;
		case "avg":
			result = getAverageNum(inputArr);
			break;
		case "odd":
			result = getOddNum(inputArr);
			break;
	}
	viewResult(result);
};

const init = () => {
	for (i; i < btnElsLength; i++) {
		btnElements[i].addEventListener("click", getResult);
	}
};
init();
