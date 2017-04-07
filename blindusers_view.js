(function Convert(){
    images = window.document.getElementsByTagName('img');
    var num_images = images.length;
    for (var i = 0; i < num_images; i++)
    {
            var image = images[0];
            if(image.hasAttribute('alt')){
                textReplacement = document.createTextNode(image.getAttribute('alt'));
                image.parentNode.replaceChild(textReplacement, image);
            }
            else{
                image.style.backgroundColor = "red";
                //image.setAttribute('alt', 'alt text of image not provided');
            }

    }
}());