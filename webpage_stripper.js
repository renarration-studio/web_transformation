(function pagestripper_container(){
    //appending a CSS stylesheet to head of webpage
    var link = document.createElement('link');
    // using rawgit.com MaxCDN.. files directly linked to git repo 'webpage-transformation/master'
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "https://cdn.rawgit.com/renarration-studio/webpage-transformation/ba465ae99d3c8ede80f10bcf424c451d8ab8022b/css/main.css"; 
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