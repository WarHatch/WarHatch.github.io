const blueHeader = document.querySelector('.bluePart');
const profileImage = document.querySelector('#profileImage');

var CenterToHeader = function () {
    let height_img = profileImage.offsetHeight;
    let relMiddleToBlue = blueHeader.offsetHeight - height_img / 2;
    profileImage.style.marginTop = relMiddleToBlue + "px";
};

CenterToHeader();
window.addEventListener("resize", CenterToHeader);