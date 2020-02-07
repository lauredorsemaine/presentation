var TranslatedStrings = [
    {
        Key: "hello",
        English: "Hello, I’m",
        French: "Bonjour, Je suis"
    },
    {
        Key: "test1",
        English: "Freelance parenting writer and children's books author",
        French: "Écrivain freelance d'articles sur la parentalité et auteur de livres jeunesse"
    },
    {
        Key: "aboutMe",
        English: "About Me",
        French: "À propos de moi"
    },
    {
        Key: "sheIs",
        English: "Laure Dorsemaine is a freelance writer specialized in writing blog posts and articles about the parenting world. Her own experience as a mother combined with her dedication to research offer her clients articles of the best quality.",
        French: "Laure Dorsemaine est un écrivain freelance spécialisée dans la rédaction d'articles au sujet du monde de la parentalité. Son expérience personnelle en temps que mère combinée à ses recherches rigoureuses offrent à ses clients des articles de la meilleure qualité."
    },
    {
        Key: "sheIsTwo",
        English: "Laure is also a children's books author. She has written two picture books published in 2017 and 2019 by Belin Jeunesse.",
        French: "Laure est aussi auteur de livres jeunesse. Elle a écrit deux albums jeunesse publiés en 2017 et 2019 aux éditions Belin Jeunesse."
    },
    {
        Key: "hiya",
        English: "Hiya! I'm Laure Dorsemaine",
        French: "Bonjour ! Je suis Laure Dorsemaine"
    },
    {
        Key: "mesFilsUn",
        English: "My two sons, aged 8 and 2, showed me everything there is to know about the parenting world. And I mean the good, the bad, and the ugly! Using my hard won parenting experience and with the power of research, I now write blog posts and articles to help other parents, understand, survive, and enjoy the parenting world. As a French mother living in Scotland, I write both in English and in French. ",
        French: "Mes deux fils, agés de 8 et 2 ans, m'ont montré tout ce qu'il y a à savoir sur le monde de la parentalité. Et je parle bien de tout, le bon, mais aussi le moins bon ! À l'aide de mon expérience de parent durement gagnée et grâce au pouvoir de la recherche, j'écris maintenant des articles de blogs et magazines pour aider les parents à comprendre, à survivre mais aussi à apprécier le monde de la parentalité. En temps que mère française habitant en Écosse, j'écris aussi bien en français qu'en anglais."
    },
    {
        Key: "mesFilsDeux",
        English: "I am a parenting writer dedicated to her projects and who writes compelling and unique articles. You can count on me to be reliable and always respect deadlines. As a French mother living in Scotland, I can write both in English and in French. ",
        French: "Je suis une rédactrice de textes sur la parentalité dévouée à ses projets et qui écrit des articles uniques et engageants. En temps que mère française habitant en Écosse, j'écris aussi bien en français qu'en anglais."
    },
    {
        Key: "mesFilsTrois",
        English: "Do you want me to write for your readers? Contact me and let's work together!",
        French: "Vous voulez que j'écrive pour vos lecteurs ? Contactez moi, et travaillons ensemble !"
    },
    {
        Key: "auteurJeunesse",
        English: "I also love to write stories for children to enjoy! If you are looking for an author to write children stories, I would love to hear from you!",
        French: "J'adore également écrire des histoires pour les enfants ! Si vous cherchez un auteur jeunesse pour écrire des histoires que les enfants aimeront, j'aimerais beaucoup parler d'idées d'histoires avec vous !"
    },
    {
        Key: "birth",
        English: "Date of birth:",
        French: "Date de naissance:"
    },
    {
        Key: "birthDate",
        English: "28 March 1991",
        French: "28 mars 1991"
    },
    {
        Key: "locationLabel",
        English: "Location:",
        French: "Position:"
    },
    {
        Key: "location",
        English: "Scotland, UK",
        French: "Écosse, Royaume-Uni"
    },
    {
        Key: "projectOnMind",
        English: "Do you have a project on mind?",
        French: "Avez-vous un projet en tête ?"
    },
    {
        Key: "projectOnMindTwo",
        English: "Are you a magazine editor in need of an informative and interesting article for parents? Are you a blog writer looking for a unique essay about a mother's experience to share with your readers? Are you a business related to family and children looking for written content to grow your website? Or a publisher searching for a new picture book? Either ways, look no further! I am the parenting writer you are looking for, and I am looking forward to hearing everything about your project! ",
        French: "Etes-vous un éditeur de magazine à la recherche d'un article informatif et intéressant pour des parents ? Etes-vous un auteur de blog ayant besoin d'un essai sur l'expérience unique d'une mère de famille ? Etes-vous une entreprise en rapport avec la famille et les enfants à la recherche d'un rédacteur de contenu web pour faire grandir votre site internet ? Ou un éditeur à la recherche d'un nouvel album jeunesse ? Quoi qu'il en soit, ne cherchez pas plus loin ! Je suis l'auteur qu'il vous faut et j'ai hâte d'en savoir plus au sujet de votre projet !"
    },
    {
        Key: "projectOnMindThree",
        English: "Hire me",
        French: "Me contacter"
    },
    {
        Key: "keepInTouch",
        English: "Keep in touch",
        French: "Me contacter"
    },
    {
        Key: "keepInTouchText",
        English: "I would love to hear more about your project so we can work together! You can either contact me by email or by using my online contact form.",
        French: "J'aimerais beaucoup en savoir plus sur votre projet pour qu'on puisse travailler ensemble ! Vous pouvez me contacter soit par mail soit via mon formulaire en ligne."
    },
    {
        Key: "footer",
        English: "",
        French: ""
    }
];

