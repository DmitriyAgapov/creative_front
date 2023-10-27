'use client'
import styles from "./ContactForm.module.scss";
import * as Yup from 'yup';
import  "yup-phone";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const DisplayingErrorMessagesSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    email: Yup.string().email('Invalid email').required('Required'),
});
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Field,
  FieldProps, FormikErrors,
} from "formik";
import { SendFetch } from "@/utils/utils";

interface FormValues {
  name: string
  email: string
  phone: string
  message: string
}
const ContactForm = ({ inputs, submit, type, title }: { inputs?: string[], submit?: string, type?: string, title?: string }) => {
  const initialValues : FormValues = { name: '', phone: '', email: '', message: '' }

    function validateUsername(value:string) {
        let error;
        if (value.length < 3) {
            error = 'length must be greate then 3 symbols';
        }
        return error;
    }
  return (
      <Formik initialValues={initialValues}
          validate={(values): FormValues => {
            const errors : FormikErrors<FormValues> = {};
            if (!values.name) {
              errors.name = 'Required';
            } else if (
                validateUsername(values.name)
            ) {
              errors.name = 'Invalid Name, length must be greate then 3 symbols'
            }

            if (!values.email) {
              errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.phone) {
              errors.phone = 'Required';
            } else if (
                !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(values.phone)
            ) {
              errors.phone = 'Invalid Phone Number';
            }
            return errors as FormValues;
          }}

          onSubmit={(values, { setSubmitting }) => {


            setTimeout( () => {



              // alert(JSON.stringify(values, null, 2));
              SendFetch(values);
              // setSubmitting(false);
            }, 400);
          }}
          validationSchema={DisplayingErrorMessagesSchema}
          onReset={(values, { setSubmitting }) => {


              setTimeout( () => {

                  setSubmitting(false);
              }, 400);
          }}

      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
            validateForm,
            handleReset,
          isSubmitting,
          /* and other goodies */
        }) => !isSubmitting ? (
    <div className={styles.ContactForm + " " + "contact__form"}>
      <form  onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-xxl-4 col-xl-4 col-12">
            <Field  type="text" required={true} name="name"
                placeholder={"Name *"}
                // onChange={handleChange}
                // onBlur={handleBlur}
                // validate={validateUsername}
                value={values.name}  />
            <span className={"form__errors"}>
                              {errors.name && errors.name}
                         </span>
          </div>
          <div className="col-xxl-4 col-xl-4 col-12">
            <Field  name="email"
                placeholder="Email *"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}  />
            <span className={"form__errors"}>
                              {errors.email && touched.email && errors.email}
                         </span>
          </div>
          <div className="col-xxl-4 col-xl-4 col-12">
            <Field  type="tel"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={"Phone *"}
                value={values.phone}/>
            <span className={"form__errors"}>
                                 {errors.phone && touched.phone && errors.phone}
                        </span>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-12">
            <Field  name="message" onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Message"
                value={values.message}></Field >
            <span className={"form__errors"}>
                                 {errors.message && touched.message && errors.message}
                        </span>
          </div>
        </div>
        <div className="row g-3">
          <div className="col-12">
            <div className="btn_wrapper">
              <button  className={`wc-btn-primary btn-hover btn-item`}
                    onClick={() => validateForm().then(() => console.log('blah'))}
                  type="submit"
                  disabled={isSubmitting}>
                <span></span> Send <br />
                Message <i className="fa-solid fa-arrow-right"></i>
                {submit}
              </button>

            </div>
          </div>
        </div>
      </form>
    </div>
            ):
            (<div className={'mb-32'}><h4 className={'result'} style={{textAlign: "center"}}>Thank you for reaching out.<br/> We will contact you within: <strong style={{    color: "var(--text)",
              fontSize: "xxx-large", display: "block"}}>24 hours.</strong></h4><button onClick={handleReset} className={'wc-btn-primary btn-hover btn-item mb-32'} type="reset">Reset</button></div>)
        }
      </Formik>
  );
};

export default ContactForm;
