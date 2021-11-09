var name1 = document.getElementById("name");
    var moblie1 = document.getElementById("moblie");
    var pincode1 = document.getElementById("pincode");
    var city1 = document.getElementById("city");
    var address1 = document.getElementById("address");
    var state1 = document.getElementById("state");
    var moblie_valid = document.getElementById("moblie_valid");
    var pin_valid = document.getElementById("pin_valid");
    var city_valid = document.getElementById("city_valid");
    var state_valid = document.getElementById("state_valid");
    var checkbox = document.getElementsByClassName("checkbox");
    var submit = document.getElementById("submit");
    var question = document.getElementById("question_mark");
    var show1 = document.getElementById("show")
    question.addEventListener("mouseover",show);
    question.addEventListener("mouseout",hide);
    var num = "0123456789";

    function show() {
        show1.innerText = "ojoo";
        show1.style.backgroundColor = "black";
        show1.style.color = "white";
        show1.style.width = "40px";
        show1.style.height = "40px";
    }
    function hide() {
        show1.innerText = "";
        show1.style.backgroundColor = "none";
        show1.style.color = "none";
        show1.style.width = "0px";
        show1.style.height = "0px";
    }

    function check() {
        alert("Hello")
        check1.style.backgroundColor = "green";
    }

    function verify() {
        console.log("State : ",state1.value);
        console.log("City : ",city1.value)
        if (moblie1.value.length > 10 || moblie1.value.length < 10) {
            moblie_valid.innerText = "Enter Valid 10 digit number";
            moblie_valid.style.color = "red";
        }
        if (pincode1.value.length > 6 || pincode1.value.length < 6) {
            pin_valid.innerText = "Enter valid 6 Digit pincode";
            pin_valid.style.color = "red";
        }
        if (city1.value.length == 0) {
            city_valid.innerText = "Enter valid city name";
            city_valid.style.color = "red";
        }
        else {
            for (var i = 0; i < city.length; i++) {

                for (var j = 0; j < num.length; j++) {
                    if (city[i] === num[j]) {
                        city_valid.innerText = "Enter valid city name";
                        city_valid.style.color = "red";
                    }
                }
            }
        }


        if (state1.value === "Select State") {
            state_valid.innerText = "Select valid state";
            state_valid.style.color = "red";
        }
    }
    submit.addEventListener("click", display)
function display() {

    console.log("name : ",name1.value);
    console.log("moblie : ",moblie1.value);
    console.log("pincode : ",pincode1.value);
    console.log("address : ",address1.value);
    console.log("city : ",city1.value);
    console.log("state : ",state1.value);
    
    let product = {name:name1.value,mobile:moblie1.value,pincode:pincode1.value,address:address1.value,city:city1.value,state:state1.value};

   

    console.log(product);
    checkoutInfo(product);
    
 }
 if (localStorage.getItem("checkout") === null) {
     localStorage.setItem("checkout", JSON.stringify([]));
 }

function checkoutInfo(p) {
   //console.log('p:', p)
   
     let checkout_info = JSON.parse(localStorage.getItem("checkout"));

     checkout_info.push(p);

     localStorage.setItem("checkout", JSON.stringify(checkout_info));

     console.log("checkout-info :", checkout_info);

}

