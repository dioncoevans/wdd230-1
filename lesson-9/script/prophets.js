/*const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json'

const card = document.querySelector('.cards');

async function getProphets() {
    let response = await fetch(URL);
    if(response.ok){
        let data = await response.json();
        console.log(data);        
    } else {
        throw Error(response.statusText);
    }

    const prophets = jsonObject['prophets']

}

function buildProphetCards(data){
    data.prophets.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');
        let p = document.createElement('p');
        let img = document.createElement('img');

        h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
        birthdate.innerHTML =`Date of Birth: ${prophet.birthdate}`;
        birthplace.innerHTML =`Location of Birth: ${prophet.birthplace}`;
        img.setAttribute('src', `${prophet.imageurl}`);
        img.setAttribute('alt', `Picture of President ${fullName}`);
        img.setAttribute('loading', 'lazy');

        card.append(h2);
        card.append(birthdate);
        card.append(birthplace);
        card.append(length);
        card.append(img);
        card.classList.add("card")

        cards.append(card);
        
    });
}

getProphets();*/

const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
const cards = document.querySelector(".cards");

async function getProphets() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    //console.log(data);
    //console.log(data.prophets);
    buildProphetCards(data.prophets);
  } else {
    throw Error(response.statusText);
  }
}

function buildProphetCards(data) {
  data.forEach((prophet) => {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let birthDate = document.createElement("p");
    let birthPlace = document.createElement("p");
    let length = document.createElement("p");
    let img = document.createElement("img");

    h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
    birthDate.innerHTML = `Date of Birth: ${prophet.birthdate}.`;
    birthPlace.innerHTML = `Place of Birth: ${prophet.birthplace}.`;
    length.innerHTML = `He was a prophet for ${prophet.length} years.`;
    img.setAttribute("src", prophet.imageurl);
    img.setAttribute(
      "alt",
      `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}° Latter-day President`
    );

    img.setAttribute("loading", "lazy");

    card.append(h2);
    card.append(birthDate);
    card.append(birthPlace);
    card.append(img);
    card.append(length);
    cards.append(card);
  });
}

getProphets();