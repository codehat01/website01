const db = firebase.firestore();
const storage = firebase.storage();

async function fetchAndDisplayImages() {
    try {
        const collectionRef = db.collection('meetup');
        const querySnapshot = await collectionRef.get();
        const docs = querySnapshot.docs;
        for (let i = 0; i < docs.length; i++) {
            try {
                const doc = docs[i];
                const imagePath = doc.data()[`image${i + 1}`];
                if (imagePath) {
                    const imageRef = storage.refFromURL(imagePath);
                    const imageUrl = await imageRef.getDownloadURL();
                    displayImage(`head${i + 1}`, imageUrl);
                } else {
                    console.warn(`No image path available for image${i + 1} in document ${doc.id}`);
                }
            } catch (error) {
                console.error(`Error fetching or displaying image${i + 1}:`, error);
            }
        }
    } catch (error) {
        console.error('Error fetching documents:', error);
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

document.addEventListener('DOMContentLoaded', fetchAndDisplayImages);
