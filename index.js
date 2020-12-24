//menu event listeners
const openMenu = () => {
    document.querySelector('.header').innerHTML = `<ul>
    <li>
        <button class="button-clear" onclick="scrollSkills()">Skills</button>
    </li>
    <li>
        <button class="button-clear" onclick="scrollProjects()">Projects</button>
    </li>
    <li>
        <button class="button-secondary" id="close" style="color: white;" onclick="closeMenu()">x</button>
    </li>
</ul>`;
    document.getElementById('close').style.display = 'block';
};
const closeMenu = () => {
    document.getElementById('close').style.display = 'none';
    document.querySelector('.header').innerHTML = `<div class="grid">
    <div class="title">
        <h2>Kaleb McKinney</h2>
    </div>
    <div class="links">
        <ul>
            <li class="link">
                <button class="button-clear" onclick="scrollSkills()">Skills</button>
            </li>
            <li class="link">
                <button class="button-clear" onclick="scrollProjects()">Projects</button>
            </li>
            <li class="mobile-link">
                <button class="button-clear" id="menu" onclick="openMenu()">Menu</button>
            </li>
            <li>
                <button class="button-secondary" id="close" style="color: white;">x</button>
            </li>
        </ul>
    </div>
</div>`;
};

//links
function scrollSkills() {
    window.scrollTo(0, 460);
}
function scrollProjects() {
    window.scrollTo(0, 1850)
}

//typed text effect
var i = 0;
var txt = 'Web Developer'; 
var speed = 70; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById('typed-text').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
setTimeout(typeWriter, 750);