function solution(arr1, arr2) {
    var answer = [[]];
        answer = new Array(arr1.length).fill(0).map(() => new Array(arr2[0].length).fill(0));
    // [00*00+01*10 , 00*01+01*11],
    // [10*00+11*10 , 10*01+11*11],
    // [20*00+21*10 , 20*01+21*11]
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr1[i].length; j++){
            for(let k=0; k<arr2[j].length; k++){
                answer[i][k] += arr1[i][j] * arr2[j][k]
            }
        }
    }
    return answer;
}