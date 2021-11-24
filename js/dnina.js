function showPic(pic, w, h, type) {
    document.getElementById('windowContent').innerHTML = "<img src=\"./images/" + type + " " + pic + " Red.jpg\" />";
    var l, t; 
    l = screen.width / 7;
    t = 50;  //screen.height/4;

    displayFloatingDiv('windowContent', '', w, h, l, t);
}