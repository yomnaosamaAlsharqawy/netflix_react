const APIURL = "http://localhost:8000/api/accounts/"
const accountApi = {
    getStarted: async function(email){
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(email)
        };
        const res = await fetch(APIURL+"user-check/", requestOptions);
        const data = await res.json();
        return data;
    },
    accountDetails: async function(id) {
        const res = await fetch(APIURL+`${id}/`);
        const data = await res.json();
        return data;
    },
    login: async function (user){
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        };
        const res = await fetch(APIURL+"login/", requestOptions);
        const data = await res.json();
        return data;
    }
}
export default accountApi;