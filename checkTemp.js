let a = 0
function checkTemp(a) {
    if (a<20 ){
    return -1
    } else if (a>=20 && a<=40){
    return 0
    }
    else if (a>=41 && a<=60)
    return 1
}
checkTemp(50)