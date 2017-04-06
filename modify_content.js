(function content_container(){
    //appending a CSS stylesheet to head of webpage
    var link = document.createElement('link');
    // using rawgit.com MaxCDN.. files directly linked to git repo 'webpage-transformation/master'
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "https://cdn.rawgit.com/renarration-studio/webpage-transformation/0d397988acb886d3d3aa96e0280879496645ccfb/css/main.css"; 
    document.getElementsByTagName('head')[0].appendChild(link);

    //appending a div to body of webpage
    var body = document.getElementsByTagName('body')[0];
    var content_container = document.createElement('div');
    content_container.id = 'content-container';
    body.appendChild(content_container);

    //appending h2 tag into the div inner HTML
    var header = document.createElement('h2');
    var text = document.createTextNode("Modify Content");
    header.id = 'content-header';
    header.appendChild(text);
    document.getElementById('content-container').appendChild(header);

    disableAllLinks()
    setAtrr()
    create_div()
    createButton()
    changeFontsize()
}());

function disableAllLinks(){
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].onclick = function() {return(false);};
    }
}

function setAttr() {
	document.getElementsByTagName('body')[0].setAttribute('contenteditable', true);
	document.getElementsByTagName('body')[0].setAttribute('class', 'edit');
	document.getElementsByTagName('body')[0].setAttribute('title', 'Edit Content');
    // var all = document.getElementsByTagName("*");
    // for (var i=0, max=all.length; i < max; i++) {
 //        all[i].setAttribute("contenteditable", true);
 //        all[i].setAttribute("class", "edit");
    //  all[i].setAttribute("title", "editext");
    // }
}

function create_div(){
    div = document.createElement('div');
    var text = document.createTextNode('Edit the text and click to save for next time');
    div.id = 'update';
    div.appendChild(text);
    document.getElementById('content-container').appendChild(div);
}

// Creates buttons 
function createButton(){
    var i= 0;
    var buttons = 4;
    var text_node = ['Highlight Text', 'Save Edits','Increase Font', 'Decrease Font'];
    var id = ['highlight', 'save-edits', 'increase-font', 'decrease-font'];
    for(i=0; i<buttons; i++){
        button_tag = document.createElement("BUTTON");
        text = document.createTextNode(text_node[i]);
        button_tag.id = id[i];
        button_tag.appendChild(text);
        document.getElementById('content-container').appendChild(button_tag);
    }
}

(function add_clickevents(){
    document.getElementById('highlight').addEventListener('click', function() {
        highlight_content()
    }, false);
    document.getElementById('save-edits').addEventListener('click', function() {
        saveEdits()
    }, false);
}());

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

function changeFontsize(){
    var fontSize = parseInt($('body').css('font-size'),10);
    $('#increase-font').on('click',function(){
        fontSize+=0.5;
        $('body').css('font-size',fontSize+'px');
    })
    $('#decrease-font').on('click',function(){
        fontSize-=0.5;
        $('body').css('font-size',fontSize+'px');
    })
}

