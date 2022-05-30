function resultbmi (){
    var weightinput = weight.value;
    var heightinput = height.value;
    var heightmath = heightinput / 10;
    var resultbmi = weightinput / heightmath ** 2 * 100;
    document.getElementById("result").innerHTML = (resultbmi);
}
