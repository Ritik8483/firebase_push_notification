importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyDv6HzyigzyRpukzRUCJ-_72yIH2kc-vJY",
    authDomain: "pushnotify-b015c.firebaseapp.com",
    projectId: "pushnotify-b015c",
    storageBucket: "pushnotify-b015c.appspot.com",
    messagingSenderId: "400227584339",
    appId: "1:400227584339:web:e559deb1be563e4ab839a6",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});