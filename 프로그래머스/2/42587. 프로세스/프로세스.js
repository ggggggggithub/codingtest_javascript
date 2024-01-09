function solution(priorities, location) {
    var answer = 0;
    const newArray = Array.from({length:priorities.length}, (_, index) => String.fromCharCode(index));
    let num = newArray.length;
    let que = [];
    let target = newArray[location]
    while (que.length !== num){
        let a = priorities[0]
        let isPriorityFound = false
        for(let i=1; i<priorities.length; i++){
            if (a < priorities[i]){
                priorities.push(a)
                priorities.shift()
                newArray.push(newArray[0])
                newArray.shift()
                isPriorityFound = true
                break;
            }
        }
        if (!isPriorityFound){
        que.push(newArray[0])
        priorities.shift()
        newArray.shift()
        }
    }
    answer = que.indexOf(target)+1
    return answer;
}