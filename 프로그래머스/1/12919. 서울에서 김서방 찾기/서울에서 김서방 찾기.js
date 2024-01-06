function solution(seoul) {
    var answer = '';
    let num = 0;
    for(let i=0; i<seoul.length; i++){
        if (seoul[i]=== "Kim"){
            num = i
        }
    }
    answer = `김서방은 ${num}에 있다`
    return answer;
}