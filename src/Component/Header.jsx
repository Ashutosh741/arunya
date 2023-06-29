import React from "react";
import { Container } from "react-bootstrap";
import logo from "../images/logo.png";
import downarrow from "../images/down-arrow.png";

function Header() {
  return (
    <>
      <section className="header">
        <nav class="navbar navbar-expand-lg p-0 px-md-5  px-2">
          <a className="navbar-brand logo " href="#">
            <img src={logo} alt="" className="img-fluid arunya_logo" />
          </a>
          <button
            className="navbar-toggler"
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
            <div className="navbar-nav mr-auto">
              <div class="btn-groups m-2">
                <button
                  type="button"
                  class="btn btn-success fw-bolder rounded-5  button_shadow border-0 header-btn"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses & Pricing
                </button>
                <div className="border-right"></div>
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
                <div className="border-right"></div>
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
                <div className="border-right"></div>
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
                <span class="text-white fw-bolder" style = {{fontSize:"20px"}}>Call Us</span>

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
                  width: "230px",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <input
                  type="search"
                  className="form-control  shadow-none searchbar border-0 px-2 p-0"
                />

                <button
                  className="btn shadow-none px-2 p-0"
                  style={{
                    width: "80px", //added
                    borderRadius: "20px",
                    color: "#3cbb8c",
                    fontWeight:"bolder",
                    background: "#ccdc28",
                    fontSize:"20px"
                  }}
                >
                  Search
                </button>
                <i class="fa-solid fa-magnifying-glass search-icon me-2"></i>
              </div>
            </div>
          </div>
        </nav>
        <div
          className="credintial"
          style={{ position: "absolute", right: "14px" }}
        >
          <div className="border-right" style = {{left : "95px",right:"45px",height:"38px",top:"7px",borderBottomColor:"transparent",borderTopColor:"transparent",}}></div>
          <button className="loginbtn btn me-3 fw-bold">
            LOGIN
            <span className="ms-2">
              <img src={downarrow} className="img-fluid" alt="" />
            </span>
          </button>

          <button className="signupbtn btn fw-bold">
            SIGNUP
            <span className="ms-2">
              <img src={downarrow} className="img-fluid" alt="" />
            </span>
          </button>
        </div>
      </section>
    </>
  );
}

export default Header;
