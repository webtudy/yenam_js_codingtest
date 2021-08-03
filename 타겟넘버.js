function solution(numbers, target) {
    var answer = 0;
    
    function DFS(depth, sum){ 
        if(depth == numbers.length){
            if(sum == target)
                answer++;
        }
        else{
            sum += numbers[depth];
            DFS(depth + 1, sum);
            sum -= numbers[depth];
            DFS(depth + 1, sum);
        }
    }

    DFS(0, 0);
    return answer;
}

console.log(solution([1, 1, 1, 1, 1],3));