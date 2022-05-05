import { Route, Routes } from "react-router-dom";
import { Header } from "./Components";
import {
  About,
  CreateContainer,
  Home,
  MainContainer,
  Menu,
  NotFoundPage,
  Service
} from "./Pages";
import { AnimatePresence } from 'framer-motion'
import { useAuthContext } from "./Hooks/useAuthContext";


function App() {
  const { authIsReady } = useAuthContext()
  return (<>
    {
      authIsReady && (
        <AnimatePresence>
          <div className="w-screen h-auto flex flex-col bg-slate-400">
            <Header />
            <main className="mt-24 p-8 w-full">
              <Routes>
                <Route path="/*" element={<MainContainer />} />
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/createItem" element={<CreateContainer />} />
                {/* <Route path="/menu" element={<Menu />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="*" element={<NotFoundPage />} /> */}
              </Routes>
            </main>
          </div>
        </AnimatePresence>
      )
    }
  </>
  );
}

export default App;
