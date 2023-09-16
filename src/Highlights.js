import Curriculum from './Curriculam'
import './Highlights.css'
import './App.css'



function Highlights() {
    return (
        <>
            <div id="highlights">

                <h1 style={{ letterSpacing: '5px', textAlign: 'center' }} className='headings'>Course Highlights</h1>
                <div className="high">
                    <div>
                        <h2 style={{ color: 'royalblue' , marginBottom:'10px'}}>Placement Assurance</h2>
                        <p style={{ lineHeight: '35px',  marginBottom:'10px' , fontSize:'18px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <h2 style={{ color: 'royalblue', marginBottom:'10px' }}>Mentorship Support</h2>
                        <p style={{ lineHeight: '35px', marginBottom:'10px' , fontSize:'18px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div>
                        <h2 style={{ color: 'royalblue', marginBottom:'10px' }}>Wide Network</h2>
                        <p style={{ lineHeight: '35px' , marginBottom:'10px', fontSize:'18px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <h2 style={{ color: 'royalblue', marginBottom:'10px' }}>Income sharing Agreement</h2>
                        <p  style={{ lineHeight: '35px' , marginBottom:'10px' , fontSize:'18px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
            <Curriculum/>

        </>
    )



}

export default Highlights