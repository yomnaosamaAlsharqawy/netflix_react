const PROFILE_ID = 1
const ACCOUNT_ID = 2

const BASE_URL = "http://localhost:8000/"
const PROFILES_API_URL = `api/accounts/profiles/${PROFILE_ID}/`
const GET_PROFILES_API_URL = `api/accounts/${ACCOUNT_ID}/profiles/`
const GET_IMAGES_API_URL = `api/accounts/profiles/images/`

const profileApi = {

    login: async function (profile){
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile)
        };
        const res = await fetch(BASE_URL+PROFILES_API_URL+"login/", requestOptions);
        const data = await res.json();
        return data;
    },

    getProfiles: async function (){
        
        const URL = BASE_URL+GET_PROFILES_API_URL
        
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        
        const res = await fetch(URL, requestOptions);
        const data = await res.json();
        return data;
    },

    getImages: async function (){
        const URL = BASE_URL+GET_IMAGES_API_URL
        
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        
        const res = await fetch(URL, requestOptions);
        const data = await res.json();
        return data;
    },

}

export default profileApi;