function solution(a, b) {
    var answer = '';
    let day = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    let newdate = new Date()
    newdate.setFullYear(2016,a-1,b)
    let knowday = newdate.getDay()
    answer = day[knowday]
    return answer;
}