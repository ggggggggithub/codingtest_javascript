function solution(progresses, speeds) {
    var answer = [];
    let ans = [];
    let count =0;
    let count2 = 1;
    let time =0;
    for (let i=0; i<progresses.length; i++){
        while (progresses[i] < 100){
            progresses[i] += speeds[i]
            time ++
        }
        ans.push(time)
        time =0;
    }
    for (let j=0; j<ans.length; j++){
        if (j===0){
            count = ans[j]
            continue;
        }
        if (count < ans[j] && j===ans.length-1){
            answer.push(count2)
            answer.push(1)
            break;
        }
        if (count >= ans[j] && j===ans.length-1){
            answer.push(count2+1)
            break;
        }

        if (count >= ans[j]){
            count2 ++
        }
        if (count < ans[j]){
            answer.push(count2)
            count = ans[j]
            count2 = 1
        }
    }
    return answer;
}