module.exports = function reverse (n) {
    n = String(Math.abs(n));
    let i = n.length - 1;
    let str = '';

    while(i >= 0){
        str += n[i];
        i--;
    }
    return str;
}
