const API_URL = "https://script.google.com/macros/s/AKfycbwXNsMRakqZgWl5bGIbd-i4rTqIo43qAWrOAbaw5SGLvI0G-IjcpdJeFmXUSTK2TzJL/exec";

function rechercherColis() {

    const numero = document.getElementById("trackingNumber").value;

    if (!numero) {

        alert("Veuillez entrer un numéro de suivi.");

        return;
    }

    window.location.href = `${API_URL}?numero=${numero}`;
}
