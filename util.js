const HttpRequest = XMLHttpRequest;

function toggleNavmenu() {
    var content = document.getElementById('smallnav')
    return content.classList.toggle('w3-show')
}

function main() {
    // load navbar
    var req = new HttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == this.DONE && this.status == 200) {
            var target = document.querySelector('nav.placeholder');
            target.outerHTML = this.responseText;
            navHighlight()
        }
    }
    req.open('GET', 'parts/nav.htm', true);
    req.send();
}

function fname(path) {
    var items = path.split('/')
    return items[items.length-1]
}

function navHighlight() {
    var last = fname(window.document.location.pathname);
    if (last === "") {
        last = "index.htm";
    }
    var a = document.querySelector('nav a[href="'+last+'"]');
    a.classList.toggle('w3-white');
}