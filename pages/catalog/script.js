function renderPage() {
  const fragment = new DocumentFragment();
  fragment.appendChild(header);
  fragment.appendChild(main);
  fragment.appendChild(footer);
  document.body.prepend(fragment);
}




const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');
const logo = document.createElement('a');

header.classList.add('header');
const sectionContainer = document.createElement('div');
const picture = document.createElement('img');
sectionContainer.classList.add('section-container');
logo.classList.add('logo');
picture.classList.add('picture-item');

const headerLink = document.createElement('a');
headerLink.classList.add('header__link');
headerLink.innerText = 'Place Order'

header.appendChild(sectionContainer);
sectionContainer.appendChild(logo);
sectionContainer.appendChild(headerLink);
logo.appendChild(picture);

const headerPicture = logo.querySelector('.picture-item');
headerPicture.setAttribute('alt', "Company logo");
headerPicture.setAttribute('src', "../../assets/icons/logo-kids-heads-white.png");

const hero = document.createElement('section');
hero.classList.add('hero')
const heroContainer = document.createElement('div');
heroContainer.classList.add('section-container');
const mainTitle = document.createElement('h1');
mainTitle.classList.add('hero-title');
mainTitle.innerText = 'Welcome to Our Online Book Shop!'

main.appendChild(hero);
hero.appendChild(heroContainer);
heroContainer.appendChild(mainTitle)

const bookCatalog = document.createElement('section');
const bookCatalogContainer = document.createElement('div');
bookCatalogContainer.classList.add('section-container');

const bookTable = document.createElement('div');
bookTable.classList.add('book-catalog')

const bookTableList = document.createElement('div');
bookTableList.classList.add('book-catalog__list');
const bookTableBag = document.createElement('div');
bookTableBag.classList.add('book-catalog__bag')

main.appendChild(bookCatalog);
bookCatalog.appendChild(bookCatalogContainer);
bookCatalogContainer.appendChild(bookTable);
bookTable.appendChild(bookTableList)
bookTable.appendChild(bookTableBag)

const bookTableListTitle = document.createElement('h2');
bookTableListTitle.classList.add('section-title');
bookTableListTitle.innerText = 'Books Catalog';
const bookTableContent = document.createElement('div');
bookTableContent.classList.add('book-catalog__content');

let cardData = {};
let price = null;
function fillCardData (obj, card) {
  obj.title = card.title;
  obj.imageLink = card.imageLink;
  obj.author = card.author;
  obj.price = card.price;
  obj.description = card.description;
    createBagCard(obj)
}
function createCard(item) {
  // Create Card
  const bookTableCard = document.createElement('div');
  bookTableCard.classList.add('book-catalog__card');
  const bookTablePicture = document.createElement('div');
  bookTablePicture.classList.add('book-catalog__picture');
  const bookTablePictureItem = document.createElement('img');
  bookTablePictureItem.classList.add('picture-item');
  bookTablePictureItem.setAttribute('alt', item.title);
  bookTablePictureItem.setAttribute('src', item.imageLink);
  const bookMore = document.createElement('button');
  bookMore.classList.add('book-catalog__more');
  bookMore.setAttribute('type', 'button');
  bookMore.innerText = 'Read More'
  const bookOverlay = document.createElement('div');
  bookOverlay.classList.add('book-catalog__overlay');
  const bookTableInfo = document.createElement('div');
  bookTableInfo.classList.add('book-catalog__info');
  const bookAuthor = document.createElement('p');
  bookAuthor.classList.add('book-catalog__author');
  bookAuthor.innerText = item.author;
  const bookTitle = document.createElement('h3');
  bookTitle.classList.add('book-catalog__title');
  bookTitle.innerText = item.title;
  const bookPrice = document.createElement('p');
  bookPrice.classList.add('book-catalog__price');
  bookPrice.innerText = `Price: ${item.price}`;
  const bookAdd = document.createElement('p');
  bookAdd.classList.add('book-catalog__add');
  bookAdd.innerText = 'Add to Bag'

  bookTableList.appendChild(bookTableListTitle);
  bookTableList.appendChild(bookTableContent);
  bookTableContent.appendChild(bookTableCard);
  bookTablePicture.appendChild(bookTablePictureItem);
  bookTablePicture.appendChild(bookMore);
  bookTablePicture.appendChild(bookOverlay);
  bookTableCard.appendChild(bookTablePicture);
  bookTableCard.appendChild(bookTableInfo);
  bookTableInfo.appendChild(bookAuthor);
  bookTableInfo.appendChild(bookTitle);
  bookTableInfo.appendChild(bookPrice);
  bookTableInfo.appendChild(bookAdd);

  bookMore.addEventListener('click', function() {
    createPopup(item)
  })

  bookAdd.addEventListener('click', function() {
    
    
if (!(document.querySelector('.bag__title'))) {
  renderBag(item.price)
  fillCardData(cardData, item)
   price = item.price;
} else {
  fillCardData(cardData, item);
  price = price + item.price;
  document.querySelector('.book-catalog__total').innerText = `Total Price: ${price}`
}
  })
}



