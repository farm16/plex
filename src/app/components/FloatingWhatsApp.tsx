"use client";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <div>
      <a
        href="https://wa.me/13479277869"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp size={28} color="white" />
      </a>

      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          background-color: #25d366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          z-index: 1000;
          cursor: pointer;
          transition: transform 0.2s ease-in-out;
        }

        .whatsapp-float:hover {
          animation: jump 0.4s ease;
        }

        @keyframes jump {
          0% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-10px);
          }
          50% {
            transform: translateY(0);
          }
          70% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingWhatsApp;
