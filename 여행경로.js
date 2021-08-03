function solution(tickets) {
    let answer=[]; // 정답배열
    let check = [];
    let flag = 0;
    tickets.sort();

    for(let i = 0; i < tickets.length; i++)
    check.push(0); // 티켓 썼는지 안썼는지
    
    function DFS(depth, arr, i, path){ // DFS 함수 0부터 탐색, 수는 depth+1
        if(flag == 1) return;
        else if(depth == tickets.length - 1){ // 최고깊이까지 탐색을 마쳤으면
            console.log("뀨",arr, path);
            path.push(arr[1]);
            answer = path;
            flag = 1;
            return ;
        }
        else{ 
            for(let j = 0; j< tickets.length; j++){
                if(check[j] == 0 && tickets[j][0] == arr[1]){
                    path.push(arr[1]);
                    console.log(arr,check, path);
                    check[j] = 1;
                    DFS(depth + 1, tickets[j], j, path);
                    check[j] = 0;
                }
                
            }
            
        }
    }
    
    for(let i = 0; i < tickets.length; i++){
        let path = [tickets[i][0]];
        check[i] = 1;
        DFS(0, tickets[i], i, path);
        check[i] = 0;
    }
    
    DFS(0);
    
    return answer;
}

console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]));

//[["ICN", "SFO"], 
//["ICN", "ATL"], 
//["SFO", "ATL"], 
//["ATL", "ICN"], 
//["ATL","SFO"]]