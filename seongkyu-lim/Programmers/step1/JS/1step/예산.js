function solution(d, budget) {
    var answer = 0;
    d = d.sort()
    for (let value of d){
        if (value <= budget && budget !=0 && value != 0) {
            budget -= value;
            answer += 1;
        } else {break;}
    }
    return answer;
}