// Global var :(
var mlrLangInUse;

var mlr = function({
    dropID = "languageDropdown",
    stringAttribute = "translated-text",
    mLstrings = TranslatedStrings
} = {}) {
    const root = document.documentElement;
	
    (function createMLDrop() {
        var languageDropdown = document.getElementById(dropID);
		
        const urlParams = new URLSearchParams(window.location.search);
		if (urlParams.get('l') == "fr") {
			mlrLangInUse = "French";
			buildLanguageOption("French", "Français", "Fr", "fr");
			buildLanguageOption("English", "English", "En", "gb");
		} else {
			mlrLangInUse = "English";
			buildLanguageOption("English", "English", "En", "gb");
			buildLanguageOption("French", "Français", "Fr", "fr");
		}
		
		$('#languageDropdown').selectpicker();
        $('#languageDropdown').on("change", function(e) {
            mlrLangInUse = languageDropdown[languageDropdown.selectedIndex].value;
            resolveAllMLStrings();
        });
		
        resolveAllMLStrings();
    })();

    function resolveAllMLStrings() {
        let stringsToBeResolved = document.querySelectorAll(`[${stringAttribute}]`);
        stringsToBeResolved.forEach(stringToBeResolved => {
            let key = stringToBeResolved.getAttribute("translated-text");
            let resolvedText = resolveMLString(mLstrings, key);
            stringToBeResolved.textContent = resolvedText;
        });
    }
	
    function buildLanguageOption(optionValue, optionText, shortOptionText, flagCode) {
		let option = document.createElement("option");
		option.value = optionValue;
		let dataContent = `<span class=\"flag-icon flag-icon-${flagCode}\"></span> `
			+ `<span class="lg-view">${optionText}</span>`
			+ `<span class="sm-view">${shortOptionText}</span>`;
		option.setAttribute("data-content", dataContent);
		languageDropdown.appendChild(option);
	}
};

function resolveMLString(mLstrings, key) {
    var matchingStringIndex = mLstrings.find(function(stringObj) {
        // Create an array of the objects values:
        let stringValues = Object.values(stringObj);
        // Now return if we can find that string anywhere in there
        return stringValues.includes(key);
    });
	
    if (matchingStringIndex) {
        return matchingStringIndex[mlrLangInUse];
    } else {
        return "TO BE DEFINED!";
    }
}

mlr({
    dropID: "languageDropdown",
    stringAttribute: "translated-text",
    mLstrings: TranslatedStrings
});
