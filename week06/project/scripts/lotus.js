
document.getElementById('currentyear').innerHTML = new Date().getFullYear()

document.getElementById('lastmodified').innerHTML += new Date(document.lastModified).toLocaleString()


const RSS_FEEDS = {
    topStories: 'https://abcnews.go.com/abcnews/topstories',
    us: 'https://abcnews.go.com/abcnews/usheadlines',
    politics: 'https://abcnews.go.com/abcnews/politicsheadlines',
    sports: 'https://abcnews.go.com/abcnews/sportsheadlines',
    money: ' https://abcnews.go.com/abcnews/moneyheadlines',
    health: 'https://abcnews.go.com/abcnews/healthheadlines',
    entertainment: 'https://abcnews.go.com/abcnews/entertainmentheadlines',
    technology: 'https://abcnews.go.com/abcnews/technologyheadlines'


};

async function fetchRSSFeed(category) {
    const RSS_FEED_URL = RSS_FEEDS[category] || RSS_FEEDS["topStories"]; // Default to "Top Stories" if category is invalid
   
    try {
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(RSS_FEED_URL)}`);
        const data = await response.json();
        const parser = new DOMParser();
        const xml = parser.parseFromString(data.contents, "text/xml");

        const items = xml.querySelectorAll("item");
        const rssFeedContainer = document.getElementById("rss-feed");
        rssFeedContainer.innerHTML = ""; // Clear existing content

        items.forEach(item => {
            const title = item.querySelector("title").textContent;
            const link = item.querySelector("link").textContent;
            const description = item.querySelector("description").textContent;
            const pubDate = item.querySelector('pubDate').textContent
            

            // Extract image URL from <media:content> or <enclosure>
            let imageUrl = "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_4x3t_384.jpg"; // Default image
            const mediaContent = item.querySelector("media\\:thumbnail")
            if (mediaContent) {
                imageUrl = mediaContent.getAttribute("url");
            }


            // Create card elements dynamically
            const newsCard = document.createElement("a");
            newsCard.href = link;
            newsCard.target = "_blank";
            newsCard.classList.add("news-card");

            const image = document.createElement("img");
          /*   image.src = imageUrl;
            image.alt = "News Image"; */
            
            image.setAttribute("src", imageUrl)
            image.setAttribute("alt", 'News Image');
            image.setAttribute("loading", "lazy");

          
          
            const contentDiv = document.createElement("div");
            contentDiv.classList.add("news-card-content");

            const titleElement = document.createElement("h2");
            titleElement.textContent = title;

            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = description;
            const dateElement = document.createElement("p");
            dateElement.innerHTML = `<strong>${pubDate}</strong>`
            

            // Append elements to card
            contentDiv.appendChild(titleElement);
            contentDiv.appendChild(descriptionElement);
            contentDiv.appendChild(dateElement);
            newsCard.appendChild(image);
            newsCard.appendChild(contentDiv);

            // Append card to the feed container
            rssFeedContainer.appendChild(newsCard);
        });

    } catch (error) {
        console.error("Error fetching RSS feed:", error);
    }
}

// Load the feed when the page loads
document.addEventListener("DOMContentLoaded", () => fetchRSSFeed("world"));


document.querySelectorAll(".category").forEach(nav => {
    nav.addEventListener("click", () => {
        const category = nav.getAttribute("data-category");
        fetchRSSFeed(category);
    });
});
















