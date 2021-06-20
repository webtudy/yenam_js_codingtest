function solution(n, lost, reserve) {
    var answer = 0;
    let lostlen = lost.length;
    let count = 0;
    
    lost.sort();
    reserve.sort();

    for(let x = 0; x < lost.length; x++){
        for(let y = 0; y < reserve.length; y++){
            if(lost[x] == reserve[y]){
                lost.splice(x,1);
                reserve.splice(y,1);
                x--;
                y--;
            }
        }
    }
    for(let x = 0; x < reserve.length; x++){
        for(let y = 0; y < lost.length; y++){
            if(lost[y] == reserve[x] - 1 || lost[y] == reserve[x] + 1){
                lost.splice(y,1);
                reserve.splice(x,1);
                y--;
                x--;
            }
        }
    }
    answer = n - lost.length;
    return answer;
} // 5, [2, 4], [1, 3, 5]

console.log(solution( 5, [7,3,5], [4, 1]));