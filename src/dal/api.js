import axios from "axios";

export const tryCatch = async (f) => {
    try {
        const response = await f();
        console.log('answer: ', response.data);
        return response;
    } catch (e) {
        console.log('error: ', {...e});
        return 'error';
    }
    ;
}

const instance = axios.create(
    {baseURL: 'https://neko-cafe-back.herokuapp.com/auth/'}
)
export const api = {
    fun(success) {
        return instance.post( 'test', {success: success})
            .then(res => (res)
            )
    }
}

