// Write a function addNumbers that takes a single string parameter and searches for all the numbers in the string, adds them together, then returns the sum. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol.


//===========================================================================//
                        /* ~~~ addNumbers ~~~ */ 
//===========================================================================//

var myString = "Hello34 I'4m Chr908is. Nice32 2 m33t y8u"

function addNumbers(string) {

    var arr = string.split('');
    var placeHolder = [];
    var finalArr = [];

    // console.log(arr)

    // loop thru arr
    for (var i = 0; i < arr.length; i++) {

        // debugger;
        var character = arr[i];

        // check to see if the character is a number or not
        if ( !isNaN( parseInt( character ) )  ) {
// 
            // if it is a number we start at that index and check the subsequent elements to see if they are numbers or not
            for (var k = i; !isNaN(character) && ( character !== " " ) ; k ++) {

                character = arr[k]
                
                // Since a " " character returns false (therefore is technically a number), we need to ensure that we don't push those 
                if ( !isNaN(character) && ( character !== " " ) ) {
                
                    placeHolder.push(character);
                }

                // set i = k to skip the susequent number in the case of multiple numbers in a row
                i = k;
            }
        }

            // console.log(placeHolder);

            // for each iteration of outer loop, we need to only push things to final array if the placeholder actually has numbers in it
            if (placeHolder.length > 0) {
                
                //join the digits in the placeholder array and parse them into numbers
                var newNum = parseInt(placeHolder.join(''));
                // console.log(newNum)

                // push the number to the final array
                finalArr.push(newNum);

                // reset the placeholder array
                placeHolder = [];
            }
    };

    // reduce the array to a single number by adding each number together (starting at 0) 
    return _.reduce(finalArr, function(memo, num) {
        return memo + num;
    }, 0);
}

//> VICTORY

//===========================================================================//
                        /* ~~~ longestWord ~~~ */ 
//===========================================================================//

var longString = "DUDE! WHAT DOES MINE SAY friendo?!"

function longestWord(string) {

    // split string
    var arr = string.split('');

    // take out punctuation using regex
    var noPunc = _.filter(arr, function(s) {

        return s.search(/[a-zA-z ]/) !== -1;

    }).join('').split(' ');

    //set longest word to a reduction that compares each word to the current longest word
    var longestWord =  _.reduce(noPunc, function(memo, word) {

        if (word.length > memo.length) {

            return word;

        } else {

            return memo;
        }
    }, "");

    return longestWord; 
}

//> VICTORY

//===========================================================================//
                        /* ~~~ averageStringNumbers ~~~ */ 
//===========================================================================//

var averageString = "Hello34 I'4m Chr908is. Nice32 2 m33t y8u!"

function averageStringNumbers(string) {

    //returns summed number
    var totalNumber = addNumbers(string);
    console.log(totalNumber);

    var splitArr = string.split('');

    // set variable to count the number of letters in the string
    var charNumber = _.filter(splitArr, function(s) {

        return s.search(/[a-zA-Z]/) >= 0;
    }).length;

    // round the answer up
    return Math.round(totalNumber/charNumber);
}


//> VICTORY
























