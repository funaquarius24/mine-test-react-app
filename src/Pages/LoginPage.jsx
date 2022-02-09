import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./LoginPage.css";

export default function LoginPage() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    // <!-- content begin -->
    
    <div className="full-height relative no-top no-bottom vertical-center" data-bgimage="url(images/background/subheader.jpg) top" data-stellar-background-ratio=".5">
        <div className="overlay-gradient t50">
            <div className="center-y relative">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 text-light fadeInRight">
                        <div className="spacer-10"></div>
                        <h1>Create, sell or collect digital items.</h1>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
                        
                        <div className="col-lg-4 offset-lg-2 fadeIn">
                            <div className="box-rounded padding40 sign-in-box" >
                                <h3 className="mb10">Sign In</h3>
                                <p>Login using an existing account or create a new account <a href="register.html">here<span></span></a>.</p>
                                <form name="contactForm" id='contact_form' className="form-border" method="post" action='blank.php'>

                                    <div className="field-set">
                                        <input type='text' name='email' id='email' className="form-control" placeholder="username" />
                                    </div>
                                    
                                     <div className="field-set">
                                        <input type='password' name='password' id='password' className="form-control" placeholder="password" />
                                    </div>
                                    
                                    <div className="field-set">
                                        <input type='submit' id='send_message' value='Submit' className="btn btn-main btn-fullwidth color-2" />
                                    </div>
                                    
                                    <div className="clearfix"></div>
                                    
                                    <div className="spacer-single"></div>

                                {/* <!-- social icons --> */}
                                <ul className="list s3">
                                    <li>Login with:</li>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Google</a></li>
                                </ul>
                                {/* <!-- social icons close --> */}
                        </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>		
    
  );

  return (
    <div className="login login-container">
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
    </div>
  );
}