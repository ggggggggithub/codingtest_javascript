function solution(numbers) {
    var answer = 0;
    let newarr = [];
    let str = '';
    let numarr = numbers.split("")    
    const dfs = (arr, word) => {
        if (arr.length===1){
            newarr.push(Number(word + arr[0]))
            return
        }
        for (let i = 0; i < arr.length; i++){
            const newWord = word + arr[i]
            const arrslice = [...arr.slice(0, i), ...arr.slice(i + 1)];
            newarr.push(Number(newWord))
            dfs(arrslice, newWord)
        }
    }
    dfs(numarr,str)
    newarr = [...new Set(newarr)]
    const isprime = (num) => {
        if (num < 2){
            return false
        }
        for (let i=2; i <= Math.floor(Math.sqrt(num)); i++){
            if (num%i === 0){
                return false
            }    
        }
         return true
    }

    for(let i=0; i<newarr.length; i++){
        if (isprime(newarr[i])){
           answer++
        }
    }
    
    return answer;
}