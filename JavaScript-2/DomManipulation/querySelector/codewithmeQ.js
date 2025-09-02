
//Accessing Input Elements By Class Names

let userData = document.querySelectorAll(".classInput");
let userRadio = document.querySelectorAll(".radioInput");

//using function country code validation

function popu() {
    if (userData[2].value == "india") {
        userData[3].value = "+91";
    } else if (userData[2].value == "china") {
        userData[3].value = "+1"
    } else if (userData[2].value == "us") {
        userData[3].value = "+86"
    }
}

//Using Function Get validation

function gstValidate(clickValue) {

    if (clickValue == 'yes') {
        let a = document.getElementsByClassName("gstBoxclass")[0];

        a.style.display = "flex";

    } else {
        let b = document.getElementsByClassName("gstBoxclass")[0];
        b.style.display = "none"
    }
}

//using sumbit button..

function submitfun() {

    if (validateFunction()) {
        alert("Organization Data saved Successsfully!!");

        //called clear function'
        clearfun();

    }
}

//using clear function....
function clearfun() {

    //using for loop for all input datas is cleared
    for (let index = 0; index < userData.length; index++) {
        userData[index].value = "";
    }

    //using for loop for all radio button is unchecked
    for (let position = 0; position < userGstStatus.length; position++) {
        userGstStatus[position].checked = false;
    }
}

function validateFunction() {


    for (validate = 0; validate < userData.length; validate++) {
        if (userData[validate].value == '') {
            alert("Please Enter the value...");
            return false;
        }
    }

    // if (userGstStatus[0].checked == true && userData[5].value == "") {
    //     alert("Please Check the Gst")
    //     return false;
    // }
    return true;
}