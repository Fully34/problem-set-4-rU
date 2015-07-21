// Write a function addNumbers that takes a single string parameter and searches for all the numbers in the string, adds them together, then returns the sum. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol.


//===========================================================================//
                        /* ~~~ addNumbers ~~~ */ 
//===========================================================================//

var myString = "Hello34 I'4m Chr908is"

function addNumbers(string) {

    var arr = string.split('');
    var placeHolder = [];
    var newArr = [];

    console.log(arr)

    for (var i = 0; i < arr.length; i++) {

        var character = arr[i];

        if ( !isNaN( parseInt( character ) )  ) {

            for (var k = i; !isNaN(character) && ( character !== " " ) ; k ++) {

                character = arr[k]
                
                if ( !isNaN(character) && ( character !== " " ) ) {
                
                    placeHolder.push(character);
                }
            }

            // set i = k to skip the susequent number in the case of 
            i = k;
        }

            console.log(placeHolder);

            var newNum = placeHolder.join('');
            placeHolder = [];

            console.log(newNum)
    };

    // return newArr;
}