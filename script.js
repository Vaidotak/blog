document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/funkcijos.wordpress.com/posts/?number=100';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (!data.posts) {
                console.error('Nerasta įrašų.');
                return;
            }

            const posts = data.posts;
            const postsContainer = document.getElementById("posts");

            // Sort posts by date (newest first)
            posts.sort((a, b) => new Date(b.date) - new Date(a.date));

            posts.forEach(post => {
                const article = document.createElement("article");

                const title = document.createElement("h2");
                title.textContent = post.title;
                article.appendChild(title);

                const date = document.createElement("p");
                date.textContent = new Date(post.date).toLocaleDateString("lt-LT");
                date.className = "date";
                article.appendChild(date);

                const content = document.createElement("div");
                content.className = "content";
                content.innerHTML = post.content;
                article.appendChild(content);

                // Highlight code syntax
                content.querySelectorAll('pre code').forEach(block => {
                    hljs.highlightBlock(block);
                });

                const readMore = document.createElement("span");
                readMore.textContent = "Skaityti plačiau";
                readMore.className = "read-more";
                readMore.addEventListener("click", function() {
                    article.classList.toggle("expanded");
                    readMore.textContent = article.classList.contains("expanded") ? "Skaityti mažiau" : "Skaityti plačiau";
                });
                article.appendChild(readMore);

                postsContainer.insertBefore(article, postsContainer.firstChild);
            });
        })
        .catch(error => console.error('Klaida gaunant įrašus:', error));
});
