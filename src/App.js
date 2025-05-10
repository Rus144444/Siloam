import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import css from "./App.module.css";

function App({
  store,
  addPost,
  addMessage,
  onNewPostChange,
  onNewMessageChange,
}) {
  //   if (!store || !store.profile || !store.profile.posts) {
  //     return <div>Loading...</div>;
  //   }
  return (
    <BrowserRouter>
      <div className={css.wrapper}>
        <Header />
        <Navbar />
        <div>
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  posts={store.profile}
                  addPost={addPost}
                  onNewPostChange={onNewPostChange}
                />
              }
            />
            <Route
              path="/dialogs"
              element={
                <Dialogs
                  dialogs={store.dialogs}
                  addMessage={addMessage}
                  onNewMessageChange={onNewMessageChange}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
