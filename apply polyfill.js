// Explicit Binding with This
// apply() polyfill 


let car1 = {
    name:"BMW",
    color :"black",
};

// Inbuild apply() fn :-
function carDetails(model){
    console.log(`my Car is ${this.name} and its color is ${this.color} , its model is ${model}`);
}

carDetails.apply(car1,[]);  // inbuild apply(obj, [])


//  polyfill implemetation
// it belongs to the prototype of fn

Function.prototype.myApply = function(context = {}, args= []){
    //this, here means the left of .
    if(typeof this !== 'function'){
        throw new Error(this +'it is not Callable');
    }
    if (!Array.isArray(args)){
        throw new Error('CreateListFromArrayLike called on non-object')
    }
    context.fn = this;  // here we insert the fn inside the object
    context.fn(...args)  // here we call that fn with the [] by spreading the ...args
}

carDetails.myApply(car1,[2024])  //polyfill myApply(obj, []) 