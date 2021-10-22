/* This is a simple practice exercise on using methods on Arrays
    Enjoy!
                                                        -By ydelvis

    #AmaliTechTraining   #Codecademy 
*/


let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log('Original Length: ' + secretMessage.length); // checking length of array

secretMessage.pop(); // removing last string

console.log('New Length: '+ secretMessage.length);  // checking length to confirm if last string is removed

secretMessage.push('to','Program');  // Appending 'to' and 'Program' to List

secretMessage[secretMessage.indexOf('easily')] = 'right';  // replacing 'easily' with 'right' in list

secretMessage.shift(); // removing first item 'Learning' from list

secretMessage.unshift('Programming');  // inserting 'Programming' at the beginning of the List

secretMessage.splice(secretMessage.indexOf('get'),5,'know');  // removing (get, right, the, first, time) from List and replacing with 'know'

console.log(secretMessage.join(' '))  // logging list to screen on a single line

// End of Code ...