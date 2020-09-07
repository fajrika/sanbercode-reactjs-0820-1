volumeBalok = (...s) => {
    if(s[2])    console.log(`Hasil Volume Balok : ${s[0]*s[1]*s[3]}`)
    else        console.log('Data Kurang')
}
volumeKubus = (...s) => {
    s.forEach((el,k) => {
        console.log(`Hasil Volume Kubus ke-${k+1} : ${Math.pow(el,3)}`);
    });
    if(!s[0]) console.log('Data Tidak Ada !')
}

volumeBalok(1,3,5,1,2,3);
volumeKubus(1,3,5,1,2,3);
// hasil
// Hasil Volume Balok : 3
// Hasil Volume Kubus ke-1 : 1
// Hasil Volume Kubus ke-2 : 27
// Hasil Volume Kubus ke-3 : 125
// Hasil Volume Kubus ke-4 : 1
// Hasil Volume Kubus ke-5 : 8
// Hasil Volume Kubus ke-6 : 27