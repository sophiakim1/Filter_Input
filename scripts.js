const filterInput = document.getElementById("filterInput");

filterInput.oninput = (e) => {
  setTimeout(() => {
    // Convert the input to lowercase 
    const value = e.target.value.toLowerCase();
    const articles = document.querySelectorAll("#articles li");

    articles.forEach((article) => {
      // Convert the article to lowercase 
      const originalText = article.innerText.toLowerCase();

      // If the input is empty, display all articles and reset to original text
      if (!value) {
        // Show article
        article.style.display = "list-item";
        // Reset to original text
        article.innerHTML = originalText;
        return;
      }

      // Split the article into individual words
      const words = originalText.split(/\s+/);
      let matched = false;

      words.forEach((word) => {
        if (word.includes(value)) {
          // Set matched to true if a match is found
          matched = true;
        }
      });

      // If a match is found, display the article
      if (matched) {
        article.style.display = "list-item";
      } else {
        // Else, hide the article
        article.style.display = "none";
      }
    });
  }, 500);
};
