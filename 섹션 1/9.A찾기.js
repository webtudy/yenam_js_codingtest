function solution(s){
    let answer=s;
    answer=answer.replace(/N/g, "#"); // answer 문자열의 A를 찾아서 #으로 바꿈
    return answer;
}

let str="BANANA";
console.log(solution(str));