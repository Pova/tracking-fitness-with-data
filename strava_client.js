// This maintains privacy of sensitive tokens
require('dotenv').config()

// All environment variables should be stored in a .env file 
// Adding it to your .gitignore prevents it from being committed to your repository

class StravaClient {

    constructor (){
        this.BASE_URL = 'https://www.strava.com/api/v3'
        this.CLIENT_ID = process.env.CLIENT_ID;
        this.CLIENT_SECRET = process.env.CLIENT_SECRET;
        this.REFRESH_TOKEN = process.env.REFRESH_TOKEN;
        this.ACCESS_TOKEN = '';  
    } 

    // Function to refresh the token 
    async refreshToken (){
        try {
            // Set the headers
            const headers = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
            // Set the body
            const body = JSON.stringify({
                client_id: this.CLIENT_ID,
                client_secret: this.CLIENT_SECRET,
                refresh_token: this.REFRESH_TOKEN,
                grant_type: 'refresh_token',
            })
            // Make the request
            const reauthorizeResponse = await fetch('https://www.strava.com/oauth/token', {
                method: 'post',
                "headers": headers,
                "body": body
            })

            if (reauthorizeResponse.ok){            
                const reAuthJson = await reauthorizeResponse.json()
                this.ACCESS_TOKEN = reAuthJson.access_token
                console.log('refreshed token')
            } else {
                console.log ('could not refresh token')
            }
        }  catch (e) {
            console.log('could not refresh token')
            console.log(e)
        }
    }

    // Function to get activities
    async getActivies (){
        const url = this.BASE_URL + '/athlete/activities'
        // Add the access token to the headers
        const headers = {
            'Authorization': 'Bearer ' + this.ACCESS_TOKEN
        }
        // Make the request
        const resp = await fetch(url, { headers })
        const data = await resp.json()
        console.log(data)
    }

}

async function main(){
    const stravaClient = new StravaClient();
    await stravaClient.refreshToken()
    await stravaClient.getActivies()
}

main()
