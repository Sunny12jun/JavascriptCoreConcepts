let myname = {
    firstanme: 'Sunny',
    lastname: 'diwakar'
}

let GetFullName = function (hometown) {
    console.log(this.firstanme + ' ' + this.lastname + ' From '+ hometown);
}

// let myFullName = GetFullName.bind(myname);
// myFullName();

Function.prototype.MyCustomBind = function (...args) {
    let self = this;
    parms = args.slice(1);
    return function (...args1) {
    self.apply(args[0],[parms,...args1]);
    }
}
let myFullName2 = GetFullName.MyCustomBind(myname,'Moradabad');
myFullName2();