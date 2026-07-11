/**
 * Firebase 설정 및 초기화
 * ✅ Firebase Console → 프로젝트 설정 → 내 앱 → firebaseConfig 값을 아래에 입력하세요
 */
const firebaseConfig = {
  apiKey:            "AIzaSyBQhubH2ol5Y2KeQYLLOTcxhFAjs7qjEUw",
  authDomain:        "cheonkinuseov3.firebaseapp.com",
  projectId:         "cheonkinuseov3",
  storageBucket:     "cheonkinuseov3.firebasestorage.app",
  messagingSenderId: "5735067888",
  appId:             "1:5735067888:web:42e55620fcb9aeece71235",
  measurementId:     "G-31M9L054CD"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);

// Auth & Firestore 인스턴스
const auth = firebase.auth();
const db   = firebase.firestore();

// Google 로그인 프로바이더 (항상 계정 선택 팝업 표시)
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
