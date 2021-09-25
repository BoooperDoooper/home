// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    yourName = document.getElementById('name'),
    focus = document.getElementById('focus');

const searchBtn = document.getElementById('search');
const form = document.querySelector('form');
const settings = document.getElementById('settings');

// Options
const showAMPM = true;

// Search
searchBtn.addEventListener('click', () => {
    document.getElementById('searchInput').focus();
});

let urlLoad = 'https://www.google.com/search?q=';
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let url = document.getElementById('searchInput').value;
    window.location = `${urlLoad}${url}`;
});

// Settings pop up
const setting = document.querySelector('.settings');
settings.addEventListener('click', () => {
    setting.classList.toggle('settingsActive');
});
const general = document.querySelector('.general');
const background = document.querySelector('.background');
const color = document.querySelector('.color');
const generalMain = document.querySelector('.generalMain');
const backgroundMain = document.querySelector('.backgroundMain');
const colorMain = document.querySelector('.colorMain');

generalMain.addEventListener('click', () => {
    general.classList.add('active');
    background.classList.remove('active');
    color.classList.remove('active');
});
backgroundMain.addEventListener('click', () => {
    general.classList.remove('active');
    background.classList.add('active');
    color.classList.remove('active');
});
colorMain.addEventListener('click', () => {
    general.classList.remove('active');
    background.classList.remove('active');
    color.classList.add('active');
});





// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set Am or Pm
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr of 24 hr
    hour = hour % 12 || 12;

    // Output the time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAMPM ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBG() {
    let today = new Date(),
        hour = today.getHours();
    
    if(hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('../Img/sunrise.jpg')";
        greeting.textContent = 'Good Morning'
    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('../Img/day.jpg')";
        greeting.textContent = 'Good AfterNoon'
    } else {
        // Evening
        document.body.style.backgroundImage = "url('../Img/night.jpg')";
        greeting.textContent = 'Good Evening'
        document.body.style.color = 'white';
    }
}

// Get Name
function getName() {
    if (localStorage.getItem('name') == null) {
        yourName.textContent = '[Enter Name]';
    } else {
        yourName.textContent = localStorage.getItem('name');
    }
}

// Set Name 
function setName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.key == 13) {
            localStorage.setItem('name', e.target.innerText);
            yourName.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}


yourName.addEventListener('keypress', setName);
yourName.addEventListener('blur', setName);
// Video at 25:52 minutes

// Run
showTime();
setBG();
getName();
