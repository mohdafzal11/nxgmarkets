import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-3 mb-10 text-sm">
          <Link
            to="/aml-policy"
            className="text-base text-gray-500 hover:text-[#b52c61] hover:underline transition-all duration-200"
          >
            AML Policy
          </Link>
          <Link
            to="/contact-us"
            className="text-base text-gray-500 hover:text-[#b52c61] hover:underline transition-all duration-200"
          >
            Contact Us
          </Link>
          <Link
            to="/privacy-policy"
            className="text-base text-gray-500 hover:text-[#b52c61] hover:underline transition-all duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            to="/refund-policy"
            className="text-base text-gray-500 hover:text-[#b52c61] hover:underline transition-all duration-200"
          >
            Refund Policy
          </Link>
          <Link
            to="/terms-conditions"
            className="text-base text-gray-500 hover:text-[#b52c61] hover:underline transition-all duration-200"
          >
            Terms & Conditions
          </Link>
        </div>

        <div className="flex justify-center gap-8 mb-10">
          <a
            href="#"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-gray-500 hover:text-[#b52c61] transition-colors duration-200"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-gray-500 hover:text-[#b52c61] transition-colors duration-200"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-gray-500 hover:text-[#b52c61] transition-colors duration-200"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-gray-500 hover:text-[#b52c61] transition-colors duration-200"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        <div className="text-center">
          <p className="text-base text-gray-500 font-medium">
            NXG Markets © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
