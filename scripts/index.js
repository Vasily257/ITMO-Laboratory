'use strict';

// header
// константам присваимваем элементы header, задействующиеся в JS
const header = document.querySelector('.header');
const headerMenuButton = header.querySelector('.header__menu-button');
const headerLeftLogo = header.querySelector('.header__logo_position_left');
const headerMenuClose = header.querySelector('.header__close-menu');
const headerMenu = header.querySelector('.header__menu');
const headerEdicationItem = headerMenu.querySelector('.header__item_element_education-button');
const headerMagistracyItem = headerMenu.querySelector('.magistracy');
const headerPostgraduateItem = headerMenu.querySelector('.postgraduate');
const headerAllLinks = headerMenu.querySelectorAll('.header__link');

// функции для header
const showElement = (element) => {element.classList.add('display_flex')};
const hideElement = (element) => {element.classList.remove('display_flex')};

const showSubitemElement = (element) => {element.classList.add('display_flex_min-width_1280px')};
const hideSubitemElement = (element) => {element.classList.remove('display_flex_min-width_1280px')};

// слушатели для header
headerMenuButton.addEventListener('click', function() {
  hideElement(headerMenuButton);
  showElement(headerLeftLogo);
  showElement(headerMenuClose);
  showElement(headerMenu);
});

headerMenuClose.addEventListener('click', function() {
  showElement(headerMenuButton);
  hideElement(headerLeftLogo);
  hideElement(headerMenuClose);
  hideElement(headerMenu);
});

headerEdicationItem.addEventListener('click', function() {  // раскрытие дополнительных ссылок в меню
  headerAllLinks.forEach (function(link) {link.classList.toggle('color_888')});
  headerEdicationItem.querySelector('.header__link').classList.toggle('color_fff');
  headerEdicationItem.querySelector('.header__link').classList.toggle('font-weight_600');
  headerMagistracyItem.classList.toggle('display_flex_min-width_1280px');
  headerPostgraduateItem.classList.toggle('display_flex_min-width_1280px');
});
// конец кода для header

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
const articleSwiper = new Swiper('.articles-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
