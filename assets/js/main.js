window.onload = function(){


//Ispis menija
function menu(){
    var menuArray = [
        {title:"Početna", link: "index.html"},
        {title:"Ski centri", link: "#skiCenter"},
        {title:"Galerija", link: "#gallery"},
        {title:"Aranžmani", link: "#pack"},
        {title:"Blog", link: "#blog"},
        {title:"Kontakti", link: "#subs"},
        {title:"SKI PASS", link: "#pass"}
    ];
    var menuPrint = "";
    for(var i=0; i<menuArray.length; i++){
        menuPrint += "<li class='smooth-menu'><a href='" + menuArray[i].link + "'>" + menuArray[i].title + "</a></li>";
    }
    return menuPrint;
}

document.querySelector("#start-nav").innerHTML = menu();
document.getElementsByClassName("smooth-menu")[6].innerHTML ="<a id='nav-btn-edit' href='#pass'><button class='book-btn'>SKI PASS</button></a>";
document.getElementsByClassName("smooth-menu")[6].setAttribute("class", "");


//Baner
document.querySelector(".about-us-txt h2").textContent ="Nabavi Ski Pass pre svih brzo i jednostavno";

var banerBtnA = document.createElement("a");
banerBtnA.setAttribute("href", "#pass");
var banerBtn = document.createElement("button");
banerBtn.setAttribute("class", "about-view");
var banerBtnTxt = document.createTextNode("KUPI PASS");
banerBtn.appendChild(banerBtnTxt);
banerBtnA.appendChild(banerBtn);
document.querySelector(".about-btn").appendChild(banerBtnA);

//Datum i sezona
function date(){
    var newDate = new Date();
    var date = newDate.getDate();
    var month = newDate.getMonth();
    var year = newDate.getFullYear();

    var monthName;
    switch(month){
        case 0:
            monthName = "Januar";
            break;
        case 1:
            monthName = "Februar";
            break;
        case 2:
            monthName = "Mart";
            break;
        case 3:
            monthName = "April";
            break;
        case 4:
            monthName = "Maj";
            break;
        case 5:
            monthName = "Jun";
            break;
        case 6:
            monthName = "Jul";
            break;
        case 7:
            monthName = "Avgust";
            break;
        case 8:
            monthName = "Septembar";
            break;
        case 9:
            monthName = "Oktobar";
            break;
        case 10:
            monthName = "Novembar";
            break;
        default:
            monthName = "Decembar";
    }

    if(month >= 10 || month <= 2){
        seasons = "<i class='fa fa-snowflake-o' aria-hidden='true'></i>";
    }else{
        seasons = "<i class='fa fa-sun-o' aria-hidden='true'></i>";
    }
    
    var printDate = date +  ". " + monthName + " " + year + "&nbsp;&nbsp;&nbsp;" + seasons;
    return printDate;
}
document.getElementById("datePrint").innerHTML = date();

//Popnjavanje forme
function formContent(){

    //Skijališta
    var skiCenter = ["Kopaonik", "Tornik", "Stara planina", "Brezovica", "Golija", "Zlatar", "Divčibare", "Goč", "Sva skijališta"];
    var skiCenterSelect = "<select id='skiSelected' class='form-control'><option value='0'>izaberite skijalište</option>";
    for(var i=0; i<skiCenter.length; i++){
        skiCenterSelect += "<option value='" + [i+1] + "'>" + skiCenter[i] + "</option>";
    }
    skiCenterSelect += "</select>";
    document.getElementById("skiCenterSelect").innerHTML = skiCenterSelect;

    //Odrasli
    var parentSelect = "<select id='parentNum' class='evCalc form-control'><option value='0'>Izaberite</option>";
    for(var i=1; i<6; i++){
        parentSelect += "<option value='"+[i]+"'>"+[i]+"</option>";
    }
    parentSelect += "</select>";
    document.querySelector("#parent").innerHTML = parentSelect;

    //Deca
    var childrentSelect = "<select id='childNum' class='evCalcc form-control'><option value='0'>Bez dece</option>";
    for(var i=1; i<6; i++){
        childrentSelect += "<option value='"+[i]+"'>"+[i]+"</option>";
    }
    childrentSelect += "</select>";
    document.querySelector("#children").innerHTML = childrentSelect;

}
formContent();


    //Ukupna cena
    function kalulator(){
        var nPObj = document.querySelector("#parentNum");
        var nP = nPObj.options[nPObj.selectedIndex].value;
        var nCObj = document.querySelector("#childNum");
        var nC = nCObj.options[nCObj.selectedIndex].value;
    
        var cForP = 23;
        var cForc = 14;
    
        var sumC = (nP*cForP) + (nC*cForc);
       document.querySelector("#sum").innerHTML = sumC + ",00 €";
    }
    document.querySelector(".evCalc").addEventListener("input", kalulator);
    document.querySelector(".evCalcc").addEventListener("input", kalulator);


    //Validacija
    function validation(){

        var data = [];
        var valido = true;
        var testCounter = 0;

        var skiObj = document.querySelector("#skiSelected");
        var startDateObj = document.querySelector("#dateStart");
        var endDataObj = document.querySelector("#dateEnd");
        var noPObj = document.querySelector("#parentNum");
        var noCObj = document.querySelector("#childNum");
        var nameObj = document.querySelector("#name");
        var lastObj = document.querySelector("#lastName");
        var emailObj = document.querySelector("#email");
        var phoneObj = document.querySelector("#phone");

        var ski = skiObj.options[skiObj.selectedIndex].value;
        var noP = noPObj.options[noPObj.selectedIndex].value;
        var noC = noCObj.options[noCObj.selectedIndex].value;
        var startDate = startDateObj.value;
        var endDate = endDataObj.value;
        var name = nameObj.value;
        var lastName = lastObj.value;
        var email = emailObj.value;
        var phone = phoneObj.value;

        var reName = /^[A-ZĐŠŽĆČ][a-zšđčćž]{2,11}$/;
        var reLast = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,15}$/;
        var reEmail =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var rePhone = /^06[\d]\-[\d]{3}\-[\d]{3,4}$/;

        if(ski != 0){
            skiObj.style = "border:2px solid #00d8d5";
            data.push(ski);
            testCounter ++;
        }else{
            skiObj.style = "border:2px solid red";
            valido = false;
        }

        if(startDate != ""){
            startDateObj.style = "border:2px solid #00d8d5";
            data.push(startDate);
            testCounter ++;
        }else{
            startDateObj.style = "border:2px solid red";
            valido = false;
        }

        if(endDate != ""){
            endDataObj.style = "border:2px solid #00d8d5";
            data.push(endDate);
            testCounter ++;
        }else{
            endDataObj.style = "border:2px solid red";
            valido = false;
        }

        if(noP != 0){
            noPObj.style = "border:2px solid #00d8d5";
            data.push(noP);
            testCounter ++;
        }else{
            noPObj.style = "border:2px solid red";
            valido = false;
        }

        if(noC != 0){
            noCObj.style = "border:2px solid #00d8d5";
            data.push(noC);
        }

        if(reEmail.test(email)){
            emailObj.style = "border:2px solid #00d8d5";
            data.push(email);
            testCounter ++;
        }else{
            emailObj.style = "border:2px solid red";
            valido = false;
        }

        if(reName.test(name)){
            nameObj.style = "border:2px solid #00d8d5";
            data.push(name);
            testCounter ++;
        }else{
            nameObj.style = "border:2px solid red";
            valido = false;
        }

        if(reLast.test(lastName)){
            lastObj.style = "border:2px solid #00d8d5";
            data.push(lastName);
            testCounter ++;
        }else{
            lastObj.style = "border:2px solid red";
            valido = false;
        }

        if(rePhone.test(phone)){
            phoneObj.style = "border:2px solid #00d8d5";
            data.push(phone);
            testCounter ++;
        }else{
            phoneObj.style = "border:2px solid red";
            valido = false;
        }

        if(testCounter == 8){
            alert("Vaši podaci su prosleđeni. Pratite uputstvo koje će Vam stići na email.");
            window-location.href("index.html");
        }
        
    }
    document.querySelector("#submit").addEventListener("click", validation);


