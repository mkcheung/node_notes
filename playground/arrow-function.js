let square = x => x * x;

console.log(square(2));

let user = {
	name:"Hiryu",
	sayHello: () => {
		console.log(`Hi`);
	},
	sayHiAlt () {
		console.log(`Hi, I'm ${this.name}`);
	}
};

user.sayHello();

user.sayHiAlt();