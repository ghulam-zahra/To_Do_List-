let container =document.querySelector(".container");
let input = document.querySelector("#input-box");

function addTask(){
    if(input.value == ''){
        allert("Write something");
    } else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        input.appendChild(li);

        let span = document.createDocumentFragment("span");
        span.innerHTML = "/u00d7";
        li.appendChild(span);
    }
    input.value ="";
    saveData();
}
container.addEventListener("click",function(e){
    if(e.target.tagName=== "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data", list-DataTransferItemList.innerHTML);
}
function showlist(){
    list-items.innerHTML==localStorage.getItem("data");
}
showlist();