// Change wallpaper on page load
$(document).ready(function () {
    var bgArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg'];
    var bg = bgArray[Math.floor(Math.random() * bgArray.length)];
    var path = '_global-externals/wallpapers/';
    var imageUrl = path + bg;
    $('body').css('background-image', 'url(' + imageUrl + ')');
});

// Main clock
setInterval(displayTime, 1000);

function displayTime() {

    const timeNow = new Date();

    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    let weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    let today = weekDay[timeNow.getDay()];
    let months = timeNow.toLocaleString("default", {
        month: "short"
    });
    let day = timeNow.getDate();
    let year = timeNow.getFullYear();
    let period = "AM";

    if (hoursOfDay > 12) {
        hoursOfDay -= 12;
        period = "PM";
    }

    if (hoursOfDay === 0) {
        hoursOfDay = 12;
        period = "AM";
    }

    // hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    day = day < 10 ? "0" + day : day;

    let time = hoursOfDay + ":" + minutes + " " + period;

    document.getElementById('digital-clock').innerHTML = today + " " + months + " " + day + " " + time;
}
displayTime();

// Shared Folders copy link
function ready1() {
    let copyText = document.getElementById("Copy1");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
function ready2() {
    let copyText = document.getElementById("Copy2");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
function ready3() {
    let copyText = document.getElementById("Copy3");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
function ready4() {
    let copyText = document.getElementById("Copy4");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
function ready5() {
    let copyText = document.getElementById("Copy5");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
function ready6() {
    let copyText = document.getElementById("Copy6");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
function ready7() {
    let copyText = document.getElementById("Copy7");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}