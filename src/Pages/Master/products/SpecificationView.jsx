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
  TableHeader,
  TableHeaderCell,
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
    "prodspec"
  );
  //console.log(data);
  return data;
}

const SpecificationView = () => {
  const pageData = useLoaderData();

  const navigate = useNavigate();

  const editSpec = (id) => {
    //console.log(id);
    navigate(`Edit`);
  };
  const [del, setDel] = useState(false);
  const [visible, setVisible] = useState(true);

  const deleteSpec = (id) => {
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
            <Button onClick={() => editSpec(pageData.id)}>Edit</Button>
            <Button onClick={() => deleteSpec(pageData.id)}>Delete</Button>
          </GridColumn>
        </GridRow>
        <GridRow>
          <AllProductView />
        </GridRow>
        <GridRow centered>
          <h4>Style Name :</h4>
          <TableCell>{pageData.style_name}</TableCell>
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
              <TableHeaderCell>Header</TableHeaderCell>
              <TableHeaderCell>Size</TableHeaderCell>
              <TableHeaderCell>Value</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>{pageData.header}</TableCell>
              <TableCell>{pageData.size}</TableCell>
              <TableCell>{pageData.value}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
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

export default SpecificationView;
