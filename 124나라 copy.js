function solution(n) {
  var Baseto = [4,1,2];
  var ternary = 0;
  var tern = 1;
  var answer = "";
  while(n){
      ternary += tern * Baseto[n % 3];
      if(n%3 == 0)
          n = parseInt(n/3) - 1;
      else
          n = parseInt(n/3);
      tern *= 10;
  }
  answer = String(ternary);
  return answer;
}
console.log(solution(12));
//let n = 1; //1
let n = 10; //41
console.log(1, solution(12));
  //몫-1 = 나머지가 0인 경우
  //그리고 몫, 나머지는 인덱스로 본다