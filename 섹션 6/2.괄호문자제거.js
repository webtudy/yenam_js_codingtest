function solution(s1){
    let answer = "";
    let flag = 0;
    for(let x of s1){
        if( x == '(')
        flag++;
        else if ( x == ')')
        flag--;
        else if(flag == 0){
        answer += x;
        }
    }
    return answer;
}

let s = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(s));