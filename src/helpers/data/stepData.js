import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;


const getStepsByLookId = (id) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/steps.json?orderBy="lookId"&equalTo="${id}"`)
    .then((result) => {
      const allStepsObj = result.data;
      const steps = [];
      if (allStepsObj != null) {
        Object.keys(allStepsObj).forEach((stepId) => {
          const newSteps = allStepsObj[stepId];
          newSteps.id = stepId;
          steps.push(newSteps);
        });
      }
      resolve(steps);
    })
    .catch((err) => {
      reject(err);
    });
});

const saveSteps = (listOfSteps) => axios.post(`${baseUrl}/steps.json`, listOfSteps);

export default { getStepsByLookId, saveSteps };
