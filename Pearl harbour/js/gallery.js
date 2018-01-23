window.onload = function gallery() {
    var a = document.getElementById('previous');
    var b = document.getElementById('next');
    var c = document.getElementById('gallery');
    var arr = ["images/gallery/boarding_the_uss_arizona_navy_boat.jpg", "images/gallery/entering_uss_arizona_memorial.jpg", "images/gallery/helicopter_view.jpg", "images/gallery/pearl_harbor.jpg", 'images/gallery/pearl_harbor_battleship.jpg', 'images/gallery/uss_arizona_memorial.jpg'];
    var br = 0;
    a.addEventListener('click', f1, false);

    function f1() {
        br--;
        if (br < 0) br = arr.length - 1;
        c.src = arr[br];
    }

    b.addEventListener('click', f2, false)

    function f2() {
        br++;
        if (br >= arr.length) br = 0;
        c.src = arr[br];
    }
}