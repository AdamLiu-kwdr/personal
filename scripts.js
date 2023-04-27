document.addEventListener("mousemove", parallax);
function parallax(e) {
    document.querySelectorAll(".parallax").forEach(function (move) {
        const moving = move.getAttribute("parallax-amount")
        const x = ((e.clientX - (window.innerWidth / 2)) * moving) / 150;
        const y = ((e.clientY - (window.innerHeight / 2)) * moving) / 150;

        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
};

const charMenu = document.getElementById('charmenu');
const projMenu = document.getElementById('projmenu');
const overlay = document.querySelector('.overlay');

function closeMenu(){
    charMenu.style.width='0px';
    projMenu.style.width='0px';
    overlay.style.display = 'none';
}

function openCharacterMenu(){
    charMenu.style.width='400px';
    overlay.style.display = 'block';
}

function openProjMenu(){
    projMenu.style.width='400px';
    overlay.style.display='block';
}
