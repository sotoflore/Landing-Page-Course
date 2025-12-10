import { SELECTORS } from "./contants/selectores.js";
import { users } from "./contants/users.js";
import { benefits, featuresProfile, frequentlyQuestions, publicObjective, testimonials, topics } from "./contants/data.js";
import { renderBenefitsCard, renderFAQItem, renderFeatureProfileCard, renderPublicTargetCard, renderTestimonialCard, renderTopicsCard } from "./ui/cards.js";

const year = document.getElementById('year');
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

function renderContent(selector, data, renderer) {
    const container = document.querySelector(selector);

    if (!container) return;

    const htmlContent = data.map(renderer).join('');
    container.innerHTML = htmlContent;
};

function createPurchaseNotification() {
    // Select random user
    const randomUser = users[Math.floor(Math.random() * users.length)];

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `
        fixed bottom-4 right-4 md:right-6 lg:right-8 text-green-600 ms-10 rounded-xl
        max-w-sm z-50 transform translate-x-full transition-all duration-300 ease-in-out
    `;
    notification.innerHTML = `
        <div class="flex items-center gap-2 bg-green-100 rounded-lg p-1">
            <span class="bg-green-600 p-1 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                    stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    viewBox="0 0 24 24" class="text-emerald-100">
                    <path d="M5 13l4 4L19 7" />
                </svg>
            </span>
            <p class="font-semibold text-xs leading-tight">${randomUser}</p>
            <p class="text-emerald-500 text-xs">acaba de comprar.</p>
        </div>
    `;

    // Append to body
    document.body.appendChild(notification);

    // Animate slide-in
    requestAnimationFrame(() => {
        notification.classList.remove('translate-x-full');
        notification.classList.add('translate-x-0');
    });

    // Auto-remove after 5 seconds with slide-out animation
    const removeTimeout = setTimeout(() => {
        notification.classList.remove('translate-x-0');
        notification.classList.add('translate-x-full');
        const finalRemove = () => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
            clearTimeout(removeTimeout);
        };
        notification.addEventListener('transitionend', finalRemove, { once: true });
    }, 1500);

    // Handle manual close
    notification.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
            clearTimeout(removeTimeout);
            notification.classList.remove('translate-x-0');
            notification.classList.add('translate-x-full');
            const finalRemove = () => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            };
            notification.addEventListener('transitionend', finalRemove, { once: true });
        }
    });
}

// Initialize notifications: Start after DOM load, trigger every 60 seconds
let notificationInterval = null;
function startNotifications() {
    const initialDelay = Math.floor(Math.random() * 5000) + 1000;
    setTimeout(createPurchaseNotification, initialDelay);
    notificationInterval = setInterval(createPurchaseNotification, 60000);
}

// Cleanup on page unload (good practice)
window.addEventListener('beforeunload', () => {
    if (notificationInterval) {
        clearInterval(notificationInterval);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    renderContent(SELECTORS.benefitsContainer, benefits, renderBenefitsCard);
    renderContent(SELECTORS.topicsContainer, topics, renderTopicsCard);
    renderContent(SELECTORS.publicContainer, publicObjective, renderPublicTargetCard);
    renderContent(SELECTORS.testimonialsContainer, testimonials, renderTestimonialCard);
    renderContent(SELECTORS.faqContainer, frequentlyQuestions, renderFAQItem);
    renderContent(SELECTORS.featuresProfileContainer, featuresProfile, renderFeatureProfileCard);
    year.textContent = new Date().getFullYear();
    startNotifications()
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
