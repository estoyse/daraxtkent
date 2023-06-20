import styled from 'styled-components';

export const NavbarStyles = styled.nav`
  font-family: 'Lato', sans-serif;
  height: 50px;
  background: #0008;
  backdrop-filter: blur(5px);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  color: #fff;
  .nav-links {
    display: flex;
    gap: 10px;
  }
  .link {
    color: #fff;
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;
  }
`;
export const StyledLoader = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999999;
  background: rgb(17 24 39);
  transition: opacity 0.5s ease;
  &.hidden {
    opacity: 0;
    pointer-events: none;
  }

  .square {
    text-indent: -9999em;
    margin: auto;
    position: absolute;
    right: calc(50% - 6.8px);
    top: calc(50% - 16px);
    animation-delay: 0.16s;
    background: rgb(203 213 225);
    width: 13.6px;
    height: 32px;
    animation: loading 0.8s infinite ease-in-out;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      background: rgb(203 213 225);
      animation: loading 0.8s infinite ease-in-out;
      width: 13.6px;
      height: 32px;
    }
  }

  .square:before {
    left: -19.992px;
    animation-delay: 0.12s;
  }

  .square:after {
    left: 19.992px;
    animation-delay: 0.32s;
  }

  @keyframes loading {
    0%,
    80%,
    100% {
      opacity: 0.75;
      box-shadow: 0 0 rgb(203 213 225);
      height: 32px;
    }

    40% {
      opacity: 1;
      box-shadow: 0 -8px rgb(203 213 225);
      height: 40px;
    }
  }
`;
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 11;
  margin-top: 68px;
  padding-bottom: 50px;
  height: 100%;
  background: rgb(15 23 42);
  backdrop-filter: blur(5px);
  width: 350px;
  translate: 100%;
  transition: translate 0.2s ease-in;
  &.open {
    translate: 0;
  }
  @media (max-width: 768px) {
    margin-top: 52px;
  }
  @media (max-width: 700px) {
    width: 100%;
    padding: 0 3rem;
    padding-bottom: 3rem;
  }
  @media (max-width: 420px) {
    padding: 0;
    padding-bottom: 3rem;
  }
`;

export const StyledLogin = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    position: relative;
    display: inline-block;
    padding: 1em 2.5em;
    border-radius: 6em;
    border: none;
    font-size: 17px;
    font-weight: 500;
    color: black;
    background-color: white;
    transition: all 0.2s;
    user-select: none;
    cursor: pointer;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
    &:active {
      transform: translateY(-1px);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }
  }
`;
