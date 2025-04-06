import { useState } from "react"
import InputField from "../InputField"
import { SidebarContainer } from "./Sidebar.styles"
import { ReactComponent as SearchIcon } from "@/assets/icons/search.svg"
import Button from "../Button"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { truncateAddress } from "@/utils/truncateAddress"

export const Sidebar = ({
    users,
    createMessage
}: {
    users: any[]
    // chats : EachMessage[]
    createMessage : (sender: string, receiver: string) => Promise<void>
}) => {
    const [search, setSearch] = useState<string>("")
    const currentUser = useSelector((user: RootState) => user.user.currentUser)


    return (
        <SidebarContainer>
            <div className="sidebar-inner">
                <h1>BlockTalk</h1>
                <InputField
                    placeholder="Search"
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                    icon={<SearchIcon />}
                />
                {/* {
                    chats
                  } */}
                <p className="chats-">Chats</p>
                { 
               users && users.filter((user) => {
                    // Filter out the current user from the list
                    if (user.lightning_user_id === currentUser?.wallet) {
                        return false
                    }
                    if (search === "") {
                        console.log(user)
                        return user
                    } else if (
                        user.username.toLowerCase().includes(search.toLowerCase())
                    ) {
                        return user
                    }
                }).map((user, index) => (
                    <Button
                        variant="ghost"
                        className="button-"
                        key={index}
                        onClick={() => {
                            createMessage(currentUser?.wallet as string, user.lightning_user_id)
                        }}
                    >
                           {user.username}@blocktalk.io
                           </Button> 
                ))}
                
         
                
                {/* <Button
                  variant="ghost"
                  className="button-"
                  >
                    Jagah@blocktalk.io
                  </Button>
                  <Button
                  variant="ghost"
                  className="button-"
                  >
                    Jagah@blocktalk.io
                  </Button> */}

            </div>
            <div className="user-logined">
                <p>{currentUser?.username}@blocktalk.io</p>
                <span>{truncateAddress(currentUser?.wallet)}</span>
            </div>
        </SidebarContainer>
    )
}