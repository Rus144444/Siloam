import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import css from "./App.module.css";

function App({ store, dispatch }) {
  return (
    <BrowserRouter>
      <div className={css.wrapper}>
        <Header />
        <Navbar />
        <div>
          <Routes>
            <Route
              path="/profile"
              element={<Profile posts={store.profile} dispatch={dispatch} />}
            />
            <Route
              path="/dialogs"
              element={<Dialogs dialogs={store.dialogs} dispatch={dispatch} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
