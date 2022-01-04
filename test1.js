let result = [true, false];
let debt = [8000, 12500, 10400];
let myMoney = 0;
let currentTime = 0;

function partTimeJob (time, pay) {
	for(let i = 0; i < time; i++) {
		myMoney += pay;
		currentTime++;
	};
};

function rockScissorsPaper () {
	let choose = 0;

	while(choose !== currentTime) {
		choose++;
	};

	return result[choose%2];
};

function eatFood (price) {
	currentTime++;

	if(rockScissorsPaper()) {
		return;
	} else {
		return myMoney -= price;
	};
};

function payOffDebt () {
	for(let i = 0; i < debt.length; i++) {
		myMoney -= debt[i];
		debt[i] = 0;
	};
}

function today () {
	partTimeJob(3, 8000);
	eatFood(4000);
	partTimeJob(5, 10000);
	payOffDebt();
	console.log(currentTime, myMoney);
};

today();

console.timeEnd("몇초가 걸릴까요")
// node의 연산 순서를 따라가 보아요.
// 몇번 연산했을까요?