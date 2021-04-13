const profileId = localStorage.getItem("profileId");
const acc = localStorage.getItem("account");
const account = acc ? JSON.parse(acc) : null;

const PROFILE_ID = profileId ? profileId : "";
const ACCOUNT_ID = account ? account.id : "";

const BASE_URL = "http://localhost:8000/"
const PROFILES_BASE_URL = "api/accounts/profiles/"
const GET_PROFILES_API_URL = `api/accounts/${ACCOUNT_ID}/profiles/`

const profileApi = {

    login: async function (profile){
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile)
        };
        const res = await fetch(BASE_URL+PROFILES_BASE_URL+`${PROFILE_ID}/login/`, requestOptions);
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
        const URL = BASE_URL+PROFILES_BASE_URL+"images/"
        
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

    createProfile: async function (profile){
        const URL = BASE_URL+PROFILES_BASE_URL+"new/"
        
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile)
        };
        
        const res = await fetch(URL, requestOptions);
        const data = await res.json();
        return [data, res.status];
    },

    getOneProfile: async function (){
        const URL = BASE_URL+PROFILES_BASE_URL+`${PROFILE_ID}/`
        
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        };
        
        const res = await fetch(URL, requestOptions);
        const data = await res.json();
        return data;
    },

    updateProfile: async function (profile){
        const URL = BASE_URL+PROFILES_BASE_URL+`${PROFILE_ID}/`
        
        const requestOptions = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile)
        };
        
        const res = await fetch(URL, requestOptions);
        const data = await res.json();
        return [data, res.status];
    },

    deleteProfile: async function (){
        const URL = BASE_URL+PROFILES_BASE_URL+`${PROFILE_ID}/`
        
        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        };
        
        const res = await fetch(URL, requestOptions);
        return res.status;
    },

}

export default profileApi;