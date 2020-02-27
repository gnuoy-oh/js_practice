const REGEX_LOGIN = {
	NAME: /^[a-zA-Z]*$/,
	NUMBER: /^[0-9]*$/,
	EMAIL: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/
};

const INVALID_MESSAGE = {
	NAME: "이름 형식이 맞지 않습니다.",
	NUMBER: "나이는 숫자로 입력해주세요",
	EMAIL: "이메일 형식이 맞지 않습니다.",
	WEIGHT: "몸무게를 정확히 입력해주세요"
};

const MINIMUM_MESSAGE = {
	NAME: "3글자 이상으로 입력하세요",
	AGE: "18세 이상만 입력해주세요",
	EMAIL: "이메일을 입력해주세요",
	WEIGHT: "숫자로 입력해주세요"
};

export { REGEX_LOGIN, INVALID_MESSAGE, MINIMUM_MESSAGE };
