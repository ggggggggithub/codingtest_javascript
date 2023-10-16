function solution(my_string) {
    var answer = '';
    let arr = my_string.toLowerCase().split('');
    arr.sort()
    for(let i=0; i<arr.length; i++){
        answer += arr[i]
    }
    return answer;
}