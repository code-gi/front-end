import Routers from "./Routers";


 {/* Secondary Menu Bar */}
 <div className="secondary-menu">
 <div className="logo">INVIX MEDIA</div>
 <div className="dropdown-menus">
   <div className="dropdown">
     <button className="dropbtn">Content</button>
     <div className="dropdown-content">
       <a href="#item1">Latest news</a>
       <a href="#item2">Program updates</a>
     </div>
   </div>
   <div className="dropdown">
     <button className="dropbtn">Updates</button>
     <div className="dropdown-content">
       <a href="#item1">Morning Breeze</a>
       <a href="#item2">Breakfast Meeting</a>
     </div>
   </div>
   <div className="dropdown">
     <button className="dropbtn">Categories</button>
     <div className="dropdown-content">
       <a href="#item1">Sports</a>
       <a href="#item2">Politics</a>
       <a href="#item3">Business</a>
       <a href="#item4">Education</a>
       <a href="#item5">General</a>
     </div>
   </div>
   </div>
   </div>
function App() {
  return <Routers />;
}

export default App;
