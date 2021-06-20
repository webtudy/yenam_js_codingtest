function solution(nums) {
    var answer = 0;
    var nondup = 0;
    var half = (nums.length/2);
    for(let x in nums)
        if(x == nums.indexOf(nums[x]))
            nondup++;


    console.log(nondup, half);
    if(nondup > half)
        return half;
    else
        return nondup;
}
arr1=[3,3,3,2,2,2];
console.log(solution(arr1));