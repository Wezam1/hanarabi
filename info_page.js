sign = document.getElementById("sign_wrapper");
year = document.getElementById("year");
people = document.getElementById("people");
economy = document.getElementById("economy");
h1 = document.getElementById("h1");
infoo = document.getElementById("info");
info = false;
function displayScreen(){
    if(!info){
        sign.style.top = 0 + "px";
        sign.style.animationName = "moveSign";
        year.style.display = "none";
        people.style.display = "none";
        economy.style.display = "none";
        h1.style.display = "block";
        infoo.style.display = "block";

        info = true;
    }
    else{
        sign.style.top = -230 + "px";
        sign.style.animationName = "moveSignReverse";
        info = false;
        year.style.display = "block";
        people.style.display = "block";
        economy.style.display = "block";
        h1.style.display = "none";
        infoo.style.display = "none";
    }

}
function historia(){
    h1.innerHTML = "Hammurabis historia";
    infoo.innerHTML = "Hammurabi var en kung som levde 1750 f.kr i Babylon. Han erövrade saker och sånt som kungar gör. Han dog x antal år efter han föddes";
}
function spelet(){
    h1.innerHTML = "Orginal spelet";
    infoo.innerHTML = 'Spelet skapades 1964 av en lärare för sina studenter, det kallades för "The Sumerian Game" och handlade om att styra en uråldrig civilesation';
}
function regler(){
    h1.innerHTML = "Spelets regler";
    infoo.innerHTML = 'Hannurabi handlar o att hålla en civilesation vid liv genom att välja hur mycket mat dom får, hur mycket mat du planterar och hur mycket mark du köper/säljer. Du spelar spelet genom att dra i sliders och be till Babelodiska guden att din befolkning inte dör';
}