# My one-page presentation project

This repo holds the code for my personal one-page presentation.


## Project Structure
- `index.html`: all the HTML code in one file! Contains the unformatted structure of the page.
- `README.md`:  this page's content
- `assets/css/*`: used to format and present the HTML tags
- `assets/fonts/*`: defines the page fonts
- `assets/images/*`: put all images in here
- `assets/js/*`: and yet another language! `JavaScript` can be used to program some behaviors on the page. For instance, it handles the globalization. Only following files are custom code (others are third party libraries):
	- `main.js`: currently has some animation code and other stuff we don't really need to worry about
	- `globalization.js`: see *How to add localized strings* section for more details on this one

## How to add localized strings
If you need something to be translated, here is how you should do:
1. Inside `index.html`, find the string you want to translate or add a new tag.
2. Find the surrounding tag for the text or the new one and add the `translated-text` attribute at the end of the opening tag with a meaningful value. For instance:
	- `<h4 class="sub-title">Hello, I’m</h4>` becomes `<h4 class="sub-title" translated-text="hello"></h4>`
	- or add a new `<span translated-text="textKey"></span>` code snippet somewhere.
3. To add a translation, you'll have to go to the `assets/js/globalization.js` and update the `TranslatedStrings` string array by:
	- Updating an existing entry
	- Adding a new object. Copy/paste this block of code at the end of the array after the last object's `}` and before the line with `];`: 
```javascript
	,
    {
		Key: "textKey",
        English: "Freelance writer and children's books author",
        French: "Petite patate qui fait des livres pour des petites patates"
    }
```
Make sure the `translated-text` value in `index.html` matches the Key value in `globalization.js`.
