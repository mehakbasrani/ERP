import React, { useEffect, useState } from "react";
import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import { getIdEntry, getPageData, updateRecord } from "../../../Double/fun";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";
import "../partyForm.css";

import {
  TableRow,
  TableCell,
  TableBody,
  Input,
  Table,
  Button,
  Grid,
  GridRow,
  GridColumn,
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  Icon,
  TableHeader,
  TableHeaderCell,
  Header,
} from "semantic-ui-react";
import {
  MasterUrl,
  records_per_page,
} from "../../../Consts/Master/MasterUrl.const";
import { values } from "lodash-es";

export async function loader({ params }) {
  const data = await getIdEntry(
    axios,
    MasterUrl.getIdEntry,
    params.id,
    "prodbom"
  );
  return data;
}

const data = await getPageData(
  axios,
  MasterUrl.getPageData,
  records_per_page,
  1,
  "items"
);

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates2 = Object.fromEntries(formData);
  console.log(`formdata process:`);
  console.log(updates2);
  console.log(typeof updates2);
  const a = Object.keys(updates2).filter(
    (key) => key.substring(0, 3) == "bom_"
  );
  let act = "";
  console.log(
    a.map((k) => {
      console.log(updates2[k]);
      act += `${updates2[k]}**`;
    })
  );
  console.log(act.slice(0, -2));
  const updates = {
    process_name: updates2["process_name"],
    activities: act,
  };
  console.log(`updates...`);
  console.log(updates);
  console.log(params);
  const error = validation(updates);
  if (Object.keys(error).length) {
    console.log(error);
    return error;
  } else {
    const res = await updateRecord(axios, params.processId, updates, "process");

    console.log("inside upd2");
    console.log(res);
    if (res == "success") {
      toast.success("Successfully Edited");
      return redirect(`/master/process/${params.processId}`);
    } else {
      toast.error("Error");
      return null;
    }
  }

  return null;
}
const validation = (formData) => {
  const errors = {};

  Object.keys(formData).forEach((key) => {
    if (!formData[key]) {
      errors[key] = `Please fill ${key}`;
    }
  });
  console.log(errors);
  return errors;
};

export default function BOMEdit() {
  const data = useLoaderData();
  const errors = useActionData();
  const [pageData, setPageData] = useState(data);
  console.log(pageData);

  const [rows, setRows] = useState([data]);

  const [row_id, setRow_id] = useState(data.length); //1

  const handleAddRow = (e) => {
    console.log("add clicked");
    setRow_id(row_id + 1);
    console.log(`row_id:${row_id}`);
    setRows([...rows, { id: rows.length }]);
    console.log(rows);
    e.preventDefault();
  };

  const removeItem = (ind) => {
    const updatedItems = rows.filter((item) => item.id !== ind);
    console.log(updatedItems);
    setRows(updatedItems);
  };

  return (
    <>
      <Form method="post">
        <Grid verticalAlign="middle">
          <GridRow centered color="blue" className="formheader">
            <GridColumn textAlign="center" width={12}>
              {data.style_name}
            </GridColumn>
            <GridColumn
              floated="right"
              width={4}
              textAlign="right"
              verticalAlign="middle"
            >
              <Button>Submit</Button>
              <Button>Cancel</Button>
            </GridColumn>
          </GridRow>
          <GridRow>
            <h3>Style Name</h3>
            <Input name="style_name" defaultValue={data.style_name} readOnly />
          </GridRow>
          <Table
            celled
            striped
            className="tableStyle"
            className="table-responsive"
          >
            <TableHeader>
              <TableRow className="tableStyle">
                <TableHeaderCell className="icons_cell">
                  <Button className="plus_button">
                    <Icon
                      className="plus"
                      name="plus"
                      onClick={(e) => handleAddRow(e)}
                    />
                  </Button>
                </TableHeaderCell>
                <TableHeaderCell>Item Name</TableHeaderCell>
                <TableHeaderCell>Unit</TableHeaderCell>
                <TableHeaderCell>Consumption</TableHeaderCell>
                <TableHeaderCell>Rate</TableHeaderCell>
                <TableHeaderCell>Amount</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, index) => {
                return (
                  <TableRow key={row.id}>
                    <TableCell className="icons_cell">
                      <Button className="plus_button">
                        <Icon
                          className="close_btn"
                          name="close"
                          onClick={(e) => removeItem(row.id)}
                        />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Input
                        defaultValue={row.itemname}
                        placeholder="Item Name*"
                        name={`bom_name${row.id}`}
                        className="input_width"
                        error={errors?.itemname}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        defaultValue={row.unit}
                        placeholder="Unit*"
                        name={`bom_unit${row.id}`}
                        className="input_width"
                        error={errors?.unit}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        defaultValue={row.cons}
                        placeholder="Consumption*"
                        name={`bom_cons${row.id}`}
                        className="input_width"
                        error={errors?.cons}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        defaultValue={row.rate}
                        placeholder="Rate*"
                        name={`bom_rate${row.id}`}
                        className="input_width"
                        error={errors?.rate}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        defaultValue={row.amount}
                        placeholder="Amount*"
                        name={`bom_amount${row.id}`}
                        className="input_width"
                        error={errors?.amount}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Grid>
      </Form>
    </>
  );
}
