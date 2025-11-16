
// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTITgeHnkkL6wJVMq4OE_LHJMDuA8_3ho",
  authDomain: "ssss-f0f3c.firebaseapp.com",
  projectId: "ssss-f0f3c",
  storageBucket: "ssss-f0f3c.firebasestorage.app",
  messagingSenderId: "216606777782",
  appId: "1:216606777782:web:d12657df0c63e46c53a117",
  measurementId: "G-PFF7HFMM7C"
};

// Initialize the Firebase app in the service worker with the provided config
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "https://picsum.photos/192"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
