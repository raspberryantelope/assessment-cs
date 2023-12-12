
const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppendEL = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsertEL = perf.stop();


perf.start()
doublerAppend(largeArray)
let resultsAppendL = perf.stop()

perf.start()
doublerInsert(largeArray)
let resultsInsertL = perf.stop()

perf.start()
doublerAppend(mediumArray)
let resultsAppendM = perf.stop()

perf.start()
doublerInsert(mediumArray)
let resultsInsertM = perf.stop()

perf.start()
doublerAppend(smallArray)
let resultsAppendS = perf.stop()

perf.start()
doublerInsert(smallArray)
let resultsInsertS = perf.stop()

perf.start()
doublerAppend(tinyArray)
let resultsAppendT = perf.stop()

perf.start()
doublerInsert(tinyArray)
let resultsInsertT = perf.stop()


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsertEL.preciseWords);
console.log("append", resultsAppendEL.preciseWords);
console.log('Results for the largeArray')
console.log("insert", resultsInsertL.preciseWords)
console.log("append", resultsAppendL.preciseWords)
console.log('Results for the mediumArray')
console.log("insert", resultsInsertM.preciseWords)
console.log("append", resultsAppendM.preciseWords)
console.log('Results for the smallArray')
console.log("insert", resultsInsertS.preciseWords)
console.log("append", resultsAppendS.preciseWords)
console.log('Results for the tinyArray')
console.log("insert", resultsInsertT.preciseWords)
console.log("append", resultsAppendT.preciseWords)


///////////////////////Write Code///////////////////////////////

function addToZero(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] + array[j] === 0) {
                return true
            }
        }
    }
    return false
}
//Runtime O(n^2)
//Space O(1)

function hasUniqueChars(string) {
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (i !== j && string[i] === string[j]) {
                return false
            }
        }
    }
    return true
}
//Runtime O(n^2)
//Space O(1)
function isPangram(string) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    string = string.toLowerCase()
    for (let char of alphabet) {
        if (string.indexOf(char) === -1) {
            return false
        }
    }
    return true
}
//Runtime O(n)
//Space O(1)
function findLongestWordLength(array) {
    let longest = 0
    for (let word of array) {
        if (word.length > longest) {
            longest = word.length
        }
    }
    return longest
}
//Runtime O(n)
//Space O(1)

console.log(addToZero([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(addToZero([1. -1]))
console.log(hasUniqueChars("Garfield"))
console.log(hasUniqueChars("Lasagna"))
console.log(isPangram("Sphinx of black quartz, judge my vow"))
console.log(isPangram("I don't like sand. It's coarse and rough and irritating and it gets everywhere."))
console.log(findLongestWordLength(["ciao", "adios", "later"]))
console.log(findLongestWordLength(["hi", "world"]))