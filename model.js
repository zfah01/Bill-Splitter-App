'use strict';
// Interface
// independent code
// that defines the logic
class Model{
    constructor() {
        this.currentValue = "";
        this.rate1 = "";
        this.rate2 = "";
    }


    setSplitValue(splitValue){
        this.splitValue = splitValue;
        document.getElementById("splitVal").innerHTML = this.splitValue;
    }


    setTip(tip){
        this.tip = tip;
        localStorage.setItem("tip", tip);
        document.getElementById("splitVal").innerHTML = this.splitValue;
    }



    setRoundValue(roundValue){
        this.roundValue = roundValue;
        localStorage.setItem("round", roundValue);
        document.getElementById("roundVal").innerHTML = this.roundValue;
    }

    updateCurrentValue(value){
        this.currentValue = this.currentValue + value;
    }


    getCurrentValue(){
        document.getElementById("currVal").innerHTML = this.currentValue;
        return this.currentValue;
    }


    clearDisplay(){
        this.currentValue = "";
    }


    getAnswer(){

       this.splitWithNoTip = this.currentValue/this.splitValue;
       this.splitWithTip = this.splitWithNoTip *(1+(this.tip/100));
       this.splitWithTipRounded = Math.ceil(this.splitWithTip/this.roundValue)*this.roundValue;



        document.getElementById("splitAns").innerHTML = this.splitWithNoTip.toFixed(2);
        this.tipAfterRound = this.splitWithTipRounded- this.splitWithNoTip;
        this.tipPercentage  = Math.ceil((this.tipAfterRound / this.splitWithNoTip * 100));
        document.getElementById("tipAns").innerHTML = this.tipAfterRound.toFixed(2);
        document.getElementById("tipPercent").innerHTML = this.tipPercentage;
        document.getElementById("roundAns").innerHTML = this.splitWithTipRounded;

       return this.splitWithTipRounded;
    }



}




