import {REGEX_LOGIN, INVALID_MESSAGE, MINIMUM_MESSAGE }from './regex.js'

const btnSubmit = document.getElementById("btnSubmit");
const userName = document.getElementById("userName");
const userAge = document.getElementById("userAge");
const userEmail = document.getElementById("userEmail");
const userWeight = document.getElementById("userWeight");
const userArr = [userName, userAge, userEmail, userWeight];


// check common
const checkRegex = (regex, userInfo, message) => {
	if (regex.test(userInfo.value)) {
		return true;
	}
	alert(message);
	userInfo.value = "";
	userInfo.focus();
};

//check minimum value
const checkMinimumValue = (userInfo, minimumLength, message) => {
	if (userInfo.value.length > minimumLength) {
		return true;
	}
	alert(message);
	userInfo.value = "";
	userInfo.focus();
};

//check age value
const checkAgeValue = (userInfo, message) => {
	if (Number(userInfo.value) > 18) {
		ageWeightValidator();
		return true;
	}
	alert(message);
	userInfo.value = "";
	userInfo.focus();
};

//age > Weight Validator
const ageWeightValidator = () => {
	if(Number(userWeight.value) === 0) {
		alert('몸무게 0 이상을 입력해주세요.')
	}
}

// detail validator
const detailValidator = currentElement => {
	console.log("welcome detailValidator");

	// name
	if (currentElement === userName) {
		if (!checkRegex(REGEX_LOGIN.NAME, userName, INVALID_MESSAGE.NAME)) {
			return false;
		}
		if (!checkMinimumValue(userName, 3, MINIMUM_MESSAGE.NAME)) {
			return false;
		} 
	}

	// age
	else if (currentElement === userAge) {
		if (!checkRegex(REGEX_LOGIN.NUMBER, userAge, INVALID_MESSAGE.NUMBER)) {
			return false;
		}
		if (!checkAgeValue(userAge, MINIMUM_MESSAGE.AGE)) {
			return false;
		}
	}
	// email
	else if (currentElement === userEmail) {
		if (!checkRegex(REGEX_LOGIN.EMAIL, userEmail, INVALID_MESSAGE.EMAIL)) {
			return false;
		}
	}

	// weight
	else if (currentElement === userWeight) {
		if (
			!checkRegex(REGEX_LOGIN.NUMBER, userWeight, INVALID_MESSAGE.WEIGHT)
		) {
			return false;
		}
	} else{
		return false;
	}
};

// 네 가지 빈 값 check
const EmptyValidator = e => {
	e.preventDefault();
	console.log("validator start!");

	userArr.map(currentElement => {
		if (!(currentElement.value === "")) {
			console.log(currentElement);
			detailValidator(currentElement);
		} else {
			console.log("error");
			currentElement.classList.add("error");
			return false;
		}
	});
};

const formSubmit = () => {
	btnSubmit.addEventListener("click", EmptyValidator);
};

const init = () => {
	formSubmit();
};
init();
