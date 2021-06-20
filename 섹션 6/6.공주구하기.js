function solution(n, k){
    let answer;
    let queue=Array.from({length:n}, (v, i)=>i+1);  // 1부터 n까지의 배열만들기
    // 1 2 3 4 5 6 7 8
    while(queue.length){
        for(let i=1; i<k; i++){
            queue.push(queue.shift()); //현재 배열중 첫번째 두번째를 순서대로 뒤로보냄 
        } // 
        queue.shift(); // 세번째왕자 공주구하러감
        if(queue.length===1) answer=queue.shift(); // 마지막 남은 한명을 정답처리
    }  
    return answer;
}

console.log(solution(8, 3));