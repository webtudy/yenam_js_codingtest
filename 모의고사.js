function solution(answers) {
    var answer = [];
    var plate = [[1, 2, 3, 4, 5],
                [2, 1, 2, 3, 2, 4, 2, 5],
                [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    
    var score = 0;
    var rank = [];

    for(let x in plate){
        score = 0;
        for(let y of answers){
            if(plate[x][0] == y)
            score++;
            plate[x].push(plate[x].shift()); // 젤처음거 빼서 젤뒤로 넣기
        }
        rank.push([score, parseInt(x)+1]);
    }
    
    rank.sort( function(a, b) {
        return b[0] - a[0];
    });
    console.log(rank);

    for(let x of rank){
        if(x[0] == rank[0][0])
        answer.push(x[1]);
    }
    
    return answer;
}
console.log(solution([1,2,3,4,5]))