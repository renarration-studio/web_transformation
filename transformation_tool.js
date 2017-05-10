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

    // Creates dropdown box and appended into the annolet container div for switching the themes of a webpage. 
    var themes_div = document.createElement('div');
    themes_div.className = 'dropdown';
    container.appendChild(themes_div);

    var button_tag = document.createElement("BUTTON");
    var text = document.createTextNode(Switch Themes);
    var span = document.createElement("span");
    span.className = "caret";
    button_tag.className = "btn btn-primary dropdown-toggle";
    button.type = "button";
    button.setAttribute('data-toggle', 'dropdown');
    button_tag.appendChild(text);
    button_tag.appendChild(span);
    themes_div.appendChild(button_tag);

    // var ul_list_tag = document.createElement('ul');
    // ul_list_tag.class = 'dropdown-menu';
    // themes_div.appendChild(ul_list_tag);
    // var i= 0;
    // var list_elements = 3;
    // var text_node = ['Theme 1', 'Theme 2', 'Theme 3'];
    // var list_elements_id = ['theme-1', 'theme-2','theme-3'];
    // for(i=0; i<list_elements; i++){
    //     var list_elements_tag = document.createElement("li");
    //     var text = document.createTextNode(text_node[i]);
    //     list_elements_tag.id = list_elements_id[i];
    //     list_elements_tag.appendChild(text);
    //     ul_list_tag.appendChild(list_elements_tag);
    // }
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



// var now = new Date();
// if(now.getHours() < 12)
//     document.write('Good Morning!');
// else
//     document.write('Good Afternoon!');
