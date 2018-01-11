let square = (x) => x * x;
console.log(square(9));

let user = {
  name: 'Mike',
  sayHi: () => {
    console.log(`Hi ${this.name}`);
  },
  sayHiAlt () {
    console.log(`Hi ${this.name}`);
  }
}

user.sayHi();
user.sayHiAlt();