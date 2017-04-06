alert("Zap out the content by clicking anywhere on the document");

$("body").click(function(event){
      console.log(event.target);
      targetElem= event.target;
      targetElem.style.visibility="hidden";
});
