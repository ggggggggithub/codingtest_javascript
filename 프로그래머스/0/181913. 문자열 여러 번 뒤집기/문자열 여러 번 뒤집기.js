function solution(my_string, queries) {
    var answer = '';
    let arr = my_string.split("")
    for(let i=0; i<queries.length; i++){
        let num1 = queries[i][0]
        let num2 = queries[i][1]+1
        let newarr = arr.slice(num1,num2).reverse()
        arr.splice(num1,(num2-num1), ...newarr)
    }
    answer = arr.join("")
    return answer;
}