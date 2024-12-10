import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="loader">
          <div className="shadow" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    background-color: #212121;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loader {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: #e8e8e8;
    border: 4px solid #e8e8e8;
    box-shadow: 0 0 3px #e8e8e8;
    filter: blur(0.4px);
  }

  .shadow {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    background-color: #212121;
    top: -5px;
    left: 0;
    animation: animate 3s infinite 1.5s;
  }

  @keyframes animate {
    0% {
      transform: translateX(150px);
      background-color: #212121;
    }

    50% {
      transform: translateX(-10px);
      background-color: #212121;
    }

    100% {
      transform: translateX(-170px);
      background-color: #212121;
    }
  }
`;

export default Loader;
