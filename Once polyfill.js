// Closures in js
// Once polyfill

function once(func,context){
    let ran;

    return function(){
        if(func){
            ran = func.apply(context || this, arguments); //output the function
            func = null;  //now fn become null
        }
        return ran;  //return null and store it into a var
    }
}

const hello = once((a,b,c)=> console.log('hello rahul', a+b+c)); //we get the ran as output and store it into hello

hello(1,2,3); //fn run only once
hello(1,2,3);
hello(1,2,3);