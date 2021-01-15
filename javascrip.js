let menuToggle=document.querySelector('.menu-toggle');
let menu=document.querySelector('.menubar');
let regbtn=document.querySelector('.regBtn');
let kotakreg=document.querySelector('.kotak_Registrasi');
let kotaksig=document.querySelector('.kotak_masuk');
let btnlog=document.getElementById('btnlogin');

function validasi(){
    var username = document.forms["iniform"]["username"].value;
    var password = document.forms["iniform"]["password"].value;
    if( username == "Taufik" && password == "123123"){
        modalsukses.classList.add("normal");
    }
    else{
        modalgagal.classList.add("normal");
    
    }
}
btnlog.addEventListener('click',function(){
    validasi()
})

regbtn.addEventListener('click',function(){
    kotakreg.classList.add('normal');
    kotaksig.classList.add('kotak_Registrasi')
});

menuToggle.addEventListener('click', function(){
    menu.classList.toggle('normal')
    
});