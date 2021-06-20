function solution(numbers, target) {
    var answer = 0;
    
    function DFS(depth, sum){
        if(depth == numbers.length){
            if(sum == target)
                answer++;
            console.log("+", depth, sum);
        }
        else{
            console.log(depth,"+", sum);
            DFS(depth + 1, sum + numbers[depth]);
            
            console.log(depth,"-", sum);
            DFS(depth + 1, sum - numbers[depth]);
        }
    }

    DFS(0, 0);
    return answer;
}

let arr = [1, 1, 1, 1, 1];
console.log(solution(arr, 3));