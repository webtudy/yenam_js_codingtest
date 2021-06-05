function solution(s,c){
    let answer = s;
    for(let x in answer)
    {
        if(answer[x] == c)
        answer[x]++;
    }
    return answer;
}

let str="COMPUTERPROGRAMMING";
let char = "R";
console.log(solution(str, char));