const blueHeader = document.querySelector('.bluePart');
var image = document.querySelector('#profileImage');

let height_bh = blueHeader.offsetHeight;
let height_img = image.offsetHeight;

let relMiddleToBlue = blueHeader.offsetHeight - height_img/2;

image.style.marginTop = relMiddleToBlue + "px";