const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close_btn');
const myNav = document.querySelector('#myNav');
const openNav = () => {
    myNav.style.height = '100%';
};
const closeNav = () => {
    myNav.style.height = '0%';
};

hamburger.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);


// OBJECTS TO GENERATE SPEAKERS SECTION
const speakersList = [
    {
        imgUrl: './assets/speakers/1st_speaker.png',
        speakerName: 'DR. RUSLI BIN NORDIN',
        speakerTitle: 'Blockchain Architect',
        speakerDesc: 'Johnson & Johnson',
    },

    {
        imgUrl: './assets/speakers/2nd_speaker.png',
        speakerName: 'PROF. PEI LIN LUA',
        speakerTitle: 'Product Manager',
        speakerDesc: 'PagoNxt (a Santander company)',
    },

    {
        imgUrl: './assets/speakers/3rd_speaker.png',
        speakerName: 'DR. FORHAD AKHTAR ZAMAN ',
        speakerTitle: 'Blockchain Product Innovation Manager',
        speakerDesc: 'Innovation Manager: Shell, California',
    },

    {
        imgUrl: './assets/speakers/4th_speaker.png',
        speakerName: 'PROFESSOR DANIEL REIDPATH',
        speakerTitle: 'Managing Director, Business Development',
        speakerDesc: 'Managing Director: Emerging Technology Lloyds Banking Group',

    },

    {
        imgUrl: './assets/speakers/5th_speaker.png',
        speakerName: 'PROF. ZAILINA HASHIM',
        speakerTitle: 'Blockchain and Digital Assets',
        speakerDesc: 'EMEA Lead Mastercard',
    },

    {
        imgUrl: './assets/speakers/6th_speaker.png',
        speakerName: 'PROF. HALA MADANAT',
        speakerTitle: 'Global Head of Blockchain Strategy',
        speakerDesc: 'Blockchain Strategy: Anglo American',
    },

];

const speakerCard = (index) => `
              <div class="speaker-image">
                <img src=${speakersList[index].imgUrl} alt="src=${speakersList[index].speakerName} image" />
              </div>
              <div class="speaker-details">
                <h3 class="speaker-name">${speakersList[index].speakerName} </h3>
                <p class="speaker-title">
                ${speakersList[index].speakerTitle} 
                </p>
                <p class="speaker-desc">
                ${speakersList[index].speakerDesc}
                </p>
              </div>
    `;
const speakersContainer = document.querySelector('.speakers-container');
const showTwoSpeakers = () => {
    speakersContainer.innerHTML = ' ';
    for (let i = 0; i < 2; i += 1) {
        const speaker = document.createElement('div');
        speaker.classList.add('speaker-card');
        speaker.innerHTML = speakerCard(i);
        speakersContainer.appendChild(speaker);
    }
};

const showSixSpeakers = () => {
    speakersContainer.innerHTML = ' ';
    for (let i = 0; i < 6; i += 1) {
        const speaker = document.createElement('div');
        speaker.classList.add('speaker-card');
        speaker.innerHTML = speakerCard(i);
        speakersContainer.appendChild(speaker);
    }
};

const screenWidth = window.innerWidth;
if (screenWidth > 768) {
    showSixSpeakers();
} else {
    showTwoSpeakers();
}
const showBtn = document.querySelector('.speaker-btn');
showBtn.addEventListener('click', () => {
    const regex = /MORE/;
    const toggle = regex.test(showBtn.textContent);
    if (toggle) {
        showBtn.innerHTML = 'LESS <i class="fa fa-chevron-up" ></i>';
        showSixSpeakers();
    } else {
        showBtn.innerHTML = 'MORE <i class="fa fa-chevron-down" ></i>';
        showTwoSpeakers();
    }
});