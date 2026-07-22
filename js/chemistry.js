import { chapters } from "../data/chapters.js";

const container = document.getElementById("chapterContainer");

chapters.forEach(chapter => {

    container.innerHTML += `

    <div class="chapter-card">

        <h2>${chapter.emoji} ${chapter.title}</h2>

        <a
            href="${chapter.page}?id=${chapter.id}"
            class="chapter-btn">

            Explore

        </a>

    </div>

    `;

});