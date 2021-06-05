function solution(s){  
    let answer="", len = 0;
    for(let x of s){
        if(x.length > len)
        {
            len = x.length;
            answer = x;
        }
    }
    return answer;
}
let str=["teacher", "time", "student", "good"];
console.log(solution(str));