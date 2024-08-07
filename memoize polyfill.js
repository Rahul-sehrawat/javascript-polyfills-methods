// memoize polyfill

function myMemoize(fn,context){
    const res = {};
    return function(...args){
        var argsCache = JSON.stringify(args);
        if(!res[argsCache]){
            res[argsCache] = fn.call(context || this,...args);
        }
        return res[argsCache];
        
    }
}

// expensive task
const Product = (num1,nums2) =>{
    for (let i = 0 ; i <1000000;i++){}
    return num1*nums2
}

//pass expensive fn into the myMemoize fn
const memoizedProduct = myMemoize(Product);

// first time calling 
console.time('first call');
console.log(memoizedProduct(122,134));
console.timeEnd('first call');

// again call the same fn
console.time('second call');
console.log(memoizedProduct(122,134));
console.timeEnd('second call');