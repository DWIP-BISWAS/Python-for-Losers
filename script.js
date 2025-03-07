const insults = [
    "You're the reason Python has a bad reputation.",
    "I've seen HTML pages with better logic than your code.",
    "If Stack Overflow goes down, so does your career.",
    "Your GitHub commits are just 'Fixed Bug' over and over again.",
    "Your code is so bad, ChatGPT refuses to help.",
    "Even JavaScript devs would laugh at you."
];

function generateInsult() {
    document.getElementById("insult").innerText = insults[Math.floor(Math.random() * insults.length)];
}

document.getElementById("download-btn").addEventListener("click", function() {
    alert("You really think you're ready for this book? Fine, take it...");
    window.location.href = "Python for Losers.pdf";
});

function jobInterview() {
    alert("Question 1: Do you know Python?\nA) Yes\nB) No");
    alert("WRONG. You're rejected.");
}

function hackerMode() {
    let terminal = document.createElement("div");
    terminal.style = "position:fixed; top:0; left:0; width:100vw; height:100vh; background:black; color:green; font-size:20px; padding:20px;";
    terminal.innerHTML = "Initializing Hack...<br>Bypassing Firewall...<br>Sending Packets...<br>ERROR: You’re Not a Hacker, Dumbass.";
    document.body.appendChild(terminal);
    setTimeout(() => terminal.remove(), 5000);
}
