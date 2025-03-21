import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { NavigationProvider, useNavigation } from "./contexts";

const MainContent: React.FC = () => {
  const { menuOpen } = useNavigation();
  return (
    <main className={`flex-grow-1 ${menuOpen ? "blur" : ""}`}>
      <Outlet />
    </main>
  )
}

const App: React.FC = () => {
  return (
      <NavigationProvider>
        <div className="flex-grow-1">
          <div className="d-flex flex-column min-vh-100 custom-page-margin">
            <Header />
            <main className="flex-grow-1">
              <MainContent />
            </main>
            <Footer />
          </div>
        </div>
      </NavigationProvider>
  );
}

export default App;
