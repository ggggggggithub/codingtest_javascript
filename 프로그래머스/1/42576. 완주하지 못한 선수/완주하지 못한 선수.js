function solution(participant, completion) {
    var answer = '';
    let ans = [];
    let arr = participant.sort()
    let arr2 = completion.sort()
    for(let i=0; i<arr.length; i++){
        if (arr[i] !== arr2[i]){
            answer = arr[i]
            break;
        }
    }


    return answer;
}