import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
class Typography extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12"  >
            <Card>
              <CardHeader>
                <strong>Trading Risk Calculater</strong>
                {/* <small> Form</small> */}
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="name">Trcker</Label>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Input type="text" id="name" value="MGM" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="name">Risk</Label>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Input type="text" id="name" value="100" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="name">Entry</Label>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Input type="text" id="name" value="3.59" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="name">Stop</Label>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Input type="text" id="name" value="3.46" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="name">Target</Label>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Input type="text" id="name" value="4.5" required />
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

        </Row>
        <Row>
          <Col xs="12"  >
            <Card>

              <CardBody>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="name">Stop Size $</Label>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Input type="text" id="name" value="0.13" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="name">Shares</Label>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Input type="text" id="name" value="769" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="name">Investment</Label>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Input type="text" id="name" value="2762" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="name">Expected Profile</Label>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Input type="text" id="name" value="700" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="name">Profit &amp; Loss Ratio #</Label>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Input type="text" id="name" value="7.0" required />
                    </FormGroup>
                  </Col>
                </Row><Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="name">Profit  &amp; Loss Ratio #</Label>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Input type="text" id="name" value="25%" required />
                    </FormGroup>
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

export default Typography;
