import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async ()=>{

  update();
  
});
document.querySelector("form").addEventListener("submit", async (event)=>{
  event.preventDefault();
  var button = document.querySelector("#submit-btn");
  const inputAmount = parseFloat(document.querySelector("#input-amount").value);
  const outputAmount = parseFloat(document.querySelector("#withdrawal-amount").value);

  // console.log(inputAmount);
  // console.log(outputAmount);
  button.setAttribute("disabled",true);

  //Top-up
  if (document.getElementById("input-amount").value.length !=0){
    await dbank.topUp(inputAmount);
  }

  if (document.getElementById("withdrawal-amount").value.length !=0){
    await dbank.withdrawl(outputAmount);
  }
  await dbank.compound();

  update();

  button.removeAttribute("disabled");

  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";

});

async function update(){
  const Bal =await dbank.checkBalance();
  document.getElementById("value").innerText = Math.round(Bal*100)/100;
}