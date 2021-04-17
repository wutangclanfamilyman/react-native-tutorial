export class Http {

    static HEADEARS = {'Content-Type': 'application/json'}

    static async get(url) {
        try {
            return await request(url, 'GET')
        } catch (err) {
            console.log(err);
            throw err;
        }
        
    }

    static async post(url, data = {}) {
        try {
            return await request(url, 'POST', data)
        } catch (err) {
            console.log(err);
            throw err;
        }
    } 

    static async delete(url) {
        try {
            return await request(url, 'DELETE')
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    static async patch(url, data = {}) {
        try {
            return await request(url, 'PATCH', data)
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}

async function request(url, method = 'GET', data) {

    const config = {
        method,
        headers: Http.HEADEARS
    }

    if(method === 'POST' || method === 'PATCH') {
        config.body = JSON.stringify(data)
    }

    const response = await fetch(url, config)

    return response.json();
}