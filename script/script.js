var fireballSize = 24;
var wizardSpeed = 10;
var wizardWidth = 70;

var getFireballSpeed = function (left) {
    if (left == true) {
        return 5
    } else {
        return 2
    }
};

var getWizardHeight = function (width) {
    return 1.337 * width;
}

function getWizardX (width) {
    return width / 2.3;
};

function getWizardY (height) {
    return height / 8;
}