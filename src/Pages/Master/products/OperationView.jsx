import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import {
  Input,
  Table,
  Button,
  Grid,
  GridRow,
  GridColumn,
  TableRow,
  TableBody,
  TableCell,
  Message,
  MessageHeader,
  TableHeaderCell,
  TableHeader,
  Header,
} from "semantic-ui-react";
import { MasterUrl } from "../../../Consts/Master/MasterUrl.const";
import { getIdEntry } from "../../../Double/fun";
import { useParams } from "react-router-dom";
import AllProductView from "./AllProductView";
//import "./partyForm.css";
export async function loader({ params }) {
  //console.log(`inside loader unitview:`);
  //console.log(params);

  const data = await getIdEntry(
    axios,
    MasterUrl.getIdEntry,
    params.id,
    "prodop"
  );
  //console.log(data);
  return data;
}

const OperationView = () => {
  const pageData = useLoaderData();

  const navigate = useNavigate();

  const editOp = (id) => {
    //console.log(id);
    navigate(`Edit`);
  };
  const [del, setDel] = useState(false);
  const [visible, setVisible] = useState(true);

  const deleteOp = (id) => {
    setDel(true);
  };

  const handleDismiss = () => {
    setVisible(false);
  };

  return (
    <>
      <Grid verticalAlign="middle">
        <GridRow centered color="blue" className="formheader">
          <GridColumn textAlign="center" width={12}>
            {pageData.style_name}
          </GridColumn>
          <GridColumn
            floated="right"
            width={4}
            // color="red"
            textAlign="right"
            verticalAlign="middle"
          >
            <Button onClick={() => editOp(pageData.id)}>Edit</Button>
            <Button onClick={() => deleteOp(pageData.id)}>Delete</Button>
          </GridColumn>
        </GridRow>
        <GridRow centered>
          <h3>Style Name</h3>
          <Header name="style_name">{pageData.style_name}</Header>
        </GridRow>
        <Table
          centered
          celled
          striped
          className="tableStyle"
          className="table-responsive"
        >
          <TableHeader>
            <TableRow className="tableStyle">
              <TableHeaderCell>Operation Name</TableHeaderCell>
              <TableHeaderCell>Operation Short Name</TableHeaderCell>
              <TableHeaderCell>Machine</TableHeaderCell>
              <TableHeaderCell>Time</TableHeaderCell>
              <TableHeaderCell>Rate</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>{pageData.opname}</TableCell>
              <TableCell>{pageData.opshname}</TableCell>
              <TableCell>{pageData.machine}</TableCell>
              <TableCell>{pageData.time}</TableCell>
              <TableCell>{pageData.rate}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <GridRow>
          <AllProductView />
        </GridRow>
      </Grid>
      {del && visible && (
        <Message warning style={{ textAlign: "center" }}>
          <MessageHeader>
            Are you sure you want to delete this entry?
          </MessageHeader>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button>Yes</Button>
            <Button onClick={handleDismiss}>No</Button>
          </div>
        </Message>
      )}
    </>
  );
};

export default OperationView;
