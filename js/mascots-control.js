

function setMascot(mascot) {
    $('main').addClass("mascot");
    $('main').css("background-image", "url(" + mascot + ")");
    $('main').removeClass("plain");
}

var mascotList = [ "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png" ]

$(document).ready(function(event) {
    var mascotEnable = true;

    var mascot = mascotPath + mascotList[Math.floor(Math.random() * mascotList.length)];
    var mascotMinWidth = 750;

    if (mascotEnable) {
        setMascot(mascot);
        controlMascot(mascot, mascotMinWidth);
    } else {removeMascot();
     }
}
)
