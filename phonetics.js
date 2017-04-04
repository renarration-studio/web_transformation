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
    Translate_button()
    create_textArea()
  
}());
function Translate_button(){
    button = document.createElement("BUTTON");
    var text = document.createTextNode("Get Phonetic");
    button.id = 'phonetic';
    button.appendChild(text);
    document.getElementById('switchcss-container').appendChild(button);
}
function create_textArea() {
    var output = document.createElement("TEXTAREA");
    output.id="textarea";
    var t = document.createTextNode("");
    output.appendChild(t);
    document.getElementById('switchcss-container').appendChild(output);
}
function phoneticsTrans_API(){
// var url = "http://www.phonemicchart.com/transcribe/";
var url = "//localhost:5000/phonetic-trans"
document.querySelector('#phonetic').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    if (window.getSelection) 
    {
        textAPI = window.getSelection().toString();
    } 
    else if (document.selection && document.selection.type != "Control") {
        textAPI = document.selection.createRange().text;
    }
    alert(textAPI);
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.send(JSON.stringify({"sentence":textAPI}));
    xhr.onreadystatechange = function() {
        if (this.readyState==4 && this.status==200) {
            var res = this.responseText;
            alert(res);
            document.querySelector('#textarea').innerHTML = res;
        }
    }
}, false);
}
