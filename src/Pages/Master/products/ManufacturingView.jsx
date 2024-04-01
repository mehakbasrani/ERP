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
} from "semantic-ui-react";
import { MasterUrl } from "../../../Consts/Master/MasterUrl.const";
import { getIdEntry } from "../../../Double/fun";
import { useParams } from "react-router-dom";
import AllProductView from "./AllProductView";
//import "./partyForm.css";
export async function loader({ params }) {
  const data = await getIdEntry(
    axios,
    MasterUrl.getIdEntry,
    params.id,
    "prodmfg"
  );
  //console.log(data);
  return data;
}
const ManufacturingView = () => {
  const pageData = useLoaderData();
  console.log(pageData);
  const navigate = useNavigate();

  const editMfg = (id) => {
    //console.log(id);
    navigate(`Edit`);
  };
  const [del, setDel] = useState(false);
  const [visible, setVisible] = useState(true);

  const deleteMfg = (id) => {
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
            <Button onClick={() => editMfg(pageData.id)}>Edit</Button>
            <Button onClick={() => deleteMfg(pageData.id)}>Delete</Button>
          </GridColumn>
        </GridRow>
        <GridRow centered>
          <Table
            className="borderless-table"
            basic="very"
            //collapsing
            style={{ maxWidth: "1200px" }}
          >
            <TableBody>
              <TableRow>
                <TableCell className="formheader">Style ID</TableCell>
                <TableCell>{pageData.style_id}</TableCell>
                <TableCell className="formheader">Style Name</TableCell>
                <TableCell>{pageData.style_name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="formheader">Process</TableCell>
                <TableCell>{pageData.process}</TableCell>
                <TableCell className="formheader">Cost</TableCell>
                <TableCell>{pageData.cost}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <GridRow>
            <AllProductView />
          </GridRow>
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

export default ManufacturingView;
