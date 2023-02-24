import { Link } from "react-router-dom";
import Title from "../atoms/Title";
import WrapperInput from "../molecules/WrapperInput";
import Imagen from "../atoms/Imagen";

function FormLogin() {
    return ( 
        <div>
            <Imagen />
            <Title>Bienvenido</Title>

            <WrapperInput
            msn="User Name"
            type="text"
            placeholder="Write User Name" />
            
            <WrapperInput
            msn="Password"
            type="password"
            placeholder="Write Password" />

            <Link to="/notFound">Enviar</Link>

        <h4>No tienes una Cuenta? Registrate</h4>
        <Link to="/register">Regístrate</Link>
        </div>
     );
}

export default FormLogin;