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

// Amount

const sumInput = document.querySelector('.another_amount');
const amountInput = document.querySelectorAll('.amount__input');

const changeSum = () => {
  for (const check of amountInput) {
    if (check.checked) {
      sumInput.value = check.value;
    }
  }
}
changeSum();

const writeSum = () => {
  let inputValue = sumInput.value.replace(/[+,-]/g, '');
  sumInput.value = inputValue;
  for (const check of amountInput) {
    if (Number(sumInput.value.slice(0, sumInput.maxLength)) === Number(check.value)) {
      check.checked = true;
    } else {
      check.checked = false;
    }
  }
}

const setLimitOfSum = () => {
  if (sumInput.value.length > sumInput.maxLength) {
    sumInput.value = sumInput.value.slice(0, sumInput.maxLength);
  }
}

amountInput.forEach((el) => el.addEventListener('click', changeSum));
sumInput.addEventListener('input', writeSum);
sumInput.addEventListener('input', setLimitOfSum);
sumInput.onpaste = () => false;




