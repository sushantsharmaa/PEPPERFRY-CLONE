

var name1 = document.getElementById("name");
    var moblie1 = document.getElementById("moblie");
    var pincode1 = document.getElementById("pincode");
    var city1 = document.getElementById("city");
    var address1 = document.getElementById("address");
    var state1 = document.getElementById("state");
    // var moblie_valid = document.getElementById("moblie_valid");
    var pin_valid = document.getElementById("pin_valid");
    var city_valid = document.getElementById("city_valid");
    var state_valid = document.getElementById("state_valid");
    var address_valid = document.getElementById("address_valid");
    var checkbox = document.getElementsByClassName("checkbox");
    var submit = document.getElementById("submit");
    var question = document.getElementById("question_mark");
    var show1 = document.getElementById("show")
    question.addEventListener("mouseover",show);
    question.addEventListener("mouseout",hide);
    var num = "0123456789";
    var capital1 = document.getElementById("capital");
    var arr = localStorage.getItem('signup');
    console.log("arr : ",(arr[10])); 
    capital1.textContent = arr[10];
    var remove_address = document.getElementById("remove");
    var below_checkbox = document.getElementById("below_checkbox");
    below_checkbox.addEventListener("checked",same_bill)

    function same_bill() {
        remove_address.innerHTML = ``;
    }
    function show() {
        show1.innerText = "We'll keep in touch via updates to your order, and to plan the item's delivery with you";
        show1.style.backgroundColor = "black";
        show1.style.color = "white";
        show1.style.width = "60%";
        show1.style.height = "100%";
        show1.style.fontSize = "12px";
        show1.style.margin = "1% 5% 1% 70%";
        show1.style.marginLeft = "280%"
        // show1.style.overflow = "scroll";

    }
    function hide() {
        show1.innerText = "";
        show1.style.backgroundColor = "none";
        show1.style.color = "none";
        show1.style.width = "0px";
        show1.style.height = "0px";
    }

    // function check() {
    //     alert("Hello")
    //     check1.style.backgroundColor = "green";
    // }

    function verify() {
        console.log("State : ",state1.value);
        console.log("City : ",city1.value)
        // if (moblie1.value.length > 10 || moblie1.value.length < 10) {
        //     moblie_valid.innerText = "Enter Valid 10 digit number";
        //     moblie_valid.style.color = "#d0021b";
        //     moblie1.style.border = "1px solid #d0021b";
        // }
        if (pincode1.value.length > 6 || pincode1.value.length < 6) {
            pin_valid.innerText = "Enter valid 6 Digit pincode";
            pin_valid.style.color = "#d0021b";
            pincode1.style.border = "1px solid #d0021b";
        }
        if (city1.value.length == 0) {
            city_valid.innerText = "Enter valid city name";
            city_valid.style.color = "#d0021b";
            city1.style.border = "1px solid #d0021b";
        }
        else {
            for (var i = 0; i < city1.length; i++) {

                for (var j = 0; j < num.length; j++) {
                    if (city1[i] === num[j]) {
                        city_valid.innerText = "Enter valid city name";
                        city_valid.style.color = "#d0021b";
                        city1.style.border = "1px solid #d0021b";
                    }
                }
            }
        }


        if (state1.value === "Select State") {
            state_valid.innerText = "Select valid state";
            state_valid.style.color = "#d0021b";
            state1.style.border = "1px solid #d0021b";
        }
        
        if(address1.value.length === 0) {
            address_valid.innerText = "Please Enter a Valid Address. Special characters allowed are ( - , . / ) ' +"
            address_valid.style.color = "#d0021b"
            address1.style.border = "1px solid #d0021b";
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

