import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Personajes = () => {
    const[personajes, setPersonajes] = useState([])
    const[selectPersonaje, setSelectPersonaje] = useState("")
    const navigate = useNavigate()

    const goToDetailPerson= () => {
        navigate(`/personaje/${selectPersonaje}`)
    }

   const getPersonajes = async () => {
    const data = await fetch(`${import.meta.env.VITE_URL}`)
    const response = await data.json()
    setPersonajes(response.results)
   

   }

   useEffect(() => {

    getPersonajes();
    
   }, [])

   const handleChange = (e) => {
    setSelectPersonaje(e.target.value);
   }

    return(


<Container className="text-center esquema">
      <Row className="central">
      <Col>
                <h2>Elige un personaje</h2>
                </Col>
        <Col>
        <Form.Select size="sm"  
                    value={selectPersonaje}
                    onChange={handleChange}
                >
                    <option value="">Seleccione un personaje</option>
                    {personajes.map((personaje) => (
                        <option key={personaje.id} value={personaje.id}>{personaje.name}</option> 
                    ))}
                </Form.Select>
                </Col>
                <Col>
                <button disabled={selectPersonaje === ""} className="btn btn-success" onClick={goToDetailPerson}>
                    Ver Detalle del Personaje
                </button>
                </Col>
      </Row>
    </Container>


          
    )
}

export default Personajes