let postsData = ""; // This should ideally be fetched or imported data

const searchDisplay = document.createElement("div");
document.body.appendChild(searchDisplay);

const handleSearchPosts = (query) => {
  const searchQuery = query.trim().toLowerCase();

  if (searchQuery.length <= 1) {
    resetPosts();
    return;
  }

  let searchResults = postsData.filter(
    (post) =>
      post.categories.some((category) =>
        category.toLowerCase().includes(searchQuery)
      ) || post.title.toLowerCase().includes(searchQuery)
  );

  if (searchResults.length == 0) {
    searchDisplay.innerHTML = "No results found";
  } else if (searchResults.length == 1) {
    searchDisplay.innerHTML = `1 result found for your query: ${query}`;
  } else {
    searchDisplay.innerHTML = `${searchResults.length} results found for your query: ${query}`;
  }
};

const resetPosts = () => {
  searchDisplay.innerHTML = "";
};

const search = document.getElementById("search");

let debounceTimer;
const debounce = (callback, time) => {
  window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(callback, time);
};

search.addEventListener(
  "input",
  (event) => {
    const query = event.target.value;
    debounce(() => handleSearchPosts(query), 500);
  },
  false
);
