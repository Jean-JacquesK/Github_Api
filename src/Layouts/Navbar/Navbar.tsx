import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <nav className='navbar bg-secondary-subtle d-flex justify-content-between sticky-top'>
      <div className='m-2'>
        <div className='navbar-brand d-flex justify-centent-center align-items-center text-danger-emphasis'>
          <FaGithub className='d-flex justify-content-center align-items-center' />
          <Link
            to='/'
            className='link-underline link-underline-opacity-0 text-secondary-emphasis mx-1'
          >
            Github
          </Link>
        </div>
      </div>
      <div className=''>
        <div className=''>
          <div className=''>
            <Link to='/' className='btn btn-ghost text-secondary-emphasis'>
              Home
            </Link>
            <Link to='about' className='btn btn-ghost text-secondary-emphasis'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
