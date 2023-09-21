"use strict";

const kahvalti = [{ isim: 'Menemen', id: 0, img: 'img/menemen.jpg', }, { isim: 'Kahvaltı Tabağı', id: 1, img: 'img/kahvalti.jpg', }, { isim: 'Sucuklu Yumurta', id: 2, img: 'img/sucuklu.jpg', }, { isim: 'Haşlanmış Yumurta', id: 3, img: 'img/haslanmis.jpg', }];
const anayemek = [{ isim: 'Mantarlı Tavuk Sote', id: 4, img: 'img/mantarlitavuk.jpg', }, { isim: 'Mantarlı Kırmızı Et Sote', id: 5, img: 'img/mantarlietsote.jpg', }, { isim: 'Kırmızı Et Sote', id: 6, img: 'img/kirmizietsote.jpg', }, { isim: 'Tavuk Sote', id: 7, img: 'img/tavuksote.jpg', }];
const tatli = [{ isim: 'Sütlaç', id: 8, img: 'img/sutlac.jpg', }, { isim: 'Kazandibi', id: 13, img: 'img/kazandibi.jpg', }, { isim: 'Güllaç', id: 9, img: 'img/gullac.jpg', }];
const icecek = [{ isim: 'Kutu Cola', id: 10, img: 'img/kutucola.jpg', }, { isim: 'Kutu Cola (Şekersiz)', id: 11, img: 'img/kutucolasekersiz.jpg', }, { isim: 'Ayran', id: 12, img: 'img/ayran.jpg', }];

const menu = [{ isim: 'Menemen', id: 0, img: 'img/menemen.jpg', adet: 1 }, { isim: 'Kahvaltı Tabağı', id: 1, img: 'img/kahvalti.jpg', adet: 1 }, { isim: 'Sucuklu Yumurta', id: 2, img: 'img/sucuklu.jpg', adet: 1 }, { isim: 'Haşlanmış Yumurta', id: 3, img: 'img/haslanmis.jpg', adet: 1 }, { isim: 'Mantarlı Tavuk Sote', id: 4, img: 'img/mantarlitavuk.jpg', adet: 1 }, { isim: 'Mantarlı Kırmızı Et Sote', id: 5, img: 'img/mantarlietsote.jpg', adet: 1 }, { isim: 'Kırmızı Et Sote', id: 6, img: 'img/kirmizietsote.jpg', adet: 1 }, { isim: 'Tavuk Sote', id: 7, img: 'img/tavuksote.jpg', adet: 1 }, { isim: 'Sütlaç', id: 8, img: 'img/sutlac.jpg', adet: 1 }, { isim: 'Kazandibi', id: 13, img: 'img/kazandibi.jpg', adet: 1 }, { isim: 'Güllaç', id: 9, img: 'img/gullac.jpg', adet: 1 }, { isim: 'Kutu Cola', id: 10, img: 'img/kutucola.jpg', adet: 1 }, { isim: 'Kutu Cola (Şekersiz)', id: 11, img: 'img/kutucolasekersiz.jpg', adet: 1 }, { isim: 'Ayran', id: 12, img: 'img/ayran.jpg', adet: 1 }]

let siparis = [];
let butonbirikimi = [];
const baslangicbuton = document.querySelector('#baslangic');
const anayemekbuton = document.querySelector('#anayemek');
const tatlibuton = document.querySelector('#tatli');
const icecekbuton = document.querySelector('#icecek');
let siparis_sil;
let siparis_alt;

const urunlergrup = document.querySelector('#urunlergrup');
const siparislist = document.querySelector('#siparislistesi');
const siparisicerik2 = document.querySelector('#siparisicerik2');
let adet;
let onayli_siparis = [];
let siparis_pushed;
const siparisgrup = document.querySelector('#siparisgrup');
const siparisonaylabuton = document.querySelector('#siparisonaylabuton');
const siparislistesigrup = document.querySelector('#siparislistesigrup');
const siparislistesiheading = document.querySelector('#siparislistesiheading');



let x = false;
let controlsiparis;
let html, html2, html3, html4, urunsecimi, secilenkategori, sonuc, yedeksonuc;


baslangicbuton.addEventListener('click', function () {
    urunlergrup.innerHTML = '';
    kategorigetir(kahvalti);

    secilenkategori = kahvalti;
});
anayemekbuton.addEventListener('click', function () {
    urunlergrup.innerHTML = '';
    kategorigetir(anayemek);

    secilenkategori = anayemek;
});
tatlibuton.addEventListener('click', function () {
    urunlergrup.innerHTML = '';
    kategorigetir(tatli);

    secilenkategori = tatli;
});
icecekbuton.addEventListener('click', function () {
    urunlergrup.innerHTML = '';
    kategorigetir(icecek);

    secilenkategori = icecek;
});

