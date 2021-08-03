function solution(limit, dog, weight){
    let answer = 0; // 정답배열
    let check = [];
    let max = 0;
    for(let i = 0; i < dog; i++)
    check.push(0);
    console.log(check);

    function DFS(depth){ // DFS 함수 첫번째 개부터 탐색
        if(depth == dog){ // 최고깊이까지 탐색을 마쳤으면
            let temp = [];
            let sum = 0;
            for(let i = 0; i < dog; i++){
                if(check[i] == 1){
                temp.push(weight[i]);
                sum += weight[i];
                }
            } //체크리스트 확인후 총 강아지 무게 확인
            if(max < sum && sum < limit) // 무게가 이전 최댓값보다 크고 한계값보다 작다면
            max = sum; //갱신
        }
        else{ // 아니라면
            check[depth] = 1; // 현재개 담을지말지 정한후
            DFS(depth + 1); // 다음개 탐색
            check[depth] = 0;
            DFS(depth + 1);
        }
    }
    DFS(0);
    answer = max;
    return answer;
}
let arr = [81,58,42,33,61];
console.log(solution(259, 5, arr));