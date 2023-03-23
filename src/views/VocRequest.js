/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Row,
  Col,
  FormGroup,
  Input,
  Label,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
} from "reactstrap";

function VocRequest() {
  return (
    <>
      <div className="content">
        <Row>
          <Col className="ml-auto mr-auto" md="10">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">VOC Request</CardTitle>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label for="exampleAddress">Title</Label>
                  <Input
                    id="exampleAddress"
                    name="address"
                    placeholder="Title"
                  />
                  <Label for="exampleAddress">Content</Label>
                  <Input
                    type="textarea"
                    id="exampleAddress"
                    name="address"
                    placeholder="Content"
                  />
                </FormGroup>
                <Row>
                  <div className="update ml-auto mr-auto">
                    <Button className="btn-round" color="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default VocRequest;
