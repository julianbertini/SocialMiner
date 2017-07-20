var React = require('react')
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Modal from 'react-bootstrap/lib/Modal';
import Col from 'react-bootstrap/lib/Col';
import HelpBlock from 'react-bootstrap/lib/HelpBlock'

class SocialMinerForm extends React.Component {

  constructor() {
    super();
    this.state = {
    nameMessage: '*Required',
    detailsMessage: '*Required',
    emailMessage: '*Required',
    countryMessage: '*Required',
    phoneMessage: "*Required",
    nameValidation: 'error',
    detailsValidation: 'error',
    emailValidation: 'error',
    countryValidation: 'error',
    phoneValidation: 'error',
    author: 'Customer',
    name: 'Customer'


    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDetailsChange = this.handleDetailsChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.updateAuthor = this.updateAuthor.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
  }

  handleNameChange(e) {
    if (e.target.value.length > 0 ){
      this.setState({nameMessage: ''});
      this.setState({nameValidation: 'success'})
    } else {
      this.setState({nameMessage: '*Required'});
      this.setState({nameValidation:'error'})
    }
    this.setState({name: e.target.value})
    console.log(e.target.value)
  }
  handleDetailsChange(e) {
    if (e.target.value.length > 0 ){
      this.setState({detailsMessage: ''});
      this.setState({detailsValidation: 'success'})
    } else {
      this.setState({detailsMessage: '*Required'});
      this.setState({detailsValidation: 'error'})
    }
  }
  handleEmailChange(e) {
    if (e.target.value.length > 0) {
      this.setState({emailMessage: ''});
      this.setState({emailValidation: 'success'})
    } else {
      this.setState({emailMessage: "*Required"})
      this.setState({emailValidation: 'error'})
    }
  }
  handleCountryChange(e) {
    if (e.target.value.length > 0) {
      this.setState({countryMessage: ''});
      this.setState({countryValidation: 'success'})
    } else {
      this.setState({countryMessage: "*Required"})
      this.setState({countryValidation: 'error'})
    }
  }
  handlePhoneNumberChange(e) {
    if (e.target.value.length > 0) {
      this.setState({phoneMessage: ''});
      this.setState({phoneValidation: 'success'})
    } else {
      this.setState({phoneMessage: "*Required"})
      this.setState({phoneValidation: 'error'})
    }

  }

  getValidationState(validationType) {
    console.log()
    if (this.state.validationType == '') {
      return "success"
    } else {
      return "error"
    }
  }
  updateAuthor() {
    this.setState({author: this.state.name})
    console.log(this.state.author)
  }

    render() {
      return (
              <form action="https://csocialminer.cloverhound.com/ccp/chat/form/100020" method="post" onSubmit={this.updateAuthor}>

                <FormGroup
                  validationState={this.state.nameValidation}
                  >
                  <Col componentClass={ControlLabel} sm={2}>
                    Name
                  </Col>
                  <Col sm={10}>
                    <FormControl
                    className="style-margin-controls"
                    type="text"
                    placeholder="Enter Name"
                    name="extensionField_Name"
                    onChange={this.handleNameChange}
                    />
                    <HelpBlock className="style-move-left">{this.state.nameMessage}</HelpBlock>
                  </Col>

                </FormGroup>

                <FormGroup
                  validationState={this.state.phoneValidation}
                  >
                  <Col componentClass={ControlLabel} sm={2}>
                    Phone Number
                  </Col>
                  <Col sm={10}>
                    <FormControl
                      className="style-margin-controls"
                      type="text"
                      placeholder="Enter Phone Number"
                      name="extensionField_PhoneNumber"
                      onChange={this.handlePhoneNumberChange}
                    />
                    <HelpBlock className="style-move-left">{this.state.phoneMessage}</HelpBlock>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail"
                  validationState={this.state.emailValidation}>
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                   <FormControl
                     className="style-margin-controls"
                     type="email"
                     placeholder="Enter Email"
                     name="extensionField_Email"
                     onChange={this.handleEmailChange}
                   />
                   <HelpBlock className="style-move-left">{this.state.emailMessage}</HelpBlock>
                </Col>
              </FormGroup>

                  <FormGroup
                    validationState={this.state.detailsValidation}
                    >
                    <Col componentClass={ControlLabel} sm={2}>
                      Details
                    </Col>
                    <Col sm={10}>
                      <FormControl
                        className="style-margin-controls"
                        componentClass="textarea"
                        placeholder="Enter Details"
                        name="extensionField_Details"
                        onChange={this.handleDetailsChange}
                      />
                      <HelpBlock className="style-move-left">{this.state.detailsMessage}</HelpBlock>
                    </Col>
                  </FormGroup>


                  <FormGroup>
                  <Col componentClass={ControlLabel} sm={2}>
                    Select
                  </Col>
                  <Col sm={10}>
                   <FormControl
                     className="style-margin-controls"
                     componentClass="select"
                     name='extensionField_ccxqueuetag'
                     placeholder="Problem">
                     <option value="Chat_Csq5">Troubleshoot an Issue</option>
                   </FormControl>
                  </Col>
                </FormGroup>

                <Button bsStyle="success" type="submit">
                  Submit
                </Button>
                <input type="hidden" name="author" value={this.state.author}/><br/>
                <input type="hidden" name="title" value="ccx chat"/><br/>
                <input type="hidden" name="extensionField_h_widgetName" value="Demo Chat"/><br/>
                <input type="hidden" name="extensionField_contextServiceCustomFieldSets" value="" />
                <input type="hidden" name="extensionField_chatLogo" value="http://localhost:8081/app/logo-original-teal.png" /> <br/>
                <input type="hidden" name="extensionField_chatWaiting" value="Welcome. Please wait while we connect you to a customer care representative." />
                <input type="hidden" name="extensionField_chatAgentJoinTimeOut" value="All customer care representatives are busy. Please wait or try again later." />
                <input type="hidden" name="extensionField_chatError" value="Sorry, the chat service is currently not available. Please try again later." />
              </form>
      );
    }

}

module.exports = SocialMinerForm;
