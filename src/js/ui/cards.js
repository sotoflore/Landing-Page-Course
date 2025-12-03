
export const renderBenefitsCard = (item) => `
<div class="border-t-4 border-brown bg-white p-6 rounded-xl shadow">
    <div class="w-14 h-14 bg-slate-100 shadow rounded-lg flex items-center justify-center mb-4">
        <img src="${item.iconSVG}" alt="${item.title}" class="w-full h-full object-cover rounded-lg">
    </div>
    <h3 class="text-xl font-bold text-primary mb-2">${item.title}</h3>
    <p class="text-gray-600">${item.description}</p>
</div>
`;

export const renderTopicsCard = (item) => `
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

export const renderPublicTargetCard = (item) => `
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

export const renderTestimonialCard = (item) => `
<div class="bg-white p-6 rounded-xl shadow-md border border-primary/20">
    <div class="flex items-center mb-4">
        <img src=${item.photo} alt="foto de ${item.name}"
            class="w-12 h-12 rounded-full mr-4">
        <div>
            <h4 class="font-bold text-primary">${item.name}</h4>
            <p class="text-sm text-gray-600">${item.role}</p>
        </div>
    </div>
    <p class="text-gray-600">"${item.feedback}"</p>
</div>
`;

export const renderFAQItem = (item) => `
<div class="bg-white rounded-2xl p-6 shadow-soft overflow-hidden">
    <details class="cursor-pointer">
        <summary class="flex justify-between items-center w-full text-left p-0 border-0 bg-transparent hover:bg-beige/50 transition-colors">
            <h3 class="text-lg font-bold text-primary">${item.question}</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                viewBox="0 0 24 24" class="text-primary transition-transform duration-200 shrink-0 ml-2">
                <path d="M19 9l-7 7-7-7" />
            </svg>
        </summary>
        <div class="mt-4 ml-8 text-gray-600 leading-relaxed">
            ${item.answer}
        </div>
    </details>
</div>
`;

export const renderFeatureProfileCard = (item) => `
<div class="flex items-center gap-3 bg-primary/5 p-3 rounded-lg">
    <picture class="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md p-2">
        <img src="${item.iconSVG}" alt="${item.feature}" class="w-full">
    </picture>
    <div>
        <p class="text-sm font-semibold text-primary">${item.feature}</p>
        <p class="text-xs text-gray-600">${item.description}</p>
    </div>
</div>
`;