function service(){
    var serviceArray = [
        {h2:"Neverovatne turističke ture", p:"Rezervišite na vreme neku od neverovatnih turističkih tura ove zimske sezone"},
        {h2:"Rezervacija smeštaja", p: "Interesovanje je ogromno, rezervišite na vreme svoj smeštaj"},
        {h2:"Kupovina karata", p:"Osigurajte na vreme karte za svoje putovanje"}
    ];

    var servicePrint = "<div class='container'><div class='service-counter text-center'>";
    for(var i=0; i<serviceArray.length; i++){
        servicePrint += "<div class='col-md-4 col-sm-4'><div class='single-service-box'><div class='service-img'><img src='assets/images/service/s"+[i+1]+".png' alt='service-icon'/></div> <div class='service-content'><h2><a href='404.html'>" + serviceArray[i].h2 + "</a></h2><p>" + serviceArray[i].p + "</p></div></div></div>";
    }
    servicePrint += "</div></div>";
    return servicePrint;
}
document.querySelector("#service").innerHTML = service();

//Ski centri
function skiCenters(){

    var skiArray = [
        {h1:"Kopaonik",
        h3: "Najposećenija turistička destinacija protekle zimske sezone",
        p:"Već dugi niz godina unazad Kopaonik predstavlja najveći turistički zimski centar. Tako će biti i ove sezone, zbog toga požurite sa rezervisanjem smeštaja i nabavite na vreme svoj ski pass.",
        src:"b1.jpg",
        alt:"Kopaonik"},
        {h1:"Tornik",
        h3:"Sve popularnija destinacija sa najvećim brojem rezervacija do sada",
        p:"Pred nama je još jedna uspešna sezona. Ove godine očekuje se drastično povećanje broja posetilaca, zato ne oklevajte i rezervišite sebi sjajan odmor na vreme.",
        src:"b2.jpg",
        alt:"Tornik"},
        {h1:"Stara planina",
        h3:"Odličan izbor za sve ljubitelje zimskih avantura",
        p:"Destinacija koja iz godine u godinu privlači sve veći broj ljubitelja zimskih čarolija i skijanja. Staru planinu preporučujemo svima koji žele da provedu kvalitetan odmor sa puno sadržaja.",
        src:"b3.jpg",
        alt:"Stara planina"}
    ];

    var skiPrint = "";
    for(var i=0; i<skiArray.length; i++){
        skiPrint += "<div class='col-sm-4 col-md-4'><div class='thumbnail'><h2>" + skiArray[i].h1 + "</h2><div class='thumbnail-img'><img src='assets/images/blog/" + skiArray[i].src + "' alt='" +skiArray[i].alt + "'><div class='thumbnail-img-overlay'></div></div><div class='caption'><div class='blog-txt'><h3><a href='404.html'>" + skiArray[i].h3 + "</a></h3><p>" +skiArray[i].p + "</p><a href='404.html'>Pročitaj više</a></div> </div></div></div>";
    }
    return skiPrint;
}
document.querySelector("#ski-ski").innerHTML = skiCenters();

