import Axios from 'axios';

export default {
    submitEmail(email) {
        var config = {
            method: 'post',
            url: `https://v1.nocodeapi.com/dealz/google_sheets/PknBzwtdMILuyQcz?tabId=Sheet1`,
            data: [[''], [email]],
        };
        return Axios(config);
    }
}