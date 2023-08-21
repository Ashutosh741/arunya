import React from "react";
import { Container } from "react-bootstrap";
import logo from "../images/logo.png";
import downarrow from "../images/down-arrow.png";
import iarunyalogo from '../images/iarunya logo-1.png'
function Header() {
  return (
    <>
      <section className="header">
        <nav class="navbar navbar-expand-lg p-0 px-md-5  px-2">
          <a className="navbar-brand logo " href="#">
            <img src = {iarunyalogo} className="iarunyalogo"/>
            <img src={logo} alt="" className="img-fluid arunya_logo" />
          </a>
          <button
            className="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse ms-4 " id="navbarSupportedContent">
            <div className="navbar-nav mr-auto ms-2">
              <div class="btn-groups m-2">
                <button
                  type="button"
                  class="btn btn-success fw-bolder rounded-5  button_shadow border-0 header-btn"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses & Pricing
                </button>
                <div className="border-right" style = {{borderLeftColor: "rgb(0 0 0 / 24%)"}} ></div>
                {/* <!-- <span class="visually-hidden">Toggle Dropdown</span> --> */}
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
              </div>
              <div class="btn-groups m-2">
                <button
                  type="button"
                  class="btn btn-success fw-bolder  border-0 rounded-5 button_shadow  header-btn"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Knowledge Base
                </button>
                <div className="border-right" style = {{boxShadow: "rgb(0 0 0 / 21%) 0px 0px 0px inset",borderLeftColor: "rgb(0 0 0 / 24%)"}}></div>
                {/* <!-- <span class="visually-hidden">Toggle Dropdown</span> --> */}

                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
              </div>
              <div class="btn-groups m-2">
                <button
                  type="button"
                  class="btn btn-success fw-bolder button_shadow border-0 rounded-5  header-btn"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blogs
                </button>
                <div className="border-right" style = {{borderLeftColor: "rgb(0 0 0 / 24%)"}}></div>
                {/* <!-- <span class="visually-hidden">Toggle Dropdown</span> --> */}

                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbaar-nav ms-auto d-flex align-items-center justify-content-end gap-2">
              <div class="call-btn p-2 d-flex gap-1 align-items-center">
                <span class="text-white fw-bolder" style = {{fontSize:"1.2rem",width: "-0.9rem"}}>Call Us</span>

                <a href="tel:+04345353353" class="external">
                  <i class="fa-solid fa-phone calling-icon rounded-5 text-white"></i>
                </a>
              </div>
              {/* <div class="search-input p-2">
                <input type="text" id="searchText" class="rounded-4 border-0" />
                <i
                  class="fa-solid fa-magnifying-glass search-icon me-2"
                  style={{ cursor: "pointer" }}
                ></i>
                <input
                  type="submit"
                  value="Search"
                  class="submit-btn fw-bolder rounded-4"
                />
              </div> */}
              <div
                className="search-input input-group bg-white"
                style={{
                  width: "12rem",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  height: "1.5rem"
                }}
              >
                <input
                  type="search"
                  className="form-control  shadow-none searchbar border-0 px-2 p-0"
                  style={{ flex: "1", height: "1.5rem" }}
                />

                <button
                  className="btn shadow-none searchText p-0"
                >
                  Search
                </button>
                <i class="fa-solid fa-magnifying-glass search-icon me-3"></i>
              </div>
            </div>
          </div>
        </nav>
        <div
          className="credintial"
          style={{ position: "absolute", right: "14px" }}
        >
          <div className="loginBorder border-right" ></div>
          <button className="loginbtn btn me-3 fw-bold ">
            LOGIN
            <div className="angleDown">
              {">"}
              {/* <img style={{content : '>'}} className="img-fluid" alt="" /> */}
            </div>
          </button>
          <div className="signupBorder border-right"></div>

          <button className="signupbtn btn fw-bold">
            SIGNUP
            <div className="angleDown">
              {">"}
              {/* <img style={{content : '>'}} className="img-fluid" alt="" /> */}
            </div>   
          </button>
        </div>
      </section>
    </>
  );
}

// box-shadow: rgb(215, 57, 41) 1px 0px 0px 0px;
// border: 1px solid rgb(255 255 255 / 0%);

// box-shadow: -1px 0px #2e5aa8;  => login
//     box-shadow: 1px 0px 0px 0px #d73929; => signup
export default Header;
