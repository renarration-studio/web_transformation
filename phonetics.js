(function phonetics_container(){
  //appending a CSS stylesheet to head of webpage
    var link = document.createElement('link');
    // using rawgit.com MaxCDN.. files directly linked to git repo 'webpage-transformation/master'
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "https://cdn.rawgit.com/renarration-studio/webpage-transformation/392230f3330c70f71d5ab69f31c59b9c21767bf6/css/main.css"; //random version number removed bcoz some browser take it as text file and not as CSS.
    document.getElementsByTagName('head')[0].appendChild(link);

    //appending a div to body of webpage
    var body = document.getElementsByTagName('body')[0];
    var phonetics_container = document.createElement('div');
    phonetics_container.id = 'phonetics-container';
    body.appendChild(phonetics_container);

    //appending h2 tag into the div inner HTML
    var header = document.createElement('h2');
    var text = document.createTextNode("Phonetic Translation");
    header.id = 'phonetics-header';
    header.appendChild(text);
    document.getElementById('phonetics-container').appendChild(header);

    Translate_button()
    create_textArea()
}());

function Translate_button(){
    button = document.createElement("BUTTON");
    var text = document.createTextNode("Get Phonetic");
    button.id = 'phonetic';
    button.appendChild(text);
    document.getElementById('phonetics-container').appendChild(button);
}
function create_textArea() {
    var output = document.createElement("TEXTAREA");
    output.id="textarea";
    var text = document.createTextNode("");
    output.appendChild(text);
    document.getElementById('phonetics-container').appendChild(output);
}

(function phoneticsTrans_API(){
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
}());
