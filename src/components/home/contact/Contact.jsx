import { useRef } from "react";
import contactImg from "../../../assets/imgs/contact/contactImg.svg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
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
          console.log("submited");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="w-screen  b h-screen py-10">
      <div className="w-full h-full flex items-center  flex-col lg:flex-row">
        <div className="w-[45%] h-full ">
          <img
            className="w-full h-full object-cover"
            src={contactImg}
            alt="contact"
          />
        </div>
        <div className="w-[50%] h-[100%]  flex flex-col justify-center gap-5 ">
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
            />
            <input
              className="w-[45%] focus:outline-none focus:border-green-primary focus:font-bold duration-300 pb-2 placeholder:text-black bg-transparent border-b-2 border-b-[#545454]"
              type="number"
              placeholder="Téléphone"
              name="phone_number"
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
            />
            <button
              className="bg-green-primary hover:bg-black duration-300 w-full text-white font-bold  py-2 rounded-[20px] text-lg"
              type="submit"
              value={"send"}
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
