// Popup.js
import React, { useState } from 'react';



const Popup = ({ isOpen, onClose }) => {

  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    setLoading(true);
    setResponseMessage('');

    try {
      // Simulate API call or actual submission logic here
      const response = await fetch('https://admin.mavininfotech.com/emplogin/mailpassword.php', {
        method: 'POST',
        body: new URLSearchParams({
          formemail: email,
          text: '',
        }),
      });

        const data = await response.text(); // Get response as text (as per your format)

      // Set the response text message directly in the state
      setResponseMessage(data);
    } catch (error) {
      setResponseMessage('<h4>There was an error. Please try again.</h4>');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">

          
            <div> 
<a href="javascript:void(0)" class="close_login_box">
<span onClick={onClose} class="closebtn">x</span> </a>
  
<div class="accordion-inner" id="login_inner">
                                        <form action="https://email.secureserver.net/login.php" method="post" name="login_form" id="login_form">
                                        <h5>Webmail Login</h5>
    <table cellpadding="0" cellspacing="0" width="100%" align="center">
        <tbody>
                      <tr>
                <td class="content">
                    <input type="text"  name="username" class="form-control" size="26" required placeholder="Username" />
                    <input type="hidden" name="domain" value="mavininfotech.com" />
                </td>
            </tr>
           
            <tr>
                <td class="content">
                    <input type="password" name="password" class="form-control" size="26" required="" placeholder="Password" />
                </td>
            </tr>
           
            <tr>
                <td colspan="2">
                    <input name="button" type="submit" class="btn default-btn" id="button" value="Submit" onclick="javascript: return form_login();" />
                    </td>
            </tr>
            
        </tbody>
    </table>
</form>
                                    </div>
                                    
                                    <div class="accordion-inner timesheetlog" id="login_inner">
                                   <form method="post" action="https://admin.mavininfotech.com/emplogin/processlogin.php" name="timesheet">
                                  <h5>Employee System Login</h5>
    <table cellpadding="0" cellspacing="0" width="100%" align="center">
        <tbody>
            
          
            <tr>
                <td class="content">
                    <input type="text" name="formlogin" class="form-control" size="26" required placeholder="Username" />
                    <input type="hidden" name="domain" value="mavininfotech.com" />
                </td>
            </tr>
           
            <tr>
                <td class="content">
                    <input type="password" name="formpassword" class="form-control" size="26" required placeholder="Password" />
                </td>
            </tr>
            
            <tr>
                <td colspan="2">
  <input name="button" type="submit" class="btn default-btn" id="button" value="Submit" onclick="javascript: return validate();" />
                    
                 </td>
            </tr>
            <tr>
             
           </tr>
        </tbody>
    </table>
</form>
                                </div>
    
     <div class="accordion-inner">
     <h5>Forgot Password</h5>
                  {/* Response Message */}
            {responseMessage && (
               <div
        className="response-message"
        dangerouslySetInnerHTML={{ __html: responseMessage }}
      />
            )}

    <form onSubmit={handleForgotPassword}>
                	<table width="100%"  cellspacing="0" cellpadding="0" align="center">

                      <tbody>
    <tr> 
            
                        <td class="content"> 
              <input
                        type="email"
                        className="form-control"
                        name="formemail"
                        required
                        id="txtToMail"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                          
            </td>
            
                      </tr>
            <tr style={{ height: '50px' }}><td><input type="hidden" name="text" value="" /></td></tr>
                    <tr>
                <td colspan="2">
                          <input name="button" type="submit" class="btn default-btn" id="button" value={loading ? "Sending..." : "Email my Password"}
  disabled={loading}/>
  

                   </td>
            </tr>
            <tr>
             
           </tr>
        </tbody>
    </table>
          
                </form>
    </div>
                                <div class="accordion-inner">
                                       <form action="https://admin.mavininfotech.com/emplogin/client/logincheck.php?ok=1" method="post" name="login_form" id="login_form">
                                       <h5>Client Login</h5>
    <table cellpadding="0" cellspacing="0" width="100%" align="center">
        <tbody>
            
           
            <tr>
                <td class="content">
                    <input type="text" name="username" class="form-control" size="26" required placeholder="Username" />
                    <input type="hidden" name="domain" value="mavininfotech.com" />
                </td>
            </tr>
            
            <tr>
                <td class="content">
                    <input type="password" name="password" class="form-control" size="26" required placeholder="Password" />
                </td>
            </tr>
           
            <tr>
                <td colspan="2">
                    <input name="button" type="submit" class="btn default-btn" id="button" value="Submit" onclick="javascript: return validate();" />
                    </td>
            </tr>
            <tr>
              
           </tr>
        </tbody>
    </table>
 
</form>
                                    </div>
 
                                    
                                    
</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
