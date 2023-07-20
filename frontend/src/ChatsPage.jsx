import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage= (props)=>{
    const chatProps = useMultiChatLogic(
        'b45f294f-52d8-4e19-8b59-16cbf1c86c63',
         props.user.username,
          props.user.secret)

    return(
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
        </div>
    )
}
export default ChatsPage