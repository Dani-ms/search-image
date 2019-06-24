
const ACCESS_KEY = '168eb43a3570e51adb0dcfb7bcfeace81c074043fad4c97e2e3c72a194c4c5d3';


export type Image = {
    urls: {
        small: string
    },
    description: string
}
const imageApi =  {
    fetchImages(search:string) : Promise<Image[]> {
        return fetch(`https://api.unsplash.com/photos/search?page=2&client_id=${ACCESS_KEY}&query=${search}`)
        .then(res => res.json())
    }
}

export default imageApi