
import { ReactNode } from "react";
import { SloganContainer } from "./Slogan.styles";


const Slogan = ({
    header= <>Freedom through conversation. No passwords, just <br /> Lightning.</>,
    text ,
    Qr = null,
    Button = null
} : {
    header?: string | ReactNode
    text ?: string | ReactNode
    Qr ?: string | ReactNode
    Button ?: string | ReactNode
}) => {
    return (
        <SloganContainer>
            <h1>{header}</h1>
            <p>{text}</p>
            {Qr && Qr}
            {Button && Button}
        </SloganContainer>
    );
}

export default Slogan;