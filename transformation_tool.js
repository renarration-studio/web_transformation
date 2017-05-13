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
    linktag.href = "https://cdn.rawgit.com/renarration-studio/webpage-transformation-tool/9cee463b/css/annolet.css"; 
    document.getElementsByTagName('head')[0].appendChild(linktag);
    
    // //injecting html code
    container.innerHTML = "<h4 id='annolet-header'>Page Renarration Experiments...!</h4>"+
    "<ul id='annolet-menu' >"+
        "<li id='disable-css' class='annolet-element'>Disable CSS</li>"+
        "<li id='zapper' class='annolet-element' >Zapper</li>"+
        "<li id='phonetic-trans' class='annolet-element' >Phonetics Translation</li>"+
        "<select>"+
            "<option value='volvo'>Volvo</option>"+
            "<option value='saab'>Saab</option>"+
            "<option value='mercedes'>Mercedes</option>"+
            "<option value='audi'>Audi</option>"+
        "</select>"+
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

// Function to add click events to the elements.
(function addClickevents(){
    document.getElementById('zapper').addEventListener('click', function() {
        Zapper()
    }, false);
    document.getElementById('disable-css').addEventListener('click', function() {
        disableCss()
    }, false);
}());

