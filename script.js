function is_usZipCode(str) {
    regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if(regexp.test(str)){
        return true;
    }
    return false;
}
var zipcode = "03201 - 2150";
    alert(is_usZipCode(zipcode));
zipcode = "7892";
alert(is_usZipCode(zipcode));