const journeyData = {
  pageTitle: "Rafiq's Journey That Was Meant to Be.",
  pageSubtitle: "Where the Wind Calls ~ A Wishlist of a Little Child.",
  destinations: ["London", "Edinburgh", "Kyoto", "Mosi-oa-tunya", "Cinque Terre"]
};

const totalDestinations = 5;

const introSentence = `Welcome to ${journeyData.pageTitle} ${journeyData.pageSubtitle} Currently, there are ${journeyData.destinations.length} places on the list, aiming for a total of ${totalDestinations} trips.`;

console.log(introSentence);