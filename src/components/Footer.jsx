import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>
          Copyright © 2023 Gymon | Made by{" "}
          <Link
            className="text-blue-500"
            to="https://www.linkedin.com/in/adnansid99"
          >
            Adnan Siddiqui
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
