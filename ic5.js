// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
function countPositives(arr){
    var count = 0;
    for (var i = 0; i<arr.length; i++){
        if(arr[i]>0){
            count+=1;
        }
        arr[arr.length-1]=count;
    }
    return arr;
}
console.log(countPositives([-1,1,2,1,1]));