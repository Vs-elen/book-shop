const userName = document.querySelector('#name');
const userSurname = document.querySelector('#surname');
const buyDate = document.querySelector('#date');
const street = document.querySelector('#street');
const house = document.querySelector('#house');
const flat = document.querySelector('#flat');
const pen = document.querySelector('#pen');
const form = document.querySelector('#form');
const formSubmit = document.querySelector('#submitButton');
const inputs = document.querySelectorAll('.delivery__input');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let validName = false;
let validSurname = false;
let validDate = false;
let validStreet = false;
let validHouse = false;
let validFlat= false;
let validPen = true;

const isRequired = value => value === '' ? false : true;

const isBetween = (length, min) => length < min ? false : true;

const isString = value => typeof value !== 'string' ? false : true;

const isLetters = (value) => {
    let re = /^[a-zA-Z]+$/;
    return re.test(value)
}

const isLettersNumSpace = (value) => {
    let re = /[0-9A-Za-z\s]+$/;
    return re.test(value)
}

const hasSpaces = (value) => {
    return (/\s/.test(value))
}

const hasStartSpace = (value) => {
    return (/^\s/.test(value))
}

const hasStartDash = (value) => {
    return (/^\-/.test(value))
}

const isNumDash = (value) => {
    let re = /^[0-9\-]+$/;
    return re.test(value)
}

const isDate = (UserDate) => {

    let todayDate = new Date();

    if (new Date(UserDate).getTime() <= todayDate.getTime()) {
        return false;
    }

    if (!(new Date(UserDate).getTime())) {
        return false;
    }
    return true


}

const isPositive = (value) => {
    let re = /^[0-9]\d*$/;
    return re.test(value)
}

const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    const error = formField.querySelector('small');
    error.textContent = '';
}

const checkUsername = () => {

    let valid = false;
    const min = 4;
    const username = userName.value;

    if (!isRequired(username)) {
        showError(userName, 'Name cannot be blank.');
        validName = false;
    } else if (!isBetween(username.length, min)) {
        showError(userName, `Name must more than ${min} characters.`)
        validName = false;
    } else if (!isString(username)) {
        showError(userName, `Name must contain letters only.`)
        validName = false;
    } else if (hasSpaces(username)) {
        showError(userName, `Name must contain letters only.`)
        validName = false;
    } else if (!isLetters(username)) {
        showError(userName, `Name must contain letters only.`)
        validName = false;
    } else {
        showSuccess(userName);
        valid = true;
        validName = true;
    }
    return valid;
}

const checkUserSurname = () => {

    let valid = false;
    const min = 5;

    const username = userSurname.value;

    if (!isRequired(username)) {
        showError(userSurname, 'Surname cannot be blank.');
        validSurname = false;
    } else if (!isBetween(username.length, min)) {
        showError(userSurname, `Surname must more than ${min} characters.`)
        validSurname = false;
    } else if (!isString(username)) {
        showError(userSurname, `Surname must contain letters only.`)
        validSurname = false;
    } else if (hasSpaces(username)) {
        showError(userSurname, `Surname must contain letters only.`)
        validSurname = false;
    } else if (!isLetters(username)) {
        showError(userSurname, `Surname must contain letters only.`)
        validSurname = false;
    } else {
        showSuccess(userSurname);
        valid = true;
        validSurname = true;
    }
    return valid;
}

const checkDate = () => {
    let valid = false;
    const dateValue = buyDate.value;

    if (!isDate(dateValue)) {
        showError(buyDate, `Date must not be earlier than next day.`)
        validDate = false;
    } else {
        showSuccess(buyDate);
        valid = true;
        validDate = true;
    }
    return valid;
}

const checkStreet = () => {
    let valid = false;
    const min = 5;

    const streetName = street.value;

    if (!isRequired(streetName)) {
        showError(street, 'Street name cannot be blank.');
        validStreet = false;
    } else if (!isBetween(streetName.length, min)) {
        showError(street, `Street name must more than ${min} characters.`)
        validStreet = false;
    } else if (!isLettersNumSpace(streetName)) {
        showError(street, `Street name must contain letters and numbers only.`)
        validStreet = false;
    } else if (hasStartSpace(streetName)) {
        showError(street, `Street name must not start with space.`)
        validStreet = false;
    } else {
        showSuccess(street);
        valid = true;
        validStreet = true;
    }
    return valid;
}
const checkHouse = () => {
    let valid = false;
    const houseName = house.value;
    if (!isRequired(houseName)) {
        showError(house, 'House number cannot be blank.');
        validHouse = false;
    } else if (!isPositive(houseName)) {
        showError(house, 'House number must be a number.');
        validHouse = false;
    } else {
        showSuccess(house);
        valid = true;
        validHouse = true;
    }
    return valid;
}

const checkFlat = () => {
    let valid = false;
    const flatName = flat.value;
    if (!isRequired(flatName)) {
        showError(flat, 'Flat number cannot be blank.');
        validFlat= false;
    } else if (!isNumDash(flatName)) {
        showError(flat, 'Flat number must be a number.');
        validFlat= false;
    } else if (hasStartDash(flatName)) {
        showError(flat, 'Flat number must not start with dash.');
        validFlat= false;
    } else {
        showSuccess(flat);
        valid = true;
        validFlat= true;
    }
    return valid;
}

