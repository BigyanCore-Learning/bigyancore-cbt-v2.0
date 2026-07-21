export async function loadChapter(chapterId){

    const response = await fetch(
        `data/chapters/${chapterId}.json`
    );

    if(!response.ok){

        throw new Error("Chapter not found");

    }

    return await response.json();

}