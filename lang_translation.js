(function switchcss_container(){
    //appending a CSS stylesheet to head of webpage
    var link = document.createElement('link');
    // using rawgit.com MaxCDN.. files directly linked to git repo 'annoletjs/master'
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "https://rawgit.com/sadhanareddy/css-changer-tool/master/annolet.css"; //random version number removed bcoz some browser take it as text file and not as CSS.
    document.getElementsByTagName('head')[0].appendChild(link);
    // appending a div to body of webpage
    var body = document.getElementsByTagName('body')[0];
    var switchcss_container = document.createElement('div');
    switchcss_container.id = 'switchcss-container';
    body.appendChild(switchcss_container);
    create_div()
    Translate_button()
    select_list()
    create_textArea()
}());
function googleTranslateElementInit() {
   new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
function create_div(){
     div = document.createElement('div');
     div.id = 'google_translate_element';
     document.getElementById('switchcss-container').appendChild(div);
}
function Translate_button(){
     button = document.createElement("BUTTON");
     var text = document.createTextNode("Translate");
     button.id = 'lang_translate';
     button.appendChild(text);
     document.getElementById('switchcss-container').appendChild(button);
}
function select_list(){
      //Create array of options to be added
      var array = ["telugu","hindi", "malayalam"];
      var options = ["te", "hi", "ml"];
      //Create and append select list
      var selectList = document.createElement("select");
      selectList.setAttribute("id", "lang");
      selectList.setAttribute("name", "to");
      document.getElementById('switchcss-container').appendChild(selectList);
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
    document.getElementById('switchcss-container').appendChild(output);
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
