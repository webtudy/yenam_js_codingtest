function solution(day, arr){
    let answer = 0;
    let i = 0;
    for(i of arr)
    {
      if(i % 10 == day) // 해당 차량번호의 1의자리수가 날짜와 일치하다면
        answer ++; // 카운트
    }

    return answer;
}

let arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
