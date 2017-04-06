(function pagestripper_container(){
    //appending a CSS stylesheet to head of webpage
    var link = document.createElement('link');
    // using rawgit.com MaxCDN.. files directly linked to git repo 'webpage-transformation/master'
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "https://cdn.rawgit.com/renarration-studio/webpage-transformation/736818875561b9be3571927e8640145153b7a493/css/main.css"; 
    document.getElementsByTagName('head')[0].appendChild(link);

    //appending a div to body of webpage
    var body = document.getElementsByTagName('body')[0];
    var pagestripper_container = document.createElement('div');
    pagestripper_container.id = 'pagestripper-container';
    body.appendChild(pagestripper_container);

    //appending h2 tag into the div inner HTML
    var header = document.createElement('h2');
    var text = document.createTextNode("Webpage Stripper");
    header.id = 'pagestripper-header';
    header.appendChild(text);
    document.getElementById('pagestripper-container').appendChild(header);

    createButton()
    add_clickevents()

}());


// Creates buttons 
function createButton(){
    var i= 0;
    var buttons = 3;
    var text_node = ['Show Text', 'Show Images', 'Show Links'];
    var id = ['show-text', 'show-images', 'show-links'];
    for(i=0; i<buttons; i++){
        button_tag = document.createElement("BUTTON");
        text = document.createTextNode(text_node[i]);
        button_tag.id = id[i];
        button_tag.appendChild(text);
        document.getElementById('pagestripper-container').appendChild(button_tag);
    }
}

// Function loops through all the elements in a web page and displays image elements 
// and rest of the content is made hidden.  
function showImages() {
    var all = document.getElementsByTagName("*");
    alert(all);
    for (var i=0, max=all.length; i < max; i++) {
        var src_attribute = all[i].hasAttribute("src");
        if(src_attribute == false){
            all[i].style.visibility = 'hidden';
        }
        else if(src_attribute == true){
            all[i].style.visibility = 'visible';
        }
    }

    //get all the menu bar id
    document.getElementById('pagestripper-container').style.visibility='visible';
    var children = document.getElementById('pagestripper-container').children;
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

    //get all the menu bar id
    document.getElementById('pagestripper-container').style.visibility='visible';
    var children = document.getElementById('pagestripper-container').children;
    //This will make all children elements of div visible. 
    for(var i = 0; i < children.length; i++){
        children[i].style.visibility = 'visible';
    }
}

function add_clickevents(){
    document.getElementById('show-links').addEventListener('click', function() {
        showLinks()
    }, false);
    document.getElementById('show-images').addEventListener('click', function() {
        showImages()
    }, false);
    // document.getElementById('show-text').addEventListener('click', function() {
    //     saveText()
    // }, false);
}
