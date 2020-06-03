// Find first duplicate

function firstDuplicate(nums) {
    //  write code here.
    let duplicate = -1;
    let arrayObject = {};
    let comparingArray = [];
    
    /* Done with what I thought of */
    for (i = 0; i < nums.length; i++) {
        if (comparingArray.includes(nums[i])) {
            duplicate = nums[i];
            break;
        }
        else {
            comparingArray.push(nums[i]);
        }
    }
    
    /* Done with hasOwnProperty */
    /*
    for (i = 0; i < nums.length; i++) {
        if (arrayObject.hasOwnProperty( nums[i] )) {
            duplicate = nums[i];
            break;
        }
        else { 
            arrayObject = {
               [nums[i]] : "hello",
            }
        }
    }
    */
    return duplicate;
}



/**
* Test Suite 
*/
describe('firstDuplicate()', () => {
    it('returns first duplicated value', () => {
        // arrange
        const nums = [2, 1, 3, 5, 3, 2];
        
        // act
        const result = firstDuplicate(nums);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(3);
    });
    
    it('returns -1 when no duplicated values', () => {
        // arrange
        const nums = [2, 1, 3, 5, 4, 6];
        
        // act
        const result = firstDuplicate(nums);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(-1);
    });
});


// Add two digits

function addTwoDigits(num)  {
    let digits = num.toString();
    let digitsArray = digits.split('');
    
    //with a for loop
    let count = 0;
    for (i = 0; i < digitsArray.length; i++) {
        //parse int to array
        digitsArray[i] = parseInt(digitsArray[i],10);
        //count version 1
        count += digitsArray[i];
    }
       
    //with reduce
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let result = digitsArray.reduce(reducer);
    
    return result;
    
}



/**
* Test Suite 
*/
describe('addBorder()', () => {
    it('take a two digit number and return the sum of their numbers', () => {
       // arrange
        const num = 29;
        
        // act
        const result = addTwoDigits(num);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(11);
    });
});



// Add border

function addBorder(array) {
    //  write code here.
    for(i = 0; i < array.length; i++) {
        const wallStart = "*";
        const wallEnd = "*";
        array[i] = wallStart.concat(array[i], wallEnd);
    }
    array.unshift("*****");
    array.push("*****");
    
    return array;
}



/**
* Test Suite 
*/
describe('addBorder()', () => {
    it('adds a border around entire application', () => {
        // arrange
        const strings = ['abc', 'ded'];
        
        // act
        const result = addBorder(strings);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(
                ["*****",
                "*abc*",
                "*ded*",
                "*****"]
        );
    })
});
