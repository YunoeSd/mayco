import React, { useState, useEffect, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [atTop, setAtTop] = useState(true); // To check if the scroll is at the top
  const [scrollingUp, setScrollingUp] = useState(false); // To track scroll direction
  const navbarRef = useRef(null); // To reference the navbar element
  const prevScrollY = useRef(0); // Store previous scroll position

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Update color when at the top of the page
      setAtTop(scrollY === 0);

      // Check if scrolling up or down
      if (scrollY < prevScrollY.current) {
        setScrollingUp(true); // Scrolling up
      } else if (scrollY > prevScrollY.current) {
        setScrollingUp(false); // Scrolling down
      }

      // Update the navbar position
      const navbar = navbarRef.current;
      if (navbar) {
        const moveDistance = scrollY * 0.3; // Slower movement (adjust the factor as needed)
        
        if (scrollingUp) {
          navbar.style.transform = `translateY(0)`; // Show navbar
        } else {
          navbar.style.transform = `translateY(-${Math.min(moveDistance, 56)}px)`; // Hide navbar (upward movement)
        }
      }

      // Update the previous scroll position
      prevScrollY.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollingUp]); // Re-run effect whenever `scrollingUp` changes

  return (
    <header
      ref={navbarRef}
      className={`navbar ${atTop ? "top" : ""}`}
    >
      <h1 className="logo">
        <a>
          <img src={logo} alt="Mayco logo" />
        </a>
      </h1>
      <ol className="sections">
        <li>
          <button>OSG Royco</button>
        </li>
        <li>
          <button>Maquinados</button>
        </li>
        <li>
          <button>Fundición</button>
        </li>
        <li>
          <button>Plásticos de ingenieria</button>
        </li>
        <li>
          <button>Aceros</button>
        </li>
      </ol>
      <ol className="actions">
        <li>
          <a>
            <IoIosSearch size={25} />
          </a>
        </li>
      </ol>
    </header>
  );
};

export default Navbar;
