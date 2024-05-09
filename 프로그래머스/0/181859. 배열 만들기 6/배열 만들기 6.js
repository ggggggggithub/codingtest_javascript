function solution(arr) {
    var answer = [];
    let i = 0;
    while(i<arr.length){
        if (!answer.length){answer.push(arr[i]); i++;}
        else{
            if (answer[answer.length-1] === arr[i]){answer.pop();}
        else {answer.push(arr[i])}
        i++;
        }
    }
    if (!answer.length) {answer.push(-1)}
    return answer;
}