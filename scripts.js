document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;
    var message = ["Hiii... Namaste ji<br> Kaisi Ho<br> I hope sab theek hi hai",
                    "I know kal se exams hain<br>Tu shaayad padh hi rahi hogi<br>isiliye ZYAADA time nahi loonga",
                    "!!! Ve yaar !!!<br> teri yaad hi itni aa rahi thi<br>Ki fir mujhse raha nahi gaya",
                    "Tujhe ITNE message karta hoon<br>ye soch ke ki <br>KABHI TO DEKHEGI<br>But got disappointed there as well",
                    "Khair koina<br>Kal bhi din bhar man mein tera hi zikr chal raha tha<br>Fir shaam ko ek khayaal aaya<br>Ki priye aap",
                    "Gulaab Jaisi ho<br>Gulaab lagti ho<br>Halka sa bhi muskura do<br>Ammi kasam Lajawab lagti ho",
                    "Aur bhi bohot kuch kehna hai tumse<br>Khair chchodiye, kabhi aur kahenge",
                    "Padhaai-Revision to ab ho hi gaya hoga<br>Practicals bhi, I assume achche hi gaye honge<br>tu achchi bachchi hai",
                    "Aur priye<br>Khaana time par khaiyega<br>aur Tabiyat ka bhi lihaaz rakhiyega<br>zyaada load mat lena, chill kar",
                    "Dahi shakkar kha kar jaana ghar se<br>Baaki Shiv ji se roz tere liye prarthna to main karta hoon hi",
                    "BYE<br>BEST OF LUCK FOR YOUR BOARDS<br>aur haan<br>saath mein glucose ya fir candies rakhna<br>sugar intake brain ko active rakhta hai<br>Bye LOVE u"];

    var imageSet = ["./resources/Stiker 10 (SFILE.MOBI).gif",
                    "./resources/Stiker 7 (SFILE.MOBI).gif",
                    "./resources/Stiker 8 (SFILE.MOBI).gif",
                    "./resources/Stiker 8 (SFILE.MOBI).gif",
                    "./resources/Stiker 8 (SFILE.MOBI).gif",
                    "./resources/Stiker 8 (SFILE.MOBI).gif",
                    "./resources/Stiker 8 (SFILE.MOBI).gif",
                    "./resources/Stiker 8 (SFILE.MOBI).gif",
                    "./resources/Stiker 8 (SFILE.MOBI).gif",
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
