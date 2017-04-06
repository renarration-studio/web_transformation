(function disable_css(){
   for ( i=0; i<document.styleSheets.length; i++) {
      document.styleSheets.item(i).disabled=true;
   }
}());
