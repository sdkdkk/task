import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const notify = (data) => toast(data);
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting, errors },
    } = useForm();

    const onSubmit = (data) => {
        setIsLoading(true);
        const formData = new FormData();
        formData.append("titles", data.titles);
        formData.append("first_name", data.first_name);
        formData.append("last_name", data.last_name);
        formData.append("bio", data.bio);
        formData.append("image", data.image[0]);
        formData.append("dob", data.dob);
        formData.append("gender", data.gender);
        formData.append("guide_city", data.guide_city);
        formData.append("guide_state", data.guide_state);
        formData.append("guide_country", data.guide_country);
        formData.append("contact_number", data.contact_number);
        formData.append("whatsapp_number", data.whatsapp_number);
        formData.append("email", data.email);
        formData.append("languages", data.languages);
        formData.append("activities", data.activities);
        formData.append("hobbies", data.hobbies);
        formData.append("guide_spot_city", data.guide_spot_city);
        formData.append("guide_spot_places", data.guide_spot_places);
        formData.append("experience", data.experience);
        formData.append("price_per_day", data.price_per_day);
        formData.append("aadhar_id", data.aadhar_id[0]);
        formData.append("pan_id", data.pan_id[0]);
        formData.append("other_id", data.other_id[0]);
        formData.append("submitted_by", data.submitted_by);
        formData.append("submitted_name", data.submitted_name);
        formData.append("submitted_phone", data.submitted_phone);

        fetch(`https://ojasbarik.pythonanywhere.com/test/guide_personal_details/`, {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                setIsLoading(false);
                if (response.ok) {
                    notify("Form submitted successfully!");  // Display success message
                    reset();  // Reset the form
                } else {
                    throw new Error('Please write Proper form field');
                }
            })
            .catch((error) => {
                setIsLoading(false);
                console.error('Please write Proper form field:', error);
                notify('Please write Proper form field');  // Display error message
            });
    };


    return (
        <>
            <div class="container-fluid">
                <div className="row tourbuid">
                    <div className="col pt-4 pb-4 mx-5 partner bold">
                        Partner as Tour Guide
                    </div>
                </div>
                <div className="row">
                    <div className="col pt-4 pb-4 mx-5">
                        "A privacy policy is a crucial document that outlines how you collect, use, store, and protect user data in your app. Here is a general structure for a privacy policy, along with what to include in each section. Start with an introduction that explains the purpose of the privacy policy and its importance.Mention your apps name and a brief description off what it does.A privacy policy is a crucial document that outlines how you collect ,use,store,and protect user data in your app .here is a general structure for a privacy policy ,along with what to include in each section start with an introduction that explain the purpose of the privacy policy and its important.Mention your app name and a brief description of what it does"
                    </div>
                </div>
                <div className='row'>
                    <div className="col pt-4 pb-4 mx-5">
                        <h4>Kindly fill up these details</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <h4>Personal details</h4>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text"
                                        name="titles"
                                        className="form-control"
                                        id="titles"
                                        {...register("titles", {
                                            required: true,
                                        })}
                                    />
                                    {errors.titles && (
                                        <p className="error">Please Enter a Title</p>
                                    )}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input type="text"
                                        name="first_name"
                                        className="form-control"
                                        id="firstName"
                                        {...register("first_name", {
                                            required: true,
                                        })}
                                    />
                                    {errors.first_name && (
                                        <p className="error">Please Enter a First Name</p>
                                    )}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input type="text"
                                        name="last_name"
                                        className="form-control"
                                        id="last_name"
                                        {...register("last_name", {
                                            required: true,
                                        })}
                                    />
                                    {errors.last_name && (
                                        <p className="error">Please Enter a Last Name</p>
                                    )}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="bio" className="form-label">Bio</label>
                                    <input
                                        type="text"
                                        name="bio"
                                        className="form-control"
                                        id="bio"
                                        {...register("bio", {
                                            required: true,
                                        })}
                                    />
                                    {errors.bio && (
                                        <p className="error">Please Enter a Bio</p>
                                    )}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">Submit Your Image</label>
                                <input type="file"
                                    name="image"
                                    className="form-control"
                                    id="image"
                                    accept="image/*"
                                    {...register("image", {
                                        required: true,
                                    })} />
                                {errors.image && (
                                    <p className="error">Please Enter a image</p>
                                )}
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="dob" className="form-label">Date of Birth</label>
                                    <input type="date"
                                        name="dob"
                                        className="form-control"
                                        id="dob"
                                        {...register("dob", {
                                            required: true,
                                        })}
                                    />
                                    {errors.dob && (
                                        <p className="error">Please Enter a dob</p>
                                    )}
                                </div>
                                <div className=" col-md-6 mx-1mb-3">
                                    <label className="form-label">Gender</label>
                                    <div className='d-flex'>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="male"
                                                value="male"
                                                {...register("gender", { required: true })}
                                            />
                                            <label className="form-check-label" htmlFor="male">
                                                Male
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="female"
                                                value="female"
                                                {...register("gender", { required: true })}
                                            />
                                            <label className="form-check-label" htmlFor="female">
                                                Female
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="other"
                                                value="other"
                                                {...register("gender", { required: true })}
                                            />
                                            <label className="form-check-label" htmlFor="other">
                                                Other
                                            </label>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="mb-3">
                                <h4>Your Location</h4>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="city" className="form-label">City</label>
                                    <input type="text"
                                        name='guide_city'
                                        className="form-control"
                                        id="city"
                                        {...register("guide_city", {
                                            required: true,
                                        })} />
                                    {errors.guide_city && (
                                        <p className="error">Please Enter _city</p>
                                    )}
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <input type="text"
                                        name="guide_state"
                                        className="form-control"
                                        id="state"
                                        {...register("guide_state", {
                                            required: true,
                                        })} />
                                    {errors.guide_state && (
                                        <p className="error">Please Enter state</p>
                                    )}
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <input type="text"
                                        name="guide_country"
                                        className="form-control"
                                        id="country"
                                        {...register("guide_country", {
                                            required: true,
                                        })} />
                                    {errors.guide_country && (
                                        <p className="error">Please Enter Country</p>
                                    )}
                                </div>
                            </div>


                            <div className="mb-3">
                                <h4>Your Contact information</h4>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="city" className="form-label">Contact No</label>
                                    <input type="text"
                                        name="contact_number"
                                        className="form-control"
                                        id="contact_number"
                                        {...register("contact_number", {
                                            required: true,
                                        })}
                                    />
                                    {errors.contact_number && (
                                        <p className="error">Please Enter contact Number</p>
                                    )}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="state" className="form-label">Whatsapp No   </label>
                                    <input type="text"
                                        name="whatsapp_number"
                                        className="form-control"
                                        id="whatsapp_number"
                                        {...register("whatsapp_number", {
                                            required: true,
                                        })} />
                                    {errors.whatsapp_number && (
                                        <p className="error">Please Enter whatsapp Number Number</p>
                                    )}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="city" className="form-label">Email Id</label>
                                    <input type="text"
                                        name="email"
                                        className="form-control"
                                        id="email"
                                        {...register("email", {
                                            required: true,
                                        })}
                                    />
                                    {errors.email && (
                                        <p className="error">Please Enter Email</p>
                                    )}
                                </div>
                            </div>
                            <div className="mb-3">
                                <h4>Additional Information</h4>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="city" className="form-label">Languages</label>
                                    <input type="text"
                                        name="languages"
                                        className="form-control"
                                        id="languages"
                                        {...register("languages", {
                                            required: true,
                                        })}
                                    />
                                    {errors.languages && (
                                        <p className="error">Please Enter Languages</p>
                                    )}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="city" className="form-label">Activities</label>
                                    <input type="text"
                                        name="activities"
                                        className="form-control"
                                        id="activities"
                                        {...register("activities", {
                                            required: true,
                                        })}
                                    />
                                    {errors.activities && (
                                        <p className="error">Please Enter Activities</p>
                                    )}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="city" className="form-label">Hobbies</label>
                                    <input type="text"
                                        name="hobbies"
                                        className="form-control"
                                        id="hobbies"
                                        {...register("hobbies", {
                                            required: true,
                                        })}
                                    />
                                    {errors.hobbies && (
                                        <p className="error">Please Enter Hobbies</p>
                                    )}
                                </div>
                            </div>
                            <div className="mb-3">
                                <h4>Guide Spot</h4>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="city" className="form-label">City</label>
                                    <input type="text"
                                        name="guide_spot_city"
                                        className="form-control"
                                        id="guide_spot_city"
                                        {...register("guide_spot_city", {
                                            required: true,
                                        })}
                                    />
                                    {errors.guide_spot_city && (
                                        <p className="error">Please Enter guide_spot_city</p>
                                    )}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="state" className="form-label">Places</label>
                                    <input
                                        type="text"
                                        name="guide_spot_places"
                                        className="form-control"
                                        id="guide_spot_places"
                                        {...register("guide_spot_places", {
                                            required: true,
                                        })}
                                    />
                                    {errors.guide_spot_places && (
                                        <p className="error">Please Enter guide_spot_places</p>
                                    )}
                                </div>
                            </div>
                            <div className="mb-3">
                                <h4>Experience and price</h4>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="city" className="form-label">Years of Experience</label>
                                    <input type="text"
                                        name="experience"
                                        className="form-control"
                                        id="experience"
                                        {...register("experience", {
                                            required: true,
                                        })}
                                    />
                                    {errors.experience && (
                                        <p className="error">Please Enter experience</p>
                                    )}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="state" className="form-label">Price Per Day</label>
                                    <input type="text"
                                        name="price_per_day"
                                        className="form-control"
                                        id="price_per_day"
                                        {...register("price_per_day", {
                                            required: true,
                                        })}
                                    />
                                    {errors.price_per_day && (
                                        <p className="error">Please Enter price_per_day</p>
                                    )}
                                </div>
                            </div>
                            <div className="mb-3">
                                <h4>KYC Documents</h4>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">Aadhar Id</label>
                                <input type="file"
                                    name="aadhar_id"
                                    className="form-control"
                                    id="image"
                                    accept="image/*"
                                    {...register("aadhar_id", {
                                        required: true,
                                    })}
                                />
                                {errors.aadhar_id && (
                                    <p className="error">Please Enter aadhar_id</p>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">Pan Id</label>
                                <input type="file"
                                    name="pan_id"
                                    className="form-control"
                                    id="image"
                                    accept="image/*"
                                    {...register("pan_id", {
                                        required: true,
                                    })} />
                                {errors.pan_id && (
                                    <p className="error">Please Enter pan_id</p>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">Other Id</label>
                                <input type="file"
                                    name="other_id"
                                    className="form-control"
                                    id="image"
                                    accept="image/*"
                                    {...register("other_id", {
                                        required: true,
                                    })} />
                                {errors.other_id && (
                                    <p className="error">Please Enter other_id</p>
                                )}
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="city" className="form-label">Submitted By</label>
                                    <input type="text"
                                        name="submitted_by"
                                        className="form-control"
                                        id="submitted_by"
                                        {...register("submitted_by", {
                                            required: true,
                                        })} />
                                    {errors.submitted_by && (
                                        <p className="error">Please Enter submitted_by</p>
                                    )}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="state" className="form-label">Submitted Phone</label>
                                    <input type="text"
                                        name="submitted_phone"
                                        className="form-control"
                                        id="state"
                                        {...register("submitted_phone", {
                                            required: true,
                                        })} />
                                    {errors.submitted_phone && (
                                        <p className="error">Please Enter submitted_phone</p>
                                    )}
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary" disabled={isLoading}>
                                {isLoading ? 'Submitting...' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
