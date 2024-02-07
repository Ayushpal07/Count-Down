const endDate = "02 Feb 2024 01:30 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if (diff < 0) return;

    //convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24); //Days
    inputs[1].value = Math.floor((diff / 3600 ) % 24); // Hours
    inputs[2].value = Math.floor((diff / 60) % 60); // Minutes
    inputs[3].value = Math.floor(diff % 60); // Seconds
}

//clock function called
clock();

//set interval time for clock function well get call after each 1 sec till it reaches at the end update code each seconds
setInterval( clock, 1000);


