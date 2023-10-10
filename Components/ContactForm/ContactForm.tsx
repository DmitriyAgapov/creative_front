import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <div className={styles.ContactForm + " " + "contact__form"}>
      <form action="assets/mail.php" method="POST">
        <div className="row g-3">
          <div className="col-xxl-6 col-xl-6 col-12">
            <input type="text" name="name" placeholder="Name *" />
          </div>
          <div className="col-xxl-6 col-xl-6 col-12">
            <input type="email" name="email" placeholder="Email *" />
          </div>
        </div>
        <div className="row g-3">
          <div className="col-xxl-6 col-xl-6 col-12">
            <input type="tel" name="phone" placeholder="Phone" />
          </div>
          <div className="col-xxl-6 col-xl-6 col-12">
            <input type="text" name="subject" placeholder="Subject *" />
          </div>
        </div>
        <div className="row g-3">
          <div className="col-12">
            <textarea name="message" placeholder="Messages *"></textarea>
          </div>
        </div>
        <div className="row g-3">
          <div className="col-12">
            <div className="btn_wrapper">
              <button className="wc-btn-primary btn-hover btn-item">
                <span></span> Send <br />
                Messages <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
