function solution(n) {
    let answer = "";
    let ar1 = [4,1,2];
    let ans = [];
    function re(n){
        if (n <= 0) {
          for (x of ans) {
            answer += x;
          }
          return answer;
        }
        if (n % 3 === 0) {
            ans.unshift(ar1[0]);
            n = Math.floor(n / 3);
            n = n - 1;
            re(n);
        }
        else {
            ans.unshift(ar1[n % 3]);
            re(Math.floor(n / 3));
        }

    }
    
    re(n);
    return answer;
}
//let n = 1; //1
let n = 10; //41
console.log(1, solution(12));
  //몫-1 = 나머지가 0인 경우
  //그리고 몫, 나머지는 인덱스로 본다