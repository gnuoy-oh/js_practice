const inpNumber = document.getElementById("inpText");
const btnMinus = document.getElementById("btnMinus");
const btnPlus = document.getElementById("btnPlus");
const maxNum = 5;
const minNum = -5;

const inpuDisabled = () => {
	if (inpNumber.value >= maxNum) {
		inpNumber.disabled = true;
		btnPlus.disabled = true;
	} else if (inpNumber.value <= minNum) {
		inpNumber.disabled = true;
		btnMinus.disabled = true;
	} else {
		inpNumber.disabled = false;
		btnMinus.disabled = false;
		btnPlus.disabled = false;
	}
};

const inputNumberCheck = () => {
	console.log(`inpText.value is ${inpNumber.value}`);
	if (isNaN(inpNumber.value)) {
		window.alert("숫자를 입력해주세요.");
		inpNumber.value = "0";
	}
};

const buttonPlusEvent = () => {
	inpNumber.value++;
	inpuDisabled();
	inputNumberCheck();
};
const buttonMinusEvent = () => {
	inpNumber.value--;
	inpuDisabled();
	inputNumberCheck();
};

const buttonClickEvent = () => {
	btnMinus.addEventListener("click", buttonMinusEvent);
	btnPlus.addEventListener("click", buttonPlusEvent);
};

const init = () => {
	inputNumberCheck();
	buttonClickEvent();
};
init();
