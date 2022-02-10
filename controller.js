'use strict';
/*global Model, View */
//Joins Model and View
// - the "plumbing"
const view = new View();
const model = new Model();

handlers();


function handlers() {


    let element = view.getNumericButtons();
    for (let i = 0; i < element.length; i++) {
        addNumericButtonListener(element[i].id);
    }





    let splitButton = view.getSplitButtons();
    for (let i = 0; i < splitButton.length; i++) {
        addSplitButtonListener(splitButton[i].id);
    }


    let tipOption = view.getTipButtons();
    let value = localStorage.getItem("tip");
    for (let i = 0; i < tipOption.length; i++) {
        addTipRadioListener(tipOption[i].id);

        if(tipOption[i].value === value){
            tipOption[i].checked = true;
        }

    }


    let roundOption = view.getRoundButtons();
    let val = localStorage.getItem("round");
    for (let i = 0; i < roundOption.length; i++) {
        addRoundRadioListener(roundOption[i].id);

        if(roundOption[i].value === val){
            roundOption[i].checked = true;
        }
    }


    view.callButtonListener(view.getClearButtonId(), () => {
        model.clearDisplay();
        view.showValueInField(view.getResultFieldId(), model.getCurrentValue());
        view.showValueInField(view.getInputFieldId(), model.getCurrentValue());
    });

    }

    function pressSplit() {
        let answer = model.getAnswer();
        if (!isNaN(answer)) {
            view.showValueInField(view.getInputFieldId(), model.getCurrentValue());
            view.showValueInField(view.getResultFieldId(), model.getAnswer());
        }
    }

function addNumericButtonListener(id) {
    view.callButtonListener(id, () => {
        model.updateCurrentValue(id);
        view.showValueInField(view.getInputFieldId(), model.getCurrentValue());
    });

}

function addTipRadioListener(id) {
    view.callRadioListener(id, () => {
        model.setTip(view.getValueById(id));
        pressSplit();
    });
}

function addSplitButtonListener(id) {
    view.callButtonListener(id, () => {
        model.setSplitValue(view.getValueById(id));
        pressSplit();
    });
}

    function addRoundRadioListener(id) {
        view.callRadioListener(id, () => {
            model.setRoundValue(view.getValueById(id));
            pressSplit();
        });
    }








