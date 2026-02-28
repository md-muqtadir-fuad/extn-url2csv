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
        //listItems += "<a href='"+myLeads[i]+"' target='_blank'><li>" + myLeads[i] + "</li></a>"
        listItems +=`
            <li>
                <a href='${myLeads[i]}' target='_blank'>
                    ${myLeads[i]}
                </a>
            </li>
            `
        console.log(myLeads[i]);
    }
    ulEl.innerHTML = listItems
}

function clearInputField() {
    let inputField = document.getElementById("input-el");
    inputField.value = "";

}

