import EncryptedStorage from 'react-native-encrypted-storage';

// saves key value pair to secure storage
export async function saveItemToSecureStorage(key, value) {
  await EncryptedStorage.setItem(key, value);
}

// deletes item from secure storage
export async function deleteItemFromSecureStorage(key) {
  await EncryptedStorage.removeItem(key);
}

// returns item from secure storage
export async function getItemFromSecureStorage(key) {
  let value = await EncryptedStorage.getItem(key);
  return value;
}

// deletes all entries from the secure storage
export async function flushSecureStorage() {
  await deleteItemFromSecureStorage('username');
  await deleteItemFromSecureStorage('password');
  await deleteItemFromSecureStorage('loginToken');
}
