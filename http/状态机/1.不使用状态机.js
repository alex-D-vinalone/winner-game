let str = 'you are best!'

function myfind(str,code) {
    for(let i=0;i<str.length;i++){
        if(str[i] === code) {
            return i
        }
    }
    return false
}

let num = myfind(str,'a')
console.log(num);

function myChat(str,match) {
    let index = 0
    for(let i=0;i<str.length;i++) {
        if(str[i] === match[index]){
            index++;
        }else {
            index = 0
        }
        if(index > match.length-1){
            return true
        }
    }
    return false
}

let num2 = myChat(str,'best')
console.log(num2);