function solution(arr, target){
    let answer= 0;
    let n=arr.length;
    function DFS(L, sum){
        if(L===n){
            if(sum == target)
                answer++;
        }
        else{
                console.log(L,"+", sum);
                DFS(L+1, sum+arr[L]);
                console.log(L,"-", sum);
                DFS(L+1, sum-arr[L]);
        }
    }
        DFS(0, 0);
        return answer;
}
let arr = [1, 1, 1, 1, 1];
console.log(solution(arr, 3));