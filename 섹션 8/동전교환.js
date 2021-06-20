function solution(m, arr){
    let answer = 0;
    let min = Number.MAX_SAFE_INTEGER;

    function DFS(depth, sum){
        if(depth>=min) return;
        if(sum==m){
            if(min >= depth)
            min=depth;
        }
        else{
            for(let i=0; i<arr.length; i++){
                DFS(depth+1, sum+arr[i]);
            }
        }
    }
    DFS(0, 0);
    answer = min;
    return answer;
}

let arr=[1, 2, 5];
console.log(solution(15, arr));