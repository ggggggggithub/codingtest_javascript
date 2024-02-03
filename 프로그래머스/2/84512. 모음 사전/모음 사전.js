function solution(word) {
    var answer = 0;
    const vowels = [..."AEIOU"];
    const alp = [];
    let str = '';
    const dfs = (str,arr,num) => {
        if (str.length === num){
            alp.push(str)
            return
        }
        arr.forEach((ele) => dfs(str + ele, arr, num))
    }
    for(let i=1; i<=vowels.length; i++){
        dfs(str,vowels,i)
    }
    alp.sort()
    answer = alp.indexOf(word)+1
    return answer;
}