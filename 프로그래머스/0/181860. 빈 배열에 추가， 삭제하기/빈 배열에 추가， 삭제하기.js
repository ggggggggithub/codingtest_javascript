function solution(arr, flag) {
    var answer = [];
    let str = '';
    for (let i=0; i<flag.length; i++){
        if (flag[i]){
            str += String(arr[i]).repeat(arr[i]*2)
        }
        else {str = str.slice(0,str.length-arr[i])}
    }
    for (let i=0; i<str.length; i++){
        answer.push(Number(str[i]))
    }
    return answer;
}