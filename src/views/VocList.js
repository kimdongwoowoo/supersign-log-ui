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
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";

function VocList() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <FormGroup row>
                  <Col md={8} />

                  <Col md={4}>
                    <Input
                      id="exampleSearch"
                      name="search"
                      placeholder="search"
                      type="search"
                    />
                  </Col>
                </FormGroup>
              </CardHeader>
              <CardBody>
                <Table>
                  <thead>
                    <tr>
                      <th>UID</th>
                      <th>Creator</th>
                      <th>Title</th>
                      <th>Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>Niger</td>

                      <td>$36,738</td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>Jon Porter</td>
                      <td>Portugal</td>

                      <td>$98,615</td>
                    </tr>
                  </tbody>
                </Table>
                {/*
                <Row>
                  <Col xs={9} />
                  <Col className="mr-0" xs={3}>
                    <Label>Showing 76 to 100 of 7,384 entries</Label>
                  </Col>
                </Row>
                */}
                <Row>
                  <div className="update ml-auto mr-auto">
                    <Button>PREV</Button>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                    <Button>NEXT</Button>
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

export default VocList;
