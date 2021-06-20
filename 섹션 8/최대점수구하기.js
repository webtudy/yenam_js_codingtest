function solution(m, ps, pt){         
    let answer=Number.MIN_SAFE_INTEGER;
    let max = 0;
    let check = [];
    for(let i = 0; i < ps.length; i++)
    check.push(0);

    function DFS(depth){
        if(depth == ps.length){
            let score = 0;
            let time = 0;
            for(let i = 0; i < ps.length; i++){
                if(check[i] == 1){
                    score += ps[i];
                    time += pt[i];
                }
            }
            if(time <= m && score > max)
            max = score;
        }
        else{
            check[depth] = 1;
            DFS(depth + 1);
            check[depth] = 0;
            DFS(depth + 1);
        }
    }

    DFS(0);
    answer = max;
    return answer;
}

let ps=[10, 25, 15, 6, 7]; // 점수
let pt=[5, 12, 8, 3, 4]; // 시간
console.log(solution(20, ps, pt));