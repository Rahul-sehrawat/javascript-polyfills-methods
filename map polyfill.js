// Polyfill for map()
// Array.map((num,i,arr) => {})
// this - refers to the array on which we will apply the method

Array.prototype.myMap = function(cb){
    let temp = []
    for (let i = 0 ; i < this.length; i ++){
        let newValue = cb(this[i],i,this)
        temp.push(newValue)
    }
    return temp;
}

const nums  = [1,2,3,4]

const multiplyFour = nums.myMap((nums,i,arr)=>{
    return nums*4;
})

console.log(multiplyFour)