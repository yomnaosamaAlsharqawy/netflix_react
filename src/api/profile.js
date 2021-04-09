const profile_id = 11
const APIURL = `http://localhost:8000/api/accounts/profiles/${profile_id}/`

const profileApi = {
    login: async function (profile){
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile)
        };
        const res = await fetch(APIURL+"login/", requestOptions);
        const data = await res.json();
        return data;
    }
}

export default profileApi;