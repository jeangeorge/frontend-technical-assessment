import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  @-webkit-keyframes animatetop {
    from {
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
  @keyframes animatetop {
    from {
      /* top: -300px; */
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  width: 80%;
  border: 1px solid #888;
  display: flex;
  flex-direction: column;
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
  background: #ffffff;
  box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
  border-radius: 4px;
  padding: 48px;
  margin-bottom: 48px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  button {
    font-size: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 0 30px 0;
`;

export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 16px;
`;

interface InputProps {
  hasError?: boolean;
}

export const Input = styled.input<InputProps>`
  font-size: 16px;
  height: 32px;
  border-color: ${(p) =>
    p.hasError !== undefined && p.hasError ? "red" : "inherit"};
`;
