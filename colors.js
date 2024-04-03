function spawnColor(c='#ffffff', h_active=true, f_active=true) {
    let e = document.createElement('div');
    e.classList.add('color');

    const color = document.createElement('input');
    color.setAttribute('type', 'color');
    color.classList.add('color_color', 'color_element');
    color.value = c;

    let hand = document.createElement('div');
    if(h_active) {
        hand.classList.add('active');
    }
    hand.classList.add('color_hand', 'color_element');
    hand.innerText = '🤚';

    let foot = document.createElement('div');
    if(f_active) {
        foot.classList.add('active');
    }
    foot.classList.add('color_foot', 'color_element');
    foot.innerText = '🦶';

    e = document.getElementById('ca').appendChild(e);

    e.appendChild(color);
    hand = e.appendChild(hand);
    foot = e.appendChild(foot);

    hand.addEventListener('click', (e) => {e.target.classList.toggle('active')});
    foot.addEventListener('click', (e) => {e.target.classList.toggle('active')});
}

function spawnColors() {
    let colors = getData('colors');
    if(colors == null) {
        return;
    }
    const cs = [];
    for(const c of colors.hand) {
        if(!cs.includes(c)) {
            cs.push(c)
        }
    }
    for(const c of colors.foot) {
        if(!cs.includes(c)) {
            cs.push(c)
        }
    }

    for(const c of cs) {
        spawnColor(c, colors.hand.includes(c), colors.foot.includes(c));
    }
}


spawnColors();
document.getElementById('add').addEventListener('click', spawnColor);
document.getElementById('save').addEventListener('click', (e) => {
    const records = document.getElementsByClassName('color');
    const colors = {
        foot: [],
        hand: []
    };
    for(const r of records) {
        const c = r.querySelector('input.color_color').value;
        const h = r.querySelector('div.color_hand').classList.contains('active');
        const f = r.querySelector('div.color_foot').classList.contains('active');

        if(h) {
            colors.hand.push(c);
        }
        if(f) {
            colors.foot.push(c);
        }
    }
    setData('colors', colors);
    window.location.href = '/';
});