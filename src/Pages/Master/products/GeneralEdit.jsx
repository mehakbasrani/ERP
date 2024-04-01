import React, { useEffect, useState } from "react";
import { Form, redirect, useActionData, useLoaderData } from "react-router-dom";
import { getIdEntry, getPageData, updateRecord } from "../../../Double/fun";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";
// import "./partyForm.css";

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
} from "semantic-ui-react";
import {
  MasterUrl,
  records_per_page,
} from "../../../Consts/Master/MasterUrl.const";

export async function loader({ params }) {
  //console.log(params);

  const data = await getIdEntry(
    axios,
    MasterUrl.getIdEntry,
    params.id,
    "prodgen"
  );
  //console.log(`inside loader General edit:`);
  //console.log(data);
  return data;
}
export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(`formdata:`);
  console.log(updates);
  //console.log(params);
  const error = validation(updates);
  if (Object.keys(error).length) {
    console.log(error);
    return error;
  } else {
    const res = await updateRecord(axios, params.generalId, updates, "prodgen");

    if (res == "success") {
      toast.success("Successfully Edited");
      return redirect(`/master/product/general/${params.generalId}`);
    } else {
      toast.error("Error");
      return null;
    }
  }

  //return null;
}
const validation = (formData) => {
  const errors = {};

  Object.keys(formData).forEach((key) => {
    if (!formData[key]) {
      errors[key] = `Please fill ${key}`;
    }
  });
  //console.log(errors);
  return errors;
};

export default function GeneralEdit() {
  const data = useLoaderData();
  const errors = useActionData();
  const [search, setSearch] = useState("");
  const [post, setPost] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getPageData(
          axios,
          MasterUrl.getPageData,
          records_per_page,
          1,
          "prodgen"
        );
        //console.log(data);
        setPost(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const [isInputFocused, setInputFocused] = useState(false);
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
          {isInputFocused && (
            <Grid.Column floated="right" width={3}>
              <Card>
                <CardContent>
                  {post
                    .filter((item) => {
                      return search.toUpperCase() === ""
                        ? item
                        : item.style_name.includes(search);
                    })
                    .map((item) => (
                      <CardDescription style={{ fontWeight: "bold" }}>
                        {item.style_name}
                      </CardDescription>
                    ))}
                </CardContent>
              </Card>
            </Grid.Column>
          )}

          <GridRow centered>
            <Table
              className="borderless-table"
              basic="very"
              collapsing
              style={{ maxWidth: "1200px" }}
            >
              <TableBody>
                <TableRow>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    className="formheader"
                  >
                    Style Name
                  </TableCell>
                  <TableCell>
                    <Input
                      onFocus={() => setInputFocused(true)}
                      onBlur={() => setInputFocused(false)}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Style Name*"
                      name="style_name"
                      className="form__input"
                      defaultValue={data.style_name}
                      error={errors?.style_name}
                    />
                  </TableCell>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    className="formheader"
                  >
                    Reference
                  </TableCell>
                  <TableCell>
                    <Input
                      name="reference"
                      placeholder="Reference*"
                      defaultValue={data.reference}
                      error={errors?.reference}
                    />
                  </TableCell>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    className="formheader"
                  >
                    Season
                  </TableCell>
                  <TableCell>
                    <Input
                      name="season"
                      placeholder="Season*"
                      defaultValue={data.season}
                      error={errors?.season}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    className="formheader"
                  >
                    Category
                  </TableCell>
                  <TableCell>
                    <Input
                      name="catagory"
                      placeholder="Category*"
                      defaultValue={data.catagory}
                      error={errors?.catagory}
                    />
                  </TableCell>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    className="formheader"
                  >
                    MSC1
                  </TableCell>
                  <TableCell>
                    <Input
                      name="msc1"
                      placeholder="MSC1*"
                      defaultValue={data.msc1}
                      error={errors?.msc1}
                    />
                  </TableCell>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    className="formheader"
                  >
                    MSC2
                  </TableCell>
                  <TableCell>
                    <Input
                      name="msc2"
                      placeholder="MSC2*"
                      defaultValue={data.msc2}
                      error={errors?.msc2}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    className="formheader"
                  >
                    MSC3
                  </TableCell>
                  <TableCell>
                    <Input
                      name="msc3"
                      placeholder="MSC3*"
                      defaultValue={data.msc3}
                      error={errors?.msc3}
                    />
                  </TableCell>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    className="formheader"
                  >
                    MSC4
                  </TableCell>
                  <TableCell>
                    <Input
                      name="msc4"
                      placeholder="MSC4*"
                      defaultValue={data.msc4}
                      error={errors?.msc4}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </GridRow>
        </Grid>
      </Form>
    </>
  );
}
