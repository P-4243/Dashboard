
import React from 'react';
import Dashboard from "../Components/Dashboard";

const Home = () => {
  return (
   
    
     <div >
     
     <div >

     <div style={{display:"flex",}}>
     <div style={{ 
  width: "40vw", 
  background: "linear-gradient(to right, black, #407BFF)", 
  color: "white", 
  padding: "30px", 
  borderRadius: "5px" 
}}>
        <div style={{width:"5vw"}}>
          <h2>Welcome Jhon Thomos</h2>
          <p>Email: jhonathomos@gmail.com</p>
          <p>UserID: Jhonthomos912</p>
        </div>
        <div>
            <div>
          <button style={{ padding:"1vw" ,color:"white", border:"none" , backgroundColor: '#15A3B5', marginRight: '10px' }}>Report Issue</button>
          <button style={{ padding:"1vw" ,color:"white", border:"none" , backgroundColor: '#15A3B5',backgroundColor: '#F28A22', marginRight: '10px' }}>Change Password</button>
          <button style={{ padding:"1vw" ,color:"white", border:"none" , backgroundColor: '#15A3B5',backgroundColor: '#319C28', marginRight: '10px' }}>Edit Profile</button>
          </div>
          <div>
          <button style={{ marginTop:"1vw",padding:"1vw" ,color:"white", border:"none" , backgroundColor: '#15A3B5',backgroundColor: '#F22222' }}>Logout</button>
          </div>
        </div>
      </div>
      <div style={{ margin:"0 0 5vw 5vw" ,height: '150px',   background: "linear-gradient(to right, black, #407BFF)", padding: '30px', borderRadius: '5px',width:"30vw",color:"white"}}>
        <h3>Overall Engagement</h3>
        <div style={{ backgroundColor: '#e0e0e0', borderRadius: '5px', overflow: 'hidden' }}>
          <div style={{ width: '40%', backgroundColor: '#007BFF', padding: '5px', color: 'white', textAlign: 'center' }}>40%</div>
        </div>
      </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Section title="About" description="Craft an engaging story in your bio and make meaningful connections with peers and recruiters alike!" />
        <Section title="Skills" description="Spotlight your unique skills and catch the eye of recruiters looking for your exact talents!" />
        <Section title="Work Experience" description="Narrate your professional journey and fast-track your way to new career heights!" />
        <Section title="Education" description="Showcase your academic journey and open doors to your dream career opportunities!" />
      </div>
      </div>
    </div>
  
  );
};

const Section = ({ title, description }) => {
  return (
    <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #e0e0e0', borderRadius: '5px' }}>
      <h4>{title}</h4>
      <p>{description}</p>
      <button style={{ backgroundColor:"white", color: '#15A3B5',border:"none" }}>Add {title}</button>
    </div>
  );
};

export default Home;