function solution(s) {
    var answer = '';
    let ans = [];
    let str =  '';
    let arr = s.split(" ")
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
        if(j%2 === 0){
            str += arr[i][j].toUpperCase()
        }
        else {str += arr[i][j].toLowerCase()}
     }
        ans.push(str)
        str = '';
    }
    answer = ans.join(" ")
    return answer;
}