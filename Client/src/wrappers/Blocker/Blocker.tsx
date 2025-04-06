import Sidebar from "@/components/Sidebar";
import { BlockerContainer } from "./Blocker.styles";
import HorizontalLine from "@/components/HorizontalLIne";
import Slogan from "@/components/Slogan";
import Button from "@/components/Button";
import QRCode from 'react-qr-code';
import { ReactComponent as SplashIcon } from "@/assets/svgs/splash.svg";


export const Blocker = ({
    users,
    message,
    createMessage,
    updatePayment
}: {
    users: any[],
    message: any,
    createMessage: (sender: string, receiver: string) => Promise<void>
    updatePayment: () => void
}) => {


    return (
        <BlockerContainer>
            <Sidebar
                users={users}
                createMessage={createMessage}
            />
            <HorizontalLine />
            <div className="blocker">
                {
                    message== null ?
                        <div className="blocker-inner">
                            <SplashIcon height={500} width={500}/>
                        </div>

                        :
                        <div className="blocker-inner">
                            <Slogan
                                header={<span className="final">To start a chat with {message.receiver_name}@blocktalk.io, you are required to make a <br /> payment of <span className="-gold">{message.receiver_amount} SATS</span></span>}
                                text={<span className="little-text">Scan this QR code with your Lightning wallet to continue the payment. </span>}
                            />
                            <QRCode
                                value={message.payment_invoice}
                                size={200}
                                level="H"
                            />

                            <Button className="button-" onClick={
                                updatePayment
                            }>
                                I have made a payment
                            </Button>
                        </div>
                }
            </div>
        </BlockerContainer>
    )
}

export default Blocker;