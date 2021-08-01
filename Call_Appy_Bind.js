let name = {
firstname:'Sunny',
lastname: 'diwakar'
}

let name2 = {
    firstname:'Sachin',
    lastname: 'Tendulkar'
    }

let printFullName = function(hometown, state){
    console.log(this.firstname+ ' ' +this.lastname +' From '+ hometown + ',' +state );
}
console.log('******************Call Method********************');
printFullName.call(name,'Moradabad','Uttar Pradesh');
printFullName.call(name2,'Mumbi','Maharastra');

/******************************************************/
console.log('******************Allpy Method********************');
let array = ['Mumbi','Maharastra'];
printFullName.apply(name,['Moradabad','Uttar Pradesh']);
printFullName.apply(name2,array);

/******************************************************/
console.log('******************Bind Method********************');
let sunnyFullName = printFullName.bind(name,['Moradabad','Uttar Pradesh']);
let SachinFullName = printFullName.bind(name2,'Mumbi','Maharastra');
console.log(sunnyFullName)//A function fill console
sunnyFullName()// Now printFullName function will invoke 


