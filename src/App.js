import { Router } from "./router/Router";

import "./styles.css";

const user = {
  imageUrl: "https://picsum.photos/id/237/200/300",
  name: "あああ",
  email: "12345@examaple.com",
  tel: "090-000-111",
  company: {
    name: "テスト株式会社"
  },
  url: "https://google.com"
};

export default function App() {
  return <Router />;
}
