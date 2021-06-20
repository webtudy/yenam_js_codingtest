function solution(N, stages) {
    var answer = [];
    let stay = Array.from({length:N}, ()=>0);
    let step = Array.from({length:N}, ()=>0);
    let per = [];
    let master = 0;
    for(let x of stages){
        if(x == N+1){
            master++;
            stay[x-2]++;
        }
        else
            stay[x-1]++;
    }
    
    for(let x = stay.length - 1; x >= 0; x--){
        if(x == stay.length - 1)
            step[x] = stay[x];
        else
        step[x] = stay[x]+ step[x+1];
    }
    
    for(let i = 0; i < step.length; i++){
        if(i == step.length - 1){
            per.push([i+1, (stay[i] - master) / step[i]]);
        }
        else
            per.push([i+1, stay[i]/step[i]]);
    }
    
    per.sort( function(a, b) {
        return b[1] - a[1];
    });

    for(let x in per)
    answer.push(per[x][0]);
    
    
    return answer;
}

console.log(solution(	5, [2, 1, 2, 6, 2, 4, 3, 3]));