const db = firebase.firestore();
const storage = firebase.storage();

async function fetchAndDisplayImages() {
    try {
        const collectionRef = db.collection('2022');
        const querySnapshot = await collectionRef.get();
        const docs = querySnapshot.docs;
        for (let i = 0; i < docs.length; i++) {
            if (i < docs.length) {
                const doc = docs[i];
                const imagePath = doc.data().image;
                const imageRef = storage.refFromURL(imagePath);
                const imageUrl = await imageRef.getDownloadURL();
                displayImage(`img${i + 1}`, imageUrl);
            } else {
                console.warn(`No document available for day${i + 1}Image`);
            }
        }
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


document.addEventListener('DOMContentLoaded', fetchAndDisplayImages);
