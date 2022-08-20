import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;

  &:target {
    display: block;
  }
`;

const Content = styled.div`
  color: red;
  background-color: whitesmoke;
  border-radius: 1rem;
  width: 300px;
  padding: 10px 20px;
  margin: 20% auto;
  position: relative;
  font-size: 1.5rem;
`;

const A = styled.a`
  text-decoration: none;
  text-decoration-color: #263238;
`;

function ErrorMessage() {
  const error = useSelector((state) => state.msgError);
  const { pathname } = useLocation();

  return (
    <Div>
      <Content>
        <h4>ERROR {error.status}</h4>
        <p>{error.statusText}</p>

        {pathname === "/home" && (
          <A href={`https://pi-countries-main-iota.vercel.app/home`}>
            <button>Close</button>
          </A>
        )}
      </Content>
    </Div>
  );
}

export default ErrorMessage;
