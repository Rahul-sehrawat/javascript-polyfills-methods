// Explicit Binding with This
// call() polyfill 


let car1 = {
    name:"BMW",
    color :"black",
};

// Inbuild Call() fn :-
function carDetails(model){
    console.log(`my Car is ${this.name} and its color is ${this.color} , its model is ${model}`);
}

carDetails.call(car1,2024);  // inbuild call(obj, ...args)


//  polyfill implemetation
// it belongs to the prototype of fn

Function.prototype.mycall = function(context = {}, ...args){
    //this, here means the left of .
    if(typeof this !== 'function'){
        throw new Error(this +'it is not Callable');
    }
    context.fn = this;  // here we insert the fn inside the object
    context.fn(...args)  // here we call that fn with the arrgs
}

carDetails.mycall(car1,2024)  //polyfill mycall(obj, ...args) 