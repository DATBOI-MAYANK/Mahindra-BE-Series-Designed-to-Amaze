import VideoBg from '../src/video/Mahindra.mp4'
import  ArrowRight  from "../src/assets/right-arrow.svg";


function App() {
  return (
    <>
     
    <div >
    <nav className="flex mx-5 mt-4 absolute text-white z-10"> 
      <ul className="flex left-full relative space-x-11 font-serif text-2xl">
      <li className="hover:underline"><a href="#home">Home</a></li>
      <li className="hover:underline"><a href="#about">About</a></li>
      <li className="hover:underline"><a href="#services">Services</a></li>
      <li className="hover:underline"><a href="#contact">Contact</a></li>
      </ul>
     </nav>
     <div className='fixed text-white  top-3/4 left-3/4  z-10'>
     <button className="group">
      Button
      {/* <img src= {ArrowRight} alt="" className="-me-1 ms-2  opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        strokeWidth={2}
        aria-hidden="true" /> */}
    </button>
      </div>
      <video  src={VideoBg} autoPlay loop  className="w-full h-screen object-cover" >
      </video>
     </div>
    </>
    )
}

export default App
