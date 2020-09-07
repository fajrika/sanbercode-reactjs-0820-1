class BangunDatar{
    constructor(nama){
        this.nama = nama;
    }
    luas = () => ""
    keliling = () => ""
}
class Lingkaran extends BangunDatar{
    constructor(nama){
        super(nama);
    }
    get r(){
        return this._r;
    }
    set r(x){
        this._r = x;
    }
    luas = () => this.r % 7 === 0 ? Math.pow(this.r, 2) * (22 / 7) : Math.PI * Math.pow(this.r, 2);
    keliling = () => this.r % 7 === 0 ? 2 * this.r * (22 / 7) : Math.PI * this.r * 2;
}
class Persegi extends BangunDatar{
    constructor(nama){
        super(nama);
    }
    get sisi(){
        return this._sisi;
    }
    set sisi(x){
        this._sisi = x;
    }
    luas = () => Math.pow(this.sisi,2);
    keliling = () => 4 * this.sisi;
}
let bangunDatar = new BangunDatar('Bangun Datar');
console.log(bangunDatar.luas());
console.log(bangunDatar.keliling());
let lingkaran = new Lingkaran('lingkaran1');
lingkaran.r = 7;
console.log(lingkaran.r);
console.log(lingkaran.luas());
console.log(lingkaran.keliling());
let persegi = new Persegi('persegi1');
persegi.sisi = 7;
console.log(persegi.sisi);
console.log(persegi.luas());
console.log(persegi.keliling());