// VOLUME BALOK
function balok(panjang, lebar, tinggi){
    return panjang * lebar * tinggi
}

let volume = balok(40, 20,15)
document.write('Volume Balok = ' + volume)
// VOLUME BALOK

document.write('<br>')

// LUAS PERMUKAAN BALOK
function Permukaanbalok( p, l, t){
    return p * l + l * t + p * t
}
let luaspermukaanbalok = Permukaanbalok(40, 20, 15)
let hasil = luaspermukaanbalok * 2
document.write('Luas Permukaan Balok = ' + hasil)
// LUAS PERMUKAAN BALOK
