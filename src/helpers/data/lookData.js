import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getLooksByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/looks.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const allLooksObj = result.data;
      const looks = [];
      if (allLooksObj != null) {
        Object.keys(allLooksObj).forEach((lookId) => {
          const newLook = allLooksObj[lookId];
          newLook.id = lookId;
          looks.push(newLook);
        });
      }
      resolve(looks);
    })
    .catch((err) => {
      reject(err);
    });
});

const getSingleLook = (lookId) => axios.get(`${baseUrl}/looks/${lookId}.json`);

const saveLook = (lookInfo) => axios.post(`${baseUrl}/looks.json`, lookInfo);

const updateLook = (lookId, newLookInfo) => axios.put(`${baseUrl}/looks/${lookId}.json`, newLookInfo);

const deleteLook = (lookId) => axios.delete(`${baseUrl}/looks/${lookId}.json`);

export default {
  getLooksByUid,
  getSingleLook,
  saveLook,
  updateLook,
  deleteLook,
};
