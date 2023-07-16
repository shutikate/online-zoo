// burger-menu

const background = document.querySelector('.black-background');
const burger = document.querySelector('.burger');
const popUp = document.querySelector('.pop-up');
const burgerClose = document.querySelector('.close-icon');
const popUpLinks = document.querySelectorAll('.link_burger');

const onOpenNavigation = () => {
  popUp.classList.add ('pop-up-open');
  background.classList.add ('black-background-open');
  document.body.style.overflow = 'hidden';
}

const onCloseNavigation = () => {
  popUp.classList.remove ('pop-up-open');
  background.classList.remove ('black-background-open');
  document.body.style.overflow = '';
}


burger.addEventListener('click', onOpenNavigation);
burgerClose.addEventListener('click', onCloseNavigation);
background.addEventListener('click', onCloseNavigation);
popUpLinks.forEach(element => element.addEventListener('click', onCloseNavigation));

// slider Pets

const pets = [
  {
    name: 'giant pandas',
    src: '../../assets/jpg/pandas.jpg',
    description: 'Native to Southwest China',
    icon: '../../assets/svg/banana-bamboo_icon.svg'
  },

  {
    name: 'eagles',
    src: '../../assets/jpg/eagles.jpg',
    description: 'Native to South America',
    icon: '../../assets/svg/meet-fish_icon.svg'
  },

  {
    name: 'two-toed sloth',
    src: '../../assets/jpg/sloth.jpg',
    description: 'Mesoamerica, South America',
    icon: '../../assets/svg/banana-bamboo_icon.svg'
  },

  {
    name: 'gorillas',
    src: '../../assets/jpg/gorillas.jpg',
    description: 'Native to Congo',
    icon: '../../assets/svg/banana-bamboo_icon.svg'
  },

  {
    name: 'cheetahs',
    src: '../../assets/jpg/cheetahs.jpg',
    description: 'Native to Africa',
    icon: '../../assets/svg/meet-fish_icon.svg'
  },

  {
    name: 'penguins',
    src: '../../assets/jpg/penguins.jpg',
    description: 'Native to Antarctica',
    icon: '../../assets/svg/meet-fish_icon.svg'
  },


  {
    name: 'gorillas',
    src: '../../assets/jpg/gorilla.jpg',
    description: 'Native to Congo',
    icon: '../../assets/svg/banana-bamboo_icon.svg'
  },

  {
    name: 'alligators',
    src: '../../assets/jpg/alligator.jpg',
    description: 'Native to Southeastern U.S.',
    icon: '../../assets/svg/meet-fish_icon.svg'
  }
]

const sliderWrapper = document.querySelector('.wrapper-slider');
const container = document.querySelector('.pets__container');

const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
let allSlides;

const structurePetsCards = () => {
  const nextSlide = container.cloneNode(true);
  sliderWrapper.append(nextSlide);
  const previousSlide = container.cloneNode(true);
  sliderWrapper.prepend(previousSlide);
  container.classList.add('pets_active');
  allSlides = document.querySelectorAll('.pets__container');

  fillContainerWithContent(container);
  fillContainerWithContent(nextSlide);
  fillContainerWithContent(previousSlide);
}

let currentSlide = 1;
let isEnabled = true;

const fillContainerWithContent = (container) => {
  const petsImage = container.querySelectorAll('.pets__image');
  const petsTitle = container.querySelectorAll('.pets__title');
  const petsText = container.querySelectorAll('.pets__text');
  const foodIcon = container.querySelectorAll('.pets__food-icon');
  let shufflePets = _.shuffle(pets);
  for (let i = 0; i < 6; i++) {
    petsImage[i].src = shufflePets[i].src;
    petsTitle[i].textContent = shufflePets[i].name;
    petsText[i].textContent = shufflePets[i].description;
    foodIcon[i].src = shufflePets[i].icon;
  }
}

const changeCurrentSlide = (number) => {
  currentSlide = (number + allSlides.length) % allSlides.length;
  fillContainerWithContent(allSlides[currentSlide]);
}

const hideSlide = (direction) => {
  isEnabled = false;
  allSlides[currentSlide].classList.add(direction);
  allSlides[currentSlide].addEventListener('animationend', function() {
    this.classList.remove('pets_active', direction);
  });
}

const showSlide = (direction) => {
  allSlides[currentSlide].classList.add('pets_next', direction);
  allSlides[currentSlide].addEventListener('animationend', function() {
    this.classList.remove('pets_next', direction);
    this.classList.add('pets_active');
    isEnabled = true;
  });
}

const previousContainer = (number) => {
  hideSlide('slider-to-right');
  changeCurrentSlide(number - 1);
  showSlide('slider-from-left');
}

const nextContainer = (number) => {
  hideSlide('slider-to-left');
  changeCurrentSlide(number + 1);
  showSlide('slider-from-right');
}

const moveSliderRight = () => {
  if (isEnabled) {
    nextContainer(currentSlide);
  }
}

const moveSliderLeft = () => {
  if (isEnabled) {
    previousContainer(currentSlide);
  }
}

window.addEventListener('load', structurePetsCards);
arrowRight.addEventListener('click', moveSliderRight);
arrowLeft.addEventListener('click', moveSliderLeft);




