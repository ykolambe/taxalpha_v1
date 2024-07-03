import axios from 'axios';
// import { serviceUserJwt } from './serviceConfig';

export async function userLogin(payload) {
  let uploadResponse = {};
  try {
    const url = process.env.REACT_APP_BACKEND_URL + '/user/login';
    await axios
      .post(url, payload, {
        headers: {
          'Content-Type': 'application/json',
          // Authorization: serviceUserJwt,
        },
      })
      .then((response) => {
        uploadResponse = response;
      });
  } catch (ex) {
    console.log('Error', ex.message);
    uploadResponse.error = ex.response.data;
  }
  return uploadResponse;
}

export async function getCategories() {
  let getDoctypeResponse = [];
  try {
    const url = process.env.REACT_APP_BACKEND_URL + '/category';

    await axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          //   Authorization: 'Bearer ' + data.token,
        },
      })
      .then((response) => {
        getDoctypeResponse = response;
        console.log(getDoctypeResponse);
      });
  } catch (ex) {
    console.log('Error in getDoctype.js getDoctype()', ex.message);
  }

  return getDoctypeResponse;
}
export async function getPlans(keyword) {
  let getDoctypeResponse = [];
  try {
    let url = process.env.REACT_APP_BACKEND_URL + '/plan';
    if (keyword) url = url + '?title=' + keyword;
    await axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          //   Authorization: 'Bearer ' + data.token,
        },
      })
      .then((response) => {
        getDoctypeResponse = response;
        console.log(getDoctypeResponse);
      });
  } catch (ex) {
    console.log('Error in getDoctype.js getDoctype()', ex.message);
  }

  return getDoctypeResponse;
}
export async function getCategoryById(id) {
  let getDoctypeResponse = [];
  try {
    const url = process.env.REACT_APP_BACKEND_URL + '/category/' + id;

    await axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          //   Authorization: 'Bearer ' + data.token,
        },
      })
      .then((response) => {
        getDoctypeResponse = response;
        console.log(getDoctypeResponse);
      });
  } catch (ex) {
    console.log('Error in getDoctype.js getDoctype()', ex.message);
  }

  return getDoctypeResponse;
}

export async function getAggCount() {
  let getDoctypeResponse = [];
  try {
    const url = process.env.REACT_APP_BACKEND_URL + '/dashboard/aggregatedCount/';

    await axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          //   Authorization: 'Bearer ' + data.token,
        },
      })
      .then((response) => {
        getDoctypeResponse = response;
        console.log(getDoctypeResponse);
      });
  } catch (ex) {
    console.log('Error in getDoctype.js getDoctype()', ex.message);
  }

  return getDoctypeResponse;
}

export async function updateCat(payload) {
  let uploadResponse = {};
  try {
    const url = process.env.REACT_APP_BACKEND_URL + '/category/' + payload._id;
    await axios
      .patch(url, payload, {
        headers: {
          'Content-Type': 'application/json',
          // Authorization: serviceUserJwt,
        },
      })
      .then((response) => {
        uploadResponse = response;
      });
  } catch (ex) {
    console.log('Error', ex.message);
    uploadResponse.error = ex.response.data;
  }
  return uploadResponse;
}
export async function createCat(payload) {
  let uploadResponse = {};
  try {
    const url = process.env.REACT_APP_BACKEND_URL + '/category';
    await axios
      .post(url, payload, {
        headers: {
          'Content-Type': 'application/json',
          // Authorization: serviceUserJwt,
        },
      })
      .then((response) => {
        uploadResponse = response;
      });
  } catch (ex) {
    console.log('Error', ex.message);
    uploadResponse.error = ex.response.data;
  }
  return uploadResponse;
}
export async function deleteCat(payload) {
  let uploadResponse = {};
  try {
    const url = process.env.REACT_APP_BACKEND_URL + '/category/' + payload._id;
    await axios
      .delete(url, payload, {
        headers: {
          'Content-Type': 'application/json',
          // Authorization: serviceUserJwt,
        },
      })
      .then((response) => {
        uploadResponse = response;
      });
  } catch (ex) {
    console.log('Error', ex.message);
    uploadResponse.error = ex.response.data;
  }
  return uploadResponse;
}

export async function updatePlan(payload) {
  let uploadResponse = {};
  try {
    const url = process.env.REACT_APP_BACKEND_URL + '/plan/' + payload._id;
    await axios
      .patch(url, payload, {
        headers: {
          'Content-Type': 'application/json',
          // Authorization: serviceUserJwt,
        },
      })
      .then((response) => {
        uploadResponse = response;
      });
  } catch (ex) {
    console.log('Error', ex.message);
    uploadResponse.error = ex.response.data;
  }
  return uploadResponse;
}
export async function createPlan(payload) {
  let uploadResponse = {};
  try {
    const url = process.env.REACT_APP_BACKEND_URL + '/plan';
    await axios
      .post(url, payload, {
        headers: {
          'Content-Type': 'application/json',
          // Authorization: serviceUserJwt,
        },
      })
      .then((response) => {
        uploadResponse = response;
      });
  } catch (ex) {
    console.log('Error', ex.message);
    uploadResponse.error = ex.response.data;
  }
  return uploadResponse;
}
export async function deletePlan(payload) {
  let uploadResponse = {};
  try {
    const url = process.env.REACT_APP_BACKEND_URL + '/plan/' + payload._id;
    await axios
      .delete(url, payload, {
        headers: {
          'Content-Type': 'application/json',
          // Authorization: serviceUserJwt,
        },
      })
      .then((response) => {
        uploadResponse = response;
      });
  } catch (ex) {
    console.log('Error', ex.message);
    uploadResponse.error = ex.response.data;
  }
  return uploadResponse;
}
