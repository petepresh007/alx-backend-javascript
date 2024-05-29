import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let response = {};

  try {
    const pics = await uploadPhoto();
    const user = await createUser();
    response = { photo: pics, user };
  } catch (err) {
    response = { photo: null, user: null };
  }
  return response;
}
