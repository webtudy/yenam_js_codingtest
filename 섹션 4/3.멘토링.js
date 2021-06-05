function solution(arr){
    let answer = 0, n = arr.length, m = arr[0].length;
    let flag = 0;
    for(let x = 0; x < m; x++)
    {
        for(let y = x+1; y < m; y++)
        {
            i = arr[0][x]; // i = 3
            j = arr[0][y]; // j = 1
            flag = 0;            
            for(let k = 1; k < n; k++) // 줄
            {
                for(let l = 0; l < m; l++) // 원소
                {
                    if(arr[k][l] == i)
                        flag++;
                    if(arr[k][l] == j)
                        break;
                }
                
                if(flag == n - 1)
                    answer++;
            }
        }
    }
    
    return answer;
}

let arr=[[3, 4, 1, 2],
        [4, 3, 2, 1],
        [3, 1, 4, 2]];
console.log(solution(arr));