import { chapters } from "../data/chapters.js";

export function loadChapter(chapterId) {

    const chapter = chapters.find(
        c => c.id === chapterId
    );

    if (!chapter) {

        throw new Error("Chapter not found");

    }

    return chapter;

}