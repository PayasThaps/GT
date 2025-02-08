document.getElementById("match-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const industry = document.getElementById("industry").value;
    const market = document.getElementById("market").value;
    const certifications = document.getElementById("certifications").value;

    const resultHTML = `
        <div class="result-card">
            <h3>Match Results</h3>
            <p><strong>Industry:</strong> ${industry}</p>
            <p><strong>Market:</strong> ${market}</p>
            <p><strong>Certifications:</strong> ${certifications || 'N/A'}</p>
        </div>
    `;

    document.getElementById("match-results").innerHTML = resultHTML;
});
