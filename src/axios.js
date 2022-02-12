import axios from 'axios';

const instance= axios.create({
    baseURL: 'https://us-central1-clone-ec9c4.cloudfunctions.net/api',
    
    //The API (cloud function) URL
});

export default  instance;

//'https://us-central1-clone-ec9c4.cloudfunctions.net/api'
//'http://localhost:5001/clone-ec9c4/us-central1/api',