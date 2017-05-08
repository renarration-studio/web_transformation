(function alternateStylesheets(){
        //appending a CSS alternate stylesheets to head element of a webpage.
	var i= 0;
	var style_sheets = 3; 
	var css_themes =['https://cdn.rawgit.com/renarration-studio/webpage-transformation/1d3180ca/css/switch1.css',
	'https://cdn.rawgit.com/renarration-studio/webpage-transformation/4d963f14/css/switch2.css',
	'https://cdn.rawgit.com/renarration-studio/webpage-transformation/4d963f14/css/switch3.css'];
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
(function switchcssContainer(){
    //appending a CSS stylesheet to head element of a webpage
    var linktag = document.createElement('link');
    linktag.rel = "stylesheet";
    linktag.type = "text/css";
    //using rawgit.com MaxCDN.. files directly linked to git repo 'webpage-transformation/master'
    linktag.href = "https://cdn.rawgit.com/renarration-studio/webpage-transformation/master/css/annolet.css"; //random version number removed bcoz some browser take it as text file and not as CSS.
    document.getElementsByTagName('head')[0].appendChild(linktag);
    //appending a div(annolet container) to body of a webpage
    var body = document.getElementsByTagName('body')[0];
    var container = document.createElement('div');
    container.id = 'annolet-container';
    body.appendChild(container);
    //appending h2 tag into the div inner HTML
    var header = document.createElement('h2');
    var text = document.createTextNode("Switch Themes");
    header.id = 'annolet-header';
    header.appendChild(text);
    container.appendChild(header);
    //appending buttons into the div inner HTML
	var i= 0;
	var buttons = 3;
	var text_node = ['Theme_1', 'Theme_2', 'Theme_3'];
	var button_id = ['theme_1', 'theme_2','theme_3'];
	for(i=0; i<buttons; i++){
	     var button_tag = document.createElement("BUTTON");
	     var text = document.createTextNode(text_node[i]);
	     button_tag.id = button_id[i];
	     button_tag.className = "annolet-elements";
	     button_tag.appendChild(text);
	     document.getElementById('annolet-container').appendChild(button_tag);
	}
}());
(function addClickevents(){
	document.getElementById('theme_1').addEventListener('click', function() {
		switchStyle('switch1')
	}, false);
	document.getElementById('theme_2').addEventListener('click', function() {
		switchStyle('switch2')
	}, false);
	document.getElementById('theme_3').addEventListener('click', function() {
		switchStyle('switch3')
	}, false);
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
