
function loadfragment(targetQuery, frag, inner=false) {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var target = document.querySelector(targetQuery);
            var placement = inner ? 'innerHTML' : 'outerHTML';
            target[placement] = this.responseText;
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