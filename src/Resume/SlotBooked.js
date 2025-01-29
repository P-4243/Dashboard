
import Checkmark from './Checkmark';
const SlotBooked = () => {
  return (<div className='wholeMiddle'>
   <Checkmark 
   p="We will send the meeting link within 1 hour."
   h1="Slot is available"/>
   <p style={{color:"blue",textAlign:"center",margin:"1vw",fontSize:"1.2vw" }}>Read Instructions</p>
   </div>
  )
}

export default SlotBooked