function getActiveIcon() {
    const e = document.querySelector('div.mainArea>div.active');
    if(e != null)
        return e.id;
    return null;
}

function setIconColor(id, color) {
    document.getElementById(id).style.textShadow = '0 0 0 ' + color;
    document.getElementById(id).color = color;
}

function setActiveIcon(id) {
    const previous = document.getElementById('ga').querySelector('div.icon.active');
    if(previous != null) {
        previous.classList.remove('active');
    }
    document.getElementById(id).classList.add('active');    
}

function incrementScore() {
    const e = document.getElementById('score');
    let score = parseInt(document.getElementById('score').innerText);
    score += 1;
    e.innerText = (score < 10 ? '0' : '') + score.toString();
}

function nextMove() {
    const colors = getData('colors');
    let active = getActiveIcon();
    if(active == null) {
        active = drawRandom(['lf', 'lh', 'rh', 'rf']);
    }
    const next = drawRandom(['l', 'r']) + (active[1] == 'h' ? 'f' : 'h');
    const excluded_color = document.getElementById(next).color;
    const color_candidates = double((next[1] == 'h') ? colors.hand : colors.foot);
    color_candidates.splice(color_candidates.indexOf(excluded_color), 1);
    const color = drawRandom(color_candidates);
    setActiveIcon(next);
    setIconColor(next, color);
    incrementScore();
}

function reset() {
    //reset score
    const e = document.getElementById('score');
    e.innerText = '00';

    //deactivate icon
    const active = document.getElementById('ga').querySelector('div.icon.active');
    if(active != null) {
        active.classList.remove('active');
    }

    //reset colors
    for(const i of ['lf', 'lh', 'rh', 'rf']) {
        setIconColor(i, '#c0c0c0');
    }
}

document.getElementById('ga').addEventListener('click', nextMove);
document.getElementById('colors').addEventListener('click', (e) => {
    window.location.href = 'colors.html';
})
document.getElementById('reset').addEventListener('click', reset);
