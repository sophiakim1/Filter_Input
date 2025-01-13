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

      // Create a regex to find the matching text
      const regex = new RegExp(`(${value})`, "gi");
      const matchedText = originalText.replace(
        regex,
        '<span class="highlight">$1</span>'
      );

      // If a match is found, display the article
      if (originalText.includes(value)) {
        article.style.display = "list-item";
        // Set the highlighted text
        article.innerHTML = matchedText;
      } else {
        // Else, hide the article
        article.style.display = "none";
      }
    });
  }, 500);
};
