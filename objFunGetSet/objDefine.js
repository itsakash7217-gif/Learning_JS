const user = {
  _name: "",
  _pass: "",

  constructor(name, pass) {
    this.name = name;
    this.pass = pass;
  },

  get name() {
    return this._name;
  },
  set name(value) {
    this._name = value;
  },

  get pass() {
    return this._pass;
  },
  set pass(value) {
    this._pass = value;
  }
};

user.constructor("Alice", "secret");

console.log(user.name); // Alice
console.log(user.pass); // secret