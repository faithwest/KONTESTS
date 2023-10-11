document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://kontests.net/api/v1/all";

    // Function to fetch contest data
    function fetchContests() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const contests = data.contests;
                // Display contests in the table
                displayContests(contests);
            })
            .catch(error => console.error('Error:', error));
    }

    // Function to display contests in the table
    function displayContests(contests) {
        const table = document.querySelector("table");
        table.innerHTML = ""; // Clear the table

        for (const contest of contests) {
            const row = table.insertRow();

            // Add columns for each contest property
            const nameCell = row.insertCell(0);
            nameCell.textContent = contest.name;

            const startTimeCell = row.insertCell(1);
            startTimeCell.textContent = contest.start_time;

            const endTimeCell = row.insertCell(2);
            endTimeCell.textContent = contest.end_time;

            const durationCell = row.insertCell(3);
            durationCell.textContent = contest.duration;

            const siteCell = row.insertCell(4);
            siteCell.textContent = contest.site;
        }
    }

    // Add an event listener to fetch contests when the page loads
    fetchContests();

    // "Next" button
    document.querySelector(".next-button").addEventListener("click", function () {
        // Implement code to load the next page of contests
        // You can use pagination from the API if available
    });

    // "Previous" button
    document.querySelector(".previous-button").addEventListener("click", function () {
        // Implement code to load the previous page of contests
        // You can use pagination from the API if available
    });

    // "Submit" button
    document.querySelector(".search-button").addEventListener("click", function () {
        const inputText = document.querySelector(".input-text").value;
        // Implement code to search contests based on the inputText
        // You may need to make a new API request for searching
    });
});
