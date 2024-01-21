function solution(book_time) {
    var answer = 0;
let newarr = book_time.map((arr) => {
  return arr.map((subarr) => {
     let str = subarr.replace(":", "");
      let num = 0
      for(let i=0; i<str.length; i++){
          if (i===0){num += Number(str[i])*600}
          if (i===1){num += Number(str[i])*60}
          if (i===2){num += Number(str[i])*10}
          if (i===3){num += Number(str[i])}
      }
      return num
  });
});
    newarr.sort((a,b)=>a[0]-b[0])
    let time = [newarr[0][1]]
    let num = 1;
    for (let i=1; i<newarr.length; i++){
        time.sort((a,b)=>(a-b))
        let room = true;
        for(let j=0; j<time.length; j++){
            if (time[j]+9 >= newarr[i][0]){
                time = time.slice(j)
                time.push(newarr[i][1])
                let num2 = time.length
                if (num2>num){num = num2}
                room = false;
                break;
            }
        }
        if (room){
            time = [newarr[i][1]]
        }
    }

    return num;
}