function solution(cards1, cards2, goal) {
    var answer = '';
        answer = "Yes"
    let i = 0
    let j = 0
    while(goal.length !== 0 ){
        if (cards1[i] === goal[0]){
            i++
            goal.shift()
            continue;
        }
        if (cards2[j] === goal[0]){
            j++
            goal.shift()
            continue;
        }
        else {return "No"}
    }
    return answer;
}