import React, { useState } from "react";
import useToggle from "../../../../Hooks/useToggle";
import DropDown from "../../../Helpers/DropDown";
import Navigation from "../../../Helpers/Navigation";
import Search from "../../../Search";
import Logo from "../../../../assets/images/logo.jpg";


function HeaderThree({ drawerAction }) {
  const category1 = ["Auditions", "Saab", "VW", "Audi"];
  const [selectedCategory, setCategory] = useState(category1[0]);
  const changeCategory1 = (value) => {
    setCategory(value);
  };



// index.js

// Create a button element for Dashboard
const button = document.createElement('button');
button.textContent = 'Dashboard';
button.classList.add('button');

// Add event listener to handle button click
button.addEventListener('click', () => {
    // Check if the user is logged in
    if (!isLoggedIn()) {
        // User is not logged in, display login form
        showLoginForm();
    } else {
        // User is logged in, redirect to dashboard
        redirectToDashboard();
    }
});

// Append the button to the body or any specific element
document.body.appendChild(button);

// Function to check if user is logged in (dummy function for demonstration)
function isLoggedIn() {
    // Replace with actual logic to check if user is logged in
    return false; // Example: return true if logged in, false otherwise
}

// Function to show login form (assuming login.js functionality is included)
function showLoginForm() {
    // Load login.js dynamically
    const script = document.createElement('script');
    script.src = 'login.js';
    document.body.appendChild(script);
}

// Function to redirect to dashboard (placeholder function)
function redirectToDashboard() {
    // Replace with actual redirect logic or actions
    console.log('Redirecting to dashboard...');
    // Example: window.location.href = '/dashboard.html';
}





  const [show, setValue] = useToggle(false);
  return (
    <>
      <Search
        className={`${show ? "open" : ""}`}
        searchAction={setValue.toggle}
      />
      <header className="codex-er-header-area codex-er-header-area-3">
        <div className="codex-er-header-nav">
          <div className=" container-fluid p-0">
            <div className="row">
              <div className=" col-lg-12">
                <div className="navigation">
                  <nav className="navbar navbar-expand-lg">
                    <div className="navbar-brand logo">
                      <a href="/">
                        <img
                          src={
                            Logo
                          }
                          alt=""
                        />
                      </a>
                    </div>

   

    



                    <div
                      className="collapse navbar-collapse sub-menu-bar"
                      id="navbarSupportedContent"
                    >
                      <Navigation className="mr-auto" />
                    </div>
                    <div className="codex-er-navbar-btn d-flex">
                     
                      <div className="codex-er-widget d-flex">
                        <a
                          onClick={(e) => setValue.toggle(e)}
                          className="codex-er-news-search-open"
                          href="#"
                        >
                          <i className="far fa-search"></i>
                        </a>
                      </div>
                      <span
                        onClick={drawerAction}
                        className="codex-er-toggle-btn toggle-btn codex-er-news-canvas_open d-block"
                      >
                        <i className="fal fa-bars"></i>
                      </span>
                      
                      
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

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
      
      </header>
    </>
  );
}

export default HeaderThree;
