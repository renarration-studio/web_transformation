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
    linktag.href = "https://cdn.rawgit.com/renarration-studio/webpage-transformation-tool/ba27769d/css/annolet.css"; 
    document.getElementsByTagName('head')[0].appendChild(linktag);
    
    // //injecting html code
    container.innerHTML = "<h4 id='annolet-header'>Page Renarration Experiments...!</h4>"+
    "<ul id='annolet-menu' >"+
        "<li id='disable-css' class='annolet-element'>Page without CSS</li>"+
        "<li id='zapper' class='annolet-element' >Zapper</li>"+
        "<li id='modify-content' class='annolet-element'>Modify Content</li>"+
        "<li id='highlight-text' class='annolet-element' >Highlight Text</li>"+
        "<li id='phonetic-trans' class='annolet-element' >Phonetics Translation</li>"+
        "<li id='trans-text' class='annolet-element' >Translate Text</li>"+
        "<li class='annolet-element'>"+
            "<select class='select-menu' >"+
                "<option id='theme-1' >Theme1</option>"+
                "<option id='theme-2' >Theme2</option>"+
                "<option id='theme-3' >Theme3</option>"+
            "</select>"+"<br>"+
            "<h6 style='color:orange;'>Switch CSS</h6>"+
        "</li>"+
        "<li class='annolet-element'>"+
            "<select class='select-menu' >"+
                "<option id='show-text' >Show Text</option>"+
                "<option id='show-links' >Show Links</option>"+
                "<option id='show-images' >Show Images</option>"+
            "</select>"+"<br>"+
            "<h6 style='color:orange;'>Webpage Stripper</h6>"+
        "</li>"+
        "<li class='annolet-element' id='lang-trans' >"+
            // "<div id='google_translate_element' ></div>"+
            "<h6 style='color:orange;'>Language Translation</h6>"+
        "</li>"+
        "<li class='annolet-element'>"+
            "<select class='select-menu' >"+
                "<option id='increase-font' >Increase Font</option>"+
                "<option id='decrease-font' >Decrease Font</option>"+
            "</select>"+"<br>"+
            "<h6 style='color:orange;'>FontSize Adjustment</h6>"+
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

// Function loops through all the elements in a web page and displays elements which has text content
// and rest of the content is made hidden.  
function showText() {
    var all = document.getElementsByTagName("*");
    for (var i=0, max=all.length; i < max; i++) {
        if(all[i].innerHTML){
            all[i].style.visibility = 'visible';
        }
        else{
            all[i].style.visibility = 'hidden';
        }
    }

    //get the menu bar id 
    document.getElementById('annolet-container').style.visibility='visible';
    var children = document.getElementById('annolet-container').children;
    //This will make all children elements of div visible. 
    for(var i = 0; i < children.length; i++){
        children[i].style.visibility = 'visible';
    }
}

// Function loops through all the elements in a web page and displays elements which has links
// and rest of the content is made hidden.  
function showLinks() {
    var all = document.getElementsByTagName("*");
    for (var i=0, max=all.length; i < max; i++) {
        var href_attribute = all[i].hasAttribute("href");
        var src_attribute = all[i].hasAttribute("src");
        if(href_attribute == false && src_attribute == false){
            all[i].style.visibility = 'hidden';
        }
        else if(href_attribute == true || src_attribute == true){
            all[i].style.visibility = 'visible';
        }
    }

    //get the menu bar id 
    document.getElementById('annolet-container').style.visibility='visible';
    var children = document.getElementById('annolet-container').children;
    //This will make all children elements of div visible. 
    for(var i = 0; i < children.length; i++){
        children[i].style.visibility = 'visible';
    }
}

// Function loops through all the elements in a web page and displays image elements 
// and rest of the content is made hidden.  
function showImages() {
    var all = document.getElementsByTagName("*");
    for (var i=0, max=all.length; i < max; i++) {
        var src_attribute = all[i].hasAttribute("src");
        if(src_attribute == false){
            all[i].style.visibility = 'hidden';
        }
        else if(src_attribute == true){
            all[i].style.visibility = 'visible';
        }
    }

    //get the menu bar id 
    document.getElementById('annolet-container').style.visibility='visible';
    var children = document.getElementById('annolet-container').children;
    //This will make all children elements of div visible. 
    for(var i = 0; i < children.length; i++){
        children[i].style.visibility = 'visible';
    }

}

// injecting google translate api src into head element of a webpage.
(function langSelectDropdown(){
    //appending a script tag to head of webpage
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.getElementsByTagName('head')[0].appendChild(script);

    //Create a language translation dropdown div and append in annolet menu bar.
    div = document.createElement('div');
    div.id = 'google_translate_element';
    document.getElementById('lang-trans').appendChild(div);
}());

function googleTranslateElementInit() {
   new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

// Function to modify the content on a web page.
function modifyContent() {
    alert("hello world");
    // Disable all links
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].onclick = function() {return(false);};
    }

    // sets attributes to all the elements in the web page.
    document.getElementsByTagName('body')[0].setAttribute('contenteditable', true);
    document.getElementsByTagName('body')[0].setAttribute('title', 'Edit Content');
}

// Function to increase/decrease the font size of the content.
(function changeFontsize(){
    alert("hi");
    var fontSize = parseInt($('body').css('font-size'),10);
    $('#increase-font').on('click',function(){
        fontSize+=0.5;
        $('body').css('font-size',fontSize+'px');
    })
    $('#decrease-font').on('click',function(){
        fontSize-=0.5;
        $('body').css('font-size',fontSize+'px');
    })
}());

function highlightContent(){
    var mytext = selectHTML();
    $('span').css({"background-color":"yellow"});
}

function selectHTML() {
    try 
    {
        if (window.ActiveXObject) {
            var c = document.selection.createRange();
            return c.htmlText;
        }
    
        var nNd = document.createElement("span");
        var w = getSelection().getRangeAt(0);
        w.surroundContents(nNd);
        return nNd.innerHTML;
    } 
    catch (e) 
    {
        if (window.ActiveXObject) {
            return document.selection.createRange();
        } else {
            return getSelection();
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
    document.getElementById('show-text').addEventListener('click', function() {
        showText()
    }, false);
    document.getElementById('show-links').addEventListener('click', function() {
        showLinks()
    }, false);
    document.getElementById('show-images').addEventListener('click', function() {
        showImages()
    }, false);
    document.getElementById('modify-content').addEventListener('click', function() {
        modifyContent()
    }, false);
    document.getElementById('highlight-text').addEventListener('click', function() {
        highlightContent()
    }, false);
}());

