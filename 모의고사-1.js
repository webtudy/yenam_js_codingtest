function solution(answers) {
    var answer = [],
		    s1 = [1, 2, 3, 4, 5],
		    s2 = [2, 1, 2, 3, 2, 4, 2, 5],
		    s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
		    scoreM = new Map();

    scoreM.set(1, 0);
    scoreM.set(2, 0);
    scoreM.set(3, 0);

    for(let x in answers){ // 1 2 3 4 5 6 7 8 9 10 11 12 13
        if(answers[x] == s1[(x%5)])
        scoreM.set(1, scoreM.get(1)+1)
        if(answers[x] == s2[(x%8)])
        scoreM.set(2, scoreM.get(2)+1)
        if(answers[x] == s3[(x%10)])
        scoreM.set(3, scoreM.get(3)+1)
    }

    var max = 0;

    for(let score of scoreM.keys())
        if(scoreM.get(score) > max)
            max = scoreM.get(score);
        
    for(let score of scoreM.keys())
        if(scoreM.get(score) == max)
            answer.push(score);

    return answer;
}

console.log(solution([1,3,2,4,2]))