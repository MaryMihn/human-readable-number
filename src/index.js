module.exports = function toReadable (number) {
    let numOne = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let strOne = ['zero', 'one', 'two', 'three', 'four', 'five', 'six','seven', 'eight', 'nine']
    let numOneTwo = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    let strOneTwo =['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy','eighty','ninety']
    let numTwo = [11, 12, 13, 14, 15, 16, 17, 18, 19];
    let strTwo= ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let hundred= 'hundred';
    if(number<10) {
        let index = numOne.findIndex(numbe => numbe === number)
        return strOne[index]
    }
    else if(number % 10 === 0 && number<100) {
        let index = numOneTwo.findIndex(numbe => numbe === number)
        return strOneTwo[index];
    }
    else if(number % 100 !== 0 && number>100 && number % 10 !== 0 && number<1000){
        let num = number.toString();
            if(+num[1]===0){
                let indexOne = numOne.findIndex(numbe => numbe === +num[0]);
                let indexTwo = numOne.findIndex(numbe => numbe === +num[2]);
                return strOne[indexOne]+' '+ hundred+' '+strOne[indexTwo];
            }
            else if(+num[1]===1){
                let indexOne = numOne.findIndex(numbe => numbe === +num[0]);
                let indexTwo = numTwo.findIndex(numbe => numbe === +(num.slice(1)))
                return strOne[indexOne]+' '+ hundred+' '+strTwo[indexTwo]
            }
            else{
                let indexOne = numOne.findIndex(numbe => numbe === +num[0]);
                let indexTwo = numOneTwo.findIndex(numbe => numbe === +(num[1]+'0'))
                let indexThree = numOne.findIndex(numbe => numbe === +num[2]);
                return strOne[indexOne]+' '+ hundred+' '+strOneTwo[indexTwo]+' '+strOne[indexThree];
            }
    }
    else if(number % 100 !== 0 && number>100 && number % 10 === 0 && number<1000){
        let num = number.toString();
        let indexOne = numOne.findIndex(numbe => numbe === +num[0]);
        let indexTwo = numOneTwo.findIndex(numbe => numbe === +(num[1]+'0'))
        return strOne[indexOne]+' '+ hundred+' '+strOneTwo[indexTwo];
    }
    else if(number % 100 === 0 && number<1000){
        let num = number.toString();
        let index = numOne.findIndex(numbe => numbe === +num[0]);
        return strOne[index]+' '+ hundred
    }
    else if(20<number&& number<100 && number % 10 !== 0){
        let num = number.toString();
        let indexOne = numOneTwo.findIndex(numbe => numbe ===+(num[0]+'0'))
        let indexTwo = numOne.findIndex(numbe => numbe ===+num[1])
        return strOneTwo[indexOne]+' ' +strOne[indexTwo]
    }
   
    else if(10<number<20) {
        let index = numTwo.findIndex(numbe => numbe === number)
        return strTwo[index]
   } 
  
}
