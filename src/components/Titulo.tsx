import styled from "styled-components";

const BarStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;

  .c1 {
    width: 50%;
    height: 2px;
    border-radius: 10px;
    background-color: transparent;
    position: absolute;
  }
  @media (min-width: 640px) {
    .c1 {
      width: 13%;
      height: 2px;
      border-radius: 10px;
      background-color: transparent;
      position: absolute;
    }
  }

  .c1::before {
    content: "";
    position: absolute;
    background-image: ${`  linear-gradient(to right, #9633ffaf, #1c1c1c)`};
    opacity: 1;
    width: 0%;
    height: 100%;
    border-radius: 2px;
    animation: load 3.5s ease-in-out infinite;
  }

  .c2 {
    display: flex;
    justify-content: center;
  }

  @keyframes load {
    50% {
      width: 100%;
    }

    100% {
      right: 0;
      left: unset;
    }
  }
`;
interface TitleProps {
  title: string
  subTitle: string
}

const Title = ({ title, subTitle }: TitleProps) => {
  return (
    <>
      <div>
        <div className="flex justify-center text-[38px] font-medium">
          <h1 className="">{title}</h1>
        </div>

        <BarStyle>
          <h1 className={`px-px z-10 text-lg bg-background text-muted-foreground font-medium `}> {subTitle} </h1>
          <div className="c1">
            <div className="c2">
              <div></div>
            </div>
          </div>
        </BarStyle>
      </div>
    </>
  );
};
export default Title;
