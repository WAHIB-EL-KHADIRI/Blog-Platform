# Firebase + Firestore setup

1. Create Firebase project at https://console.firebase.google.com/
2. Enable Firestore database (start in Test mode for dev).
3. Add web app and copy config into `frontend/firebaseConfig.js`.
4. Use `firebase` SDK or `firebase-admin` on the server to read/write posts.

Example client usage:

```js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const app = initializeApp({ /* config */ });
const db = getFirestore(app);
```
