(function annoletContainer(){
    //appending a div(annolet container) into body element of a webpage.
    var body = document.getElementsByTagName('body')[0];
    container = document.createElement('div');
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
    linktag.href = "https://cdn.rawgit.com/renarration-studio/webpage-transformation-tool/9f1fdf08/css/annolet.css"; //random version number removed bcoz some browser take it as text file and not as CSS.
    document.getElementsByTagName('head')[0].appendChild(linktag);
}());


(function createElements(){
    // Creates dropdown box and appended into the annolet container div for switching the themes of a webpage. 
    var themes_div = document.createElement('div');
    themes_div.className = 'dropdown';
    container.appendChild(themes_div);

    var button_tag = document.createElement('BUTTON');
    var text = document.createTextNode('SwitchThemes');
    button_tag.className = 'dropbtn';
    button_tag.appendChild(text);
    themes_div.appendChild(button_tag);

    var dropdown_div = document.createElement('div');
    dropdown_div.className = 'dropdown-content';
    themes_div.appendChild(dropdown_div);

    var i= 0;
    var list_elements = 3;
    var text_node = ['Theme1', 'Theme2', 'Theme3'];
    var list_elements_id = ['theme-1', 'theme-2','theme-3'];
    for(i=0; i<list_elements; i++){
        var list_elements_tag = document.createElement("a");
        var text = document.createTextNode(text_node[i]);
        list_elements_tag.id = list_elements_id[i];
        list_elements_tag.appendChild(text);
        dropdown_div.appendChild(list_elements_tag);
    }

    //Creates disable css button
    var disable_btn = document.createElement('BUTTON');
    disable_btn.id="disable_btn";
    var disablebtn_text = document.createTextNode('DisableCss');
    disable_btn.appendChild(disablebtn_text);
    container.appendChild(disable_btn);
}());

// var now = new Date();
// if(now.getHours() < 12)
//     document.write('Good Morning!');
// else
//     document.write('Good Afternoon!');
