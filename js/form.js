/* variables here */

const firstNameInput = document.getElementById("firstName");
const inputFieldSet = document.getElementById("firstName").parentElement;
const lastNameErrorLabel = inputFieldSet.children[4];
const lastNameInput = lastNameErrorLabel.previousElementSibling;
const lockerNumberInput = document.querySelector("#lockerNumber");
const comboInput = document.getElementById("combination");
const addButton = document.getElementById("addButton");


/**
 * Name.		validateForm
 * Summary.		checks if all the fields of the form contain valid data
 * @returns 	{boolean}  valid	true indicates the form is valid, false is invalid.
 */
function validateForm () {
    let valid = true;
    if(!firstNameInput.checkValidity()){
        valid = false;
        const errorText = document.createTextNode("This field is required");
        const errorLabel = document.createElement("label");
        errorLabel.classList.add("error");
        errorLabel.setAttribute("for", "firstName");
        errorLabel.appendChild(errorText);
        //it works, but it doesn't look good. Probably have something wrong.
        document.querySelector('#lockerForm fieldset label:nth-of-type(2)').prepend(errorLabel);
        setTimeout(function() {
            errorLabel.remove();
            errorText.innerText = "";
        }, 1000); 
    } 
    if(parseInt(firstNameInput.value.length) < 2){
        valid = false;
        const errorLabelfNameLength = document.createElement("label");
        errorLabelfNameLength.classList.add("error");
        errorLabelfNameLength.setAttribute("for", "firstName");
        errorTextfNameLength = document.createTextNode("At least 2 characters are required.")
        errorLabelfNameLength.appendChild(errorTextfNameLength);
        document.querySelector('#lockerForm fieldset label:nth-of-type(2)').prepend(errorLabelfNameLength);
        setTimeout(function() {
            errorLabelfNameLength.remove();
            errorTextfNameLength.innerText = "";
        }, 1000); 
    }
    if(!lastNameInput.checkValidity()){
        valid = false;
        lastNameErrorLabel.style.display = "inline";
        setTimeout(function() {
            lastNameErrorLabel.style.display = "none";
        }, 1000); 
    }
   
    
    

}



/**
 * Name.		createSummaryNode
 * Summary.		creates and returns a HTML element node that summarizes the information inputed in the form
 * @returns 	{HTML element}	p	A paragraph element that summarizes the information collected.
 */


/* code to run on load below */
lockerNumberInput.addEventListener("change", function(){
    //needs adjusting - typing in a number doesn't trigger event listener. 
    if(parseInt(lockerNumberInput.value) < 1)
    {
        lockerNumberInput.innerText = 1;
    } else if (parseInt(lockerNumberInput.value) > 1999){
        lockerNumberInput.innerText = 1999;
    } else {
        this.lockerNumberInput = lockerNumberInput;
    }
    console.log(lockerNumberInput.value);
})

addButton.addEventListener("click", function(event)
{
    event.preventDefault();
    validateForm();
});