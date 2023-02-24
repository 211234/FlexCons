import { Link } from "react-router-dom";
import Title from "../atoms/Title";
import WrapperInput from "../molecules/WrapperInput";
import Imagen from "../atoms/Imagen";

function Verification() {
    return ( 
        <div>
            <Imagen />
            <Title>Cambio de Contraseña</Title>

            <WrapperInput
            msn="New Password"
            type="password"
            placeholder="Write Password" />

            <WrapperInput
            msn="Confirm Passwordr"
            type="password"
            placeholder="Write Password" />

            <Link to="/">Guardar Contraseña</Link>
        </div>
     );
}

export default Verification;