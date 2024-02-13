document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;
    var message = ["Hiii... Namaste ji<br> Kaisi Ho<br> I hope sab theek hi hai",
                    "I know kal se exams hain<br>Tu shaayad padh hi rahi hogi<br>isiliye ZYAADA time nahi loonga",
                    "!!! Ve yaar !!!<br> teri yaad hi itni aa rahi thi<br>Ki fir mujhse raha nahi gaya",
                    "Tujhe ITNE message karta hoon<br>ye soch ke ki <br>KABHI TO DEKHEGI<br>But got disappointed there as well"];

    var imageSet = ["./resources/Stiker 10 (SFILE.MOBI).gif",
                    "./resources/Stiker 7 (SFILE.MOBI).gif",
                    "./resources/Stiker 8 (SFILE.MOBI).gif",
                    "./resources/Stiker 13 (SFILE.MOBI).gif"];

    const cardImg = document.querySelector('.card-img img');
    const cardText = document.querySelector('.card-text');

    function displayCard(index) {
        console.log(message.length, message[index], index);
        if (index === 0) {
            prevButton.style.display = "none";
            nextButton.style.display = "flex";
        } else if (index === message.length - 1) {
            prevButton.style.display = "flex";
            nextButton.style.display = "none";
        } else {
            prevButton.style.display = "flex";
            nextButton.style.display = "flex";
            console.log("Did nothing!!");
        }

        cardImg.src = imageSet[index];
        cardText.innerHTML = message[index];
    }

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % message.length;
        displayCard(currentIndex);
    });

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + message.length) % message.length;
        displayCard(currentIndex);
    });

    displayCard(currentIndex);
});
