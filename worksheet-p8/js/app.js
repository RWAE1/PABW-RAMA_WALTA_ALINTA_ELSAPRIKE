const journeyData = {
  pageTitle: "Rafiq's Journey That Was Meant to Be.",
  pageSubtitle: "Where the Wind Calls ~ A Wishlist of a Little Child.",
  destinations: ["London", "Edinburgh", "Kyoto", "Mosi-oa-tunya", "Cinque Terre"]
};

const totalDestinations = 5;

const introSentence = `Welcome to ${journeyData.pageTitle} ${journeyData.pageSubtitle} Currently, there are ${journeyData.destinations.length} places on the list, aiming for a total of ${totalDestinations} trips.`;

console.log(introSentence);

function createHeader({ pageTitle, pageSubtitle }) {
  return `${pageTitle} — ${pageSubtitle}`;
}

const formatDestinations = (list) => list.join(" · ");

console.log(createHeader(journeyData));
console.log(formatDestinations(journeyData.destinations));

const destinationList = [
  { country: "United Kingdom", place: "London", activity: "Take a walk past Big Ben", visited: true },
  { country: "Scotland", place: "Edinburgh", activity: "Walk the cobblestones of the Royal Mile", visited: false },
  { country: "Japan", place: "Kyoto", activity: "Visit the Fushimi Inari Taisha", visited: false },
  { country: "Zimbabwe", place: "Mosi-oa-tunya", activity: "Witness the majestic Victoria Falls", visited: false },
  { country: "Italy", place: "Cinque Terre", activity: "Enjoy the Vibe of this Colorfull village", visited: false }
];

console.table(destinationList);

const pendingTrips = destinationList.filter((dest) => dest.visited === false);
console.table(pendingTrips);

const targetTrip = destinationList.find((dest) => dest.place === "London");
console.log("Found Trip:", targetTrip);

const placeNames = destinationList.map((dest) => dest.place);
console.log("List of Places:", placeNames);

// 5. Safe Sort: Sorting a COPY of the array alphabetically by country without mutating the original
const sortedDestinations = [...destinationList].sort((a, b) => a.country.localeCompare(b.country));
console.table(sortedDestinations);