const API_URL = "https://script.google.com/macros/s/AKfycbwXNsMRakqZgWl5bGIbd-i4rTqIo43qAWrOAbaw5SGLvI0G-IjcpdJeFmXUSTK2TzJL/exec";

async function rechercherColis() {

    const numero = document.getElementById("trackingNumber").value;

    if (!numero) {
        alert("Entrez un numéro de suivi");
        return;
    }

    try {

        const response = await fetch(`${API_URL}?numero=${numero}`);

        const data = await response.json();

        console.log(data);

        alert("Recherche effectuée");

    } catch (error) {

        console.error(error);

        alert("Erreur lors de la recherche");

    }
}
