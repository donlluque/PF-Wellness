import styled from "styled-components";
import { useSelector } from "react-redux";
import { urlBase } from "../../index.js";

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
  color: green;
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

function ConfirmMessage({ putActive, deleteActive, postActive }) {
  const msg = useSelector((state) => state.msgConfirm);
  let action = postActive ? "created" : putActive ? "modified" : "deleted";
  return (
    <Div>
      <Content>
        <h4>
          The activity {msg.name} was successfully {action}!
        </h4>
        <A href={`https://pi-countries-main-iota.vercel.app/activities`}>
          <button>Close</button>
        </A>
      </Content>
    </Div>
  );
}

export default ConfirmMessage;
