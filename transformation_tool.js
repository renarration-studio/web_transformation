(function annoletContainer(){
    //appending a div(annolet container) to body element of a webpage.
    var body = document.getElementsByTagName('body')[0];
    container = document.createElement('div');
    container.id = 'annolet-container';
    body.appendChild(container);
    
    //appending a CSS stylesheet to head element of a webpage, which is used to stylize the annolet container.
    var linktag = document.createElement('link');
    linktag.rel = "stylesheet";
    linktag.type = "text/css";
    //using rawgit.com MaxCDN.. files directly linked to git repo 'webpage-transformation/master'
    linktag.href = "https://cdn.rawgit.com/renarration-studio/webpage-transformation-tool/7bdb2b0a/css/annolet.css"; 
    document.getElementsByTagName('head')[0].appendChild(linktag);
    
    // //injecting html code
    container.innerHTML = "<h4 id='annolet-header'>Page Renarration Experiments...!</h4>"+
    "<ul id='annolet-menu' >"+
        "<li id='disable-css' class='annolet-element'>Disable CSS</li>"+
        "<li id='zapper' class='annolet-element' >Zapper</li>"+
        "<li id='phonetic-trans' class='annolet-element' >Phonetics Translation</li>"+
        "<li class='annolet-element'>"+
            "<select class='select-menu' >"+
                "<option value='theme1' id='theme-1' >Switch to theme1</option>"+
                "<option value='theme2' id='theme-2' >Switch to theme2</option>"+
                "<option value='theme3' id='theme-3' >Switch to theme3</option>"+
            "</select>"+
        "</li>"+
    "</ul>";
}());

//Function to erase the content on a webpage.
function  Zapper(){
    alert("Remove the content by clicking anywhere on the document");
    // Disable all links
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].onclick = function() {return(false);};
    }
    $("body").click(function(event){
        console.log(event.target);
        targetElem= event.target;
        if(targetElem.id == "annolet-container"||targetElem.id =="zapper"){
            targetElem.style.visibility="visible";
        }
        else{
            targetElem.style.visibility="hidden";
        }
    });

}

//Function to disable the css of a web page.
function disableCss(){
   for ( i=0; i<document.styleSheets.length; i++) {
      document.styleSheets.item(i).disabled=true;
   }
}

(function alternateStylesheets(){
    //appending a CSS alternate stylesheets to head element of a webpage.
    var i= 0;
    var style_sheets = 3; 
    var css_themes =['https://cdn.rawgit.com/renarration-studio/webpage-transformation-tool/07d57c73/css/switch1.css',
    'https://cdn.rawgit.com/renarration-studio/webpage-transformation-tool/44118cb4/css/switch2.css',
    'https://cdn.rawgit.com/renarration-studio/webpage-transformation/95f11312/css/switch3.css'];
    var link_title =['switch1', 'switch2', 'switch3'];

    for(i=0; i<style_sheets; i++){
        var linktag = document.createElement('link');
        linktag.rel  = 'alternate stylesheet';
        linktag.type = 'text/css';
        linktag.href = css_themes[i];
        linktag.title= link_title[i];
        head  = document.getElementsByTagName('head')[0];
        head.appendChild(linktag);
    }
}());

function switchStyle(css_title)
{   
   var i;
   var linktag = document.getElementsByTagName("link");
   for (i = 0; i < linktag.length; i++ ) {
    if ((linktag[i].rel.indexOf( "stylesheet" ) != -1) &&linktag[i].title) {
        linktag[i].disabled = true ;
        if (linktag[i].title == css_title) {
        linktag[i].disabled = false ;
         }
    }
   }
}

// Function to add click events to the elements.
(function addClickevents(){
    document.getElementById('zapper').addEventListener('click', function() {
        Zapper()
    }, false);
    document.getElementById('disable-css').addEventListener('click', function() {
        disableCss()
    }, false);
    document.getElementById('theme-1').addEventListener('click', function() {
        switchStyle('switch1')
    }, false);
    document.getElementById('theme-2').addEventListener('click', function() {
        switchStyle('switch2')
    }, false);
    document.getElementById('theme-3').addEventListener('click', function() {
        switchStyle('switch3')
    }, false);
}());

