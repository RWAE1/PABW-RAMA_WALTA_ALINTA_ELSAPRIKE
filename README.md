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
    <ol type="1">
        <li>bigben.jpg</li>
        <li>royalmile.jpg</li>
        <li>fushimiinaritaisha.jpg</li>
        <li>DreaminLogo.png</li>
    </ol>

## Meeting 3 · CSS Implementation

During this meeting, I created a style.css file to style my page.

**Typography & Fonts**
- Primary Font: Figtree (sans-serif fallback)
- Font Weights: 300..900 (400 for subheadings, 600 for navigation/tables, bold for buttons)
- Line Height: 1.6 (body), 1.4 (headers)

**Color Palette** (I use the HSL Model)
- Backgrounds: `hsla(0, 40%, 94%, 0.5)` (body) and `hsl(0, 0%, 100%)` (sections)
- Primary Text: `hsl(200, 90%, 4%)` (body) and `hsl(0, 0%, 20%)` (titles)
- Secondary Text: `hsl(208, 7%, 46%)`
- UI Elements: `hsl(210, 10%, 23%)`
- Hover States: `#4e7194` (buttons) and `hsl(0, 40%, 98%)` (links)
- Table Shading: `hsl(210, 17%, 98%)` (even rows) and `hsl(210, 16%, 93%)` (row hover)

## Meeting 4 · Responsive Bootstrap Profile Page

Upgrade with Bootstrap 5 for Mobile Responsiveness.

- Page title: Rafiq's Journey That Was Meant to Be.
- Description: Wishlist of countries I will visit in the future <إِنْ شَاءَ ٱللَّٰهُ>.
- Navigation links: Home, Destinations, Add Wishlist.
- Two main sections: My Dream Destinations & Add a New Wishlist.
- Table columns: Country, Place, Things to do.
- Form columns: Country, Place, Things to do.
- Images:
    <ol type="1">
        <li>bigben.jpg</li>
        <li>royalmile.jpg</li>
        <li>fushimiinaritaisha.jpg</li>
        <li>Mosi-oa-tunya.jpeg</li>
        <li>CinqueTerre.jpeg</li>
        <li>DreaminLogo.png</li>
    </ol>

Key Updates: Implemented Bootstrap 5 via Content Delivery Network (CDN), replaced manual CSS with Bootstrap utility classes, created a responsive nested grid for the image gallery, and optimized the layout for mobile devices. I have added two more locations: Cinque Terre and Mosi-oa-tunya.

## Meeting 8 · Implementing JavaScript into the Profile Page

Upgraded the static HTML page into a dynamic application.

- Page title: Rafiq's Journey That Was Meant to Be.
- Description: Wishlist of countries I will visit in the future <إِنْ شَاءَ ٱللَّٰهُ>.
- Navigation links: Home, Destinations, Add Wishlist.
- Two main sections: My Dream Destinations & Add a New Wishlist.
- Table columns: Country, Place, Things to do.
- Form columns: Country, Place, Things to do.
- Images:
    <ol type="1">
        <li>bigben.jpg</li>
        <li>royalmile.jpg</li>
        <li>fushimiinaritaisha.jpg</li>
        <li>Mosi-oa-tunya.jpeg</li>
        <li>CinqueTerre.jpeg</li>
        <li>DreaminLogo.png</li>
    </ol>

**Key Updates**
- Script Connection: Connected the `app.js` file to the HTML using `<script type="module">`.
- Data Structures: The content of the page was transferred from HTML to JavaScript variables. For the profile identity, I made an object called "journeyData," and for the wishlist data, I made an array of objects called "destinationList."
- Pure Functions: Added `createHeader` and `formatDestinations` to process the data without changing the original variables.
- Array Methods:
    <ol type="1">
        <li> `filter`: This method separates and shows just the trips that haven't been visited yet.</li>
        <li> `find`: This function is used to look for and retrieve a single destination (London) from the list.</li>
        <li> `map`: Used to create a new list with only the place names.</li>
        <li> `sort`: To order the nations alphabetically without altering the original array, use it in conjunction with the spread operator (`[...]`).</li>
    </ol>

## Meeting 9 · Implementing DOM into the profile page

Implementing DOM, Mounting Data into the Page and Responding to the User.

- Page title: Rafiq's Journey That Was Meant to Be.
- Description: Wishlist of countries I will visit in the future <إِنْ شَاءَ ٱللَّٰهُ>.
- Navigation links: Home, Destinations, Add Wishlist.
- Two main sections: My Dream Destinations & Add a New Wishlist.
- Table columns: Country, Place, Things to do.
- Form columns: Country, Place, Things to do.
- Images:
    <ol type="1">
        <li>bigben.jpg</li>
        <li>royalmile.jpg</li>
        <li>fushimiinaritaisha.jpg</li>
        <li>Mosi-oa-tunya.jpeg</li>
        <li>CinqueTerre.jpeg</li>
        <li>DreaminLogo.png</li>
    </ol>

**Key Updates**
- **DOM Selection & Rendering:** Changed the hardcoded HTML table rows to be built dynamically with JavaScript using `document.createElement()` and `append()`. Data is safely added using `textContent` to avoid XSS risks. When no results are found after filtering, a fallback message is shown by un-hiding it making the empty state clear and user-friendly.
- **Event Delegation:** Set up one click listener on the `#filter` parent container to handle the "All" "Visited" and "Not Visited" buttons. This approach uses memory and ensures that any new buttons added later are automatically managed without additional code.
- **Form Validation & Submission:** Stopped the default form behavior with `event.preventDefault()` to keep the page from reloading. Used validation that only checks fields after the user has interacted with them. Invalid fields get the Bootstrap `is-class (shown in red) while valid ones get `is-valid` (shown in green). New wishlist items are added to the array. The table updates instantly giving immediate feedback.

## Note on AI use

I wrote all the code entirely by myself.
I only used AI as a tool to double check some code and review docs in case I missed anything.