var TranslatedStrings = [
    {
        English: "Hello, I’m",
        French: "Bonjour, Je suis"
    },
    {
        English: "Parenting freelance writer and children's books author",
        French: "Écrivain freelance d'articles sur la parentalité et auteur de livres jeunesse"
    }
	
    {
        English: "About Me",
        French: "À propos de moi"
    }
	
    {
        English: "Laure Dorsemaine is a freelance writer specialized in writing blog posts and articles about the parenting world. Her own experience as a mother combined with her dedication to research offer her clients articles of the best quality.",
        French: "Laure Dorsemaine est un écrivain freelance spécialisée dans la rédaction d'articles au sujet du monde de la parentalité. Son expérience personnelle en temps que mère combinée à ses recherches rigoureuses offrent à ses clients des articles de la meilleure qualité."
    }

    {
        English: "Laure is also a children's books author. She has written two picture books published by Belin.",
        French: "Laure est aussi auteur de livres jeunesse. Elle a écrit deux albums jeunesse publiés aux éditions Belin."
    }
	
    {
        English: "Hiya! I'm Laure Dorsemaine",
        French: "Bonjour ! Je suis Laure Dorsemaine"
    }
	
    {
        English: "My two sons, aged 8 and 2, showed me everything there is to know about the parenting world. And I mean the good, the bad, and the ugly! Using my hard won parenting experience and with the power of research, I now write blog posts and articles to help other parents survive and enjoy the parenting world. As a French mother living in Scotland, I write both in English and in French. Do you want me to write for your readers? Contact me and let's work together!",
        French: "Mes deux fils, agés de 8 et 2 ans, m'ont montré tout ce qu'il y a à savoir sur le monde de la parentalité. Et je parle bien de tout, le bon, mais aussi le moins bon ! À l'aide de mon expérience de parent durement gagnée "
    }
	
    {
        English: "I also love to write stories for children to enjoy! If you are looking for an author to write children stories, I would love to hear from you!</p>",
        French: ""
    }
	
    {
        English: "",
        French: ""
    }
];

// Global var :(
var mlrLangInUse;

var mlr = function({
    dropID = "languageDropdown",
    stringAttribute = "translated-text",
    chosenLang = "English",
    mLstrings = TranslatedStrings
} = {}) {
    const root = document.documentElement;
    mlrLangInUse = chosenLang;
	
    (function createMLDrop() {
        var languageDropdown = document.getElementById(dropID);
		
        // Reset the menu	
		languageDropdown.value = "English";
		
		// Add English
		let option = document.createElement("option");
		option.value = "English";
		option.setAttribute("data-content", "<span class=\"flag-icon flag-icon-gb\"></span> English");
		languageDropdown.appendChild(option);
		
		// Add French
		option = document.createElement("option");
		option.value = "French";
		option.setAttribute("data-content", "<span class=\"flag-icon flag-icon-fr\"></span> Français");
		languageDropdown.appendChild(option);
		
		$('#languageDropdown').selectpicker();
        $('#languageDropdown').on("change", function(e) {
            mlrLangInUse = languageDropdown[languageDropdown.selectedIndex].value;
            resolveAllMLStrings();
        });
    })();

    function resolveAllMLStrings() {
        let stringsToBeResolved = document.querySelectorAll(`[${stringAttribute}]`);
        stringsToBeResolved.forEach(stringToBeResolved => {
            let originaltextContent = stringToBeResolved.textContent;
            let resolvedText = resolveMLString(originaltextContent, mLstrings);
            stringToBeResolved.textContent = resolvedText;
        });
    }
};

function resolveMLString(stringToBeResolved, mLstrings) {
    var matchingStringIndex = mLstrings.find(function(stringObj) {
        // Create an array of the objects values:
        let stringValues = Object.values(stringObj);
        // Now return if we can find that string anywhere in there
        return stringValues.includes(stringToBeResolved);
    });
    if (matchingStringIndex) {
        return matchingStringIndex[mlrLangInUse];
    } else {
        // If we don't have a match in our language strings, return the original
        return stringToBeResolved;
    }
}

mlr({
    dropID: "languageDropdown",
    stringAttribute: "translated-text",
    chosenLang: "English",
    mLstrings: TranslatedStrings
});
