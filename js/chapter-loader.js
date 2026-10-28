import { chapters } from "../data/chapters.js";

export function loadChapter(chapterId) {
    // Ensure chapters is a valid array before attempting to search
    if (!Array.isArray(chapters)) {
        throw new Error("Chapter data is not available or invalid.");
    }

    // Optional: Normalize chapterId to string for robust matching if IDs can be numbers or strings
    const chapter = chapters.find(
        c => String(c.id) === String(chapterId)
    );

    if (!chapter) {
        throw new Error(`Chapter with ID "${chapterId}" not found.`);
    }

    return chapter;
}