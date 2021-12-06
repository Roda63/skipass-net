window.onload = function(){
    function menu(){
        var menuArray = [
            {title:"Početna", link: "index.html"},
            {title:"Ski centri", link: "index.html#skiCenter"},
            {title:"Galerija", link: "index.html#gallery"},
            {title:"Aranžmani", link: "index.html#pack"},
            {title:"Blog", link: "index.html#blog"},
            {title:"Kontakti", link: "index.html#subs"},
            {title:"SKI PASS", link: "index.html#pass"}
        ];
        var menuPrint = "";
        for(var i=0; i<menuArray.length; i++){
            menuPrint += "<li class='smooth-menu'><a href='" + menuArray[i].link + "'>" + menuArray[i].title + "</a></li>";
        }
        return menuPrint;
    }
    
    document.querySelector("#start-nav").innerHTML = menu();
    document.getElementsByClassName("smooth-menu")[6].innerHTML ="<a id='nav-btn-edit' href='index.html#pass'><button class='book-btn'>SKI PASS</button></a>";
    document.getElementsByClassName("smooth-menu")[6].setAttribute("class", "");
}