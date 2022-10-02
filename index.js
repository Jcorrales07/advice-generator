const tweetItBtn = document.querySelector('.tweet-it-btn');
const adviceNumSpan = document.querySelector('.advice-id');
const adviceSpan = document.querySelector('.main-container__advice');

const generateAdvice = () => {
    const results = fetch('https://api.adviceslip.com/advice')

    results
        .then(response => response.json())
        .then(data => {
            const adviceID = data.slip.id;
            const advice = data.slip.advice;

            adviceNumSpan.innerHTML = adviceID;
            adviceSpan.innerHTML = `"${advice}"`;
        })
}

const tweetIt = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${adviceSpan.innerText} - Quote from https://advice-generator-snowy.vercel.app/ \nApp made by @Jcorralesss07`;
    window.open(tweetUrl, '_blank');
}

generateAdvice()

const adviceButton = document.querySelector('.main-container__button');
adviceButton.addEventListener('click', generateAdvice);
tweetItBtn.addEventListener('click', tweetIt);
