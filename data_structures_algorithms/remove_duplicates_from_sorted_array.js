// Given an integer array [nums] sorted in non-descending order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same

/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    let index = 1 //we start index[1] because index[0] is always going to a unique number

    // we stop the iteration one less than the length because there's nothing for the last index to compare with
    for (let i = 1; i < nums.length - 1; i++){
        // compare value of index with the next value
        // if it doesn't match, replace it 
        if (nums[i] !== nums [i+1]){
            //store the unique element 
            nums[index] = nums[i+1]
            index ++
        }
    }
    return index
};

//Two pointer approach, more efficient

/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0; //if length of array is 0, return 0 and end the function

    let i = 0; //will place the non-duplicate elements
    let j = 1; //iterate through the original array, start at 1 because [0] is already unique

    while (j < nums.length) {
        if (nums[j] !== nums[i]) //check if the value of index[j] matches index[i]
        {
            i++; // if value of index don't match, increment i 
            nums[i] = nums[j];
            j++;
        } else j++ //if indexes match, increment by 1 and 
    } return i + 1; //return length of array
};

// Time complexity: O(n), linear
// Space complexity: O(1), constant