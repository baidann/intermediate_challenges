// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
function thatsOddOrEven(arr){
    var oddCounter = 0;
    var evenCounter = 0;
    for (var i = 0; i<arr.length;i++){
        if (arr[i] % 2 != 0){
            oddCounter += 1;
            evenCounter = 0;
            if (oddCounter==3){
                console.log("That's odd!")
            }
        }
        else if (arr[i] % 2 == 0){
            evenCounter += 1;
            oddCounter = 0;
            if (evenCounter == 3){
                console.log("Even more so!")
            }
        }
    }
}

thatsOddOrEven([1,2,3,4,5,6,5,5,5,2,4,4,1])