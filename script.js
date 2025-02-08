document.getElementById("match-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const industry = document.getElementById("industry").value;
    const market = document.getElementById("market").value;
    const certifications = document.getElementById("certifications").value;

    alert(
        `Finding matches for:\nIndustry: ${industry}\nTarget Market: ${market}\nCertifications: ${certifications}`
    );
});
