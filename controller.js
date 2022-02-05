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
            addTipRadioListener();
        });

    }

    function addTipRadioListener(id) {
        view.callRadioListener(id, () => {
            model.setTip(view.getValueById(id));
            localStorage.tip = view.getIdOfSelectedOption(id);
            view.showValueInField(view.getResultFieldId(), model.applyTip());
            //tipCheck();
        });
    }

    function addSplitButtonListener(id) {
        view.callButtonListener(id, () => {
            model.setSplitValue(view.getValueById(id));
            view.showValueInField(view.getResultFieldId(), model.getSplit());
            //tipCheck();
        });
    }

    function addRoundRadioListener(id) {
        view.callRadioListener(id, () => {
            model.setRoundValue(view.getValueById(id));
            localStorage.roundValue = view.getIdOfSelectedOption(id);
            view.showValueInField(view.getResultFieldId(), model.roundForEach());
            //roundCheck();
        });
    }


  /*  function tipCheck(){
        let answer = model.applyTip();
        if(!isNaN(answer)){
            //model.clearDisplay()
            view.showValueInField(view.getResultFieldId(), model.applyTip());
        }
        else{
            window.alert("Please split bill first");
        }
    }

    function roundCheck(){
        let answer = model.roundForEach();
        if(!isNaN(answer)){
            view.showValueInField(view.getResultFieldId(), model.roundForEach());
        }
        else{
            window.alert("Please split bill first");
        }
    } */
}



