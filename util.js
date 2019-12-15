const HttpRequest = XMLHttpRequest;

function loadfragment(targetQuery, frag, mode='replace') {
    var req = new HttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var target = document.querySelector(targetQuery);
            switch (mode) {
                case 'replace':
                    target.outerHTML = this.responseText;
                    break;
                case 'append':
                    target.append(this.responseText)
                    break;
                default:
                    throw 'Invalid mode: '+mode;
            }
        }
    }
    req.open('GET', frag, true);
    req.send();
}

function toggleNavmenu() {
    var content = document.getElementById('smallnav')
    return content.classList.toggle('w3-show')
}

function main() {
    loadfragment('#navbar', 'parts/nav.htm');
}

// exec
document.body.onload = main