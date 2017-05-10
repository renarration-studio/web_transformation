(function annoletContainer(){
    //appending a div(annolet container) into body element of a webpage.
    var body = document.getElementsByTagName('body')[0];
    var container = document.createElement('div');
    container.id = 'annolet-container';
    body.appendChild(container);
    //appending h2 tag into the div inner HTML
    var header = document.createElement('h2');
    var text = document.createTextNode("Annolet");
    header.id = 'annolet-header';
    header.appendChild(text);
    container.appendChild(header);
    
    //appending a CSS stylesheet to head element of a webpage, which is used to stylize the annolet container.
    var linktag = document.createElement('link');
    linktag.rel = "stylesheet";
    linktag.type = "text/css";
    //using rawgit.com MaxCDN.. files directly linked to git repo 'webpage-transformation/master'
    linktag.href = "https://cdn.rawgit.com/renarration-studio/webpage-transformation/77492ebc/css/annolet.css"; //random version number removed bcoz some browser take it as text file and not as CSS.
    document.getElementsByTagName('head')[0].appendChild(linktag);

    // //appending buttons into the div inner HTML
    // var i= 0;
    // var buttons = 3;
    // var text_node = ['Theme 1', 'Theme 2', 'Theme 3'];
    // var button_id = ['theme-1', 'theme-2','theme-3'];
    // for(i=0; i<buttons; i++){
    //      var button_tag = document.createElement("BUTTON");
    //      var text = document.createTextNode(text_node[i]);
    //      button_tag.id = button_id[i];
    //      button_tag.className = "annolet-elements";
    //      button_tag.appendChild(text);
    //      document.getElementById('annolet-container').appendChild(button_tag);
    // }
}());



var now = new Date();
if(now.getHours() < 12)
    document.write('Good Morning!');
else
    document.write('Good Afternoon!');
