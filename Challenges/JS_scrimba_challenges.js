
// Is every digit even?

function evenDigitsOnly(number) {
    //  write code here.
    let stringNumber = number.toString();
    let digitsArray = stringNumber.split("");
    digitsArray.forEach( function(val) {
        parseInt(val,10);
    });
    
    function isEven(a) {
        return ( a % 2 === 0 );
    }
    
    return digitsArray.every(isEven);
     
}



/**
* Test Suite 
*/
describe('evenDigitsOnly()', () => {
    it('returns true when all digits are even', () => {
        // arrange
        const nums = 248622;
        
        // act
        const result = evenDigitsOnly(nums);

        // log
        console.log("result 1 : ", result);
        
        // assert
        expect(result).toBe(true);
    });
    
    it('returns fale when any digits are odd', () => {
        // arrange
        const nums = 642386;
        
        // act
        const result = evenDigitsOnly(nums);

        // log
        console.log("result 2 : ", result);
        
        // assert
        expect(result).toBe(false);
    });
});


// Sum all primes

function sumAllPrimes(num) {
    
    let primesSum = 0;
    
    function isPrime(num) {
        let isPrime = true;
        for(var i = 2; i < num; i++) {
            if ( num % i === 0 ) {
                isPrime = false;
                break;
            }
        }
        return isPrime;
    }
    
    for(var i = 2; i <= num; i++) {
            if(isPrime(i)) {
                primesSum += i;
            }
        }
    
    return primesSum;
    
    
    
    /* First try */
    /*
    let counter = 0;
    let primeSum = 0;
    let currentNumber;
    let primesArray = [];
    let countArray = [];
    
    for(i = 2; i <= num; i++) {
        countArray.push(i);
    }
    
    for (i = 0; i < countArray.length; i++) {
        let divisorsArray = [];
        currentNum = countArray[i];     
        countArray.forEach(
            function(val,i) {
                if (val < currentNum ) {
                    if( (currentNum % val) === 0) {
                        divisorsArray.push(val);
                    }
                }
            }
        );       
        if ( divisorsArray.length === 0) {
            primesArray.push(currentNum);
            primeSum += currentNum;
        }
    }
    
    return primeSum;
    */
}



/**
* Test Suite 
*/
describe('sumAllPrimes()', () => {
    it('adds all prime numbers up to input number', () => {
        // arrange
        const num = 10;
        
        // act
        const result = sumAllPrimes(num);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(17);
    })
});


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
