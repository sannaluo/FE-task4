'use strict';

// Tee funktio 'showImages', joka
// lataa kuvat.json tiedoston, joka sisältää näytettävät kuvat taulukkona

// tee silmukka joka lisää merkkijonoon (string) jokaisesta kuvasta alla olevan HTML:n
/*
`<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>`
*/
// Silmukan jälkeen tulosta HTML-koodi (output) <ul>-elementin sisälle innerHTML:n avulla
/*
const showImages = () => {
  fetch('kuvat.json').then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
    let html = '';
    json.forEach((kuva) => {
      html += `<li>
                  <figure>
                      <a href="img/original/${kuva.mediaUrl}"><img src="img/thumbs/${kuva.mediaThumb}"></a>
                      <figcaption>
                          <h3>${kuva.mediaTitle}</h3>
                      </figcaption>
                  </figure>
              </li>`;
    });
    const ul = document.querySelector('ul');
    ul.innerHTML = html;
  });
};

showImages();
*/

// sama tehtynä funktiolla jossa ei ole kovakoodausta
const loadJSON = (url, func) => {
  fetch(url).then((response) => {
    return response.json();
  }).then((json) => {
    func(json);
  });
};

const modaali = document.querySelector('#modal');

const modalOn = (evt) => {
  if(modaali.classList.contains('hidden')) {
    modaali.classList.replace('hidden', 'lightbox');
  }
};



const linkitys = () => {
  const linkit = document.querySelectorAll(' ul a');
  //tähän foreach ja linkit noille
  linkit.forEach((linkki) => {
      linkki.addEventListener('click', (evt) => {
       evt.preventDefault();
       const modalimg = modaali.querySelector('img');
       modalimg.setAttribute('src', linkki.href);
       modalOn();
    });

  });
};

const templateFunction = (json) => {
  let html = '';
  json.forEach((kuva) => {
    html += `<li>
            <figure>
                <a href="img/original/${kuva.mediaUrl}"><img src="img/thumbs/${kuva.mediaThumb}"></a>
                <figcaption>
                    <h3>${kuva.mediaTitle}</h3>
                </figcaption>
            </figure>
        </li>`;
  });
  const element = document.querySelector('ul');
  element.innerHTML = html;
//linkit voi valita vasta tämän jälkeen, kun ne ovat olemassa
  linkitys();
};

loadJSON('kuvat.json', templateFunction);



//const modaali = document.querySelector('#modal');
const sulje = document.querySelector('.closeBtn');


const modalOff = (evt) => {
  if(modaali.classList.contains('lightbox')){
    modaali.classList.replace('lightbox','hidden');
  }
};

sulje.addEventListener('click', (evt) =>{
  evt.preventDefault();
  modalOff();
});
//sulje.addEventListener("click", modalOnOff);


//const kuva = document.querySelectorAll('ul a');






/*
//eli nää sinne kuviin linkitykseen -->
kuva.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalOn();
});          */