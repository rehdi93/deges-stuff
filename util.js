function loadNav() {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var nav = document.getElementById('navbar');
            nav.outerHTML = this.responseText;
        }
    }
    req.open('GET', 'parts/nav.htm', true);
    req.send();
}

function toggleNavmenu() {
    var content = document.getElementById('smallnav')
    return content.classList.toggle('w3-show')
}

function main() {
    loadNav();
}

// exec
document.body.onload = main