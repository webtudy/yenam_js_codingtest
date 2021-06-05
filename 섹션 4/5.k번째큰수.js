function solution(n, k, card){
    let answer = [];
    for(let i = 0; i < card.length; i++){
        for(let j = i + 1; j < card.length; j++){
            for(let k = j + 1; k < card.length; k++){
                answer.push(card[i] + card[j] + card[k]);
            }
        }
    }

    answer.sort((a,b) => b-a);

    let num = answer.length;
    for(let i = 0; i < answer.length; i++)
    {
        for(let j = i + 1; j < answer.length; j++)
        {
            if(answer[i] == answer[j]) // 3 4
            {
            answer.splice(j, 1);
            j--;
            }
        }
    }

    return answer[k - 1];
}
let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));