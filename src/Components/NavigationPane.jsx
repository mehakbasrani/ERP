import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardDescription,
  CardGroup,
  Header,
  Icon,
  IconGroup,
} from "semantic-ui-react";
import "./navigationpane.css";

export default function MasterIndex() {
  return (
    <div className="container">
      <Card.Header as="h1" className="navheading">
        NAVIGATION PANE
      </Card.Header>

      <CardGroup cemtered className="cardgroup" itemsPerRow={4}>
        <Card className="navcard" href="#card-example-link-card">
          <CardDescription textAlign="center" style={{ margin: "30px" }}>
            <IconGroup size="big">
              <Icon size="big" name="circle outline" className="navicon2" />
              <Icon name="user" className="navicon" />
            </IconGroup>

            <Card.Header className="navheader" as="h3">
              Dashboard
            </Card.Header>
          </CardDescription>
        </Card>
        <Card className="navcard" href="#card-example-link-card">
          <CardDescription textAlign="center" style={{ margin: "30px" }}>
            <IconGroup size="big">
              <Icon size="big" name="circle outline" className="navicon2" />
              <Icon name="user" className="navicon" />
            </IconGroup>

            <Card.Header className="navheader" as="h3">
              Admin
            </Card.Header>
          </CardDescription>
        </Card>
        <Card className="navcard" href="#card-example-link-card">
          <CardDescription textAlign="center" style={{ margin: "30px" }}>
            <IconGroup size="big">
              <Icon size="big" name="circle outline" className="navicon2" />
              <Icon name="user" className="navicon" />
            </IconGroup>

            <Card.Header className="navheader" as="h3">
              Work Order
            </Card.Header>
          </CardDescription>
        </Card>
        <Card className="navcard" href="#card-example-link-card">
          <CardDescription textAlign="center" style={{ margin: "30px" }}>
            <IconGroup size="big">
              <Icon size="big" name="circle outline" className="navicon2" />
              <Icon name="user" className="navicon" />
            </IconGroup>

            <Card.Header className="navheader" as="h3">
              Material Management
            </Card.Header>
          </CardDescription>
        </Card>
        <Card className="navcard" href="#card-example-link-card">
          <CardDescription textAlign="center" style={{ margin: "30px" }}>
            <IconGroup size="big">
              <Icon size="big" name="circle outline" className="navicon2" />
              <Icon name="user" className="navicon" />
            </IconGroup>
            <Card.Header className="navheader" as="h3">
              Manufacturing
            </Card.Header>
          </CardDescription>
        </Card>
        <Card className="navcard" href="#card-example-link-card">
          <CardDescription textAlign="center" style={{ margin: "30px" }}>
            <IconGroup size="big">
              <Icon size="big" name="circle outline" className="navicon2" />
              <Icon name="user" className="navicon" />
            </IconGroup>

            <Card.Header className="navheader" as="h3">
              Sales
            </Card.Header>
          </CardDescription>
        </Card>
        <Card className="navcard" href="#card-example-link-card">
          <CardDescription textAlign="center" style={{ margin: "30px" }}>
            <IconGroup size="big">
              <Icon size="big" name="circle outline" className="navicon2" />
              <Icon name="user" className="navicon" />
            </IconGroup>

            <Card.Header className="navheader" as="h3">
              Inventory
            </Card.Header>
          </CardDescription>
        </Card>
        <Card className="navcard" href="#card-example-link-card">
          <CardDescription textAlign="center" style={{ margin: "30px" }}>
            <IconGroup size="big">
              <Icon size="big" name="circle outline" className="navicon2" />
              <Icon name="user" className="navicon" />
            </IconGroup>

            <Card.Header className="navheader" as="h3">
              Money
            </Card.Header>
          </CardDescription>
        </Card>
        <Card className="navcard" href="#card-example-link-card">
          <CardDescription textAlign="center" style={{ margin: "30px" }}>
            <IconGroup size="big">
              <Icon size="big" name="circle outline" className="navicon2" />
              <Icon name="user" className="navicon" />
            </IconGroup>
            <Card.Header className="navheader" as="h3">
              Inspection
            </Card.Header>
          </CardDescription>
        </Card>
        <Card className="navcard" as={Link} to="/master">
          <CardDescription textAlign="center" style={{ margin: "30px" }}>
            <IconGroup size="big">
              <Icon size="big" name="circle outline" color="#f5f5f5" />
              <Icon name="user" color="#f5f5f5" />
            </IconGroup>
            <Card.Header className="navheader" as="h3">
              Master
            </Card.Header>
          </CardDescription>
        </Card>
        <Card className="navcard" href="#card-example-link-card">
          <CardDescription textAlign="center" style={{ margin: "30px" }}>
            <IconGroup size="big">
              <Icon size="big" name="circle outline" className="navicon2" />
              <Icon name="user" className="navicon" />
            </IconGroup>
            <Card.Header className="navheader" as="h3">
              Product Gallery
            </Card.Header>
          </CardDescription>
        </Card>
        <Card className="navcard" href="#card-example-link-card">
          <CardDescription textAlign="center" style={{ margin: "30px" }}>
            <IconGroup size="big">
              <Icon size="big" name="circle outline" className="navicon2" />
              <Icon name="user" className="navicon" />
            </IconGroup>

            <Card.Header className="navheader" as="h3">
              Report
            </Card.Header>
          </CardDescription>
        </Card>
      </CardGroup>
    </div>
  );
}
