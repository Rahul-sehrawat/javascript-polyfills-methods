// Explicit Binding with This
// bind() polyfill 

let car1 = {
    name:"BMW",
    color :"black",
};

// Inbuild bind() fn :-
function carDetails(model){
    console.log(`my Car is ${this.name} and its color is ${this.color} , its model is ${model}`);
}

const newfunc1 = carDetails.bind(car1,2023);  // inbuild bind(obj) or bind(obj, ...args)
console.log(newfunc1())

//  polyfill implemetation
// it belongs to the prototype of fn


Function.prototype.myBind = function(context={},...args){
    if(typeof this !== 'function'){
        throw new Error(this +'cannot be bound as it is not callable ');
    }
    context.fn = this;   //here we insert the fn into obj
    return function (...newArrays){
        return context.fn(...args,...newArrays) //here we are calling the fn and return the value
    }
}

const newFunc = carDetails.myBind(car1);
console.log(newFunc(2024));