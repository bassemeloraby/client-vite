import React from "react";
import { Form, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { customFetch } from "../utils";
const url = "allDrugs";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post(`${url}`, data);
    console.log(response)
    return redirect("/drugs");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";
      console.log(errorMessage)
    return null;
  }

};

const AddDrug = () => {
  return (
    <section className="row d-flex justify-content-center col-5">
      <div>AddDrug</div>
      <Form method="POST" className="card">
        <h4 className="text-center text-3xl font-bold">AddDrug</h4>
        <FormInput
          type="text"
          label="TradeName"
          name="TradeName"
          // defaultValue="bassem test1"
        />
        <FormInput
          type="text"
          label="ScientificName"
          name="ScientificName"
          // defaultValue="bassem test1"
        />
        <div className="mt-4">
          <SubmitBtn text="AddDrug" />
        </div>
      </Form>
    </section>
  );
};

export default AddDrug;
