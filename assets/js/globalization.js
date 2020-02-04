var TranslatedStrings = [
    {
        English: "Hello, I’m",
        French: "Yo, Je suis"
    },
    {
        English: "Parenting freelance writer and children's books author",
        French: "Petite patate qui fait des livres pour des petites patates"
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