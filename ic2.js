// Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function printLowReturnHi(arr){
    var low = arr[0];
    var high = arr[0];
    for(var i = 0; i<arr.length;i++){
        if(arr[i]>high){
            high=arr[i];
        }
        else if (arr[i]<low){
            low=arr[i];
        }
    }
    console.log(low);
    return high;
}

console.log(printLowReturnHi([2,4,6,2,7,1]))