function main(name, pass) {
    Object.defineProperty(this, 'pass', {
        get: function () {
            return this._pass.toUpperCase();
        },
        set: function (value) {
            this._pass = value;
        }
    });

    Object.defineProperty(this, 'name', {
        get: function () {
            return this._name + 'AASD';
        },
        set: function (value) {
            this._name = value;
        }
    });

    this.name = name;
    this.pass = pass;
}

let a = new main('Akash', 'nacho');
console.log(a.name); // AkashAASD
console.log(a.pass); // NACHO