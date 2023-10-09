function solution(my_string) {
    var answer = [];
    let num = [0,1,2,3,4,5,6,7,8,9]
    for(let i=0; i<my_string.length; i++){
        for (let k=0; k<num.length; k++){
            if(Number(my_string[i]) === num[k]){
                answer.push(num[k])
            }
        }
    }
    answer.sort(function (a, b) {
  return a - b;
});
    return answer;
}