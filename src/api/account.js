const APIURL = "http://localhost:8000/api/accounts/"
const accountApi = {
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