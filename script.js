document.addEventListener("DOMContentLoaded", () => {
    generateInsult();  // Show a new insult when the page loads
});

/* 💀 Insult Generator 💀 */
const insults = [
    "You're the reason Python has a bad reputation.",
    "I've seen HTML pages with better logic than your code.",
    "If Stack Overflow goes down, so does your career.",
    "Your GitHub commits are just 'Fixed Bug' over and over again.",
    "Your code is so bad, ChatGPT refuses to help.",
    "Even JavaScript devs would laugh at you.",
    "Your Python skills are like a try-except block that never raises an error—completely useless.",
    "You probably think 'null' and 'None' are the same thing. Disgraceful.",
    "Your debugging strategy is 'print()' and hope for the best.",
    "Even AI can't save your garbage code."
];

function generateInsult() {
    let lastInsult = localStorage.getItem("lastInsult");
    let newInsult;
    
    do {
        newInsult = insults[Math.floor(Math.random() * insults.length)];
    } while (newInsult === lastInsult);  // Avoid showing the same insult twice in a row
    
    document.getElementById("insult").innerText = newInsult;
    localStorage.setItem("lastInsult", newInsult);
}

/* 💀 Download Button Trolling 💀 */
document.getElementById("download-btn").addEventListener("click", function() {
    let trollMessages = [
        "You really think you're ready for this book? Fine, take it...",
        "Downloading... just kidding. Try again.",
        "Error 404: Intelligence Not Found. Retrying...",
        "Are you sure? This book will destroy your soul.",
        "Final warning: This book has roasted 1000+ people into quitting coding."
    ];

    let trollIndex = Math.floor(Math.random() * trollMessages.length);
    alert(trollMessages[trollIndex]);

    setTimeout(() => {
        window.location.href = "Python For Losers.pdf";
    }, 3000);
});

/* 💀 Download Button Trolling 2💀 */
document.getElementById("download-btn2").addEventListener("click", function() {
    let trollMessages = [
        "You really think you're ready for this book? Fine, take it...",
        "Downloading... just kidding. Try again.",
        "Error 404: Intelligence Not Found. Retrying...",
        "Are you sure? This book will destroy your soul.",
        "Final warning: This book has roasted 1000+ people into quitting coding."
    ];

    let trollIndex = Math.floor(Math.random() * trollMessages.length);
    alert(trollMessages[trollIndex]);

    setTimeout(() => {
        window.location.href = "Python For Losers 2.pdf";
    }, 3000);
});

/* 💀 Job Interview Simulation (100% Failure Rate) 💀 */
function jobInterview() {
    let questions = [
        "Do you know Python?\nA) Yes\nB) No",
        "What’s the time complexity of your life decisions?\nA) O(1)\nB) O(n²)\nC) Infinite Loop",
        "Your code fails. What do you do?\nA) Google it\nB) Cry\nC) Both"
    ];

    let randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    alert(randomQuestion);
    
    setTimeout(() => {
        alert("WRONG. You're rejected.");
    }, 2000);
}

/* 💀 Hacker Mode – Now Animated 💀 */
function hackerMode() {
    let hackerText = [
        "Initializing Hack...",
        "Bypassing Firewall...",
        "Sending Packets...",
        "Brute Forcing SSH...",
        "Deploying Trojan...",
        "ERROR: You’re Not a Hacker, Dumbass."
    ];

    let terminal = document.createElement("div");
    terminal.style = "position:fixed; top:0; left:0; width:100vw; height:100vh; background:black; color:green; font-size:20px; padding:20px; font-family:monospace; display:flex; align-items:center; justify-content:center; flex-direction:column;";
    
    document.body.appendChild(terminal);

    let index = 0;
    function typeText() {
        if (index < hackerText.length) {
            let newLine = document.createElement("p");
            newLine.innerText = hackerText[index++];
            terminal.appendChild(newLine);
            setTimeout(typeText, 800);
        } else {
            setTimeout(() => terminal.remove(), 4000);
        }
    }

    typeText();
}
