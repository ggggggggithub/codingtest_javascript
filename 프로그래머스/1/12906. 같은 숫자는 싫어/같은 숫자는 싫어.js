function solution(arr)
{
    var answer = [];
    let a = arr[0];
    answer.push(a)
    for(let i=1; i<arr.length; i++){
        if (arr[i] !== a){
            a = arr[i]
            answer.push(a)
        }
    }
    return answer;
}