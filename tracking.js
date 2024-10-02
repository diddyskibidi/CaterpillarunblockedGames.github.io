    window.onload = function () {

        generatePageList();

        sortList();
    
        // Add event listener to the clear button
        document.getElementById("clear-button").addEventListener("click", clearRecentlyVisited);
    };
