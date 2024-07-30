const db = firebase.firestore();
const storage = firebase.storage();

async function fetchAndDisplayImages() {
    try {
        const collectionRef = db.collection('images');
        const querySnapshot = await collectionRef.get();
        const docs = querySnapshot.docs;

        const cardContainer = document.getElementById('card-container');
        cardContainer.innerHTML = ''; // Clear existing content

        docs.forEach(async (doc, i) => {
            const imagePath = doc.data().image;
            const imageRef = storage.refFromURL(imagePath);
            const imageUrl = await imageRef.getDownloadURL();
            const text = doc.data().about;
            const header = doc.data().name;

            const card = createCard(i + 1, imageUrl, header, text);
            cardContainer.appendChild(card);
        });

    } catch (error) {
        console.error('Error fetching and displaying images:', error);
    }
}

function createCard(index, imageUrl, header, text) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img id="day${index}Image" src="${imageUrl}" alt="Image for day ${index}">
        <h2 id="header${index}">${header}</h2>
        <p id="card-text${index}">${text}</p>
    `;
    return card;
}

function displayImage(imgElementId, imageUrl) {
    const imgElement = document.getElementById(imgElementId);
    if (imgElement) {
        imgElement.src = imageUrl;
        imgElement.alt = `Image for ${imgElementId}`;
    } else {
        console.error(`No element found with ID: ${imgElementId}`);
    }
}

function displayText(textElementId, text) {
    const textElement = document.getElementById(textElementId);
    if (textElement) {
        textElement.textContent = text;
        console.info("done")
    } else {
        console.error(`No element found with ID: ${textElementId}`);
    }
}

function displayHeader(headerElementId, head){
    const headerElement = document.getElementById(headerElementId);
    if(headerElement){
        headerElement.textContent = head;
        console.info("done")
    } else{
        console.error(`No element found with ID: ${headerElementId}`);
    }
}

function displayEvents(eventsElementId,eventdetailsElementId, events,eventdetails){
    const eventsdetailsElement = document.getElementById(eventsElementId);
    const eventsElement = document.getElementById(eventdetailsElementId);
    if(eventsElement){
        eventsdetailsElement.textContent = eventdetails;
        console.info("done")
    } else{
        console.error(`No element found with ID: ${eventdetailsElementId}`);
    }
    if(eventsdetailsElement){
        eventsElement.textContent = events;
        console.info("done")
    } else{
        console.error(`No element found with ID: ${eventsElementId}`);
    }
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayImages);