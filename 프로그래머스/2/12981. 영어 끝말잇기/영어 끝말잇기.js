function solution(n, words) {
    var answer = [];
    let wrong = 0;
    let word = [words[0]];
    let last = words[0][words[0].length-1];
    for(let i=1; i<words.length; i++){
        if (words[i][0] !== last){
            wrong = i+1
            break;
        }
            if (word.includes(words[i])){
        wrong = i+1
        break;
    }
        if (!word.includes(words[i])){
            word.push(words[i])
            }

        last = words[i][words[i].length-1]
    }
    if (wrong === 0){
        answer.push(0)
        answer.push(0)
    }
    else if (wrong % n === 0){
        answer.push(n)
        answer.push(wrong/n)
    }
    else {
        answer.push(wrong%n)
        answer.push(Math.floor(wrong/n)+1)
    }


    return answer;
}