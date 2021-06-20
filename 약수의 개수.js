function solution(left, right) {
    var m, answer = 0;
    
    for(var i = left; i <= right; i++){
        m = Math.sqrt(i);
        if( m == Math.floor(m))
            answer -= i;
        else
            answer += i;
    }    
    return answer;
}

console.log(solution(24, 27));