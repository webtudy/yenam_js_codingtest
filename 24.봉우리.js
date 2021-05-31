function solution(arr){  
    let answer=0, n = 0;
    let x = arr.length;
    
    for(let i = 1; i < x; i++)
    {
        for(let j = 1; j < x; j++)
        {            
            n = arr[i][j]
            if( arr[i-1][j] < n && 
                arr[i][j-1] < n && 
                arr[i+1][j] < n && 
                arr[i][j+1] < n)
                {
                answer++;
                }
        }
    }
    return answer;
}

let arr=[[0, 0, 0, 0, 0, 0, 0],
         [0, 5, 3, 7, 2, 3, 0], 
         [0, 3, 7, 1, 6, 1, 0],
         [0, 7, 2, 5, 3, 4, 0],
         [0, 4, 3, 6, 4, 1, 0],
         [0, 8, 7, 3, 5, 2, 0],
         [0, 0, 0, 0, 0, 0, 0]];
console.log(solution(arr));