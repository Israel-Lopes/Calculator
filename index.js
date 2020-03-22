var optionValueButton = {
    numbers: ['1','2','3','4','5','6','7','8','9','0'],
    signals: ['+','-','*','/','='],
    onOff:   ['on']
}

/**
 * 
 * @param {Object[]} arrayValue
 */
function createButton (arrayValue) {
  for (let i = 0; i < arrayValue.length; i++) {

    var elementButton = document.createElement('button');
    elementButton.setAttribute('id', 'button' + arrayValue[i]);
    elementButton.setAttribute('class', 'button');
    elementButton.innerText = arrayValue[i];

    var keyboard = document.querySelector('.keyboard');
    keyboard.appendChild(elementButton);
  }
}

for (var prop in optionValueButton) {
  if (Array.isArray(optionValueButton[prop])) {

    switch (optionValueButton[prop]) {
      case optionValueButton.numbers:
        createButton(optionValueButton.numbers);
        break;

      case optionValueButton.signals:
        createButton(optionValueButton.signals);
        break;

      case optionValueButton.onOff:
        createButton(optionValueButton.onOff);
        break;

      default:
        break;
    }
  }
}
