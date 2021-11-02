//Program to accept the student information in a dictonary format and return output based on key
var dict ;
dict=
{
    "firstname":"Bhagya",
    "lastname":"Bhoomannavar",
    "USN":57,
    "Address":
    {
        "House_No":81,
        "Area":"ys colony",
        "city":"Dharwad",
        "pin_No":580004
    },
    "course":"NodeJs",
    "mark":77

};
var key;

for( key in dict) 
{
    console.log(key,":",dict[key]);
}
