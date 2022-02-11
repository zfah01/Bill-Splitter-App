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


    getTipButtons(){
        return document.getElementsByName('tipButton');
    }



    getRoundButtons(){
        return document.getElementsByName('roundButton');

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

    getInputFieldId(){
        return 'input';
    }



    getResultFieldId(){
        return 'result';
    }


   //get clear id
    getClearButtonId(){
        return 'ClearButton';
    }

    openNav() {
        document.getElementById("mySidenav").style.width = "80%";
        document.getElementById("calculator").style.marginLeft = "20%";
    }

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("calculator").style.marginLeft= "0";
    }

    getCloseNavId(){
        return 'close';
    }
    getOpenNavId(){
        return 'open';
    }

    getVisitList(){
        return document.getElementById("visitCurrency");
    }

    getHomeList(){
        return document.getElementById("homeCurrency");
    }

    getVisitCurrencies(){
    return document.getElementsByName("visitCurrency");

}

getHomeCurrencies(){
    return document.getElementsByName("homeCurrency");
}


}