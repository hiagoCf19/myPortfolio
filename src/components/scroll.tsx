import styled from "styled-components";

const ScrollStyle = styled.button`
  width: 30px;
  height: 50px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  box-shadow: ${`0px 0px 10px #9633ff`};
  position: relative;

  div {
    width: 5px;
    height: 10px;
    border-radius: 10px;
    background-color: #9633ff;
    box-shadow: ${`0px 0px 10px #9633ff`};
    animation: scroll_4013 2s linear infinite;
    transform: translateY(40%);
  }

  &::after {
    content: "scroll";
    font-family: "Play", sans-serif;
    position: absolute;
    top: 140%;
    color: #9633ff;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  @keyframes scroll_4013 {
    0% {
      transform: translateY(40%);
    }

    50% {
      transform: translateY(90%);
    }
  }
`;
const MouseIcon = () => {
  return (
    <div className="flex justify-center">
      <ScrollStyle>
        <div> </div>
      </ScrollStyle>
    </div>
  );
};
export default MouseIcon;
