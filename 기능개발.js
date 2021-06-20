function solution(progresses, speeds) {
    let answer = [];
    let time = [];
    for(let x in progresses){
        time.push(Math.ceil((100 - progresses[x])/speeds[x]));
    }
    let release = 0;
    let now = time[0];
    for(let i = 0; i <= time.length; i++){
        if(time[i] <= now){
            release++;
        }
        else{
            answer.push(release);
            release = 1;
            now = time[i];
        }
    }
    return answer;
}
let progresses = [93, 30, 55];
let speeds = [1, 30, 5];
console.log(solution(progresses, speeds))