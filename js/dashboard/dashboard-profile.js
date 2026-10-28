export function setGreeting() {
    const greetingElement = document.getElementById("greetingText");
    if (!greetingElement) return;

    const hour = new Date().getHours();
    let greeting = "";
    
    if (hour < 12) {
        greeting = "Good Morning ☀️";
    } else if (hour < 17) {
        greeting = "Good Afternoon 🌤";
    } else {
        greeting = "Good Evening 🌙";
    }
    
    greetingElement.innerText = greeting;
}

export function setProfile(user) {
    if (!user) return;

    const nameElement = document.getElementById("user-name");
    const emailElement = document.getElementById("user-email");

    if (nameElement) nameElement.innerText = user.displayName || "";
    if (emailElement) emailElement.innerText = user.email || "";
}

export function loadProfilePhoto(photoURL) {
    const img = document.getElementById("user-photo");
    if (!img) return;

    const defaultPhoto = "images/default-user.png";

    if (!photoURL) {
        img.src = defaultPhoto;
        return;
    }

    // Handle image load failures directly on the DOM element
    img.onerror = () => {
        img.src = defaultPhoto;
    };

    // Append timestamp cache-buster safely
    img.src = photoURL + "?v=" + Date.now();
}