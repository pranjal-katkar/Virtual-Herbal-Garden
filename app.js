const plantDetails = {
    "aloe-vera": {
        name: "Aloe Vera",
        botanicalName: "Aloe barbadensis",
        benefits: "Aloe Vera is known for its healing properties, especially in skin care and wound healing.",
        care: "Aloe Vera thrives in well-drained soil with plenty of sunlight. Water sparingly."
    },
    "tulsi": {
        name: "Tulsi",
        botanicalName: "Ocimum sanctum",
        benefits: "Tulsi is revered for its medicinal properties, especially in boosting immunity and relieving stress.",
        care: "Tulsi requires a sunny spot and regular watering. It prefers slightly dry soil."
    },
    "lavender": {
        name: "Lavender",
        botanicalName: "Lavandula angustifolia",
        benefits: "Lavender is well-known for its calming effects and is often used for anxiety and sleep disorders.",
        care: "Lavender thrives in well-drained soil and full sunlight. Water moderately."
    },
    "mint": {
        name: "Mint",
        botanicalName: "Mentha",
        benefits: "Mint is often used to relieve digestive issues and improve mental clarity.",
        care: "Mint prefers a cool, moist environment and can spread rapidly, so it's best grown in a container."
    },
    "chamomile": {
        name: "Chamomile",
        botanicalName: "Matricaria chamomilla",
        benefits: "Chamomile is known for its soothing properties and is commonly used as a tea to promote relaxation.",
        care: "Chamomile prefers well-drained soil and full sunlight. Water regularly but avoid waterlogging."
    }
};

// Show the Login Modal
document.getElementById('login-button').addEventListener('click', () => {
    document.getElementById('login-modal').style.display = 'block';
});

// Close the Login Modal
document.getElementById('close-login').addEventListener('click', () => {
    document.getElementById('login-modal').style.display = 'none';
});

// Submit Login Form
document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Simple Validation (Replace with backend validation)
    if (username === "admin" && password === "password123") {
        document.getElementById('login-message').textContent = "Welcome, " + username + "!";
        document.getElementById('login-message').style.color = "green";
        setTimeout(() => {
            document.getElementById('login-modal').style.display = 'none';
        }, 2000); // Close modal after 2 seconds
    } else {
        document.getElementById('login-message').textContent = "Invalid username or password.";
        document.getElementById('login-message').style.color = "red";
    }
});

// Get modal elements
const modal = document.getElementById('login-modal');
const closeModal = document.getElementById('close-modal');
const loginButton = document.getElementById('login-button');

// Show modal when login button is clicked
loginButton.addEventListener('click', () => {
    modal.style.display = "flex"; // Display modal as flex to center
});

// Close modal when close button is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = "none"; // Hide modal
});

// Close modal if clicked outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none"; // Hide modal
    }
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    const modal = document.getElementById('login-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Function to show plant details when clicked
function showPlantDetails(plantId) {
    const details = plantDetails[plantId];
    if (details) {
        const plantInfoSection = document.getElementById('plant-details');
        plantInfoSection.innerHTML = `
            <h3>${details.name}</h3>
            <p><strong>Botanical Name:</strong> ${details.botanicalName}</p>
            <p><strong>Benefits:</strong> ${details.benefits}</p>
            <p><strong>Care Instructions:</strong> ${details.care}</p>
        `;
    }
}
