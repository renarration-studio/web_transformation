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
    linktag.href = "https://cdn.rawgit.com/renarration-studio/webpage-transformation-tool/ef7dcca2/css/annolet.css"; 
    document.getElementsByTagName('head')[0].appendChild(linktag);
    
    //injecting html code
    container.innerHTML = "<h4 id='annolet-header'>Page Renarration Experiments...!</h4>"+
    "<ul id='annolet-menu' >"+
        "<li id='switch-css' class='annolet-element dropdown'>"+
            "<a class='dropbtn'>Switch CSS</a>"+
        "</li>"+
        "<li id='disable-css' class='annolet-element'>Disable CSS</li>"+
        "<li id='modify-content' class='annolet-element' >Modify Content</li>"+
        "<li id='webpage-stripper' class='annolet-element' >Webpage Stripper</li>"+
        "<li id='zappper' class='annolet-element' >Zapper</li>"+
        "<li id='lang-trans' class='annolet-element' >Language Translate</li>"+
        "<li id='phonetic-trans' class='annolet-element' >Phonetics Translation</li>"+
    "</ul>";
}());

// //Function to erase the content on a webpage.
// function  Zapper(){
//     alert("Zap out the content by clicking anywhere on the document");
//     // Disable all links
//     var anchors = document.getElementsByTagName("a");
//     for (var i = 0; i < anchors.length; i++) {
//         anchors[i].onclick = function() {return(false);};
//     }
//     $("body").click(function(event){
//           console.log(event.target);
//           targetElem= event.target;
//           targetElem.style.visibility="hidden";
//     }); 
// }

// // Function to add click events to the elements.
// (function addClickevents(){
//     document.getElementById('Zapper').addEventListener('click', function() {
//         Zapper()
//     }, false);
// }());

// (function createElements(){
//     // Creates dropdown box and appended into the annolet container div for switching the themes of a webpage. 
//     var themes_div = document.createElement('div');
//     themes_div.className = 'dropdown';
//     container.appendChild(themes_div);

//     var button_tag = document.createElement('BUTTON');
//     var text = document.createTextNode('SwitchThemes');
//     button_tag.className = 'dropbtn';
//     button_tag.appendChild(text);
//     themes_div.appendChild(button_tag);

//     var dropdown_div = document.createElement('div');
//     dropdown_div.className = 'dropdown-content';
//     themes_div.appendChild(dropdown_div);

//     var i= 0;
//     var list_elements = 3;
//     var text_node = ['Theme1', 'Theme2', 'Theme3'];
//     var list_elements_id = ['theme-1', 'theme-2','theme-3'];
//     for(i=0; i<list_elements; i++){
//         var list_elements_tag = document.createElement("a");
//         var text = document.createTextNode(text_node[i]);
//         list_elements_tag.id = list_elements_id[i];
//         list_elements_tag.appendChild(text);
//         dropdown_div.appendChild(list_elements_tag);
//     }

//     // //Creates disable css button
//     // var disable_btn = document.createElement('BUTTON');
//     // disable_btn.id="disable_btn";
//     // var disablebtn_text = document.createTextNode('DisableCss');
//     // disable_btn.appendChild(disablebtn_text);
//     // container.appendChild(disable_btn);

//     // // Creates language translate button
//     // langtrans_div = document.createElement('div');
//     // langtrans_div.id = 'google_translate_element';
//     // container.appendChild(langtrans_div);

//     // // Creates dropdown box and appended into the annolet container div for switching the themes of a webpage. 
//     // var stripper_div = document.createElement('div');
//     // stripper_div.className = 'dropdown';
//     // container.appendChild(stripper_div);

//     // var stripper_button = document.createElement('BUTTON');
//     // var text = document.createTextNode('WebpageStripper');
//     // stripper_button.className = 'dropbtn';
//     // stripper_button.appendChild(text);
//     // stripper_div.appendChild(stripper_button);

//     // var stripper_dropdown = document.createElement('div');
//     // stripper_dropdown.className = 'dropdown-content';
//     // stripper_div.appendChild(stripper_dropdown);

