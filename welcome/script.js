function outputname() {
    var name = document.getElementById("inputname").value;
    document.getElementById("container1").style.display = "none";
    document.getElementById("demo").innerHTML = "Welcome " + name;
}