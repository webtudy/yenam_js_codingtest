function solution(s) { //1 2 3 4 5 6
    var answer = '';
    var len = s.length;
    if((len%2) == 0){
        answer+=s[(len/2 - 1)];
        answer+=s[(len/2)];
    }
    else
    answer+=s[Math.floor(len/2)];
    return answer;
}

let s ="abcdee";
console.log(solution(s));