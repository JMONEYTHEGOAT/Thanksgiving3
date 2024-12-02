function showMessage() {
    const greeting = document.getElementById("greeting");
    const hour = new Date().getHours();

    if (hour < 12) {
        greeting.textContent = "Good Morning! Happy Thanksgiving!";
    } else if (hour < 18) {
        greeting.textContent = "Good Afternoon! Enjoy the yummy food!";
    } else {
        greeting.textContent = "Good Evening! Have a cozy night!";
    }
}
