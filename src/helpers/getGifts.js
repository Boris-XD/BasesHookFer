export const getGifs = async (name) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    name
  )}&limit=6&api_key=sksC5b2Uf1tb5DvPpVM8WQJrbVnO3jgW`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gift = data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      url: item.images?.downsized_medium.url,
    };
  });
  return gift;
};