//Galerija
function gallary(){
    var gallaryArray = [
        {img:"g1.jpg", txt:"Kopaonik"},
        {img:"g2.jpg", txt:"Tornik"},
        {img:"g3.jpg", txt:"Brezovica"},
        {img:"g4.jpg", txt:"Divčibare"},
        {img:"g5.jpg", txt:"Golija"},
        {img:"g6.jpg", txt:"Stara planina"}
    ];
    var gallaryPrint = "";
    for(var i=0; i<gallaryArray.length; i++){
        gallaryPrint += "<div class='col-md-6'><div class='filtr-item'><img src='assets/images/gallary/" + gallaryArray[i].img + "' alt='" + gallaryArray[i].txt + "'/><div class='item-title title-shadow'><a>" + gallaryArray[i].txt + "</a></div></div></div>";
    }
    return gallaryPrint;
}
document.querySelector("#gll").innerHTML = gallary();

//Promena bootstrap klasa za galeriju
var gallaryElements = document.getElementsByClassName("col-md-6");
for(var i=0; i<gallaryElements.length - 1; i++){
    gallaryElements[2].setAttribute("class", "col-md-4");
}
document.getElementsByClassName("col-md-6")[2].setAttribute("class", "col-md-8");



//Ispis aranžmana
function packs(){
    var packsArray = [{
        src:"p1.jpg",
        txt:"Kopaonik",
        cost: "799",
        d: "6",
        n: "5",
        s: "5",
        o: "2",
        voices: "2456"},
        {
        src:"p2.jpg",
        txt:"Tornik",
        cost: "429",
        d: "7",
        n: "6",
        s: "4",
        o: "2",
        voices: "1589"},
        {
        src:"p3.jpg",
        txt:"Stara planina",
        cost: "399",
        d: "6",
        n: "5",
        s: "4",
        o: "4",
        voices: "3654"},
        {
        src:"p4.jpg",
        txt:"Golija",
        cost: "350",
        d: "7",
        n: "6",
        s: "3",
        o: "2",
        voices: "945"},
        {
        src:"p5.jpg",
        txt:"Brezovica",
        cost: "649",
        d: "6",
        n: "5",
        s: "5",
        o: "2",
        voices: "2150"},
        {
        src:"p6.jpg",
        txt:"Divčibare",
        cost: "699",
        d: "6",
        n: "5",
        s: "5",
        o: "4",
        voices: "3652"}
    ];

    var packsPrint = "";
    for(var i=0; i<packsArray.length; i++){
        packsPrint += "<div class='pack-block col-md-4 col-sm-6'><div class='single-package-item'><img src='assets/images/packages/" + packsArray[i].src + "' alt='" + packsArray[i].txt + "'><div class='single-package-item-txt'><h3>" + packsArray[i].txt + " <span class='pull-right'>" + packsArray[i].cost + "€</span></h3><div class='packages-para'><p><span><i class='fa fa-angle-right'></i> " + packsArray[i].d + " dana </br><i class='fa fa-angle-right'></i> " + packsArray[i].n + " noći </br><i class='fa fa-angle-right'></i> " + packsArray[i].s + " zvezdica </br><i class='fa fa-angle-right'></i> " + packsArray[i].o + " osobe</span></p></div><div class='packages-review'><p><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><span>" + packsArray[i].voices + " glasova</span></p></div><div class='about-btn'><a href='404.html'><button class='about-view packages-btn'>rezerviši</button></a></div></div></div></div>";
    }
    return packsPrint;
}
document.querySelector("#packs-print").innerHTML = packs();

