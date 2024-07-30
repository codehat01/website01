const db = firebase.firestore();
const storage = firebase.storage();

async function fetchAndDisplayImages() {
    try {
        const collectionRef = db.collection('images');
        const querySnapshot = await collectionRef.get();
        const docs = querySnapshot.docs;

        docs.forEach(async (doc, i) => {
            const imagePath = doc.data().image;
            const imageRef = storage.refFromURL(imagePath);
            const imageUrl = await imageRef.getDownloadURL();
            const text = doc.data().about;
            const header = doc.data().name;


            displayImage(`day${i + 1}Image`, imageUrl);
            displayText(`card-text${i + 1}`, text);
            displayHeader(`header${i + 1}`, header);
        });

    } catch (error) {
        console.error('Error fetching and displaying images:', error);
    }
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