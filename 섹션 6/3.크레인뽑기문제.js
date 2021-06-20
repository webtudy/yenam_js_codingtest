function solution(s1, s2){
    let answer = [];
    let count = 0;
    
    for(let x of s2)
    {
        for(let y in s1)
        if(s1[y][x - 1] != 0){
        answer.push(s1[y][x - 1]);
        s1[y][x - 1] = 0;
        break;
        }
    }

    for(let i = 0; i < answer.length; i++){
        if(answer[i] == answer[i + 1]){
            answer.splice(i,2);
            i = i - 2;
            count = count + 2;
        }
    }
    return count;
}

let board = [[0,0,0,0,0],
            [0,0,1,0,3],
            [0,2,5,0,1],
            [4,2,4,4,2],
            [3,5,1,3,1]];
let move = [1,5,3,5,1,2,1,4]; 
console.log(solution(board, move));