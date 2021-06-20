function solution(array, commands) {
    var answer = [];
    let temp = [];
    let i, j, k
    for(let x of commands)
        {
            i = x[0], j = x[1], k = x[2];
            for(let n = i-1; n <= j - 1; n++){
                temp.push(array[n]);
            }
            temp.sort(function(a, b)  {
                return a - b;
              });
            answer.push(temp[k - 1]);
            
            temp = [];
        }
    return answer;
}
let arr1 = [1, 5, 2, 6, 3, 7, 4];
let arr2 = [[2, 5, 3], 
            [4, 4, 1], 
            [1, 7, 3]];
console.log(solution(arr1, arr2));