//     // var j= 0;
//     // var stripper_elements = 3;
//     // var strippertext_node = ['ShowText', 'ShowImages', 'ShowLinks'];
//     // var stripper_elements_id = ['show-text', 'show-images', 'show-links'];
//     // for(j=0; j<stripper_elements; j++){
//     //     alert("hello");
//     //     var stripper_elements_tag = document.createElement("a");
//     //     var stripper_text = document.createTextNode(strippertext_node[j]);
//     //     stripper_elements_tag.id = stripper_elements_id[j];
//     //     stripper_elements_tag.appendChild(stripper_text);
//     //     stripper_dropdown.appendChild(stripper_elements_tag);
//     // }

// }());


// //Function to disable the css of a web page.
// function disableCss(){
//    for ( i=0; i<document.styleSheets.length; i++) {
//       document.styleSheets.item(i).disabled=true;
//    }
// }

// // Function to inject google language translate API script into the head element of the webpage.
// (function googleTrans_Api() {
//     //appending a script tag to head of webpage
//     var script = document.createElement('script');
//     script.type = "text/javascript";
//     script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//     document.getElementsByTagName('head')[0].appendChild(script);
// }());

// function googleTranslateElementInit() {
//    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
// }

// // Function loops through all the elements in a web page and displays elements which has text content
// // and rest of the content is made hidden.  
// function showText() {
//     var all = document.getElementsByTagName("*");
//     for (var i=0, max=all.length; i < max; i++) {
//         if(all[i].innerHTML){
//             all[i].style.visibility = 'visible';
//         }
//         else{
//             all[i].style.visibility = 'hidden';
//         }
//     }
//     //get the menu bar id 
//     document.getElementById('annolet-container').style.visibility='visible';
//     var children = document.getElementById('annolet-container').children;
//     //This will make all children elements of div visible. 
//     for(var i = 0; i < children.length; i++){
//         children[i].style.visibility = 'visible';
//     }
// }

// // Function loops through all the elements in a web page and displays elements which has links
// // and rest of the content is made hidden.  
// function showLinks() {
//     var all = document.getElementsByTagName("*");
//     for (var i=0, max=all.length; i < max; i++) {
//         var href_attribute = all[i].hasAttribute("href");
//         var src_attribute = all[i].hasAttribute("src");
//         if(href_attribute == false && src_attribute == false){
//             all[i].style.visibility = 'hidden';
//         }
//         else if(href_attribute == true || src_attribute == true){
//             all[i].style.visibility = 'visible';
//         }
//     }
//     //get the menu bar id
//     document.getElementById('annolet-container').style.visibility='visible';
//     var children = document.getElementById('annolet-container').children;
//     //This will make all children elements of div visible. 
//     for(var i = 0; i < children.length; i++){
//         children[i].style.visibility = 'visible';
//     }
// }

// // Function loops through all the elements in a web page and displays image elements 
// // and rest of the content is made hidden.  
// function showImages() {
//     var all = document.getElementsByTagName("*");
//     for (var i=0, max=all.length; i < max; i++) {
//         var src_attribute = all[i].hasAttribute("src");
//         if(src_attribute == false){
//             all[i].style.visibility = 'hidden';
//         }
//         else if(src_attribute == true){
//             all[i].style.visibility = 'visible';
//         }
//     }

//     //get the menu bar id
//     document.getElementById('annolet-container').style.visibility='visible';
//     var children = document.getElementById('annolet-container').children;
//     //This will make all children elements of div visible. 
//     for(var i = 0; i < children.length; i++){
//         children[i].style.visibility = 'visible';
//     }
// }

// // Function to add click events to the elements.
// (function addClickevents(){
//     document.getElementById('disable_btn').addEventListener('click', function() {
//         disableCss()
//     }, false);
//     document.getElementById('show-text').addEventListener('click', function() {
//         showText()
//     }, false);
//     document.getElementById('show-images').addEventListener('click', function() {
//         showImages()
//     }, false);
//     document.getElementById('show-links').addEventListener('click', function() {
//         showLinks()
//     }, false);
// }());


