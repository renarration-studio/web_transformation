(function Convert()
{
    images = window.document.getElementsByTagName('img');
    var num_images = images.length;
    for (var i = 0; i < num_images; i++)
    {
            var image = images[0];
            textReplacement = document.createTextNode(image.getAttribute('alt'));
            image.parentNode.replaceChild(textReplacement, image);
    }
}());