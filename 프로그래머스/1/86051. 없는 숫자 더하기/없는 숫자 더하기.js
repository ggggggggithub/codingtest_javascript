function solution(numbers) {
    var answer = 0;
    let ten = [0,1,2,3,4,5,6,7,8,9]

    for(let i=0; i<ten.length; i++){
        if (!numbers.includes(ten[i])){
            answer += ten[i]
        }
    }
    return answer;
}