
function toggleNavmenu() {
    var content = document.getElementById('smallnav')
    return content.classList.toggle('w3-show')
}

function navResetBtns() {
    var navbtns = document.querySelectorAll('nav button[onclick], nav a[onclick]')
    for (const btn of navbtns) {
        btn.classList.remove('w3-white')
    }
}

function navReset() {
    var contents = document.body.querySelectorAll('.page')
    for (const m of contents) {
        m.style.display = 'none'
    }

    navResetBtns()
}

function navTo(sender, id) {
    navReset()

    document.getElementById(id).style.display = 'block'
    document.body.scroll(0,0)

    sender.classList.add('w3-white')
}

function navclick(sender) {
    navResetBtns()
    sender.classList.add('w3-white')
}
