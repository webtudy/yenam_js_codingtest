function solution(need, plan){
    let answer = "YES";
    let queue = [];

    for(let x of need){
        queue.push(x); // CBA
    }

    for(let x of plan){
        if(queue.indexOf(x) != -1){
            if(queue.indexOf(x) == 0){
                queue.shift();
            }
            else
            return "NO";
        }
    }

    return answer;

}
let s1 = "CBA";
let s2 = "CBDAGE";
console.log(solution(s1, s2));