import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
 
function Layout(props) {
  return (
    <div>
        <Navbar  bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand >BookStore</Navbar.Brand>
          </Container>
        </Navbar>
      <Container>{props.children}</Container>
    </div>
  );
}
export default Layout;