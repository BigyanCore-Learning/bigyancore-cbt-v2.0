export function setGreeting() {

    const hour = new Date().getHours();

    let greeting = "";

    if (hour < 12) {

        greeting = "Good Morning ☀️";

    } else if (hour < 17) {

        greeting = "Good Afternoon 🌤";

    } else {

        greeting = "Good Evening 🌙";

    }

    document.getElementById("greetingText").innerText =
        greeting;

}

export function setProfile(user) {

    document.getElementById("user-name").innerText =
        user.displayName;

    document.getElementById("user-email").innerText =
        user.email;

}

export function loadProfilePhoto(photoURL) {

    const img =
        document.getElementById("user-photo");

    if (!photoURL) {

        img.src = "images/default-user.png";

        return;

    }

    const tester = new Image();

    tester.onload = () => {

        img.src =
            photoURL + "?v=" + Date.now();

    };

    tester.onerror = () => {

        img.src =
            "images/default-user.png";

    };

    tester.src =
        photoURL + "?v=" + Date.now();

}