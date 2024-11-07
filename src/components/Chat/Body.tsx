import MyMsgs from "./MyMsgs"
import TopSectionChat from "./TopSectionChat"
import TypeBar from "./TypeBar"
export default function Body() {
  return (
    <div className='main-body'>
        <TopSectionChat/>
        <TypeBar />
        <MyMsgs/>
    </div>
  )
}
