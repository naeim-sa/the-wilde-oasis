import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";
import Heading from "./ui/Heading";
import Button from "./ui/Button";
import Input from "./ui/Input";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>

        <Heading as="h2">Check in out</Heading>
        <Button onClick={() => alert("Check in")}>Chick in</Button>
        <Button onClick={() => alert("Check out")}>Chick out</Button>

        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
