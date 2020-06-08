import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
// import { Row, Col } from 'reactstrap'
import { rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities'
import { Button, Card, CardBody, CardHeader, Col, Container, Jumbotron, Row, Label, Input, FormGroup, } from 'reactstrap';

class ThemeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: 'rgb(255, 255, 255)'
    }
  }

  componentDidMount() {
    const elem = ReactDOM.findDOMNode(this).parentNode.firstChild
    const color = window.getComputedStyle(elem).getPropertyValue('background-color')
    this.setState({
      bgColor: color || this.state.bgColor
    })
  }

  render() {

    return (
      <table className="w-100">
        <tbody>
          <tr>
            <td className="text-muted">HEX:</td>
            <td className="font-weight-bold">{rgbToHex(this.state.bgColor)}</td>
          </tr>
          <tr>
            <td className="text-muted">RGB:</td>
            <td className="font-weight-bold">{this.state.bgColor}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

class ThemeColor extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {

    // const { className, children, ...attributes } = this.props
    const { className, children } = this.props

    const classes = classNames(className, 'theme-color w-75 rounded mb-3')

    return (
      <Col xl="2" md="4" sm="6" xs="12" className="mb-4">
        <div className={classes} style={{ paddingTop: '75%' }}></div>
        {children}
        <ThemeView />
      </Col>
    )
  }
}

class Colors extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>User Details</strong>
                {/* <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/jumbotron/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a>
                </div> */}
              </CardHeader>
              <CardBody>
                <Jumbotron>
                  <img src={'../../assets/img/avatars/5.jpg'} alt="" style={{ borderRedius: '50%' }}></img>
                  {/* <h1 className="display-3">Hello, world!</h1> */}
                  <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra
                    attention to featured content or information.</p>
                  <hr className="my-2" />
                  <p><strong>Name:</strong> Smith </p>
                  <p><strong>Email Id:</strong> smith@gmail.com </p>
                  <p><strong>Mobile Number:</strong> 1234567890</p>
                  <p><strong>Country:</strong> India </p>
                  {/* <p className="lead">
                    <Button color="primary">Learn More</Button>
                  </p> */}
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardHeader>
                <strong>Change Password</strong>
                {/* <small> Form</small> */}
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="name">Username</Label>
                      <Input type="text" id="name" placeholder="Enter your username" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Old Password</Label>
                      <Input type="text" id="ccnumber" placeholder="Enter your old password" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="ccnumber">New Password</Label>
                      <Input type="text" id="ccnumber" placeholder="Enter ne password" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Confirm Password</Label>
                      <Input type="text" id="ccnumber" placeholder="Confirm pssword" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>


                  <Col xs="4">
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                      <Button block color="primary">Primary</Button>
                    </Col>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Colors;
