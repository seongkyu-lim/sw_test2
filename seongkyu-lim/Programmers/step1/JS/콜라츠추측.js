function solution(num) {
    var cnt = 0;
    
    while(num != 1){
        if (num % 2 == 0){
            num = num/2
        }
        else if (num % 2 == 1){
            num = (num*3) +1
        }
        cnt += 1
        if (cnt >= 500){
            cnt = -1
            break
        }
    }
    return cnt;
}