import VideoBg from '../src/video/Mahindra.mp4'

function App() {
  return (
    <>
     
    <div >
    <nav className="flex mx-5 mt-4 fixed text-white z-10"> 
      <span className="logo">logo</span>
      <ul className="flex left-full relative space-x-11 font-serif text-2xl">
      <li className="hover:underline"><a href="#home">Home</a></li>
      <li className="hover:underline"><a href="#about">About</a></li>
      <li className="hover:underline"><a href="#services">Services</a></li>
      <li className="hover:underline"><a href="#contact">Contact</a></li>
      </ul>
     </nav>
      <video  src={VideoBg} autoPlay loop  className="w-full h-screen object-cover" ></video>
      
     </div>
    </>
    )
}

export default App
