document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
        "Life and living are not the same. For living, we may need a job, money, a home, a car and other creature comforts. However, these alone fail to make life complete. For that, we need love, compassion, tenderness — a heart that knows and responds to the pain of others. We need broadmindedness and maturity in thought and action. - Amma",
        "The essence of all religions is one. Only their approaches are different. - Amma",
        "Love is the center point of life. It is the divine quality in human beings. - Amma",
        "Our educational system needs to give equal importance to the intellect and the heart. - Amma",
        "Smiling is one of the highest forms of meditation. - Amma",
        "Progress is not possible without discipline. A nation, institution, family or individual can advance only by heeding the words of those who deserve respect and by obeying the appropriate rules and regulations. Children, obedience is not weakness. Obedience with humility leads to discipline. - Amma",
        "Learn to be thankful to everyone, to the entire creation, even to your enemy and also to those who insult, because they all help you to grow. - Amma",
        "There is the path of karma, selfless action, the path of love and devotion, the path of training the mind and the path of Yoga, mantra and tantra this is what the various saints advocated. - Amma",
        "Real life is developed from within. Real living means that the soul expresses itself through all one’s thoughts, words and actions. A person becomes fearless once he understands the nature of the imperishable soul. - Amma",
        "Once you learn the art of relaxation, everything happens spontaneously and effortlessly. - Amma"
    ];

    let currentQuoteIndex = 0;
    const quoteElement = document.getElementById('quote');

    function changeQuote() {
        quoteElement.textContent = quotes[currentQuoteIndex];
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }

    setInterval(changeQuote, 12000); // Change quote every 12 seconds

});
