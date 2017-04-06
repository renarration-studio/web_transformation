(function langTrans_container(){
    //appending a CSS stylesheet to head of webpage
    var link = document.createElement('link');
    // using rawgit.com MaxCDN.. files directly linked to git repo 'webpage-transformation/master'
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "https://cdn.rawgit.com/renarration-studio/webpage-transformation/2b3df055c68d7bb024d13929aad43ea67ff5f8a9/css/main.css"; //random version number removed bcoz some browser take it as text file and not as CSS.
    document.getElementsByTagName('head')[0].appendChild(link);
    
    // appending a div to body of webpage
    var body = document.getElementsByTagName('body')[0];
    var trans_container = document.createElement('div');
    trans_container.id = 'langTrans-container';
    body.appendChild(trans_container);

    //appending h2 tag into the div inner HTML
    var header = document.createElement('h2');
    var text = document.createTextNode("Language Translation");
    header.id = 'trans-header';
    header.appendChild(text);
    document.getElementById('langTrans-container').appendChild(header);

    create_div()
    Translate_button()
    select_list()
    create_textArea()
}());

(function googleTrans_Api() {
    //appending a script tag to head of webpage
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.getElementsByTagName('head')[0].appendChild(script);
}());

function googleTranslateElementInit() {
   new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

function create_div(){
     div = document.createElement('div');
     div.id = 'google_translate_element';
     document.getElementById('langTrans-container').appendChild(div);
}

function Translate_button(){
     button = document.createElement("BUTTON");
     var text = document.createTextNode("Translate");
     button.id = 'lang_translate';
     button.appendChild(text);
     document.getElementById('langTrans-container').appendChild(button);
}

function select_list(){
      //Create array of options to be added
      var array = ["telugu","hindi", "malayalam"];
      var options = ["te", "hi", "ml"];
      //Create and append select list
      var selectList = document.createElement("select");
      selectList.setAttribute("id", "lang");
      selectList.setAttribute("name", "to");
      document.getElementById('langTrans-container').appendChild(selectList);
      //Create and append the options
      for (var i = 0; i < array.length; i++) {
          var option = document.createElement("option");
          option.setAttribute("value", options[i]);
          option.text = array[i];
          selectList.appendChild(option);
      }
}

function create_textArea() {
    var output = document.createElement("TEXTAREA");
    output.id="textarea";
    var t = document.createTextNode("");
    output.appendChild(t);
    document.getElementById('langTrans-container').appendChild(output);
}

(function languageTrans_API(){
  var url = "https://translate.yandex.net/api/v1.5/tr.json/translate",
  keyAPI = "trnsl.1.1.20170315T015859Z.3e04bd9bd31f6f00.99aa35ddf89167a86f5a892014edf632e9cef14f";

  document.querySelector('#lang_translate').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    // textAPI = document.querySelector('#source').value,
    var textAPI = "";
    if (window.getSelection) {
        textAPI = window.getSelection().toString();
    } 
    else if (document.selection && document.selection.type != "Control") {
        textAPI = document.selection.createRange().text;
    }
    alert(textAPI);
    langAPI = document.querySelector('#lang').value
    alert(langAPI)
    data = "key="+keyAPI+"&text="+textAPI+"&lang="+langAPI;
    alert(data)

    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(data);
    xhr.onreadystatechange = function() {
        if (this.readyState==4 && this.status==200) {
            var res = this.responseText;
            alert(res);
            var json = JSON.parse(res);
            if(json.code == 200) {
                 document.querySelector('#textarea').innerHTML = json.text[0];
                 alert("selected");
            }
            else {
                alert("select text");
            }
        }
    }
}, false);

}());
