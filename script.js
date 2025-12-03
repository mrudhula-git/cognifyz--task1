// Button color change
document.getElementById("colorBtn").onclick = function () {
    this.style.backgroundColor = "pink"; 
};

// Greeting alert
function showGreeting() {
    let hours = new Date().getHours();

    if (hours < 12) {
        alert("Good Morning!");
    } else if (hours < 18) {
        alert("Good Afternoon!");
    } else {
        alert("Good Evening!");
    }
}

// Calculator
function calculate() {
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);

    document.getElementById("result").innerText = "Sum = " + (n1 + n2);
}