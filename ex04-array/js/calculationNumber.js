let btnElements = document.querySelectorAll(".btn_result");
let txtResultEl = document.querySelector(".txt_result");
let btnElsLength = btnElements.length;
let i = 0;

/* 최대값 */
const getMaxNum = arr => {
	let MaxNum = 0;
	arr.map((currentElement, currentIndex, array) => {
		if (currentElement > MaxNum) MaxNum = currentElement;
		return MaxNum;
	});
	console.log(`최대값은 ${MaxNum}입니다.`);
	return `최대값은 ${MaxNum}입니다.`;
};

/* 최소값 */
const getMinNum = arr => {
	let MinNum = arr[0];
	arr.map((currentElement, currentIndex, array) => {
		if (currentElement < MinNum) MinNum = currentElement;
	});
	console.log(`최소값은 ${MinNum}입니다.`);
	return `최소값은 ${MinNum}입니다.`;
};

/* 평균값 */
const getAverageNum = arr => {
	let sumNum = 0;
	let averageNum = 0;
	arr.reduce(function(accumulator, currentValue, currentIndex, array) {
		sumNum = accumulator + currentValue;
		return sumNum;
	});
	averageNum = sumNum / arr.length;
	console.log(`평균값은 ${averageNum}입니다.`);
	return `평균값은 ${averageNum}입니다.`;
};

/* 홀수값 */
const getOddNum = arr => {
	let newArr = [];
	arr.map((currentElement, currentIndex, array) => {
		if (!(currentElement % 2 === 0)) {
			newArr.push(currentElement);
		} else false;
	});
	console.log(`홀수는 ${newArr} 입니다.`);
	return `홀수는 ${newArr} 입니다.`;
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
