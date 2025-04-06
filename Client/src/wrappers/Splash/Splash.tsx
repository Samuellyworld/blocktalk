import { SplashContainer } from "./Splash.styles";
import Header from "@/components/Header";
import { ReactComponent as SplashIcon } from "@/assets/svgs/splash.svg";
import Button from "@/components/Button";
import Slogan from "@/components/Slogan";
import { useNavigate } from "react-router-dom";

const Splash = () => {

    const navigate = useNavigate();
    return (
        <SplashContainer>
            <Header />
            <div className="splash-inner">
                <Slogan
                    text={
                        <>Secure, private, Tailored and censorship-resistant messaging <br /> powered by Bitcoin's Lightning Network</>
                    }
                />
                <Button 
                 color="primary" 
                 className="splash-button"
                 onClick={() => navigate("/scan")}
                 >
                    Login with Lightning
                </Button>
                <SplashIcon className="splash-image" />
            </div>
        </SplashContainer>
    );
};

export default Splash;