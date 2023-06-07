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
  background: #ffffff;
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
    background: #076fe5;
    width: 13.6px;
    height: 32px;
    animation: loading 0.8s infinite ease-in-out;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      background: #076fe5;
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
      box-shadow: 0 0 #076fe5;
      height: 32px;
    }

    40% {
      opacity: 1;
      box-shadow: 0 -8px #076fe5;
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
  margin-top: 50px;
  padding-bottom: 50px;
  height: 100%;
  background: #0008;
  backdrop-filter: blur(5px);
  width: 350px;
  translate: 100%;
  transition: translate 0.2s ease-in;
  &.open {
    translate: 0;
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
export const StyledForm = styled.form`
  height: 100%;
  width: 100%;
  padding: 1rem 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  color: #fff;
  overflow: auto;
  .title {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 18px;
      width: 18px;
      border-radius: 50%;
      left: 0px;
      background-color: #fff;
    }
    &::after {
      animation: pulse 1s linear infinite;
    }
    @keyframes pulse {
      from {
        transform: scale(0.9);
        opacity: 1;
      }
      to {
        transform: scale(1.8);
        opacity: 0;
      }
    }
  }
  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }
  label {
    position: relative;
    width: 100%;
    .input {
      width: 100%;
      padding: 15px;
      outline: 0;
      border: 1px solid #fffd;
      border-radius: 10px;
      background: transparent;
      color: #fff;
    }
    .input-name {
      position: absolute;
      top: -20px;
      left: 10px;
      font-size: 0.9em;
      transition: 0.3s ease;
      pointer-events: none;
      padding: 0 5px;
    }
  }
  .choose {
    cursor: pointer;
    user-select: none;
    text-decoration: underline;
    @media (min-width: 700px) {
      display: none;
    }
  }
`;

export const StyledButton = styled.button`
  border: none;
  outline: none;
  background-color: royalblue;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transition: 0.3s ease;
  cursor: pointer;
  &.ok {
    display: none;
  }
  &.signout {
    background: #ff3939;
  }
  &:hover {
    opacity: 0.9;
    scale: 0.98;
  }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
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
