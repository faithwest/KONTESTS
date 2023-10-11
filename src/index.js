document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://kontests.net/api/v1/all";
    const futureContestsContainer = document.getElementById("future-contests");
    const runningContestsContainer = document.getElementById("running-contests");

    // Function to fetch contest data
    function fetchContests() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const contests = data.contests;

                const futureContests = contests.filter(contest => isFutureContest(contest));
                const runningContests = contests.filter(contest => !isFutureContest(contest));

                // Display contests in the respective tables
                displayContests(futureContests, futureContestsContainer);
                displayContests(runningContests, runningContestsContainer);
            })
            .catch(error => console.error('Error:', error));
    }

    // Function to check if a contest is in the future
    function isFutureContest(contest) {
        const currentTime = new Date();
        const contestStartTime = new Date(contest.start_time);

        return contestStartTime > currentTime;
    }

    // Function to display contests in the specified container
    function displayContests(contests, container) {
        const table = document.createElement("table");

        for (const contest of contests) {
            const row = table.insertRow();

            // Add columns for each contest property
            const nameCell = row.insertCell(0);
            nameCell.textContent = contest.name;

            // ... (other columns)

            // Append the row to the container
            container.appendChild(table);
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
