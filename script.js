/**
 * Updated Version 2 Secure Password Generator by EQ
 * Updates: - loading icon when generating password utilizing async, 
 * - button disabling/enabling for realistic pass generation
 * Sources: GOOGLE, MDN, STACKOVERFLOW
 */

let passEl = [document.querySelector('#pass1'), document.querySelector('#pass2'), document.querySelector('#pass3'), document.querySelector('#pass4')];
let iconEl = [document.querySelector('#icon1'), document.querySelector('#icon2'), document.querySelector('#icon3'), document.querySelector('#icon4')];
const loadEl = document.querySelector('#load-el');

loadEl.addEventListener('click', () => {
    loadEl.disabled = true;
    load();
})

async function load() {
    console.log('loading....');
    iconEl[0].textContent = '';
    iconEl[1].textContent = '';
    iconEl[2].textContent = '';
    iconEl[3].textContent = '';
    iconEl[0].classList.add('fa', 'fa-spinner', 'fa-spin');
    iconEl[1].classList.add('fa', 'fa-spinner', 'fa-spin');
    iconEl[2].classList.add('fa', 'fa-spinner', 'fa-spin');
    iconEl[3].classList.add('fa', 'fa-spinner', 'fa-spin');
    const result = await reload();
}

function reload() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(generate());
        }, 3000);
    })
}

function generate() {
    let pass = ['', '', '', ''];
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz!@#$%^&";
    let string_length = 12;

    iconEl[0].classList.remove('fa', 'fa-spinner', 'fa-spin');
    iconEl[1].classList.remove('fa', 'fa-spinner', 'fa-spin');
    iconEl[2].classList.remove('fa', 'fa-spinner', 'fa-spin');
    iconEl[3].classList.remove('fa', 'fa-spinner', 'fa-spin');

    loadEl.disabled = false;
    
    for (let i = 0; i < string_length; i++) {
        let rnum = [Math.floor(Math.random() * chars.length), Math.floor(Math.random() * chars.length), Math.floor(Math.random() * chars.length), Math.floor(Math.random() * chars.length)]
        pass[0] += chars.substring(rnum[0], rnum[0]+1);
        pass[1] += chars.substring(rnum[1], rnum[1]+1);
        pass[2] += chars.substring(rnum[2], rnum[2]+1);
        pass[3] += chars.substring(rnum[3], rnum[3]+1);    
        }
        iconEl[0].textContent = pass[0];
        iconEl[1].textContent = pass[1];
        iconEl[2].textContent = pass[2];
        iconEl[3].textContent = pass[3];
}


