document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;
    var message = ["Hiii... Namaste ji<br> Kaisi Ho<br> I hope sab theek hi hai",
                    "I know kal se exams hain<br>Tu shaayad padh hi rahi hogi<br>isiliye ZYAADA time nahi loonga",
                    "!!! Ve yaar !!!<br> teri yaad hi itni aa rahi thi<br>Ki fir mujhse raha nahi gaya",
                    "Tujhe ITNE message karta hoon<br>ye soch ke ki <br>KABHI  TO  DEKHEGI<br>But got disappointed there as well",
                    "Khair koina<br>Kal bhi din bhar man mein tera hi zikr chal raha tha<br>Fir shaam ko ek khayaal aaya<br>Ki priye aap",
                    "Gulaab Jaisi ho<br>Gulaab lagti ho<br>Halka sa bhi muskura do<br>Ammi kasam Lajawab lagti ho",
                    "Aur bhi bohot kuch kehna hai tumse<br>Khair chchodiye, kabhi aur kahenge",
                    "Padhaai-Revision to sab ho hi gaya hoga<br>Practicals bhi, I assume achche hi gaye honge<br>tu achchi bachchi hai<br>Achche marks aayenge",
                    "Aur priye<br>Khaana time par kha lena<br>aur Tabiyat ka bhi lihaaz rakhna<br>zyaada load mat lena, chill kar",
                    "Dahi shakkar kha kar jaana ghar se<br>Baaki Shiv ji se roz tere liye prarthna to main karta hoon hi<br>phod dena paper ko ekdam",
                    "BYE<br>BEST OF LUCK FOR YOUR BOARDS<br>aur haan<br>saath mein glucose ya fir candies rakhna<br>sugar intake brain ko active rakhta hai<br>Bye LOVE u"];

    var imageSet = ["./resources/gifs/Stiker 16 (SFILE.MOBI).gif",
                    "./resources/gifs/Stiker 38 (SFILE.MOBI).gif",
                    "./resources/gifs/Stiker 49 (SFILE.MOBI).gif",
                    "./resources/gifs/Stiker 30 (SFILE.MOBI).gif",
                    "./resources/gifs/Stiker 10 (SFILE.MOBI).gif",
                    "./resources/gifs/Stiker 26 (SFILE.MOBI).gif",
                    "./resources/gifs/Stiker 7 (SFILE.MOBI).gif",
                    "./resources/gifs/Stiker 31 (SFILE.MOBI).gif",
                    "./resources/gifs/Stiker 27 (SFILE.MOBI).gif",
                    "./resources/gifs/Stiker 13 (SFILE.MOBI).gif",
                    "./resources/gifs/Stiker 33 (SFILE.MOBI).gif"];

    const cardImg = document.querySelector('.card-img img');
    const cardText = document.querySelector('.card-text');

    const card = document.querySelector('.card');

function triggerCardAnimationleft() {
    card.classList.add('animate-cardleft');

    setTimeout(() => {
        card.classList.remove('animate-cardleft');
    }, 500);
}
function triggerCardAnimationright() {
    card.classList.add('animate-cardright');

    setTimeout(() => {
        card.classList.remove('animate-cardright');
    }, 500);
}

    function displayCard(index) {
        if (index === 0) {
            prevButton.style.display = "none";
            nextButton.style.display = "flex";
        } else if (index === message.length - 1) {
            prevButton.style.display = "flex";
            nextButton.style.display = "none";
        } else {
            prevButton.style.display = "flex";
            nextButton.style.display = "flex";
        }

        if(index === 5){
            card.style.backgroundImage = "url('/resources/her.png')";
            cardText.style.color = 'white';
            card.style.opacity = '1';
            cardText.style.fontSize = '40px';
        }else{
            card.style.backgroundImage = "url('/cardBG.jpg')";
            cardText.style.fontSize = '35px';
            card.style.opacity = '0.9';
            cardText.style.color = 'black';
        }
        cardImg.src = imageSet[index];
        cardText.innerHTML = message[index];
    }

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % message.length;
        triggerCardAnimationleft();
        displayCard(currentIndex);
    });

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + message.length) % message.length;
        triggerCardAnimationright();
        displayCard(currentIndex);
    });



    triggerCardAnimationleft();
    displayCard(currentIndex);
});