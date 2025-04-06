// @ts-nocheck
import Header from "@/components/Header";
import { ProfileContainer } from "./Profile.styles";
import Slogan from "@/components/Slogan";
import Button from "@/components/Button";
import { ReactComponent as MessageIcon } from "@/assets/svgs/message.svg";
import Divider from "@/components/Divider";
import InputField from "@/components/InputField";
import { useState } from "react";
import { userAPI } from "@/services/protected/userAPI";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { errorToast, successToast } from "@/utils/toast";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "@/store/user/user.reducer";

const Profile = ({
    text = "You are logged in as 123455555555555555555"
}) => {
    const [userName, setUserName] = useState("");
    const [amount, setAmount] = useState("");
    const user = useSelector((state: RootState) => state.user.currentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useSWR(
        user?.wallet && "get_user",
        async () => {
            const response = await userAPI.getUserByUserId(user?.wallet as string)
            console.log(response)
            if(response) {
                console.log(response.user)
                setUserName(response.user.username)
                setAmount(response.user.amount.toString())
            }
            return response
        },
        {
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        })

    const handleSubmit = async () => {
        try {
            const createUser = await userAPI.createUser({
                lightning_user_id: user?.wallet as string,
                username : userName,
                amount: Number(amount)
            })
            if(createUser.status === 200) {
                successToast("Profile updated successfully")
                dispatch(setCurrentUser({
                    wallet: user?.wallet as string,
                    // token: user?.token,
                    username: userName,
                    // amount: Number(amount)
                }))
                console.log(createUser)
                navigate("/chat")
            }

        } catch (error) {
            errorToast("Error updating profile")
        }
    }
    return (
        <ProfileContainer>
            <Header />
            <div className="profile-inner">
                <Slogan
                    text={text}
                />
                <Button
                    leftIcon={<MessageIcon className="icon-" />}
                    color="primary"
                >
                    Proceed to message
                </Button>
                <Divider className="divider-" />

                <div className="profile-update">
                    <p className="update-gray"> Update Profile</p>
                    <div className="input-container">
                        <div className="username">
                            <InputField
                                name="username"
                                label="Username"
                                placeholder="Enter your username"
                                onChange={(e) => setUserName(e.target.value)}
                                value={userName}
                            />
                            <span className="block-talk-io">@blocktalk.io</span>
                        </div>
                        <div className="amount">
                            <InputField
                                name="amount"
                                label="Amount in Satoshi before receiving a message"
                                placeholder="eg 1000 Sat"
                                onChange={(e) => setAmount(e.target.value)}
                                value={amount}
                            />
                            <Button
                                color="primary"
                                onClick={handleSubmit}
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </ProfileContainer>
    );
}

export default Profile;