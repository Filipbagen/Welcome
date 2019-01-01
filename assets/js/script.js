function outputname() {
    const name = document.getElementById("inputname").value;
    if (name) {
        document.getElementById("demo").innerHTML = "Welcome " + name;
        document.querySelector('body').classList.toggle('welcome')
    } else { }
}

function takeMeBack() {
    document.querySelector('body').classList.toggle('welcome')
}