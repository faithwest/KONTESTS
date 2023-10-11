document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://kontests.net/api/v1/all";
    const futureContestsContainer = document.getElementById("future-contests");
    const currentContestsContainer = document.getElementById("current-contests"); // Updated variable name

    // Function to fetch contest data
    function fetchContests() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const contests = data.contests;

                const futureContests = contests.filter(contest => isFutureContest(contest));
                const currentContests = contests.filter(contest => !isFutureContest(contest)); // Updated variable name

                // Display contests in the respective tables
                displayContests(futureContests, futureContestsContainer);
                displayContests(currentContests, currentContestsContainer); // Updated variable name
            })
            .catch(error => console.error('Error:', error));
    }

    // ... (rest of the code remains the same)

    // Event listener for the "Next" button
    document.querySelector(".next-button").addEventListener("click", function () {
        // Implement code to load the next page of contests
        // You can use pagination from the API if available
    });

    // Event listener for the "Previous" button
    document.querySelector(".previous-button").addEventListener("click", function () {
        // Implement code to load the previous page of contests
        // You can use pagination from the API if available
    });

    // Event listener for the "Submit" button
    document.querySelector(".search-button").addEventListener("click", function () {
        const inputText = document.querySelector(".input-text").value;
        // Implement code to search contests based on the inputText
        // You may need to make a new API request for searching
    });
});
