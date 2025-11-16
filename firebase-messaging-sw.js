importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBTITgeHnkkL6wJVMq4OE_LHJMDuA8_3ho",
  authDomain: "ssss-f0f3c.firebaseapp.com",
  projectId: "ssss-f0f3c",
  storageBucket: "ssss-f0f3c.firebasestorage.app",
  messagingSenderId: "216606777782",
  appId: "1:216606777782:web:d12657df0c63e46c53a117"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: "/icon.png"
    });
});
