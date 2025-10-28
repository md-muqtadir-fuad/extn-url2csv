let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    renderLeads();
    clearInputField();
})

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        listItems += "<li>" + myLeads[i] + "</li>"
        //create element
        //set text content
        //append to ul
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}

function clearInputField() {
    let inputField = document.getElementById("input-el");
    inputField.value = "";

}

