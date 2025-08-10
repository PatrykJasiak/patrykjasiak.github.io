const translations = {
    en: {
        name: "Patryk Jasiak",
        menuAbout: "About",
        menuProjects: "Projects",
        menuSkills: "Skills",
        menuContact: "Contact",
        aboutTitle: "About Me",
        aboutText: "I’m a C++ and C# developer with a focus on embedded systems development. In free time I create computer games.",
        projectsTitle: "Projects",
        proj1Title: "Simply Ants",
        proj1Desc: "Game about building your own ants colony. Made in Unity. Key aspect of the game is pheromone system that mimics a way ants communicate in real life.",
        proj2Title: "Turn base rougelike",
        proj2Desc: "Rouglike game about creating an army and fighting opponents. Its made in C# with Godot game engine. Additonaly to allow easy modding it supports lua scripts.",
        viewGithub: "View on GitHub",
        skillsTitle: "Skills",
        contactTitle: "Contact",
        githubLabel: "GitHub:",
        viewGooglePlay: "View on Google Play",
        viewItchIo: "View on Itch.io",
        proj3Title: "Image analysis - automatic jigsaw puzzle solver",
        proj3Desc: "An application for automatic detection of jigsaw puzzle pieces in an image and creating image with the solution.",
        proj3Desc2: "Solving process can be separated into few steps:",
        proj3Desc2_State1: "Puzzle pieces detecion in an image.",
        proj3Desc2_State2: "Analysis of individual pieces.",
        proj3Desc2_State3: "Finding the correct solution.",
        proj3Desc3: "This application was created as a part of my master's thesis.",
        viewThesis: "View master's thesis",
    },
    pl: {
        name: "Patryk Jasiak",
        menuAbout: "O mnie",
        menuProjects: "Projekty",
        menuSkills: "Umiejętności",
        menuContact: "Kontakt",
        aboutTitle: "O mnie",
        aboutText: "Jestem programistą C++ i C#, specjalizuję się w oprogramowaniu do systemów wbudowanych. W wolnym czasie tworzę gry komputerowe.",
        projectsTitle: "Projekty",
        proj1Title: "Simply Ants",
        proj1Desc: "Gra o tworzeniu własnej kolonii mrówek. Stworzona w Unity. Ważnym elementem gry jest system feromonów, który naśladuje sposób w jaki mrówki komunikują się w rzeczywistości.",
        proj2Title: "Turowa gra rougelike",
        proj2Desc: "Gra skupia się na tworzeniu armii i walce z turowej. Tworzona jest w języku C# przy użyciu silnika Godot. Dodatowo, aby ułatwić modyfikowanie gry obsługuje ona skrypty lua.",
        viewGithub: "Zobacz na GitHub",
        skillsTitle: "Umiejętności",
        contactTitle: "Kontakt",
        githubLabel: "GitHub:",
        viewGooglePlay: "Zobacz na Google Play",
        viewItchIo: "Zobacz na Itch.io",
        proj3Title: "Analiza obrazu - automatyczne układanie puzzli",
        proj3Desc: "Program do automatycznego układania puzzli na zdjęciu.",
        proj3Desc2: "Proces automatycznego układania można podzielić na kilka etapów:",
        proj3Desc2_State1: "Rozpoznanie puzzli na zdjęciu",
        proj3Desc2_State2: "Analiza poszczególnych elementów układanki",
        proj3Desc2_State3: "Próba znalezienia poprawnego rozwiązania",
        proj3Desc3: "Aplikacja ta została przygotowana w ramach pracy magisterskiej.",
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