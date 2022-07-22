import React, { useRef, useState, useEffect } from "react";
import styles from "./MessageBox.module.css";
import emailjs from "emailjs-com";
import swal from "sweetalert";

const MessageBox = () => {
  const initiaValues = {
    name: "",
    email: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initiaValues);
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

 
  const sendEmail = (e) => {
      e.preventDefault();
    emailjs
      .sendForm(
        "service_52vosyl",
        "template_fmdakx2",
        form.current,
        "4geYDVJkmUOBA7IZ0"
      )
      .then(
        (result) => {
          console.log(result.text);
          // alert("Message Sent !" + result.text)
          swal({
            title: "Message Sent !",
            text: "Thanks for messaging me.",
            type: "success"
        }).then(()=>{
           setFormValues(initiaValues)
        });
        },
      
      )
      .catch(error => {
        console.log(error.text);
      })
     

    e.target.reset();
  };

  return (
    <>
      <div className={styles.container}>
        <form ref={form} onSubmit={sendEmail}>
          <div className={styles.form_group}>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={formValues.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.form_group}>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.msg_box}>
            <textarea
              name="message"
              id="msg"
              cols="30"
              rows="10"
              placeholder="say something..."
              value={formValues.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className={styles.btn}>
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </>
  );
};

export default MessageBox;
