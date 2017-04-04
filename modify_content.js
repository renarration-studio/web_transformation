(function switchcss_container(){
    //appending a CSS stylesheet to head of webpage
    var link = document.createElement('link');
    // using rawgit.com MaxCDN.. files directly linked to git repo 'annoletjs/master'
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "https://rawgit.com/sadhanareddy/css-changer-tool/master/annolet.css"; //random version number removed bcoz some browser take it as text file and not as CSS.
    document.getElementsByTagName('head')[0].appendChild(link);

    //appending a div to body of webpage
    var body = document.getElementsByTagName('body')[0];
    var switchcss_container = document.createElement('div');
    switchcss_container.id = 'switchcss-container';
    body.appendChild(switchcss_container);
    create_div()
    save_button()
    highlight_button()
}());
(function disableAllLinks(){
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].onclick = function() {return(false);};
    }
}());
(function setAttr() {
	document.getElementsByTagName('body')[0].setAttribute('contenteditable', true);
	document.getElementsByTagName('body')[0].setAttribute('class', 'edit');
	document.getElementsByTagName('body')[0].setAttribute('title', 'Edit Content');
    // var all = document.getElementsByTagName("*");
    // for (var i=0, max=all.length; i < max; i++) {
 //        all[i].setAttribute("contenteditable", true);
 //        all[i].setAttribute("class", "edit");
    //  all[i].setAttribute("title", "editext");
    // }
}());
function create_div(){
    div = document.createElement('div');
    var text = document.createTextNode('Edit the text and click to save for next time');
    div.id = 'update';
    div.appendChild(text);
    document.getElementById('switchcss-container').appendChild(div);
}
function saveEdits() {
	//get the editable element
	var editElem = document.getElementsByClassName("edit");
	//get the edited element content
	var userVersion = editElem.innerHTML;
	//save the content to local storage
	localStorage.userEdits = userVersion;
	//write a confirmation to the user
	document.getElementById("update").innerHTML="Edits saved!";
}
function checkEdits() {
	//find out if the user has previously saved edits
	if(localStorage.userEdits!=null)
	document.getElementsByClassName("edit").innerHTML = localStorage.userEdits;
}
function save_button(){
    button = document.createElement("BUTTON");
    button.id = "save-edits"
    var text = document.createTextNode("Save Edits");
    button.appendChild(text);
    button.onclick=function(){
     	saveEdits()
    };
    document.getElementById('switchcss-container').appendChild(button);
}
function highlight_button(){
    highlight_button = document.createElement("BUTTON");
    highlight_button.id = "highlight";
    var text = document.createTextNode("Highlight Button");
    highlight_button.appendChild(text);
    document.getElementById('switchcss-container').appendChild(highlight_button);
    highlight_button.onclick=function(){
        highlight_content()
    };
}
function highlight_content(){
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
