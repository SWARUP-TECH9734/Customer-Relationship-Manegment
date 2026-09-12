const API_URL = "http://localhost:5000/api/customers";

const customerForm = document.getElementById("customerForm");

customerForm.addEventListener("submit", async (e) => {
    // Prevent the default browser form reload
    e.preventDefault();

    // Collect values from the form inputs
    const customerData = {
        name: document.getElementById("name")?.value || "",
        email: document.getElementById("email")?.value || "",
        phone: document.getElementById("phone")?.value || "",
        company: document.getElementById("company")?.value || "",
        address: document.getElementById("address")?.value || "",
        status: document.getElementById("status")?.value || "Lead"
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerData)
        });

        if (response.ok) {
            alert("Customer added successfully!");
            customerForm.reset(); // Reset form inputs
            window.location.reload(); // Reload to reflect changes if fetching on load
        } else {
            const errorData = await response.json();
            alert("Failed to add customer: " + errorData.message);
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        alert("Server error. Make sure your backend is running.");
    }
});