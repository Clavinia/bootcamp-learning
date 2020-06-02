
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
