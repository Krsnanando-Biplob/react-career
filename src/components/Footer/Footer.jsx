import { Link } from "react-router-dom";
import { IoLogoFacebook, IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className=" bg-base-200 text-base-content p-10">
      <div className="footer max-w-6xl mx-auto">
        <aside>
          <h1 className="text-4xl font-bold">CareerHub</h1>
          <p>
            <br />
            Hello, I’m Biplob, My core skill <br /> is based on javaScript and I love to <br /> do most of the things  with javaScript.
          </p>
          <div className="flex gap-2">
            <Link to="https://www.facebook.com/profile.php?id=100025226506795"> <IoLogoFacebook className="text-2xl"></IoLogoFacebook> </Link>
            <Link className="text-2xl" to="https://github.com/Krsnanando-Biplob">
              <FaSquareGithub></FaSquareGithub>
            </Link>
            <Link to="https://www.linkedin.com/in/krsnanando-biplob/"> <IoLogoLinkedin className="text-2xl"></IoLogoLinkedin> </Link>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;