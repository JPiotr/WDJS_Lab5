const asyncAdd = async (a,b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('Argumenty muszą mieć typ number!')
    }
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(a+b)
        }, 100)
    })
}

function addNumbers(a,b) {
    performance.mark("fStart")
    let x = asyncAdd(parseInt(a),parseInt(b))
    performance.mark("fEnd")
    console.log(performance.measure("async","fStart","fEnd"))
    return x
}

function addNumbersWMark(a,b) {
    let x = asyncAdd(a,b)
    return x
}

function addMultipleNumbers(i){
    let nums = []
    let addedNums = []
    const ii = parseInt(i)
    for(let x = 0;x<=1;x++){
        nums.push(generateNumbers(ii))
    }
    performance.mark("multipleAddStart")
    for(let y = 0;y<ii;y++){
        addedNums.push(addNumbersWMark(nums[0][y],nums[1][y]))
    }
    performance.mark("multipleAddEnd")
    console.log(performance.measure("multipleAdd","multipleAddStart","multipleAddEnd"))
    return addedNums
}

function generateNumbers(i){
    let nums = []
    for(let j = 0;j<i;j++){
        nums.push(Math.floor(Math.random() * (100-1) + 1))
    }
    console.log(nums)
    return nums;
}

//before optymalization
//25.299999952316284 f attempt
//1.6000001430511475 s attempt

//after optymalization
//fastest : 1.2999999523162842
//slowest : 1.7999999523162842