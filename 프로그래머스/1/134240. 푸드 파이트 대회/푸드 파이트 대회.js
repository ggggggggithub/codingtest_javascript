function solution(food) {
    var answer = '';
    let count = 0;
    for(let i=1; i<food.length; i++){
        if (food[i] %2 !== 0){
            food.splice(i,1,food[i]-1)
        }
        if (food[i] %2 === 0){
             food.splice(i,1,food[i]/2)
        }
    }
    for (let i=1; i<food.length; i++){
        while (food[i] > count){
        answer += i
        count++
        }
        count = 0
    }
    answer += 0
    for (let i=food.length-1; i>=1; i--){
         while (food[i] > count){
        answer += i
        count++
        }
        count = 0
    }
    
    return answer;
}