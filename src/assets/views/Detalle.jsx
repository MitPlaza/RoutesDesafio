import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import PersonajeCard from "../components/PersonajeCard"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Detalle = () => {
    const { id } = useParams()
    const [personaje,setPersonaje] = useState({})

    const getPersonaje = async () => {
        const data = await fetch(`${import.meta.env.VITE_URL}/${id}`)
        const response = await data.json()
       const {name,image,status,species,gender} = response
       setPersonaje({name,image, status, species, gender });
    
       
    
       }
    
       useEffect(() => {
    
        getPersonaje();
        
       }, [])


    return(
        <Container className="text-center esquema">
        <Row className="central">
        <Col>
        
            <PersonajeCard personaje = {personaje}/>
        
        </Col>
      </Row>
    </Container>
        
    )
}

export default Detalle