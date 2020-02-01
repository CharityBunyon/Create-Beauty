import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;


const getCreators = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/collage.json`)
    .then((result) => {
      const allCreators = result.data;
      const creators = [];
      if (allCreators != null) {
        Object.keys(allCreators).forEach((creatorId) => {
          const newCreator = allCreators[creatorId];
          newCreator.id = creatorId;
          creators.push(newCreator);
        });
      }
      resolve(creators);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getCreators };
