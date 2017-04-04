$("body").click(function(event){
      console.log(event.target);
      targetElem= event.target;
      targetElem.style.visibility="hidden";
});
