function solution(arr1, arr2) {
    var answer = [[]];
    for(let i=0; i<arr2.length; i++){
        for(let j=0; j<arr2[i].length; j++){
            arr1[i][j] += arr2[i][j]
        }
    }
    answer = arr1
    return answer;
}