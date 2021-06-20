function solution(n, m){
    let answer=[]; // 정답배열
    let check = [];
    for(let i = 0; i < m; i++)
    check.push(0);
    console.log(check);

    function DFS(depth){ // DFS 함수 0부터 탐색, 수는 depth+1
        if(depth == m){ // 최고깊이까지 탐색을 마쳤으면
            answer.push(check.slice());  
        }
        else{ // 아니라면
            for(let i = 1; i <=n; i++){
                check[depth] = i; // 현재노드 담을지말지 정한후
                DFS(depth + 1); // 다음노드 탐색
            }
        }
    }
    DFS(0);
    return answer;
}

console.log(solution(3, 2));