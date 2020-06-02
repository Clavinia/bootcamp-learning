// Add two digits
function addTwoDigits(num)  {
    let digits = num.toString();
    let digitsArray = digits.split('');
    let count = 0;
    for (i = 0; i < digitsArray.length; i++) {
        let digitValue = parseInt(digitsArray[i],10);
        count += digitValue;
    }
    return count;
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
