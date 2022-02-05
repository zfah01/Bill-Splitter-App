'use strict';
// Interface
// independent code
// that defines the logic
class Model{
    constructor() {
        this.currentValue = "";
    }

    setStartingValue(startingValue){
        this.startingValue = startingValue;
    }

    setSplitValue(splitValue){
        this.splitValue = splitValue;
        document.getElementById("splitVal").innerHTML = this.splitValue;
    }


    setTip(tip){
        this.tip = tip;
        document.getElementById("splitVal").innerHTML = this.splitValue;
    }

    setRoundValue(roundValue){
        this.roundValue = roundValue;
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



   getSplit(){
        this.splitAnswer = this.currentValue/ this.splitValue;
        //this.tip = this.answer + this.tip / 100;
        //this.answer = this.answer + this.tip;
       document.getElementById("splitAns").innerHTML = this.splitAnswer.toFixed(2);
       return this.splitAnswer.toFixed(2);
    }

    applyTip(){
        this.findTip = this.splitAnswer * this.tip / 100;
        this.tipAnswer = this.splitAnswer + this.findTip;
        return this.tipAnswer.toFixed(2);
    }


    roundForEach(){
        this.roundAnswer = Math.ceil(this.applyTip() / this.roundValue)*this.roundValue;
        this.tipAfterRound = this.roundAnswer- this.splitAnswer;
        this.tipPercentage  = Math.ceil((this.tipAfterRound / this.splitAnswer * 100));
        document.getElementById("tipAns").innerHTML = this.tipAfterRound.toFixed(2);
        document.getElementById("tipPercent").innerHTML = this.tipPercentage;
        document.getElementById("roundAns").innerHTML = this.roundAnswer;
        return this.roundAnswer;
    }





}




