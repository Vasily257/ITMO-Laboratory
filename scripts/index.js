'use strict';

import { articleData } from './articles.js';

// Articles

const articlesСontainer = document.querySelector('.articles__list');

// Function for creating an article

function createArticle(data) {
  const articleElement = document
    .querySelector('.articles-template')
    .content.firstElementChild.cloneNode(true);

  const articleImage = articleElement.querySelector('.articles__item-image');
  const articleTitle = articleElement.querySelector('.articles__item-title');
  const articleAuthors = articleElement.querySelector('.articles__item-authors');
  const articleText = articleElement.querySelector('.articles__item-text');
  const shareButton = articleElement.querySelector('.share');
  const shareButtonList = articleElement.querySelector('.share__list');

  articleImage.src = data.link;
  articleImage.loading = 'lazy';
  articleImage.decoding = 'async';
  articleImage.alt = data.title;
  articleTitle.textContent = data.title;
  articleAuthors.textContent = data.authors;
  articleText.textContent = data.text;

  function handleShareButton(event) {
    shareButtonList.classList.toggle('share__list_opened');
  }

  shareButton.addEventListener('click', handleShareButton);

  return articleElement;
}

// Function for rendering an article

function renderArticle(data) {
  const articleElement = createArticle(data);
  articlesСontainer.append(articleElement);
}

// Сreate articles

articleData.forEach(renderArticle);

// Swiper
import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

const articleSwiper = new Swiper('.articles-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
