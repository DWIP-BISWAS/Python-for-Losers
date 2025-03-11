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
    "Even AI can't save your garbage code.",
    "Your variables are named like your thought process—completely random.",
    "I've seen spaghetti code more structured than your project.",
    "Your syntax errors have syntax errors.",
    "Your functions have more arguments than your parents.",
    "Your code is the reason why DevOps engineers cry at night.",
    "You use inline CSS and think you're a frontend developer.",
    "Your JavaScript has more 'undefined' than actual values.",
    "You probably write SQL queries with SELECT * just to feel powerful.",
    "Even a Hello World script is an achievement for you.",
    "Your codebase is just a collection of Stack Overflow copy-pastes.",
    "You indent using spaces AND tabs, just to piss people off.",
    "Your API responses are slower than dial-up internet.",
    "Your code has more comments than functionality.",
    "You put TODOs in your code and forget about them.",
    "Your PR reviews take longer than your actual coding.",
    "Your website breaks on Internet Explorer AND Chrome.",
    "Even your error logs look like ancient runes.",
    "You name variables 'data1', 'data2', and call it meaningful.",
    "Your CSS skills are just 'position: absolute;' everywhere.",
    "Your JavaScript promises are just broken like your dreams.",
    "You use jQuery in 2025. Please stop.",
    "Your PHP code looks like it's still running in 2005.",
    "Even Notepad++ is ashamed to open your files.",
    "Your code runs perfectly... only on your machine.",
    "You think regex is just black magic.",
    "Your indentation is a crime against humanity.",
    "You debug with console.log() but never remove them.",
    "Your app crashes faster than Windows Vista.",
    "Even assembly code is more readable than your Python scripts.",
    "You commit node_modules and act surprised when people hate you.",
    "You think MVC stands for 'My Very Confusing' code structure.",
    "Your IDE crashes out of pure shame.",
    "You name your functions 'doSomething()' and hope for the best.",
    "Your backend logic is just nested if statements.",
    "You use Bootstrap and think you're a UI/UX designer.",
    "Your deployment strategy is 'git push --force'.",
    "You think merge conflicts are the fault of the universe, not you.",
    "Your error messages are more mysterious than Area 51.",
    "Your REST API is just a mess of random endpoints.",
    "Your HTML still has <center> tags.",
    "You import an entire library just to use one function.",
    "Your JavaScript works only after 5 refreshes.",
    "Your Python imports are just 'import *' everywhere.",
    "Your website breaks when the user resizes the window.",
    "You think CSS Grid and Flexbox are the same thing.",
    "Your comments say one thing, your code does another.",
    "You name variables 'temp' and never change them.",
    "Your app takes longer to load than Cyberpunk 2077 on a potato PC.",
    "You use alert() instead of proper logging.",
    "Your API security is just hoping nobody tries anything.",
    "Your authentication logic is just 'if (password === input)'.",
    "Your TypeScript is just JavaScript with .ts at the end.",
    "You store passwords in plaintext and wonder why you get hacked.",
    "Your database schema looks like a conspiracy theory board.",
    "You write 'var' in ES6 just to make people mad.",
    "Your Node.js app leaks memory faster than a sinking ship.",
    "You write comments just to confuse future developers.",
    "Your React components have more props than necessary.",
    "You use document.write() in production code.",
    "Your code style is a mix of every bad tutorial you've seen.",
    "You think 'try-catch' is just a suggestion.",
    "Your Linux skills are just 'sudo everything'.",
    "You still don't understand Git after years of using it.",
    "Your project dependencies are more bloated than a 10-year-old WordPress site.",
    "Your API returns HTML instead of JSON.",
    "You still write jQuery animations in 2025.",
    "Your code is so bad, even AI refuses to auto-complete it.",
    "You console.log() inside loops and wonder why your browser crashes.",
    "Your idea of refactoring is renaming variables.",
    "You use == instead of === and think it’s fine.",
    "Your React state management is just a global variable.",
    "You think NoSQL means 'No to SQL forever'.",
    "You write infinite loops and act surprised when your app freezes.",
    "Your npm package.json has 500 dependencies for no reason.",
    "Your CSS classes look like 'div123' and 'box_final'.",
    "Your SQL queries have more joins than a martial arts tournament.",
    "You think JWT tokens are just magic text strings.",
    "Your mobile app UI is just 'whatever works on your phone'.",
    "You still use XMLHttpRequest instead of Fetch API.",
    "Your database queries are SELECT * forever.",
    "You store timestamps as strings and wonder why sorting is broken.",
    "Your Redux store is just a global mess.",
    "You think async-await is just 'fancy promises'.",
    "Your error handling is just 'catch (error) { return null; }'.",
    "You push untested code straight to production.",
    "Your GraphQL queries are just giant JSON blobs.",
    "You use innerHTML for everything and call it 'efficient'.",
    "You learned to code yesterday and now you're an 'AI engineer'.",
    "Your debugging technique is 'restart and pray'.",
    "You put 'final version' in your filenames, but it's never final.",
    "Your database connections stay open forever.",
    "You use lorem ipsum in production UI.",
    "Your Redux reducers are just giant switch-case blocks.",
    "You still use document.getElementById() in React projects.",
    "Your site is mobile-friendly... only if you zoom out.",
    "Your API response time is measured in geologic ages.",
    "Your git history is just 'updated code' for every commit.",
    "You write your own encryption instead of using existing libraries.",
    "You copy-paste from Stack Overflow without understanding anything.",
    "Your algorithm is O(n^n) and you're proud of it.",
    "Your cloud costs are so high, even AWS sends you warning emails.",
    "You use PHP and still wonder why people laugh at you.",
    "Your JavaScript has more 'undefined' errors than lines of code."
];

console.log(insults[Math.floor(Math.random() * insults.length)]);

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
