(function getAlllinks() {
	url="http://www.vlabs.ac.in"
	var xhr = new XMLHttpRequest();
    xhr.open("POST","//localhost:5000/get-links",true);
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.send(JSON.stringify({"url":url}));
    //xhr.send(data);
    xhr.onreadystatechange = function() {
        if (this.readyState==4 && this.status==200) {
            alert("hello");
            var res = this.responseText;
            alert(res);
            document.body.innerHTML = res;
        }
    }
}());