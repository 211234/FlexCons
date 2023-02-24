import Title from "../atoms/Title";
import WrapperInput from "../molecules/WrapperInput";
import Imagen from "../atoms/Imagen";

function FormLogin() {
    return ( 
        <div>
            <Imagen />
            <Title>Registrate YA!</Title>

            <WrapperInput
            msn="Full Name"
            type="text"
            placeholder="Write Full Name" />

            <WrapperInput
            msn="E-mail Address"
            type="text"
            placeholder="Write E-mail Address" />

            <WrapperInput
            msn="User"
            type="text"
            placeholder="Write User" />

            <WrapperInput
            msn="Telephone Number"
            type="text"
            placeholder="Write Telephone Number" />
            
            <WrapperInput
            msn="Password"
            type="password"
            placeholder="Write Password" />
        </div>
     );
}

export default FormLogin;