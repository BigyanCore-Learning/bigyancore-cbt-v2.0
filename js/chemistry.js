import { chapters } from "../data/chapters.js";

const container = document.getElementById("chapterContainer");

if (!container) {
    console.warn("Element with ID 'chapterContainer' not found on this page.");
} else if (!Array.isArray(chapters) || chapters.length === 0) {
    container.innerHTML = "<p>No chapters available at the moment.</p>";
} else {
    // Build the HTML string efficiently in memory before updating the DOM once
    let htmlContent = "";

    chapters.forEach(chapter => {
        const emoji = chapter.emoji || "📚";
        const title = chapter.title || "Untitled Chapter";
        const page = chapter.page || "chapter.html";
        const id = chapter.id || "";

        htmlContent += `
        <div class="chapter-card">
            <h2>${emoji} ${title}</h2>
            <a href="${page}?id=${id}" class="chapter-btn">
                Explore
            </a>
        </div>
        `;
    });

    container.innerHTML = htmlContent;
}