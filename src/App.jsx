import { Route, Routes } from "react-router-dom";
import { Header } from "./Components";
import {
  About,
  Admins,
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
        <AnimatePresence exitBeforeEnter>
          <div className="w-screen h-auto flex flex-col bg-gray-300">
            <Header />
            <main className="mt-16 md:mt-24 p-8 w-full">
              <Routes>
                <Route path="/*" element={<MainContainer />} />
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/createItem" element={<CreateContainer />} />
                <Route path="/admins" element={<Admins />} />
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
