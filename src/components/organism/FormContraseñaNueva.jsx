import { Link } from "react-router-dom";
import Title from "../atoms/Title";
import WrapperInput from "../molecules/WrapperInput";
import Imagen from "../atoms/Imagen";

function FormContraseñaNueva() {
    return ( 
        <div>
            <Imagen />
            <Title>Cambio de Contraseña</Title>

            <WrapperInput
            msn="User Name"
            type="text"
            placeholder="Write User Name" />

            <WrapperInput
            msn="Telephone Number"
            type="text"
            placeholder="Write Telephone Number" />
            
            <WrapperInput
            msn="Question"
            type="text"
            placeholder="Write Answer" />

            <Link to="/check">Verificar</Link>
            <Link to="/">Cancelar</Link>
        </div>
     );
}

export default FormContraseñaNueva;