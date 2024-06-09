function solution(a, b, c, d) {
    var answer = 0;
    const frequencyMap = {};
    let arr = [a,b,c,d]
    for (const item of arr) {
    frequencyMap[item] = (frequencyMap[item] || 0) + 1;
  }
    arr = arr.sort((a, b) => {
    const freqA = frequencyMap[a];
    const freqB = frequencyMap[b];
    if (freqA !== freqB) {
      return freqB - freqA; 
    } else {
      return arr.indexOf(a) - arr.indexOf(b); // 빈도수가 같으면 원래 순서 유지
    }
  });
    if (arr.lastIndexOf(arr[0]) === 3){answer = arr[0]*1111}
    else if (arr.lastIndexOf(arr[0]) === 2){answer = (10*arr[0]+arr[3])**2}
    else if (arr.lastIndexOf(arr[0]) === 1){
        if (arr.lastIndexOf(arr[2]) === 3){answer = ((arr[0]+arr[2])*Math.abs(arr[0]-arr[2]))}
        else {answer = arr[2]*arr[3]}
    }
    else if (arr.lastIndexOf(arr[0])=== 0){
             arr = arr.sort((a,b)=>(a-b))
    answer = arr[0]
             }
    return answer;
}