siparisonaylabuton.addEventListener('click', function () {

    siparisonayla(siparis);
    siparis = [];



    siparis_sil = document.querySelectorAll('.siparis_sil');
    siparis_alt = document.querySelectorAll('.siparis_alt');


    siparis_sil.forEach(e => {
        e.addEventListener('click', function () {
            siparissil(e.parentElement.parentElement.id);
        });
    });

})



function siparissil(silinecek_siparis) {
    console.log(silinecek_siparis);


    let bulunan_index = onayli_siparis.findIndex(e => e.id == silinecek_siparis);

    for (let i = 0; i < onayli_siparis.length; i++) {

        if (i == bulunan_index) {
            onayli_siparis.splice(i, 1);
            console.log('index silindi : ', bulunan_index)
            document.getElementById(`${silinecek_siparis}`).remove();
        }
    }
    silinecek_siparis = 0;
}

function kategorigetir(kategori) {
    for (let i = 0; i < kategori.length; i++) {
        html = `
        <div class="urunler__urun" id="${kategori[i].id}">
        <div class="urunler__urun--img">
            <img src="${kategori[i].img}" alt="urunimg">
        </div>
        <div class="urunler__urun--heading">
            <span>${kategori[i].isim}</span>
        </div>
    </div>    `
        urunlergrup.insertAdjacentHTML('beforeend', html);
    }

    urunsecimi = document.querySelectorAll('.urunler__urun');

    urunsec(urunsecimi);
}

function urunsec(event) {
    for (let i = 0; i < event.length; i++) {
        event[i].addEventListener('click', function () {
            siparisonaylabuton.style.display = 'block';
            siparislistesigrup.style.display = 'flex';
            siparislistesiheading.style.display = 'block';
            siparislistpush(event[i]);
        })
    }
}

function siparislistpush(secilen) {
    adet = document.querySelectorAll('.adet');
    sonuc = menu.findIndex(e => e.id == secilen.id);
    console.log(secilen);
    controlsiparis = true;

    for (let i of siparis) {
        if (i.id == secilen.id) {
            controlsiparis = false;

        }
    }

    if (controlsiparis) {

        console.log('true döndü')

        siparis.push(menu[sonuc]);

        html2 = `                <div class="urunler__urun">
                <div class="siparislistesi__img">
                    <img src="${menu[sonuc].img}" alt="urunimg">
                </div>
                <div class="urunler__urun--heading">
                    <span>${menu[sonuc].isim}</span><br>
                    <span class='adet' id='${menu[sonuc].id}'>${menu[sonuc].adet}</span>
                </div>
            </div>
            `;
        siparislist.insertAdjacentHTML('beforeend', html2);
        siparislist.style.display = 'flex';
        yedeksonuc = sonuc;
        controlsiparis = false;

    } else if (!controlsiparis && siparis.length > 0) {
        menu[sonuc].adet += 1;
        for (let i of adet) {
            if (i.id == menu[sonuc].id) {
                i.adet = menu[sonuc].adet;
                i.innerHTML = menu[sonuc].adet;
            }

        }

        yedeksonuc = sonuc;
        controlsiparis = true;
    }

    for (let i of butonbirikimi) [
        i.addEventListener('click', function () {
            console.log('basildi', i)
        })
    ]


}

function siparisonayla(siparislistesi) {
    let l = Math.floor(Math.random() * 100000)





    html3 = `
     <div class="siparis_alt" id='${l}'>
                    <div class="siparisicerik">
                        <span class="siparisicerik--icerik">Sipariş İçeriği: 🧀 🥙 🍫 🥤</span>
                    </div>
                    <div class="siparisgoruntule">
                        <button id="" class="btn btn-danger  siparis_sil">Sipariş Sil</button>
                    </div>
    <div class="siparisicerik2" id="siparisicerik2">

     </div>
                </div>


    `;

    siparisgrup.insertAdjacentHTML('beforeend', html3);


    siparis_pushed = document.getElementById(`${l}`);

    onayli_siparis.push(
        {
            id: l, icerik: [

            ]
        }
    )


    for (let i of siparislistesi) {


        html4 = `
    <div class="urunler__urun2 active-display">
                            <div class="siparislistesi__img">
                                <img src="${i.img}" alt="urunimg">
                            </div>
                            <div class="urunler__urun--heading">
                                <span>${i.isim}</span><br>
                                <span class='adet' id=''>${i.adet}</span>
                            </div>
                        </div>
    `;


        let bulunan_id = onayli_siparis.findIndex(e => e.id == l);
        onayli_siparis[bulunan_id].icerik.push(i)







        siparis_pushed.insertAdjacentHTML('beforeend', html4);
    }





    console.log(onayli_siparis);
    console.log(siparislistesi)

    siparisonaylabuton.style.display = 'none';
    siparislistesiheading.style.display = 'none';
    siparisgrup.style.display = 'block';
    siparislist.innerHTML = '';
    siparis = [];


}