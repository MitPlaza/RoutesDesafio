import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imagen from "../images/rick-and-morty.jpg"



const Home = () => {

    return(
        
        <Container className="text-center esquema">
        <Row className="central">
        <Col className='text-center'>
        
            <h2>The Rick and Morty API</h2>
            <img src={imagen} width="400" alt="" />
        
        </Col>
      </Row>
    </Container>
    )
}

export default Home