function updetePhoneNumber(isIncease) {
    const phoneQuantityString = document.getElementById('phone-quantity');
    const phoneQuantityNum = phoneQuantityString.value;
    const phoneQuantity = parseInt(phoneQuantityNum);
    let addQuantity;
    if (isIncease) {
        addQuantity = phoneQuantity + 1;
    }
    else {
        addQuantity = phoneQuantity - 1;
    }
    phoneQuantityString.value = addQuantity;
    return addQuantity;
}
function updetePhoneTotal(addQuantity) {
    const PhonePriceString = document.getElementById('Phone-price');
    const pricePhoneQuantity = 1219 * addQuantity;
    PhonePriceString.innerText = pricePhoneQuantity;
}
document.getElementById('Phone-plus-button').addEventListener('click', function () {
    const addQuantity = updetePhoneNumber(true);
    updetePhoneTotal(addQuantity);
    calculateSubTotal()
})
document.getElementById('Phone-minus-button').addEventListener('click', function () {
    const addQuantity = updetePhoneNumber(false);
    updetePhoneTotal(addQuantity)
    calculateSubTotal()
})