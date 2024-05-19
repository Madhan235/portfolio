import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {toast} from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    const { user_name, user_email, message } = formData;

    if (!user_name || !user_email || !message) {
       
        toast.error("Please fill out all fields");
        return;
    }

   

    emailjs
      .sendForm("service_nq05si4", "template_u375uen", e.target, {
        publicKey: "wnSpS1F0lU7KqSXrw",
      })
      .then(
        () => {
          console.log("33",e.target)
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
          toast.success("SUCCESS!");
        },
        (error) => {
          toast.error("FAILED...", error.text);
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 
  return (
    <>
      <div className="border-b border-neutral-900 pb-20">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-center text-4xl"
        >
          Get in Touch
        </motion.h2>
        <div className="text-center tracking-tighter">
          <motion.a
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            href="#"
            className="border-b"
          >
            {CONTACT.email}
          </motion.a>
        </div>
      </div>

      <div className="text-center flex justify-center align-center">
        <form
          onSubmit={sendEmail}
          className="flex flex-col gap-2 w-[80%] lg:w-1/3 "
        >
          <label>Name</label>
          <motion.input
           whileInView={{ opacity: 1, x: 0 }}
           initial={{ opacity: 0, x: 100 }}
           transition={{ duration: 0.5 }}
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleInputChange}
            className="bg-inherit border rounded-lg px-3 font-italic"
          />
          <label>Email</label>
          <motion.input
           whileInView={{ opacity: 1, x: 0 }}
           initial={{ opacity: 0, x: -100 }}
           transition={{ duration: 0.5 }}
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleInputChange}
            className="bg-inherit border rounded-lg px-3 font-italic"
          />
          <label>Message</label>
          <motion.textarea
           whileInView={{ opacity: 1, x: 0 }}
           initial={{ opacity: 0, x: 100 }}
           transition={{ duration: 0.5 }}
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            className="bg-inherit border rounded-lg px-3 font-italic"
          />
          <motion.input
           whileInView={{ opacity: 1, x: 0 }}
           initial={{ opacity: 0, x: -100 }}
           transition={{ duration: 0.5 }}
            type="submit"
            value="Send"
            className="border px-2 mb-2 rounded-lg cursor-pointer"
          />
        </form>
      </div>
    </>
  );
}
