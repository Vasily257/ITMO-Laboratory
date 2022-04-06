'use strict';

import { articleData } from './articles.js';

const articlesСontainer = document.querySelector('.articles__list');

function createArticle(data) {
  const articleElement = document
    .querySelector('.articles-template')
    .content.firstElementChild.cloneNode(true);

  const articleImage = articleElement.querySelector('.articles__item-image');
  const articleTitle = articleElement.querySelector('.articles__item-title');
  const articleAuthors = articleElement.querySelector('.articles__item-authors');
  const articleText = articleElement.querySelector('.articles__item-text');
  const articleShareButton = articleElement.querySelector('.share');

  articleImage.src = data.link;
  articleImage.type = 'webp';
  articleTitle.textContent = data.title;
  articleAuthors.textContent = data.authors;
  articleText.textContent = data.text;

  function handleShareButton(event) {
    event.target.classList.toggle('.share_opened');
  }

  articleShareButton.addEventListener('click', handleShareButton);

  return articleElement;
}

function renderArticle(data) {
  const articleElement = createArticle(data);
  articlesСontainer.prepend(articleElement);
}

articleData.forEach(renderArticle);
