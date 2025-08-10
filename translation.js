const translations = {
    en: {
        name: "Patryk Jasiak",
        menuAbout: "About",
        menuProjects: "Projects",
        menuSkills: "Skills",
        menuContact: "Contact",
        aboutTitle: "About Me",
        aboutText: "I’m a C++ and C# developer with a focus on building high-performance applications, game engines, and desktop software. I enjoy solving complex problems and creating efficient solutions.",
        projectsTitle: "Projects",
        proj1Title: "Simply Ants",
        proj1Desc: "A game about building your own ants colony.",
        proj2Title: "Turn base rougelike",
        proj2Desc: "Rouglike game about creating an army and fighting opponents.",
        viewGithub: "View on GitHub",
        skillsTitle: "Skills",
        contactTitle: "Contact",
        githubLabel: "GitHub:",
        viewGooglePlay: "View on Google Play:",
        viewItchIo: "View on Itch.io:",
        proj3Title: "Image analysis - automatic jigsaw puzzle solver",
        proj3Desc: "An application for automatic detection of jigsaw puzzle pieces in an image and creating image with the solution.",
        viewThesis: "View master thesis",
    },
    pl: {
        name: "Patryk Jasiak",
        menuAbout: "O mnie",
        menuProjects: "Projekty",
        menuSkills: "Umiejętności",
        menuContact: "Kontakt",
        aboutTitle: "O mnie",
        aboutText: "Jestem programistą C++ i C#, specjalizującym się w tworzeniu wydajnych aplikacji, silników gier oraz oprogramowania desktopowego. Lubię rozwiązywać złożone problemy i tworzyć efektywne rozwiązania.",
        projectsTitle: "Projekty",
        proj1Title: "Simply Ants",
        proj1Desc: "Gra o tworzeniu własnej kolonii mrówek.",
        proj2Title: "Turowa gra rougelike",
        proj2Desc: "Gra skupia się na tworzeniu armii i walce z turowej.",
        viewGithub: "Zobacz na GitHub",
        skillsTitle: "Umiejętności",
        contactTitle: "Kontakt",
        githubLabel: "GitHub:",
        viewGooglePlay: "Zobacz na Google Play:",
        viewItchIo: "Zobacz na Itch.io:",
        proj3Title: "Analiza obrazu - automatyczne układanie puzzli",
        proj3Desc: "Program do automatycznego układania puzzli na zdjęciu. Aplikacja ta została przygotowana w ramach pracy magisterskiej.",
        viewThesis: "Zobacz pracę magisterską",
    }
};

let currentLang = "en";

document.getElementById("lang-toggle").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "pl" : "en";
    setLanguage(currentLang);
    document.getElementById("lang-toggle").textContent = currentLang === "en" ? "PL" : "EN";
});

function setLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        el.textContent = translations[lang][key];
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLang);
});