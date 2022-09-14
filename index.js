const generateAdvice = () => {
    const results = fetch('https://api.adviceslip.com/advice')

    results
        .then(response => response.json())
        .then(data => {
            const adviceID = data.slip.id;
            const advice = data.slip.advice;

            console.log(adviceID, advice);

            const adviceNumSpan = document.querySelector('.advice-id');
            const adviceSpan = document.querySelector('.main-container__advice');

            adviceNumSpan.innerHTML = adviceID;
            adviceSpan.innerHTML = `"${advice}"`;
        })
}

const adviceButton = document.querySelector('.main-container__button');
adviceButton.addEventListener('click', generateAdvice);
