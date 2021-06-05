function solution(arr){  
    let answer=Number.MIN_SAFE_INTEGER;
    let col = 0, row = 0, dia = 0, diam = 0;
    for(let i = 0; i < arr.length; i++)
    {
        col = 0;
        row = 0;
        for(let j = 0; j < arr.length; j++)
        {
            col += arr[i][j];
            row += arr[j][i];
        }
        answer = Math.max(col, row);
        dia += arr[i][i];
        diam += arr[i][arr.length -1 - i];
    }
    answer=Math.max(dia, diam, answer); 
    return answer;
}

let arr=[[10, 13, 10, 12, 15], 
         [12, 39, 30, 23, 11],
         [11, 25, 50, 53, 15],
         [19, 27, 29, 37, 27],
         [19, 13, 30, 13, 19]];
console.log(solution(arr));