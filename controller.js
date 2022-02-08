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
    for (let i = 0; i < tipOption.length; i++) {
        addTipRadioListener(tipOption[i].id);

    }

    let roundValue = view.getRoundButtons();
    for (let i = 0; i < roundValue.length; i++) {
        addRoundRadioListener(roundValue[i].id);
    }


    //handler for clear button
    view.callButtonListener(view.getClearButtonId(), () => {
        model.clearDisplay();
        view.showValueInField(view.getResultFieldId(), model.getCurrentValue());
        view.showValueInField(view.getInputFieldId(), model.getCurrentValue());
    });


    function addNumericButtonListener(id) {
        view.callButtonListener(id, () => {
            model.updateCurrentValue(id);
            view.showValueInField(view.getInputFieldId(), model.getCurrentValue());
        });

    }

    function addTipRadioListener(id) {
        view.callRadioListener(id, () => {
            model.setTip(view.getValueById(id));
            localStorage.tip = view.getIdOfSelectedOption(id);
           // model.setTipStorage(view.getTip());
            splitButtonPressed();
            //view.showValueInField(view.getResultFieldId(), model.getAnswer());
            //tipCheck();
        });
    }

    function addSplitButtonListener(id) {
        view.callButtonListener(id, () => {
            model.setSplitValue(view.getValueById(id));
            splitButtonPressed();
            //view.showValueInField(view.getResultFieldId(), model.getAnswer());
            //tipCheck();
        });
    }

    function addRoundRadioListener(id) {
        view.callRadioListener(id, () => {
            model.setRoundValue(view.getValueById(id));
            //localStorage.roundValue = view.getIdOfSelectedOption(id);
            //view.showValueInField(view.getResultFieldId(), model.roundForEach());
            splitButtonPressed();
            //roundCheck();
        });
    }

    function valuesFromStorage(){
        let selectedTip = localStorage.tip || 0;
        view.setSelectionToIndex(tipOption, selectedTip);
        model.setTip(view.getValueById(tipOption));
    }

}

    function splitButtonPressed() {
        let answer = model.getAnswer();
        if (!isNaN(answer)) {
            view.showValueInField(view.getInputFieldId(), model.getCurrentValue());
            view.showValueInField(view.getResultFieldId(), model.getAnswer());
        }
    }







