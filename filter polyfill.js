// Polyfill for filter()

Array.prototype.myfilter = function(cb){
    let temp = []
    for (i = 0 ;i < this.length ; i++){
        if (cb(this[i],i,this)) temp.push(this[i])
    }
    return temp;
}

const nums = [11,23,32,41,2]

const Adult = nums.myfilter((num)=>{
        return num > 18
})

console.log(Adult)