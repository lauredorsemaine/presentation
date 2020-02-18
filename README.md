# My one-page presentation project

This repo holds the code for my personal one-page presentation.

## Project Structure
- `index.html`: all the HTML code in one file! Contains the unformatted structure of the page. Some extra code at the end (JavaScript) handles the globalization.
- `README.md`:  this page's content
- `assets/css/*`: used to format and present the HTML tags
- `assets/fonts/*`: defines the page fonts
- `assets/images/*`: put all images in here
- `assets/js/*`: and yet another language! `JavaScript` can be used to program some behaviors on the page.
	- `main.js`: currently has some animation code and other stuff we don't really need to worry about

## How to add localized strings?
If you need something to be translated, here is how you should do:
1. Inside `index.html`, find the string you want to translate or add a new tag.
2. Add the `en` attribute to the tag that contains you English text, add `fr` for the French text.

For instance:
```html
<h4 class="mt-" en>As seen On</h4>
<h4 class="mt-" fr>Retrouvez ses écrits ici</h4>
```
or
```html
<p en><span class="dark">Location:</span> Dundee, Scotland, UK</p>
<p fr><span class="dark">Position :</span> Dundee, Écosse, Royaume-Uni</p>
```

## How to load the page in French by default?
By default, the page will display in English. By adding the `?l=fr` URL parameter, the default locale will be French.