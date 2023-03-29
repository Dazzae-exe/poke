import { RecoilRoot } from "recoil";
import "./assets/css/App.css";
import MainContent from "./components/layoutComponents/MainContent";
import RootLayout from "./layout/RootLayout";

function App() {

  return (
    <RecoilRoot>
      <RootLayout content={<MainContent />} />
    </RecoilRoot>
  )
}

export default App
