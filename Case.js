function updeteCaseNumber(isIncease) {
    const caseQuantityString = document.getElementById('Case-quantity');
    const caseQuantityNum = caseQuantityString.value;
    const caseQuantity = parseInt(caseQuantityNum);
    let addQuantity;
    if (isIncease) {
        addQuantity = caseQuantity + 1;
    }
    else {
        addQuantity = caseQuantity - 1;
    }
    caseQuantityString.value = addQuantity;
    return addQuantity;
}
function updeteCaseTotal(addQuantity) {
    const casePriseString = document.getElementById('Case-prise');
    const casePriceQuantity = addQuantity * 59;
    casePriseString.innerText = casePriceQuantity;
}
document.getElementById('Case-plus-button').addEventListener('click', function () {
    const addQuantity = updeteCaseNumber(true)
    updeteCaseTotal(addQuantity)
    calculateSubTotal()
})
document.getElementById('Case-minus-button').addEventListener('click', function () {
    const addQuantity = updeteCaseNumber(false)
    updeteCaseTotal(addQuantity)
    calculateSubTotal()
})