function createBagCard(item) {
  // Create Card in the bag
  const bookTableCard = document.createElement('div');
  bookTableCard.classList.add('book-catalog__card');
  const bookTablePicture = document.createElement('div');
  bookTablePicture.classList.add('book-catalog__picture');
  const bookTablePictureItem = document.createElement('img');
  bookTablePictureItem.classList.add('picture-item');
  bookTablePictureItem.setAttribute('alt', item.title);
  bookTablePictureItem.setAttribute('src', item.imageLink);
  const bookMore = document.createElement('button');
  bookMore.classList.add('book-catalog__more');
  bookMore.setAttribute('type', 'button');
  bookMore.innerText = 'Read More'
  const bookOverlay = document.createElement('div');
  bookOverlay.classList.add('book-catalog__overlay');
  const bookTableInfo = document.createElement('div');
  bookTableInfo.classList.add('book-catalog__info');
  const bookAuthor = document.createElement('p');
  bookAuthor.classList.add('book-catalog__author');
  bookAuthor.innerText = item.author;
  const bookTitle = document.createElement('h3');
  bookTitle.classList.add('book-catalog__title');
  bookTitle.innerText = item.title;
  const bookPrice = document.createElement('p');
  const bookPriceNum = item.price;
  bookPrice.classList.add('book-catalog__price');
  bookPrice.innerText = `Price: ${item.price}`;
  const popupClose = document.createElement('img');
  popupClose.classList.add('popup__close');
  popupClose.setAttribute('alt', "Close icon");
  popupClose.setAttribute('src', "../../assets/icons/remove.svg"); 

 

  document.querySelector('.bag__content').appendChild(bookTableCard);
  bookTablePicture.appendChild(bookTablePictureItem);
  bookTablePicture.appendChild(bookMore);
  bookTablePicture.appendChild(bookOverlay);
  bookTableCard.appendChild(popupClose);
  bookTableCard.appendChild(bookTablePicture); 
  bookTableCard.appendChild(bookTableInfo);
  bookTableInfo.appendChild(bookAuthor);
  bookTableInfo.appendChild(bookTitle);
  bookTableInfo.appendChild(bookPrice);


  bookMore.addEventListener('click', function() {
    createPopup(item)
  })

  popupClose.addEventListener('click', function() {
    bookTableCard.remove();
    price = price - bookPriceNum
   document.querySelector('.book-catalog__total').innerText = `Total Price: ${price}`
    if (price <= 0) {
      removeBag()
    }
  })
}

