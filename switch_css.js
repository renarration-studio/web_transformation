(function alternate_stylesheets(){
    //appending a CSS alternate stylesheets to head of webpage
	var i= 0;
	var style_sheets = 3; 
	var link_rel =['alternate stylesheet', 'alternate stylesheet', 'alternate stylesheet'] 
	var css_themes =['https://cdn.rawgit.com/renarration-studio/webpage-transformation/010f8b8dcf8d6054cd6f78d7a617cc28a7e2eafa/css/switch1.css',
	'https://cdn.rawgit.com/renarration-studio/webpage-transformation/010f8b8dcf8d6054cd6f78d7a617cc28a7e2eafa/css/switch2.css',
	'https://cdn.rawgit.com/renarration-studio/webpage-transformation/010f8b8dcf8d6054cd6f78d7a617cc28a7e2eafa/css/switch3.css'];
	var link_title =['switch1', 'switch2', 'switch3'];

	for(i=0; i<style_sheets; i++){
	    var linktag = document.createElement('link');
	    linktag.rel  = link_rel[i];
	    linktag.type = 'text/css';
	    linktag.href = css_themes[i];
	    linktag.title= link_title[i];
	    head  = document.getElementsByTagName('head')[0];
	    head.appendChild(linktag);
	}

}());
(function switchcss_container(){
    //appending a CSS stylesheet to head of webpage
    var linktag = document.createElement('link');
    linktag.rel = "stylesheet";
    linktag.type = "text/css";
    //using rawgit.com MaxCDN.. files directly linked to git repo 'webpage-transformation/master'
    linktag.href = "https://cdn.rawgit.com/renarration-studio/webpage-transformation/5bf016933f1b6272aaf17b13f77168006c528584/css/main.css"; //random version number removed bcoz some browser take it as text file and not as CSS.
    document.getElementsByTagName('head')[0].appendChild(linktag);
    // appending a div to body of webpage
    var body = document.getElementsByTagName('body')[0];
    var container = document.createElement('div');
    container.id = 'switchcss-container';
    body.appendChild(container);
    //appending h2 tag into the div inner HTML
    var header = document.createElement('h2');
    var text = document.createTextNode("Switch Themes");
    header.id = 'themes-header';
    header.appendChild(text);
    document.getElementById('switchcss-container').appendChild(header);
    //appending buttons into the div inner HTML
	var i= 0;
	var buttons = 3;
	var text_node = ['Theme_1', 'Theme_2', 'Theme_3'];
	var button_id = ['theme_1', 'theme_2','theme_3'];
	for(i=0; i<buttons; i++){
		var button_tag = document.createElement("BUTTON");
		var text = document.createTextNode(text_node[i]);
		button_tag.id = button_id[i];
		button_tag.appendChild(text);
		document.getElementById('switchcss-container').appendChild(button_tag);
	}
}());
(function add_clickevents(){
	document.getElementById('theme_1').addEventListener('click', function() {
		switch_style('switch1')
	}, false);
	document.getElementById('theme_2').addEventListener('click', function() {
		switch_style('switch2')
	}, false);
	document.getElementById('theme_3').addEventListener('click', function() {
		switch_style('switch3')
	}, false);
}());
function switch_style (css_title)
{	
	alert(css_title);
  	var i;
  	var linktag = document.getElementsByTagName("link");
	for (i = 0; i < linktag.length; i++ ) {
		if ((linktag[i].rel.indexOf( "stylesheet" ) != -1) &&linktag[i].title) {
		  	linktag[i].disabled = true ;
		  	if (linktag[i].title == css_title) {
		    	linktag[i].disabled = false ;
		  	}
		}
	//set_cookie( style_cookie_name, css_title, style_cookie_duration, style_domain );
  	}
}
