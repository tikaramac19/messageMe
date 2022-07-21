import React, {useRef} from "react";
import styles from "./MessageBox.module.css";
import emailjs from "emailjs-com";
const MessageBox = () => {

  const form = useRef();

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
        },
        (error) => {
          console.log(error.text);
        }
      );

      e.target.reset();
  };

  return (
    <>
      <div className={styles.container}>
        <form ref={form} onSubmit={sendEmail}>
          <div className={styles.form_group}>
            <input type="text" name="name" placeholder="name" />
          </div>
          <div className={styles.form_group}>
            <input type="email" name="email" placeholder="email" />
          </div>

          <div className={styles.msg_box}>
            <textarea
              name="message"
              id="msg"
              cols="30"
              rows="10"
              placeholder="say something..."
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
