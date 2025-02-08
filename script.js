document.addEventListener("DOMContentLoaded", () => {
    // Dropdown data
    const industries = ["Agriculture", "Technology", "Healthcare", "Retail"];
    const markets = ["Europe", "Asia", "North America", "Australia"];
    const certifications = ["ISO 9001", "ISO 14001", "ISO 45001", "ISO 22000"];

    // Function to populate a dropdown
    function populateDropdown(dropdownId, options) {
        const dropdown = document.getElementById(dropdownId);
        options.forEach(optionText => {
            const option = document.createElement("option");
            option.value = optionText;
            option.textContent = optionText;
            dropdown.appendChild(option);
        });
    }

    // Populate all dropdowns
    populateDropdown("industry", industries);
    populateDropdown("market", markets);
    populateDropdown("certifications", certifications);
});
