
var addBtn = document.querySelector("#addBtn");
var elementList = document.querySelector("#listTable");
var resultBtn = document.querySelector("#randomBtn");
var inputBox = document.querySelector("#addBox");
var resultBox = document.querySelector("#resultShow");


addBtn.addEventListener("click",AddObject);
var num = 0;

function AddObject(){
    num +=1
    var objectBox = document.createElement("li");
    var element = document.createTextNode(inputBox.value);
    objectBox.appendChild(element);
    objectBox.setAttribute("id",num.toString());
    objectBox.setAttribute("class","object");
    elementList.appendChild(objectBox);
    inputBox.value = "";
}

resultBtn.addEventListener("click",RandomChoose);

function RandomChoose(){
    var objectlist = elementList.querySelectorAll(".object");
    var index = Math.floor(Math.random*num)
    var result = document.querySelector("#'1'");
    console.log(`num`,num);
    console.log(objectlist);
    console.log(result);
}

