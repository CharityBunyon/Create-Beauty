import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;


const getStepsByLookId = (id) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/steps.json?orderBy="lookId"&equalTo="${id}"`)
    .then((result) => {
      const allRatingsObj = result.data;
      const ratings = [];
      if (allRatingsObj != null) {
        Object.keys(allRatingsObj).forEach((ratingId) => {
          const newRating = allRatingsObj[ratingId];
          newRating.id = ratingId;
          ratings.push(newRating);
        });
      }
      resolve(ratings);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getStepsByLookId };
