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
  z-index: 99999;
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
export const LoaderStyles = styled.div`
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
export const LoginStyles = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e8e8e8;
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
export const StyledAdmin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .form {
    position: relative;
    align-items: flex-start;
    margin: 20px;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #fff;
    border-radius: 20px;
    font-family: poppins, sans-serif;
    .title {
      font-size: 28px;
      color: royalblue;
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
        height: 16px;
        width: 16px;
        border-radius: 50%;
        left: 0px;
        background-color: royalblue;
      }
      &::before {
        width: 18px;
        height: 18px;
        background-color: royalblue;
      }

      &::after {
        width: 18px;
        height: 18px;
        animation: pulse 1s linear infinite;
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
        border: 1px solid rgba(105, 105, 105, 0.397);
        border-radius: 10px;
      }
    }
    .input-name {
      position: absolute;
      top: -10px;
      left: 10px;
      color: grey;
      font-size: 0.9em;
      transition: 0.3s ease;
      pointer-events: none;
      background: #fff;
      padding: 0 5px;
    }
  }
  .button {
    border: none;
    outline: none;
    background-color: royalblue;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transition: 0.3s ease;
    cursor: pointer;
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
`;
export const ContainerStyles = styled.div`
  width: 100%;
  height: 100%;
`;
