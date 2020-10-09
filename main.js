var addBtn = document.querySelector("#addBtn");
var elementList = document.querySelector("#listTable");
var resultBtn = document.querySelector("#randomBtn");
var inputBox = document.querySelector("#addBox");
var resultBox = document.querySelector("#resultShow");


addBtn.addEventListener("click", AddObject);
var num = 0;

function AddObject() {
    var INPUT_VALUE = inputBox.value;
    if (INPUT_VALUE !== "") {
        num += 1
        var objectBox = document.createElement("li");
        var element = document.createTextNode(inputBox.value);
        objectBox.appendChild(element);
        objectBox.id = num;
        objectBox.setAttribute("class", "object");
        objectBox.setAttribute("title", "클릭 시 삭제");
        objectBox.addEventListener("click", deleteElement);

        if (checkReduplication()) {
            elementList.appendChild(objectBox);
            inputBox.value = "";
        } else {
            alert("이미 입력한 값입니다. 다시 확인해주세요!");
            inputBox.value = "";
        }
    } else {
        alert("내용을 입력해주세요.");
    }

}

function checkReduplication() {
    var VALUE = inputBox.value;
    console.log('여기');
    var elements = document.querySelectorAll(".object");
    if (elements.length != 0) { //이미 1개 이상 입력값 있을 경우
        for (var i = 0; i < elements.length; i++) {
            if (VALUE == elements[i].innerText) {
                return false;
            }
        }
        return true;
    } else {
        return true;
    }
};

function deleteElement(event) {
    elementList.removeChild(event.target);
}


resultBtn.addEventListener("click", countSecond);

function RandomChoose() {
    var index = Math.floor((Math.random() * num + 1));
    var result = document.getElementById(index).innerText;

    resultBox.style.backgroundColor = "black";
    resultBox.style.color = "white";
    resultBox.style.border = "12px double yellow";
    resultBox.innerText = result;
}

function countSecond() {
    var NUM = 10;
    var COUNT = setInterval(count, 1000);

    function count() {
        if (NUM > 0) {
            if (3 < NUM && NUM < 7) {
                resultBox.style.backgroundColor = "orange";
            } else if (NUM <= 3) {
                resultBox.style.backgroundColor = "tomato";
            } else {
                resultBox.style.backgroundColor = "yellowgreen";
            }
            resultBox.innerText = `${NUM--}초`;

        } else {
            clearInterval(COUNT); //콜백함수 정지
            RandomChoose();
        }

    }
}

var resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", clearAll);

function clearAll() {
    while (elementList.firstChild) {
        elementList.removeChild(elementList.firstChild);
    }
}