function createPopup (item) {
  // Create Popup
  const popup = document.createElement('div');
  popup.classList.add('popup');
  const popupOverlay = document.createElement('div');
  popupOverlay.classList.add('popup__overlay');
  const popupContent = document.createElement('div');
  popupContent.classList.add('popup__content');
  const popupClose = document.createElement('img');
  popupClose.classList.add('popup__close');
  popupClose.setAttribute('alt', "Close icon");
  popupClose.setAttribute('src', "../../assets/icons/close.svg");      
  const popupPicture = document.createElement('div');
  popupPicture.classList.add('book-catalog__picture');
  const popupPictureItem = document.createElement('img');
  popupPictureItem.classList.add('picture-item');
  popupPictureItem.setAttribute('alt', item.title);
  popupPictureItem.setAttribute('src', item.imageLink);
  const popupWrap = document.createElement('div');
  popupWrap.classList.add('popup__wrap');
  const popupInfo = document.createElement('div');
  popupInfo.classList.add('popup__info');
  const popupTitle = document.createElement('h2');
  popupTitle.classList.add('popup__title');
  popupTitle.innerText = item.title;
  const popupdescription = document.createElement('p');
  popupdescription.classList.add('popup__text');
  popupdescription.innerText = item.description;

  popupInfo.appendChild(popupTitle);
  popupInfo.appendChild(popupdescription);
  popupPicture.appendChild(popupPictureItem);  
  popupWrap.appendChild(popupPicture);
  popupWrap.appendChild(popupInfo);
  popupContent.appendChild(popupClose);
  popupContent.appendChild(popupWrap);
  popup.appendChild(popupOverlay);
  popup.appendChild(popupContent);
  document.body.prepend(popup);

  document.body.style.overflow = 'hidden';

  popupClose.addEventListener('click', removePopup);
  popupOverlay.addEventListener('click', removePopup);
  document.addEventListener('keydown', (event) => {
        
    if (event.key === 'Escape') {
     //if esc key was not pressed in combination with ctrl or alt or shift
        const isNotCombinedKey = !(event.ctrlKey || event.altKey || event.shiftKey);
        if (isNotCombinedKey) {
          removePopup()
          
        }
    }
});
}

function removePopup () {
  document.querySelector('.popup').remove();
  document.body.style.overflow = 'visible';
}


fetch('../../src/books.json') //path to the file with json data
  .then(response => {
    return response.json();
  })
  .then(data => {
    data.forEach(card => {
      createCard(card)
          

    })

  });
   

  
function renderBag (priceNum) {
  const bookTableBagTitle = document.createElement('h2');
  const bookTableBagContent = document.createElement('div');
  const bookTableBagPrice = document.createElement('p');
  bookTableBagPrice.classList.add('book-catalog__total');
  bookTableBagPrice.innerText = `Total Price: ${priceNum}`
bookTableBagTitle.classList.add('section-title', 'bag__title');
bookTableBagTitle.innerText = 'Your Books Bag';
bookTableBagContent.classList.add('book-catalog__content', 'bag__content');
const confirmOrder = document.createElement('a');
confirmOrder.classList.add('bag__confirm');
confirmOrder.setAttribute('href', '#');
confirmOrder.innerText = 'Confirm Order'
bookTableBag.appendChild(bookTableBagTitle);
bookTableBag.appendChild(bookTableBagContent);
bookTableBag.appendChild(bookTableBagPrice);
bookTableBag.appendChild(confirmOrder);
}

function removeBag () {
  document.querySelector('.bag__title').remove();
  document.querySelector('.bag__content').remove();
  document.querySelector('.book-catalog__total').remove();
  document.querySelector('.bag__confirm').remove();
}


const footerContainer = document.createElement('div');
footerContainer.classList.add('section-container');
const footerLogo = document.createElement('a');
footerLogo.classList.add('logo');
const footerPicture = document.createElement('img');
footerPicture.classList.add('picture-item');
footerPicture.setAttribute('alt', "Company logo");
footerPicture.setAttribute('src', "../../assets/icons/logo-kids-heads-white.png");
const author = document.createElement('p');
author.textContent = '© 2022 Vs-elen';
const gitLink = document.createElement('a');
gitLink.setAttribute('href', "https://github.com/Vs-elen");
const gitLinkPicture = document.createElement('img');
gitLinkPicture.classList.add('picture-item');
gitLinkPicture.setAttribute('alt', "GIt logo");
gitLinkPicture.setAttribute('src', "../../assets/icons/github.svg");

footerLogo.appendChild(footerPicture);
gitLink.appendChild(gitLinkPicture)
footerContainer.appendChild(footerLogo);
footerContainer.appendChild(author);
footerContainer.appendChild(gitLink);
footer.appendChild(footerContainer);

renderPage() 