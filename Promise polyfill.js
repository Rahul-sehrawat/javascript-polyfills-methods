// promise polyfill


function PromisePolyFill(exector){
    let onResolve,
        onReject,
        isFulfilled = false,
        isRejected = false,
        isCalled = false,
        value;

    function resolve(val){
        isFulfilled = true
        value = val;

        if (typeof onResolve === 'function'){
        onResolve(value);
        isCalled = true
        }
    };

    function reject(val){
        isRejected = true;
        value = val;
        if (typeof onReject === 'function'){
            onReject(val);
            called = true;
        }
        return this;
    }

    this.then = function(callback){
        onResolve = callback;
        
        if(isFulfilled && !isCalled){
            Called = true;  
            onResolve(value)
        }

        return this;
    };

    this.catch = function(callback){
        onReject = callback;
        if(isRejected && !isCalled){
            isCalled = true;
            onReject(value)
        }
        return this;
    };
    try {
        exector(resolve,reject)
    } catch (error) {
        reject(error)
    }
}




const examplePromise = new PromisePolyFill((resolve,reject)=>{
    // resolve(2)   //sync
    setTimeout(()=>{   //async
        resolve(2)
    },1000)
})

examplePromise
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>console.log(err));