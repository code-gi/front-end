import React from "react";
import navigationContext from "../../contexts/navigationsContext";
import navigations from "../../Data/navigation.json";
import posts from "../../Data/posts.json";
import useToggle from "../../Hooks/useToggle";
import BackToTop from "../Helpers/BackToTop";
import Drawer from "../Mobile/Drawer";
import Footer from "../Partials/Footers/Home/index";
import Header from "../Partials/Headers/Header";
import PopularNewsSection from "./PopularNewsSection";

function Home() {
  const navigationData = navigations.navigations;
  const editorPackSectionDatas = posts.posts;
  const popularNewsData = posts.posts;
  const [drawer, setDrawer] = useToggle(false);
  return (
    <>
      <Drawer
        drawer={drawer}
        action={setDrawer.toggle}
        navigationData={navigationData}
      />
      <navigationContext.Provider value={{ navigationData }}>
        <Header drawerAction={setDrawer.toggle} />
      </navigationContext.Provider>

      <PopularNewsSection popularNewsData={popularNewsData} />
      <Footer />
      <BackToTop />
    </>
  );
}

export default Home;
