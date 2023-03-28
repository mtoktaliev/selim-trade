const SELIM_ROOT = 'http://161.35.29.179:8085/';
const SELIM_NEWS = 'news';

export const getApiResource = () => {
    fetch(SELIM_ROOT+SELIM_NEWS)
        .then(res => res.json())
        .then(body => console.log(body))
}