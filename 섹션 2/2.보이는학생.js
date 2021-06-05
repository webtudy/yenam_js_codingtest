function solution(arr){  
    let answer = 0, tall = 0;
    for(let x in arr)
    {
        if(arr[x] > tall)
            {
                tall = arr[x];
                answer++;
            }
    }   
    return answer;
}

let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));