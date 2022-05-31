const order = document.querySelector("#ordered");
order.addEventListener('click', makeOrder);

const comments = document.querySelector("#submitted");
comments.addEventListener('click', addComment);

function makeOrder(){
    let firstNameBox = document.getElementById('fnameb');
    let secondNameBox = document.getElementById('snameb');
    let lastNameBox = document.getElementById('lnameb');
    let cityBox = document.getElementById('city');
    let addressBox = document.getElementById('address');
    let successOrd = document.getElementById('successfulOrder');
    let errorOrd = document.getElementById('errorOrder');
    successOrd.textContent = " ";
    if(firstNameBox.value == '' || secondNameBox.value == '' || lastNameBox.value == '' || cityBox.value == '' || addressBox.value == ''){
        errorOrd.textContent = "Please enter all fields";
        errorOrd.style.color = "red";
    }else{
        errorOrd.textContent = " ";
        successOrd.textContent = firstNameBox.value + " " + lastNameBox.value + ", Thank you for your order!";
        successOrd.style.color = "green";

        firstNameBox.value = "";
        secondNameBox.value = "";
        lastNameBox.value = "";
        cityBox.value = "";
        addressBox.value = "";
    }
}

function addComment(){
    let firstNameBox = document.getElementById('fnamec');
    let lastNameBox = document.getElementById('lnamec');
    let commBox = document.getElementById('comment');
    let fn = firstNameBox.value;
    let ln = lastNameBox.value;
    let comm = commBox.value;
    let errorCom = document.getElementById("errorComment");

    if (fn == '' || ln == '' || comm == '') {
        errorCom.textContent = "Please enter all fields";
        errorCom.style.color = "red";
    }else{
        errorCom.textContent = " ";
        var tag = document.createElement("p");
        var text = document.createTextNode(fn + " " + ln + " commented: " + comm);
        tag.prepend(text);
        var element = document.getElementById("new");
        element.prepend(tag);

        firstNameBox.value = "";
        lastNameBox.value = "";
        commBox.value = "";
    }
}