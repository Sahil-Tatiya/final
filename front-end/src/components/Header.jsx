import { Link } from "react-router-dom";



export default function Header(){
    return(
       <div>
       <div className="flex items-center mb-4">
       <Link to= "Home" className="font-semibold text-3xl">Home Screen</Link>
       </div>
       <div className="flex items-center mb-4">
       <Link to= "aboutus" className="font-semibold text-3xl">About us</Link>
       </div>
       <div className="flex items-center mb-4">
       <Link to= "contactus" className="font-semibold text-3xl">Contact us</Link>
       </div>
       <div className="flex items-center mb-4">
       <Link to= "career" className="font-semibold text-3xl">Career</Link>
       </div>
       </div>
    );
    
    
    
}