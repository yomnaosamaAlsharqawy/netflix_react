const APIURL = "http://localhost:8000/api/accounts/";
const accountApi = {
  getStarted: async function (bodyObj) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyObj),
    };
    const res = await fetch(APIURL + "user-check/", requestOptions);
    const data = await res.json();
    return [data, res.status];
  },
  accountDetails: async function (id) {
    const res = await fetch(APIURL + `${id}/`);
    const data = await res.json();
    return data;
  },
  login: async function (bodyObj) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyObj),
    };
    const res = await fetch(APIURL + "login/", requestOptions);
    const data = await res.json();
    return data;
  },
  register: async function (bodyObj) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyObj),
    };
    const res = await fetch(APIURL + "register/step1/", requestOptions);
    const data = await res.json();
    return [data, res.status];
  },
  registerPlan: async function(bodyObj) {
    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyObj),
    };
    const res = await fetch(APIURL + "register/step2/", requestOptions);
    const data = await res.json();
    return [data, res.status];
  },
  registerPhoneNumber: async function(bodyObj) {
    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyObj),
    };
    const res = await fetch(APIURL + "register/step3/", requestOptions);
    const data = await res.json();
    return [data, res.status];
  },
  getPlans: async function () {
    const res = await fetch(APIURL + "plans/");
    const data = await res.json();
    return data;
  },
};

export default accountApi;