function packsM(){
    var packsArray = [{
        src:"p7.jpg",
        txt:"Goč",
        cost: "320",
        d: "4",
        n: "3",
        s: "3",
        o: "2",
        voices: "659"},
        {
        src:"p8.jpg",
        txt:"Zlatibor",
        cost: "549",
        d: "6",
        n: "5",
        s: "4",
        o: "2",
        voices: "2258"},
        {
        src:"p9.jpg",
        txt:"Zlatar",
        cost: "299",
        d: "5",
        n: "5",
        s: "4",
        o: "2",
        voices: "754"}
    ];

    var packsPrint = "";
    for(var i=0; i<packsArray.length; i++){
        packsPrint += "<div class='pack-block col-md-4 col-sm-6'><div class='single-package-item'><img src='assets/images/packages/" + packsArray[i].src + "' alt='" + packsArray[i].txt + "'><div class='single-package-item-txt'><h3>" + packsArray[i].txt + " <span class='pull-right'>" + packsArray[i].cost + "€</span></h3><div class='packages-para'><p><span><i class='fa fa-angle-right'></i> " + packsArray[i].d + " dana </br><i class='fa fa-angle-right'></i> " + packsArray[i].n + " noći </br><i class='fa fa-angle-right'></i> " + packsArray[i].s + " zvezdica </br><i class='fa fa-angle-right'></i> " + packsArray[i].o + " osobe</span></p></div><div class='packages-review'><p><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><span>" + packsArray[i].voices + " glasova</span></p></div><div class='about-btn'><button class='about-view packages-btn'>rezerviši</button></div></div></div></div>";
    }
    return packsPrint;
}
document.querySelector("#packs-print-more").innerHTML = packsM();


//Subscribe
document.querySelector("#subscribe-btn").addEventListener("click", function(){
    var subInput = document.querySelector("#subscribe");
    var subValue = subInput.value;
    var reSub = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(reSub.test(subValue)){
        alert("Uspešno ste se pretplatili.");
    }else{
        subInput.style = "border: 2px solid red";
        $('form').submit(function() {
            return false;
        });
    }
});
}




	
