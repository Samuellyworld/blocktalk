// @ts-nocheck
import Slogan from "@/components/Slogan";
import { ScanContainer } from "./Scan.styles";
import { ReactComponent as QRCodeIcon } from "@/assets/svgs/scan.svg";
import Header from "@/components/Header";
import { useEffect } from "react";

const Scan = ({
    qrCode
} : {
    qrCode: string
}) => {

    return (
        <ScanContainer>
            <div className="scan-inner">
                <Header />
            </div>
            <Slogan
                text={
                    <> Scan this QR code with your Lightning wallet, or tap below to <br/> continue. </>
                }
            />
            <img src={qrCode} className="scan-image" />
        </ScanContainer>
    )

}

export default Scan;