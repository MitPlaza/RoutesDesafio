import { Card } from "react-bootstrap"
import translation from "../../functions/translation"
import { useNavigate } from "react-router-dom"


const PersonajeCard = ({personaje}) =>{
   const navigate=useNavigate()
    
    let propertys = Object.entries(personaje).slice(2)
  
  

    return(

        <Card style={{width: "24rem"}}>
        <Card.Img  variant="top" src={personaje.image} />
        <Card.Body>
          <Card.Title>{personaje.name}</Card.Title>
          {propertys.map((item) =>(
          <Card.Text key={personaje.id}>
            {translation[item[0]]}: {translation[item[1]]}
            </Card.Text>
          ))}
 <button className="btn btn-primary" onClick={()=>navigate("/personajes")}>Voler a personajes</button>
        </Card.Body>
        
      </Card>
      
    )
}

export default PersonajeCard