let text ="";

for (let i = 0 ; i< 5; i++){
    text += "hello" + "<br>"
    document.getElementById("para").innerHTML=text
}


const cars =['audi', 'bmw', 'scorpio'];
let i, len, text1;
for (i =0 ,len = cars.length, text="";i < len ; i++){
    text1 += cars[i] + "<br>"
    document.getElementById("para1").innerHTML=text1;

}