function getElementValueById(elimentId) {
    const PhonePriceString = document.getElementById(elimentId);
    const pricePhoneQuantity = PhonePriceString.innerText;
    const pricePhone = parseInt(pricePhoneQuantity)
    return pricePhone;
}
function setTextElimentValueById(elimentId, value){
    const SubTotalEliment = document.getElementById(elimentId);
    SubTotalEliment.innerText = value;
}
function calculateSubTotal(){
    //calculate
    const currentPhoneTotal = getElementValueById('Phone-price');
    const currentCaseTotal = getElementValueById('Case-prise');

    const subTotalPrice = currentPhoneTotal + currentCaseTotal;
    setTextElimentValueById('Subtotal', subTotalPrice)
    
    // Tax
    const Tax = (subTotalPrice * 0.1).toFixed(2);
    const taxCurrent = parseFloat(Tax)
    setTextElimentValueById('Tax', taxCurrent)

    // TotalPrice
    const TotalPrice = subTotalPrice + taxCurrent;
    setTextElimentValueById('TotalPrice', TotalPrice)
    
}