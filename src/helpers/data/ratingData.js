// import axios from 'axios';
// import apiKeys from '../apiKeys.json';

// const baseUrl = apiKeys.firebaseKeys.databaseURL;

// const getLooksByName = (id) => new Promise((resolve, reject) => {
//   axios.get(`${baseUrl}/ratings.json?orderBy="id"&equalTo="${id}"`)
//     .then((result) => {
//       const allRatingsObj = result.data;
//       const ratings = [];
//       if (allRatingsObj != null) {
//         Object.keys(allRatingsObj).forEach((ratingId) => {
//           const newRating = allRatingsObj[ratingId];
//           newRating.id = ratingId;
//           ratings.push(newRating);
//         });
//       }
//       resolve(ratings);
//     })
//     .catch((err) => {
//       reject(err);
//     });
// });

// export default { getLooksByName };
