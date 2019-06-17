
const ACCESS_KEY = '168eb43a3570e51adb0dcfb7bcfeace81c074043fad4c97e2e3c72a194c4c5d3';
const QUERY_INPUT = 'cat';

type images = {
    width: number,
    height: number,
    description: string,
    links: {}
}
const imageApi = {
    fetchImages() {
        return fetch(`https://api.unsplash.com/photos/search?page=1&client_id=${ACCESS_KEY}&query=${QUERY_INPUT}`)
        .then(res => res.json())
        .catch(error => { throw new Error() } );
    }
}

export default imageApi