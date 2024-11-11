import { FaFacebook } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-pink-400'>Sewing</span>
            <span className='text-slate-500'>Machine</span>
            <span className='text-lime-600'>Repair</span>
          </h1>
        </Link>
        <ul className='flex gap-3'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-400 hover:underline'>Home</li>
          </Link>
          <Link to='/repair-types'>
            <li className='hidden sm:inline text-slate-400 hover:underline'>RepairTypes</li>
          </Link>
          <Link to='/gallery'>
            <li className='hidden sm:inline text-slate-400 hover:underline'>Gallery</li>
          </Link>
          <Link to='/contact-us'>
            <li className='text-slate-400 hover:underline'>ContactUs</li>
          </Link>
        </ul>
        <div className='flex text-xl sm:text-3xl'>
          <Link to='https://www.facebook.com'><FaFacebook className='text-blue-900' /></Link>
          <Link to='https://www.google.com/maps'><SiGooglemaps className='text-red-600 ml-0 sm:ml-4' /></Link>
        </div>
      </div>
    </header>
  );
}
