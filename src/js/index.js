import { benefits, publicObjective, topics } from "./data.js";

const benefitsContainer = document.querySelector('#benefits-container');
const topicsContainer = document.querySelector('#topics-container');
const publicTargetContainer = document.querySelector('#public-container');
const year = document.getElementById('year');

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

function renderContent(containerElement, dataList, itemRenderer) {
    if (!containerElement) {
        return;
    }
    const htmlContent = dataList.map(itemRenderer).join('');
    containerElement.innerHTML = htmlContent;
}

const renderBeneficioCard = (item) => `
    <div class="border-t-4 border-brown bg-white p-6 rounded-xl shadow">
        <div class="w-14 h-14 bg-brown rounded-lg flex items-center justify-center mb-4">
          ${item.iconSVG}
        </div>
        <h3 class="text-xl font-bold text-primary mb-2">${item.title}</h3>
        <p class="text-gray-600">${item.description}</p>
    </div>
`;

const renderTopicsCard = (item) => `
<div class="p-6">
    <div class="flex items-start">
        <div  class="shrink-0 w-10 h-10 bg-brown rounded-full flex items-center justify-center text-white font-extrabold text-lg mr-4 shadow-md">
            ${item.id}
        </div>
        <div>
            <h4 class="text-xl font-bold text-primary mb-2">${item.title}</h4>
            <p class="text-gray-700 mb-3">${item.description}</p>
            <div class="mt-2 flex flex-wrap gap-2">
                ${item.tags.map(tag => `
                    <span class="px-3 py-1 bg-beige text-primary rounded-full text-sm">${tag}</span>`
                ).join('')}
            </div>
        </div>
    </div>
</div>
`;

const renderPublicTargetCard = (item) => `
<div class="bg-white border-b-4 border-brown transform scale-105 shadow-lg rounded-xl">
    <div class="bg-brown rounded-t-xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="text-beige">
            <path
                d="M12 21c-3.9 0-7.24-1.84-9-4.5 2.5-3.1 5.8-4.5 9-4.5s6.5 1.4 9 4.5c-1.76 2.66-5.1 4.5-9 4.5zM12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
        </svg>
    </div>
    <div class="p-4">
        <h3 class="text-xl font-bold text-primary mb-2 mt-3">${item.title}</h3>
        <p class="text-gray-700">${item.description}</p>
    </div>
    <span class="absolute top-0 right-0 -mt-2.5 mr-0 md:-m-2.5 bg-brown text-white text-xs font-bold px-3 py-1 rounded-full shadow-md rotate-3">
        ¡Rol Clave!
    </span>
</div>
`;

document.addEventListener('DOMContentLoaded', () => {
    renderContent(benefitsContainer, benefits, renderBeneficioCard);
    renderContent(topicsContainer, topics, renderTopicsCard);
    renderContent(publicTargetContainer, publicObjective, renderPublicTargetCard);
    year.textContent = new Date().getFullYear();
});

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden","translate-x-full");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("hidden", "translate-x-full");
});

document.addEventListener("click", (e) => {
    const clickedOutside =
        !mobileMenu.contains(e.target) && !menuToggle.contains(e.target);

    if (clickedOutside) {
        mobileMenu.classList.add("hidden","translate-x-full");
    }
});
// Limited-Time Offer Countdown

const elements = {
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
};

const ONE_HOUR = 60 * 60 * 1000;
const ONE_MINUTE = 60 * 1000;

const INITIAL_TIME_MS = ONE_HOUR + (30 * ONE_MINUTE);

let endTimestamp = null;

if (!endTimestamp) {
    endTimestamp = Date.now() + INITIAL_TIME_MS;
}

function formatTime(ms) {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));

    return {
        hours: String(Math.floor(totalSeconds / 3600)).padStart(2, "0"),
        minutes: String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0"),
        seconds: String(totalSeconds % 60).padStart(2, "0"),
    };
}

function updateCountdown() {
    const remaining = endTimestamp - Date.now();

    if (remaining <= 0) {
        elements.hours.textContent = "00";
        elements.minutes.textContent = "00";
        elements.seconds.textContent = "00";

        animateExpiration();
        clearInterval(intervalId);
        return;
    }

    const { hours, minutes, seconds } = formatTime(remaining);

    elements.hours.textContent = hours;
    elements.minutes.textContent = minutes;
    elements.seconds.textContent = seconds;
}

function animateExpiration() {
    const banner = document.getElementById("offer-banner");

    if (!banner) return;

    banner.classList.add("opacity-60", "grayscale");
    banner.innerHTML += `
        <p class="text-center text-red-300 mt-2 text-sm font-semibold uppercase tracking-widest">
            La oferta ha expirado
        </p>
    `;
}

const intervalId = setInterval(updateCountdown, 1000);
updateCountdown();
