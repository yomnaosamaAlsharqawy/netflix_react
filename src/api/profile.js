const BASE_URL = "http://localhost:8000/";
const PROFILES_BASE_URL = "api/accounts/profiles/";

const profileApi = {
  login: async function (profile) {
    const acc = localStorage.getItem("account");
    const account = JSON.parse(acc);
    const ACCOUNT_ID = account.id;

    let PROFILE_ID = localStorage.getItem("profileId");

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    };
    const res = await fetch(
      BASE_URL + PROFILES_BASE_URL + `${PROFILE_ID}/login/`,
      requestOptions
    );
    const data = await res.json();
    return data;
  },

  getProfiles: async function () {

    const acc = localStorage.getItem("account");
    const account = JSON.parse(acc);
    const ACCOUNT_ID = account.id;

    const GET_PROFILES_API_URL = `api/accounts/${ACCOUNT_ID}/profiles/`;
    const URL = BASE_URL + GET_PROFILES_API_URL;

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await fetch(URL, requestOptions);
    const data = await res.json();
    return data;
  },

  getImages: async function () {
    const URL = BASE_URL + PROFILES_BASE_URL + "images/";

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await fetch(URL, requestOptions);
    const data = await res.json();
    return data;
  },

  createProfile: async function (profile) {
    const URL = BASE_URL + PROFILES_BASE_URL + "new/";

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    };

    const res = await fetch(URL, requestOptions);
    const data = await res.json();
    return [data, res.status];
  },

  getOneProfile: async function () {
    const PROFILE_ID = localStorage.getItem("profileId");
    const URL = BASE_URL + PROFILES_BASE_URL + `${PROFILE_ID}/`;

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await fetch(URL, requestOptions);
    const data = await res.json();
    return [data, res.status];
  },

  updateProfile: async function (profile) {
    const acc = localStorage.getItem("account");
    const account = JSON.parse(acc);
    const ACCOUNT_ID = account.id;

    let PROFILE_ID = localStorage.getItem("profileId");

    const URL = BASE_URL + PROFILES_BASE_URL + `${PROFILE_ID}/`;

    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    };

    const res = await fetch(URL, requestOptions);
    const data = await res.json();
    return [data, res.status];
  },

  deleteProfile: async function () {
    const acc = localStorage.getItem("account");
    const account = JSON.parse(acc);
    const ACCOUNT_ID = account.id;

    let PROFILE_ID = localStorage.getItem("profileId");

    const URL = BASE_URL + PROFILES_BASE_URL + `${PROFILE_ID}/`;

    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await fetch(URL, requestOptions);
    return res.status;
  },
};

export default profileApi;
