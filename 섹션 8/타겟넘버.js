function solution(numbers, target) {
    var answer = 0;
    let check = [];
    for(let i of numbers)
    check.push(0);
    console.log(check);
    
    function DFS(depth){
        if(depth == numbers.length){
            let total = 0;
            let temp = [];
            for(let i = 0; i < numbers.length; i++){
                if(check[i] == 1){
                    temp.push(numbers[i]);
                    total += numbers[i];
                }
                else
                total -= numbers[i];
            }
            if(total == target){
                console.log("+");
                
            console.log(temp, total);
                answer++;
            }
        }
        else{
            check[depth] = 1;
            DFS(depth + 1);
            check[depth] = 0;
            DFS(depth + 1);
        }
    }

    DFS(0);
    return answer;
}

let arr = [1, 1, 1, 1, 1];
console.log(solution(arr, 3));