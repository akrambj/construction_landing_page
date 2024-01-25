import { useEffect, useRef, useState } from "react";
import contactImg from "../../../assets/imgs/contact/contactImg.jpg";
import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [loading, setLoading] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    if (popUp) {
      controls.start({ opacity: 1, x: 0 });
      setTimeout(() => {
        controls.start({ opacity: 0, x: 1000 }); // Move off-screen
        setPopUp(false);
      }, 3000); // 3 seconds timeout
    }
  }, [popUp, controls]);

  useEffect(() => {
    const handleScroll = () => {
      const contact = document.getElementById("contact");
      if (contact) {
        const rect = contact.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "guirri-bat",
        "template_za4fkkj",
        form.current,
        "0ljXnVIHI8YBihGbp"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("submitted");
          setLoading(false);
          setPopUp(true);
          e.target.reset();
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="w-screen b h-screen py-10 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      style={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
    >
      <div className="w-full h-full flex items-center flex-col lg:flex-row">
        <motion.div
          className="w-[45%] h-full"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            className="w-full h-full object-cover"
            src={contactImg}
            alt="contact"
          />
        </motion.div>
        <motion.div
          className="w-[50%] h-[100%] flex flex-col justify-center gap-5 "
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="text-center">
            <h2 className="text-green-primary font-black text-4xl">
              CONTACTEZ NOUS
            </h2>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex  pb-2justify-center focus-within:border-transparent items-center flex-wrap gap-x-10 gap-y-14  w-[60%] mx-auto"
          >
            <input
              className="w-[45%]  focus:outline-none focus:border-green-primary focus:font-bold duration-300 pb-2 placeholder:text-black bg-transparent border-b-2 border-b-[#545454]"
              type="text"
              placeholder="Le Nom"
              name="first_name"
            />
            <input
              className="w-[45%] focus:outline-none focus:border-green-primary focus:font-bold duration-300 pb-2 placeholder:text-black bg-transparent border-b-2 border-b-[#545454]"
              type="text"
              placeholder="Prénom"
              name="last_name"
            />
            <input
              className="w-[45%] focus:outline-none focus:border-green-primary focus:font-bold duration-300 pb-2 placeholder:text-black bg-transparent border-b-2 border-b-[#545454]"
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />
            <input
              className="w-[45%] focus:outline-none focus:border-green-primary focus:font-bold duration-300 pb-2 placeholder:text-black bg-transparent border-b-2 border-b-[#545454]"
              type="number"
              placeholder="Téléphone"
              name="phone_number"
              required
            />
            <input
              className="w-[95%] focus:outline-none focus:border-green-primary focus:font-bold duration-300 pb-2 placeholder:text-black bg-transparent border-b-2 border-b-[#545454]"
              type="text"
              placeholder="Sujet"
              name="user_subject"
            />
            <textarea
              name="message"
              className="w-[95%] focus:outline-none focus:border-green-primary focus:font-bold duration-300  placeholder:text-black bg-transparent border-b-2 border-b-[#545454] h-[130px]"
              placeholder="Message ...."
              required
            />
            <button
              className="bg-green-primary hover:bg-black duration-300 w-full text-white font-bold  py-2 rounded-[20px] text-lg"
              type="submit"
              value={"send"}
            >
              {loading ? <div className="spinner"></div> : "Envoyer"}
            </button>
          </form>
        </motion.div>
      </div>
      {popUp && (
        <motion.div
          className="bg-white text-green-primary drop-shadow-lg font-bold absolute top-10 right-10 border-b-2 border-green-primary p-4 flex items-center rounded-md w-[20%]"
          initial={{ opacity: 0, x: 1000 }}
          animate={controls}
        >
          <FaCheckCircle className="mr-2" />
          Email sent!
        </motion.div>
      )}
    </motion.section>
  );
};

export default Contact;
