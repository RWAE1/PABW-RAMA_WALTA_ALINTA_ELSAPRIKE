# PABW · RAMA WALTA ALINTA ELSAPRIKE · 25523085

This repo holds coursework for Web-Based Application Development, 
one folder per meeting.
 
## Meeting 3 · My profile page 

My page topic: A wishlist of my dream countries around the world.

- Page title: Rafiq's Journey That Was Meant to Be.
- Description: Wishlist of countries I will visit in the future <إِنْ شَاءَ ٱللَّٰهُ>.
- Navigation links: Home, Destinations, Add Wishlist.
- Two main sections: My Dream Destinations & Add a New Wishlist.
- Table columns: Country, Place, Things to do.
- Form columns: Country, Place, Things to do.
- Images:
    1. bigben.jpg
    2. royalmile.jpg
    3. fushimiinaritaisha.jpg
    4. DreaminLogo.png

## Meeting 3 · CSS Implementation

During this meeting, I created a style.css file to style my page.

**Typography & Fonts**
* Primary Font: Figtree (sans-serif fallback)
* Font Weights: 300..900 (400 for subheadings, 600 for navigation/tables, bold for buttons)
* Line Height: 1.6 (body), 1.4 (headers)

**Color Palette** (I use the HSL Model)
* Backgrounds: `hsla(0, 40%, 94%, 0.5)` (body) and `hsl(0, 0%, 100%)` (sections)
* Primary Text: `hsl(200, 90%, 4%)` (body) and `hsl(0, 0%, 20%)` (titles)
* Secondary Text: `hsl(208, 7%, 46%)`
* UI Elements: `hsl(210, 10%, 23%)`
* Hover States: `#4e7194` (buttons) and `hsl(0, 40%, 98%)` (links)
* Table Shading: `hsl(210, 17%, 98%)` (even rows) and `hsl(210, 16%, 93%)` (row hover)

## Meeting 4 · Responsive Bootstrap Profile Page

Upgrade with Bootstrap 5 for Mobile Responsiveness.

- Page title: Rafiq's Journey That Was Meant to Be.
- Description: Wishlist of countries I will visit in the future <إِنْ شَاءَ ٱللَّٰهُ>.
- Navigation links: Home, Destinations, Add Wishlist.
- Two main sections: My Dream Destinations & Add a New Wishlist.
- Table columns: Country, Place, Things to do.
- Form columns: Country, Place, Things to do.
- Images:
    1. bigben.jpg
    2. royalmile.jpg
    3. fushimiinaritaisha.jpg
    4. Mosi-oa-tunya.jpeg
    5. CinqueTerre.jpeg

Key Updates: Implemented Bootstrap 5 via Content Delivery Network (CDN), replaced manual CSS with Bootstrap utility classes, created a responsive nested grid for the image gallery, and optimized the layout for mobile devices. also i add 2 content Mosi-oa-tunya and cinque terre.

## Meeting 8 · Implementing JavaScript into the Profile Page

Upgraded the static HTML page into a dynamic application.

- Page title: Rafiq's Journey That Was Meant to Be.
- Description: Wishlist of countries I will visit in the future <إِنْ شَاءَ ٱللَّٰهُ>.
- Navigation links: Home, Destinations, Add Wishlist.
- Two main sections: My Dream Destinations & Add a New Wishlist.
- Table columns: Country, Place, Things to do.
- Form columns: Country, Place, Things to do.
- Images:
    1. bigben.jpg
    2. royalmile.jpg
    3. fushimiinaritaisha.jpg
    4. Mosi-oa-tunya.jpeg
    5. CinqueTerre.jpeg

- Script Connection: Connected the `app.js` file to the HTML using `<script type="module">`.
- Data Structures: The content of the page was transferred from HTML to JavaScript variables. For the profile identity, I made an object called "journeyData," and for the wishlist data, I made an array of objects called "destinationList."
- Pure Functions: Added `createHeader` and `formatDestinations` to process the data without changing the original variables.
- Array Methods:
    1. `filter`: This method separates and shows just the trips that haven't been visited yet.
    2. `find`: This function is used to look for and retrieve a single destination (London) from the list.
    3. `map`: Used to create a new list with only the place names.
    4. `sort`: To order the nations alphabetically without altering the original array, use it in conjunction with the spread operator (`[...]`).

## Note on AI use

I wrote all the code entirely by myself.
I only used AI as a tool to double check some code and review docs in case I missed anything.