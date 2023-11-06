import React from "react";
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const toastifySuccess = () => {
        toast('Information Sent!', {
            position: 'top-right',
            autoClose: 10000,
            hideProgressBar: true,
            pauseOnHover: true,
            draggable: false,
            toastId: 'notifyToast'
        });
    };

    const onSubmit = async (data) => {
        const { name, email, message } = data;
        try {
            const templateParams = {
                name,
                email,
                message
            };
            await emailjs.send(
                'service_31qfgul',
                'template_fxciubz',
                templateParams,
                'RQtfLVjm7uRv05ma-'
            );
            reset();
            toastifySuccess();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <section className="page-section" id="contact">
            <div className="container">
                <h2 className=" text-center text-uppercase text-secondary mb-5">Contact Me!</h2>

                <div className="row justify-content-center m-5">
                    <div className="col-lg-8 col-xl-7">

                        <form id="contactForm" onSubmit={handleSubmit(onSubmit)} noValidate>
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name..."
                                    name="name"
                                    {...register('name', {
                                        required: { value: true, message: 'Please enter your name' },
                                        maxLength: {
                                            value: 30,
                                            message: 'Please use 30 characters or less'
                                        }
                                    })}
                                ></input>
                                {errors.name && <span className='errorMessage alert-danger'>{errors.name.message}</span>}
                                <label htmlFor="name">Full name</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    name="email"
                                    {...register('email', {
                                        required: true,
                                        pattern: /^[a-zA-Z0-9.!#$%&*'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                    })}
                                ></input>
                                {errors.email && (
                                    <span className='errorMessage alert-danger'>Please enter a valid email address</span>
                                )}
                                <label htmlFor="email">Email address</label>
                            </div>

                            <div className="form-floating mb-3">
                                <textarea
                                    className="form-control"
                                    id="message"
                                    type="text"
                                    placeholder="Enter your message here..."
                                    style={{ height: "10rem" }}
                                    name="message"
                                    {...register('message', {
                                        required: true
                                    })}
                                ></textarea>
                                {errors.message && <span className='errorMessage alert-danger'>Please enter a message</span>}
                                <label htmlFor="message">Message</label>
                            </div>

                            <button
                                className="btn btn-primary btn-xl"
                                id="submitButton"
                                type="submit"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </section>
    );
}

export default Contact;