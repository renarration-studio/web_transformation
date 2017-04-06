(function pagestripper_container(){
    //appending a CSS stylesheet to head of webpage
    var link = document.createElement('link');
    // using rawgit.com MaxCDN.. files directly linked to git repo 'webpage-transformation/master'
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "https://cdn.rawgit.com/renarration-studio/webpage-transformation/736818875561b9be3571927e8640145153b7a493/css/main.css"; 
    document.getElementsByTagName('head')[0].appendChild(link);

    //appending a div to body of webpage
    var body = document.getElementsByTagName('body')[0];
    var pagestripper_container = document.createElement('div');
    pagestripper_container.id = 'pagestripper-container';
    body.appendChild(pagestripper_container);

    //appending h2 tag into the div inner HTML
    var header = document.createElement('h2');
    var text = document.createTextNode("Webpage Stripper");
    header.id = 'pagestripper-header';
    header.appendChild(text);
    document.getElementById('pagestripper-container').appendChild(header);

    createButton()
    // showLinks()
    getlinks()
}());


// Creates buttons 
function createButton(){
    var i= 0;
    var buttons = 3;
    var text_node = ['Show Text', 'Show Images', 'Show Links'];
    var id = ['show-text', 'show-images', 'show-links'];
    for(i=0; i<buttons; i++){
        button_tag = document.createElement("BUTTON");
        text = document.createTextNode(text_node[i]);
        button_tag.id = id[i];
        button_tag.appendChild(text);
        document.getElementById('pagestripper-container').appendChild(button_tag);
    }
}

// function showLinks() {
//     url="http://www.vlabs.ac.in"
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "//localhost:5000/show-links" ,true);
//     xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
//     xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
//     xhr.send(JSON.stringify({"url":url}));
//     //xhr.send(data);
//     xhr.onreadystatechange = function() {
//         if (this.readyState==4 && this.status==200) {
//             alert("hello");
//             var res = this.responseText;
//             alert(res);
//             document.body.innerHTML = res;
//         }
//     }
// }

function getlinks() {
    // var links = document.getElementsByTagName('a');
    // for(var i = 0; i< links.length; i++){
    //     document.body.innerHTML = links[i].href;
    // }

    // var arr = [], l = document.links;
    // for(var i=0; i<l.length; i++) {
    //   arr.push(l[i].href);
    // }
    // document.body.innerHTML = l[i].href;

    var all = document.getElementsByTagName("*");
    for (var i=0, max=all.length; i < max; i++) {
        var href_attribute = all[i].hasAttribute("href");
        var src_attribute = all[i].hasAttribute("src");
        if(href_attribute == false && src_attribute == false){
            all[i].style.visibility = 'hidden';
        }
        else if(href_attribute == true || src_attribute == true){
            all[i].style.visibility = 'visible';
        }
    }
}
