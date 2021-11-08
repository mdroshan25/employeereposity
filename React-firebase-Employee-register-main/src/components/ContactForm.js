import React, { useEffect, useState } from "react";

const ContactForm = (props) => {
    const initialFieldValues = {
        "fullName": '',
        "Profile picture": '',
        "Age": '',
        "Work experiences": '',	
	"Start date": '',
	"End date ": '',
	"Job Title": '',
	"Company": '',
	"Company Logo": '',
	"Company description": '',
    }
    var [values, setValues] = useState(initialFieldValues)
    //Populating the form when correction is pressed
    //When there is a change in currentId, contactObjects this callback function will be called
    useEffect(() => {
        if (props.currentId == '')
            setValues({ ...initialFieldValues })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])
    //The name attribute is used because it contains every single information in the initialFieldValues vars
    //We are able to use it because of our "name" in our "input" tag
    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)
    }

    return (
        //The actual form and styling with the font-awesome icon from bootstrap
        //The values which are the const are in the var-values, which in return are int the form "value" param
        //On change is use to populate the rows with information,
        //"on Submit" function enables us to send information to firebase
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>

                    </div>

                </div>
                <input className="form-control" placeholder="Full Name" name="fullName"
                    value={values.fullName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-profilepicture-alt"></i>

                        </div>

                    </div>
                    <input className="form-control" placeholder="Profile picture" name="profile picture"
                        value={values.profilepic}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>

                        </div>

                    </div>
                    <input className="form-control" placeholder="age" name="age"
                        value={values.age}
                        onChange={handleInputChange}
                    />
                </div>

            </div>

            <div className="form-group">
                <textarea className="form-control" placeholder="work experience" name="workexperience"
                    value={values.wexp}
                    onChange={handleInputChange}
                />
            </div>
 	<div className="form-group">
                <textarea className="form-control" placeholder="start date" name="start date"
                    value={values.sdate}
                    onChange={handleInputChange}
                />
            </div>
 	<div className="form-group">
                <textarea className="form-control" placeholder="end date" name="endnote"
                    value={values.edate}
                    onChange={handleInputChange}
                />
            </div>
 	<div className="form-group">
                <textarea className="form-control" placeholder="job title" name="job title"
                    value={values.jtitle}
                    onChange={handleInputChange}
                />
 	           </div>
	 <div className="form-group">
                <textarea className="form-control" placeholder="company name" name="company name"
                    value={values.cname}
                    onChange={handleInputChange}
                />
            </div>
 	<div className="form-group">
                <textarea className="form-control" placeholder="company logo" name="company logo"
                    value={values.clogo}
                    onChange={handleInputChange}
                />
            </div>
	<div className="form-group">
                <textarea className="form-control" placeholder="company description" name="company description"
                    value={values.cdesp}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input type="submit" value={props.currentId == '' ? "Save" : "Update"} className="btn btn-primary block"></input>
            </div>

        </form>
    );
}

export default ContactForm;
//Submit button if its (?) empty string then it will be save if not then it will be update