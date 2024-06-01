function expandMenu() {
  const expandMenubtn = document.getElementById("menu-expand");
  expandMenubtn.classList.toggle("hidden");
}
let slab;
let amountEntered;
function slabSelector(event) {
  event.preventDefault();
  slab = event.target.value;
}
function amountGrab() {
  amountEntered = document.querySelector("#excludingAmount").value;
  displayValues();
}

function displayValues() {
  slab = Math.abs(slab);
  console.log(slab);

  amountEntered = parseInt(amountEntered);
  let amountWithGSt = amountEntered - (slab * amountEntered) / 100;
  let gstAmount = amountEntered - amountWithGSt;
  document.querySelector("#includingAmount").value = amountWithGSt;
  document.querySelector("#gst").value = gstAmount;
  let gstHalf = gstAmount / 2;
  if (amountEntered) {
    document.querySelector("#otherDetails").style.display = "block";
    document.querySelector("#cgst").innerHTML = gstHalf;
    document.querySelector("#sgst").innerHTML = gstHalf;
    document.querySelector("#igst").innerHTML = gstAmount;
  }
}
