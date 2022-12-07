import "./App.css";
import { useEffect } from "react";
// import { getMessaging, ngetToken } from "firebase/messaging";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";

function App() {
  // const messaging = getMessaging();
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey:
          "BE9vaK5ToVyP1i1zi811orfOE-RPtGKV4HsemON3LptvUAjUpNm8nzV4ZvZMTlq9HATR6oTUIi5Ip6IgsaklNlw",
      });
      console.log("token", token);
    } else if (permission === "denied") {
      alert("DEnied Permission");
    }
  }
  useEffect(() => {
    requestPermission();
  }, []);
  return <div className="App">Push notification with FIREBASE</div>;
}

export default App;
