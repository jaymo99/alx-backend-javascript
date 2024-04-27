import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);

  const newArr = [];
  return Promise.allSettled([signUp, upload]).then((results) => {
    results.map(({ status, value, reason }) => (
      newArr.push({
        status,
        value: status === 'rejected' ? reason.toString() : value,
      })
    ));
    return newArr;
  });
}
