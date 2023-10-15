function solution(num, k) {
    var answer = 0;
    answer = -1
    let arr = String(num).split('');
    for(let i=0; i<arr.length; i++){
        if (String(k) === arr[i]){
            answer = (arr.indexOf(String(k))+1)
        }
   
    }
    return answer;
}