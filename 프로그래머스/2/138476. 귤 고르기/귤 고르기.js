function solution(k, tangerine) {
    var answer = 1;
    let arr = tangerine.sort((a,b)=>(a-b))
    const countMap = arr.reduce((map, element) => {
  map[element] = (map[element] || 0) + 1;
  return map;
}, {});
const sortedArr = Object.entries(countMap).sort((a, b) => b[1] - a[1]);
const result = sortedArr.flatMap(([element, count]) => Array(count).fill(Number(element)));
    let num = result[0]
    let a = 0
    for(let i=0; i<result.length; i++){
        if (a === k){
            break;
        }
        if (result[i] !== num){
            answer ++
            num = result[i]
        }
        a++
    }
    
    return answer;
}