import React, {useState} from 'react'
import styled from "styled-components";
import {Link} from 'gatsby'
import newLogo from "../assets/images/newlogo.svg"
import {FaAlignJustify} from "react-icons/fa"

const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <Wrapper>
            <nav className={"navbar"}>
                <div className={"nav-center"}>
                    <div className={"nav-header"}>
                        <Link to={"/"}>
                            <img src={newLogo} alt={'logo'}/>
                        </Link>
                        <button className={"nav-btn"} onClick={() => setShow(!show)}>
                            <FaAlignJustify/>
                        </button>
                    </div>

                    <div className={show ? "nav-links show-links" : "nav-links"}>
                        <Link to={"/"} className={"nav-link"} activeClassName={"active-link"}
                              onClick={() => setShow(false)}>
                            home
                        </Link>
                        <Link to={"/recipes"} className={"nav-link"} activeClassName={"active-link"}>
                            recipes
                        </Link>
                        <Link to={"/tags"} className={"nav-link"} activeClassName={"active-link"}>
                            category
                        </Link>
                        <Link to={"/about"} className={"nav-link"} activeClassName={"active-link"}>
                            about
                        </Link>
                    </div>
                </div>
            </nav>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  .navbar {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-center {
    width: 90vw;
    max-width: var(--max-width);
  }

  .nav-header {
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-header img {
    width: 200px;
    margin-left: -6px;
    margin-bottom: -9px;
  }

  .nav-btn {
    padding: 0.15rem 0.75rem;
  }

  .nav-btn svg {
    font-size: 1.5rem;
  }

  .nav-links {
    height: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: var(--transition);
  }

  .show-links {
    height: 23rem;
  }

  .nav-link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1rem;
    text-transform: capitalize;
    color: #4c4c4b;
    letter-spacing: var(--letterSpacing);
    padding: 1rem;
    border-top: 1px solid var(--grey-500);
    transition: var(--transition);
  }

  .active-link {
    font-weight: bold;
  }

  .contact-link {
    display: flex;
    justify-content: center;
  }

  .contact-link a {
    padding: 0.15rem 1rem;
  }

  @media screen and (min-width: 992px) {
    .navbar {
      height: 6rem;
    }

    .nav-center {
      display: flex;
      align-items: center;
    }

    .nav-header {
      padding: 0;
      margin-right: 2rem;
      height: auto;
    }

    .nav-btn {
      display: none;
    }

    .nav-links {
      height: auto !important;
      flex-direction: row;
      align-items: center;
      width: 100%;
    }

    .nav-link {
      padding: 0;
      border-top: none;
      margin-right: 1rem;
      font-size: 1rem;
    }

    .contact-link {
      width: 100%;
      justify-content: flex-end;
      align-items: center;
      margin-right: 0;
    }
  }
`

export default Navbar