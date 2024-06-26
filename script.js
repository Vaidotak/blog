document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/funkcijos.wordpress.com/posts/?number=100';
    const readmeUrl = 'https://raw.githubusercontent.com/Vaidotak/blog/main/orai/README.md';
    const scriptUrl = 'https://raw.githubusercontent.com/Vaidotak/blog/main/orai/orai.sh';

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

            // Add README.md content
            fetch(readmeUrl)
                .then(response => response.text())
                .then(readmeContent => {
                    const readmeArticle = document.createElement("article");

                    const readmeTitle = document.createElement("h2");
                    readmeTitle.textContent = "README.md Turinio Apžvalga";
                    readmeArticle.appendChild(readmeTitle);

                    const readmeDate = document.createElement("p");
                    readmeDate.textContent = new Date().toLocaleDateString("lt-LT");
                    readmeDate.className = "date";
                    readmeArticle.appendChild(readmeDate);

                    const readmeContentDiv = document.createElement("div");
                    readmeContentDiv.className = "content";
                    readmeContentDiv.innerHTML = `<pre><code class="markdown">${marked(readmeContent)}</code></pre>`;
                    readmeArticle.appendChild(readmeContentDiv);

                    // Highlight code syntax
                    readmeContentDiv.querySelectorAll('pre code').forEach(block => {
                        hljs.highlightBlock(block);
                    });

                    postsContainer.insertBefore(readmeArticle, postsContainer.firstChild);

                    // Add orai.sh content under README.md
                    fetch(scriptUrl)
                        .then(response => response.text())
                        .then(scriptContent => {
                            const scriptContentDiv = document.createElement("div");
                            scriptContentDiv.className = "content";
                            scriptContentDiv.innerHTML = `<pre><code class="bash">${scriptContent}</code></pre>`;
                            readmeArticle.appendChild(scriptContentDiv);

                            // Highlight code syntax
                            scriptContentDiv.querySelectorAll('pre code').forEach(block => {
                                hljs.highlightBlock(block);
                            });
                        })
                        .catch(error => console.error('Klaida gaunant skriptą:', error));
                })
                .catch(error => console.error('Klaida gaunant README.md:', error));
        })
        .catch(error => console.error('Klaida gaunant įrašus:', error));
});
