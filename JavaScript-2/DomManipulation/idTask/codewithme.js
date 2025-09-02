//accessing input element by Id

let userName = document.getElementById("nameId");
let address = document.getElementById("addressId");
let userCountryList = document.getElementById("countryId");
let countrycode = document.getElementById("countrycodeid");
let userphonenumber = document.getElementById("phoneId");
let usergstratio = document.getElementById("gstId");

function popu() {

    if (userCountryList.value == "india") {
        countrycode.value = "+91";

    } else if (userCountryList.value == "china") {
        countrycode.value = "+1";


    } else if (userCountryList.value == "us") {
        countrycode.value = "+86"
    }
}

function gstValidate(clickvalue) {

    if (clickvalue === "yes") {
        document.getElementById("gstBoxId").style.display = "flex";
    } else {
        document.getElementById("gstBoxId").style.display = "none";
    }

}

function submitfun() {
    if (validatefun()) {
        alert("Organization Data saved successsfully")

        clearfun();
    }
}

function clearfun() {

    userName.value = "";
    address.value = "";
    userCountryList.value = "";
    userphonenumber.value = "";
    usergstratio.value = "";
    document.getElementById("yesId").checked = false;
    document.getElementById("noId").checked = false;
}

//This is common validating function

function validatefun() {
    if (userName.value == "" || address.value == "" || userCountryList.value == "" || userphonenumber.value == "") {
        alert("Please Enter the value....");
        return false;
    }
    if (document.getElementById("yesId").checked == true && usergstratio.value == "") {
        alert("Please check the Gst")
        return false;
    }
    return true;

}

