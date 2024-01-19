function solution(genres, plays) {
    var answer = [];
    const obj = {}
    for (let i = 0; i < genres.length; i++){
        if(obj.hasOwnProperty(genres[i])){
            obj[genres[i]][0] += plays[i];
            obj[genres[i]][1].push(i)
            obj[genres[i]][1].sort((a,b)=>plays[b]-plays[a]).splice(2)
        }
        else {
            obj[genres[i]] = [plays[i],[i]]
        }
    }
    const val = Object.values(obj).sort((a,b)=>b[0]-a[0]);
    const secondval = val.map(val => Array.isArray(val) ? val[1] : val)
    answer = secondval.reduce((acc, cur) => acc.concat(cur), [])


    return answer;
}