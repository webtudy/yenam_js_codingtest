function solution(arr){
    let answer = [];
    let sortarr = [];
    for(let x of arr)
    sortarr.push(x);

    sortarr.sort((a, b)=>a-b);

    for(let x = 0; x < arr.length; x++){
        if(arr[x] != sortarr[x])
        answer.push(x+1);
    }
    return answer;
}

let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));