const checkGifts = () => {
    let valid = false;
   
    if (document.querySelectorAll('input[type="checkbox"]:checked').length > 2) {
        showError(pen, 'Please choose two gifts.');
        validPen = false;
    } else {
        showSuccess(pen);
        valid = true;
        validPen = true;
    }
    return valid;
}
/*
inputs.forEach(input => {
    input.addEventListener('focus', (event) => {
        showSuccess(input)
    });
})*/

checkboxes.forEach(input => {
    input.addEventListener('click', (event) => {
        if (document.querySelectorAll('input[type="checkbox"]:checked').length <= 2) {
            showSuccess(pen);
            validPen = true;
        } else {
            showError(pen, 'Please choose two gifts.');
            validPen = false;
        }
    });
})
let validForm = false;
const validateForm = () => {
    let isUsernameValid = checkUsername(),
        isUserSurNameValid = checkUserSurname(),
        isDateValid = checkDate(),
        isStreetValid = checkStreet(),
        isHouseValid = checkHouse(),
        isFlatValid = checkFlat(),
        isGiftValid = checkGifts()


    let isFormValid = isUsernameValid && isUserSurNameValid && isDateValid && isStreetValid && isHouseValid && isFlatValid && isGiftValid


    if (isFormValid) {
        validForm = true;
        formSubmit.disabled = false;
        formSubmit.classList.remove('delivery__submit_disabled')
        console.log('valid')
    } else {
        validForm = false;
        formSubmit.disabled = true;
        formSubmit.classList.add('delivery__submit_disabled')
        console.log('not valid')
    }
}



document.querySelectorAll('input:not(input[type="submit"])').forEach(input => {
    input.addEventListener('change', function (e) {
        switch (e.target.id) {
            case 'name':
                checkUsername();
                break;
            case 'surname':
                checkUserSurname();
                break;
            case 'date':
                checkDate();
                break;
            case 'street':
                checkStreet();
                break;
            case 'house':
                checkHouse();
                break;
            case 'flat':
                checkFlat();
                break;
            case 'pen':
                checkGifts();
                break;
        }
    })
})

function checkInputs () {
    if (validName && validSurname && validDate && validStreet && validHouse && validFlat && validPen) {
        formSubmit.disabled = false;
        formSubmit.classList.remove('delivery__submit_disabled')
    }
}


userName.addEventListener('input', function (e) {
    const min = 4;
    const username = userName.value;

    if (!isRequired(username)) {
        validName = false;
    } else if (!isBetween(username.length, min)) {
        validName = false;
    } else if (!isString(username)) {
        validName = false;
    } else if (hasSpaces(username)) {
        validName = false;
    } else if (!isLetters(username)) {
        validName = false;
    } else {
        validName = true;
        checkInputs();
    }
console.log(validName)     
})

userSurname.addEventListener('input', function (e) {   
    const min = 5;
    const username = userSurname.value;
    if (!isRequired(username)) {
        validSurname = false;
    } else if (!isBetween(username.length, min)) {
        validSurname = false;
    } else if (!isString(username)) {
        validSurname = false;
    } else if (hasSpaces(username)) {
        validSurname = false;
    } else if (!isLetters(username)) {
        validSurname = false;
    } else {
        validSurname = true;
        checkInputs();
    }
console.log(validSurname)     
})

buyDate.addEventListener('input', function (e) {   
    const dateValue = buyDate.value;

    if (!isDate(dateValue)) {
        validDate = false;
    } else {
        validDate = true;
        checkInputs();
    }
console.log(validDate)     
})

street.addEventListener('input', function (e) {   
    const min = 5;

    const streetName = street.value;

    if (!isRequired(streetName)) {
        validStreet = false;
    } else if (!isBetween(streetName.length, min)) {
        validStreet = false;
    } else if (!isLettersNumSpace(streetName)) {
        validStreet = false;
    } else if (hasStartSpace(streetName)) {
        validStreet = false;
    } else {
        validStreet = true;
        checkInputs();
    }
console.log(validStreet)     
})

house.addEventListener('input', function (e) {   
    const houseName = house.value;
    if (!isRequired(houseName)) {
        validHouse = false;
    } else if (!isPositive(houseName)) {
        validHouse = false;
    } else {
        validHouse = true;
        checkInputs();
    }
console.log(validHouse)     
})

flat.addEventListener('input', function (e) {   
    const flatName = flat.value;
    if (!isRequired(flatName)) {
        validFlat= false;
    } else if (!isNumDash(flatName)) {
        validFlat= false;
    } else if (hasStartDash(flatName)) {
        validFlat= false;
    } else {
        validFlat= true;
        checkInputs();
    }
console.log(validFlat)     
})

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
    const popupWrap = document.createElement('div');
    popupWrap.classList.add('popup__wrap');
    const popupInfo = document.createElement('div');
    popupInfo.classList.add('popup__info');
    const popupTitle = document.createElement('h2');
    popupTitle.classList.add('popup__title');
    popupTitle.innerText = 'The order created.';
    const popupdescription = document.createElement('p');
    popupdescription.classList.add('popup__text');
    popupdescription.innerText = `The delivery address is ${item.street} house ${item.house} flat ${item.flat}. Customer ${item.name} ${item.surname}`;
  
    popupInfo.appendChild(popupTitle);
    popupInfo.appendChild(popupdescription);
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
  

let userData = {}

form.addEventListener('submit', function (e) {

    e.preventDefault();

    validateForm()
    
    if (validForm) {
        userData.name = userName.value
        userData.surname = userSurname.value
        userData.street = street.value
        userData.house = house.value
        userData.flat = flat.value
     
        createPopup(userData)
    
}


});