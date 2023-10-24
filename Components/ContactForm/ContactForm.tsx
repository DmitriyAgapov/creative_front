import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <div className={styles.ContactForm + " " + "contact__form"}>
      <form action="assets/mail.php" method="POST">
        <div className="row g-3">
          <div className="col-xxl-4 col-xl-4 col-12">
            <input type="text" name="name" required={true} placeholder="Name *" />
          </div>
          <div className="col-xxl-4 col-xl-4 col-12">
            <input type="email" name="email" required={true} placeholder="Email *" />
          </div>
          <div className="col-xxl-4 col-xl-4 col-12">
            <input type="tel" name="phone" required={true} placeholder="Phone  *" />
          </div>
        </div>

        <div className="row g-3">
          <div className="col-12">
            <textarea name="message" placeholder="Message *"></textarea>
          </div>
        </div>
        <div className="row g-3">
          <div className="col-12">
            <div className="btn_wrapper">
              <button className="wc-btn-primary btn-hover btn-item">
                <span></span> Send <br />
                Message <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
