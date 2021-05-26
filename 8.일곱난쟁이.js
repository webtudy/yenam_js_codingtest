function solution(arr){
    let answer=arr;
    let total = 0;
    for(let i of arr)
        total += i; // 배열 원소의 합
    for(let i=0; i<8; i++)
    {
        for(let j=i+1; j<9; j++)
        {
            if((answer[i]+answer[j])== total - 100){ // 총 원소의 합 - 두 원소의 합 이 100이라면
                answer.splice(j, 1); // splice(시작인덱스, 지울 인덱스 개수, 넣을 원소)
                answer.splice(i, 1); // 두원소를 배열에서 지우고
                break;
            }
        }
    }
    return answer; // 답 반환
}

let arr=[20, 7, 23, 19, 10, 30, 10, 8, 13];
console.log(solution(arr));
