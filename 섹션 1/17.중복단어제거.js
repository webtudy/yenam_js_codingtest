function solution(s){  
    let answer = [];
    for(let x in s)
    {
        if(s.indexOf(s[x]) == x) 
            answer.push(s[x]);
    }
    return answer;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));