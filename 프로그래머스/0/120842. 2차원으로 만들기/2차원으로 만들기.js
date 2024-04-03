function solution(num_list, n) {
    var answer = [[]];
    let arr = [];
    let arr2 = [];
    for (let i=0; i<num_list.length; i++){
        arr2.push(num_list[i])
        if (arr2.length === n){
            arr.push(arr2)
            arr2 = [];
        }
    }
    answer = arr
    return answer;
}