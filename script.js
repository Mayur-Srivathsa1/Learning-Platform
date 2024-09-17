
function toggleContent(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}


function login() {
    const username = prompt("Enter your username:");
    if (username) {
        alert(`Welcome back, ${username}!`);
        document.getElementById('userGreeting').innerText = `Hello, ${username}!`;
    }
}


let userPoints = 0;

function addPoints(points) {
    userPoints += points;
    let level = Math.floor(userPoints / 10); // Every 10 points increases the level
    document.getElementById('userLevel').innerText = `Your current level: ${level}`;
    alert(`You've earned ${points} points! Your total points are now: ${userPoints}`);
}


function showGroups() {
    alert("Join communities to collaborate and grow!");
}


function showMentors() {
    alert("List of available mentors:\n1. Mentor A\n2. Mentor B\n3. Mentor C");
}


function showMeetups() {
    const meetups = [
        "Meetup 1: City A - 12th Sep",
        "Meetup 2: City B - 20th Sep",
        "Meetup 3: City C - 5th Oct"
    ];
    alert("Upcoming Meetups:\n" + meetups.join("\n"));
}


function showConsistencyTips() {
    alert("Consistency Tips:\n1. Set daily goals.\n2. Stick to a routine.\n3. Stay motivated.");
}


function enrollInLiveSession() {
    alert("You are successfully enrolled in this weekend's live session!");
}


window.onload = function() {
    document.getElementById('userLevel').innerText = `Your current level: 0`;
}
