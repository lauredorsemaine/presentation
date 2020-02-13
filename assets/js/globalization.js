var TranslatedStrings = [
    {
        Key: "hello",
        English: "Freelance parenting writer and author",
        French: "Écrivain freelance et auteur jeunesse"
    },
	{
        Key: "headerWork",
        English: "View my work",
        French: "Mon portfolio"
    },
	{
        Key: "headerContact",
        English: "Contact me",
        French: "Me contacter"
    },
    {
        Key: "test1",
        English: "Write blog posts, articles and web content about the parenting world",
        French: "Écrit des articles sur la parentalité et des livres jeunesse"
    },
    {
        Key: "aboutMe",
        English: "About Me",
        French: "À propos de moi"
    },
    {
        Key: "hiya",
        English: "Hiya! I'm Laure Dorsemaine",
        French: "Bonjour ! Je suis Laure Dorsemaine"
    },
    {
        Key: "aboutOne",
        English: "Using my parenting experience as a mother of two and the power of research, I write compelling blog posts and articles to inform and entertain parents. I use my expertise for businesses too, to write relevant content that will attract and engage customers.",
        French: "À l'aide de mon expérience en tant que mère de deux enfants et grâce au pouvoir de la recherche, j'écris des articles de blogs et magazines pour informer et divertir les parents. J'utilise aussi mes compétences pour les entreprises, pour écrire du contenu pertinent qui saura attirer et conserver leurs clients."
    },
    {
        Key: "aboutTwo",
        English: "As a French mother living in Scotland, I write both in English and in French.",
        French: "En temps que mère française habitant en Écosse, j'écris aussi bien en français qu'en anglais."
    },
    {
        Key: "aboutThree",
        English: "Do you want me to write for your readers? Contact me and let's work together!",
        French: "Vous voulez que j'écrive pour vos lecteurs ? Contactez moi, et travaillons ensemble !"
    },
    {
        Key: "aboutFour",
        English: "I also love to write stories for children to enjoy.",
        French: "J'adore également écrire des histoires pour les enfants."
    },
    {
        Key: "locationLabel",
        English: "Location:",
        French: "Position:"
    },
    {
        Key: "location",
        English: "Dundee, Scotland, UK",
        French: "Dundee, Écosse, Royaume-Uni"
    },
    {
        Key: "projectOnMind",
        English: "Do you have a project on mind?",
        French: "Avez-vous un projet en tête ?"
    },
    {
        Key: "projectOnMindTwo",
        English: "Are you a magazine or blog editor looking for a captivating article for parents? Are you a business related to family and children looking for written content to grow your website? Look no further! I am the parenting writer you are looking for, and I am looking forward to hearing everything about your project!",
        French: "Êtes-vous un éditeur de magazine ou de blog à la recherche d'un article qui saura captiver des parents ? Êtes-vous une entreprise en rapport avec la famille et les enfants à la recherche d'un rédacteur de contenu web pour faire grandir votre site internet ? Ne cherchez pas plus loin ! Je suis l'auteur qu'il vous faut et j'ai hâte d'en savoir plus au sujet de votre projet !"
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
        English: "Do you want to work with me? Contact me by email and tell me more about your project!",
        French: "Vous voulez travailler avec moi ? Contactez moi par mail et dites m'en plus sur votre projet !"
    },
    {
        Key: "footer",
        English: "",
        French: ""
    },
    {
        Key: "servicesTitle",
        English: "My services",
        French: "Mes services"
    },
    {
        Key: "servicesSubtitle",
        English: "",
        French: ""
    },
    {
        Key: "serviceName1",
        English: "Web content",
        French: "Contenu web"
    },
    {
        Key: "service1",
        English: "Using SEO, I write blog posts that connect customers to your business and provide them compelling content related to your product.",
        French: "Tout en utilisant des stratégies de référencement (SEO), j'écris des articles de blogs qui connectent les clients à votre entreprise et leur offrent de la lecture intéressante en raport avec vos produits."
    },
    {
        Key: "serviceName2",
        English: "Magazine and blog articles",
        French: "Articles de magazines et de blogs"
    },
    {
        Key: "service2",
        English: "Using my own experience as a mother and the strength of research, I write lively articles and essays, making sure they fits your magazine's or blog's style.",
        French: "A l'aide de ma propre expérience en temps que mère additionnée à de serieuses recherches, j'écris des articles captivants dans un style qui saura correspondre au style de votre blog ou magazine."
    },
    {
        Key: "serviceName3",
        English: "Ghost writing",
        French: "Écriture anonyme"
    },
    {
        Key: "service3",
        English: "I can use your voice to write in your name, and be as discreet as a ghost.",
        French: "Je peux écrire sous votre nom en respectant votre style, et être aussi discrète qu'un fantôme."
    },
    {
        Key: "serviceName4",
        English: "Picture books",
        French: "Albums jeunesse"
    },
    {
        Key: "service4",
        English: "I am passionnate about writing for children. I always have new stories to offer!",
        French: "Écrire pour les enfants me passionne. J'ai toujours de nouvelles histoires à proposer !"
    },
    {
        Key: "workTitle",
        English: "My recent work",
        French: "Mes publications récentes"
    },
    {
        Key: "workSubtitle",
        English: "",
        French: ""
    },
    {
        Key: "asSeenOn",
        English: "As seen On",
        French: "Retrouvez ses écrits ici"
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
