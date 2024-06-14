function solution(numbers) {
    var answer = [];
    let arr2 = [];
    let arr = [numbers[numbers.length-1]];
    for(let i=numbers.length-2; i>=0; i--){      
        let num = numbers[i]
        let ans = true;
            for(let j=0; j<arr.length; j++){
                if (num >= arr[j]){
                    arr.shift();
                    j--;
                }
                else{
                    answer.push(arr[j]);
                    ans = false;
                    break;
                }
            }
        if (ans){answer.push(-1)}
        arr.unshift(num)
        }
    answer.reverse()
    answer.push(-1)
    return answer;
}