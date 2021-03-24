import api from './api'

export const getAll = () => {
    return fetch(api.posts)
        .then(result => result.json())
        .catch(err => console.log('Handled error: ' + err));
};