export const getGifs = async(category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=wQbfKsfJaV97q7c7GpWATAOVuCnhCOu1&q=${category}&limit=10`
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    const gifs = data.map(img =>({
        id: img.id,
        url: img.images.fixed_height.url,
        title: img.title,
        description: img.description
    }))
    return gifs 
}