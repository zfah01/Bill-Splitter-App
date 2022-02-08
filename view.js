'use strict';
//Handles the HTML and CSS - all refs to HTML and CSS here

class View{

    constructor() {
    }

    getNumericButtons(){
        return document.getElementsByName('numberDigit');
    }
    getSplitButtons(){
        return document.getElementsByName('splitButton');
    }

    setSelectionToIndex(field, value) {
        document.getElementById(field).selectedIndex = value;
    }
    getIdOfSelectedOption(field) {
        return document.getElementById(field).selectedIndex;
    }

    getTipButtons(){
        return document.getElementsByName('tipButton');
    }




    getRoundButtons(){
        return document.getElementsByName('roundButton');

    }

    getStatementId(){
        return document.getElementById('statement');
    }


    getValueById(id){
        return document.getElementById(id).value;
    }

    callButtonListener(id, listener){
        document.getElementById(id).addEventListener("click", listener);
    }

    callRadioListener(id, listener){
        document.getElementById(id).addEventListener("click", listener);
    }

    showValueInField(field,value){
        document.getElementById(field).innerHTML = value;
    }
    getIdOfCurrentOption(field){
        return document.getElementById(field).selectedIndex;
    }

    getInputFieldId(){
        return 'input';
    }



    getResultFieldId(){
        return 'result';
    }



    getClearButtonId(){
        return 'ClearButton';
    }



}