function solution(n){
    let answer=[]; // 정답배열
    let check = [];
    for(let i = 0; i < n; i++)
    check.push(0);
    console.log(check);

    function DFS(depth){ // DFS 함수 0부터 탐색, 수는 depth+1
        if(depth == n){ // 최고깊이까지 탐색을 마쳤으면
            let temp = [];
            for(let i = 0; i < n; i++){
                if(check[i] == 1)
                temp.push(i+1);
            }
            answer.push(temp); // 정답배열에 넣어줌        
        }
        else{ // 아니라면
            check[depth] = 1; // 현재노드 담을지말지 정한후
            DFS(depth + 1); // 다음노드 탐색
            check[depth] = 0;
            DFS(depth + 1);
        }
    }
    DFS(0);
    return answer;
}

console.log(solution(3));