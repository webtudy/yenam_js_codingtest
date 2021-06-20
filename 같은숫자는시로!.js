function solution(arr)
{
    var answer = [];
    let now = -1;
    for(let x = 0; x < arr.length; x++){
        console.log(now, arr[x]);
        if(now != arr[x]){
            now = arr[x];
            answer.push(now);
        }
    }
    
    return answer;
}
console.log(solution([1,1,3,3,0,1,1]));