export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=i8UtOr6CHT0YN0TsqhqBERxdK0qfdhJT&limit=9&q=${category}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
}