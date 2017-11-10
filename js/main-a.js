'use strict';

const ekaP = document.querySelector('p:nth-child(1)');
const lisaa = document.querySelector('#lisaa');

const lisääTausta = (evt) => {
  ekaP.classList.add('punainen');
};

lisaa.addEventListener("click", lisääTausta);


const tokaP = document.querySelector('p:nth-child(2)');
const vaihda = document.querySelector('#vaihda');

const vaihdaSininen = (evt) => {
  if(tokaP.classList.contains('sininen')){
    tokaP.classList.replace('sininen','punainen');
  }
  else{
    tokaP.classList.replace('punainen','sininen');
  }
};

vaihda.addEventListener("click", vaihdaSininen);

const kolmasP = document.querySelector('p:nth-child(3)');
const toggle = document.querySelector('#toggle');

const vaihdaVihreaä = (evt) => {
  kolmasP.classList.toggle('vihrea');
};

toggle.addEventListener("click", vaihdaVihreaä);