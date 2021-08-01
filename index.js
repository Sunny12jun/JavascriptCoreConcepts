let name = {
    firstName: 'Sunny',
    LastName: 'Diwakar',
    PrintFullName: function (){
        console.log(this.firstName+ ' ' +this.LastName)
    }  
    }

let PrintFullName = function (){
     console.log(this.firstName+ ' ' +this.LastName)
 }   

 let printMyName = PrintFullName.bind(name) ;
 printMyName();