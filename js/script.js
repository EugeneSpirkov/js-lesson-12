'use strict'

$(function () {
	


function human(name, age, gender, weight, money) {
	this.name = name;
	this.age = age;
	this.gender = gender; 
	this.weight = weight;
	this.money = money
}


var ivan = new human('Ivan', 28, 'male', 75, 5000);
console.log('Human Ivan ',ivan);


var lena = new human('Elena', 21, 'female', 50, 2000);
console.log('Human Elena ',lena);
console.log('__________________________________');


var worker = {
	job: 'factory',
	work: function() {
		return this.money += 1000
	}
}


var student = {
	university: 'NTUU KPI',
	watchFilm: function() {
		return this.money -= 100
	}
}

worker.__proto__= ivan;
student.__proto__= lena;



console.log('Worker Ivan ', worker);
console.log('Ivan is working now, money +1000$', worker.work());
console.log('Ivan is working now, money +1000$', worker.work());
console.log('Ivan is working now, money +1000$', worker.work());
console.log('__________________________________');

console.log('Student Lena', student);
console.log('Lena is showing film now, money -100$', student.watchFilm());
console.log('Lena is showing film now, money -100$', student.watchFilm());
console.log('Lena is showing film now, money -100$', student.watchFilm());


// 	function human(name,age,gender,weight, money) {
// 		this.name = name;
// 		this.age = age;
// 		this.gender = gender;
// 		this.weight = weight;
// 		this.money = money
// 	};

// var ivan = new human('Ivan', 25, 'male', 80, 15000);
// console.log('human Ivan ',ivan);

// var lena = new human('Lena', 20, 'female', 50, 1000);
// console.log('human Lena ', lena);

// console.log('----------------------');

// var worker = {
// 	job: 'factory',
// 	work: function () {
// 		return this.money += 5000 
// 	}
// }

// var student = {
// 	university : 'NTUU KPI',
// 	showFilm : function() {
// 		return this.money -= 50
// 	}
// }


// worker.__proto__=ivan;

// student.__proto__=lena;


// console.log('Worker Ivan ', worker);
// console.log('Ivan is working now, money +5000$', worker.work());
// console.log('Ivan is working now, money +5000$', worker.work());
// console.log('Ivan is working now, money +5000$', worker.work());
// console.log('----------------------');

// console.log('Student Lena', student);
// console.log('Lena is showing film now, money -50$', student.showFilm());
// console.log('Lena is showing film now, money -50$', student.showFilm());
// console.log('Lena is showing film now, money -50$', student.showFilm());



})