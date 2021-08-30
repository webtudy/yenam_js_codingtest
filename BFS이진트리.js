function complete(arr){
    let sum = 0;
    for(let x of arr){
        sum += x;
    }
    return sum;
}

function solution(n, computers) {
    var answer = 0;
    let ch = Array.from({ length: n }, (v, i) => 0); // [1, 1, 0]
    let que = [];
    while(complete(ch) != n){
        console.log(1, que);
        que.push(ch.indexOf(0)); // 0

        while(que.length){ // [ 1 ]
            console.log(2, que);
            let node = que.shift();
            ch[node] = 1;
            for(let i = 0; i < n; i++){ // [  ]
                if(i == node) continue;
                else if(computers[node][i] == 1){
                    que.push(i);
                    computers[i][node] = 0;
                }
            }
        }
        
        answer++;    
    }
    
    return answer;
}
console.log(solution(3,	[[1, 1, 0], [1, 1, 1], [0, 1, 1]]));
//[[1, 1, 0],
// [0, 1, 0], 
// [0, 0, 1]]