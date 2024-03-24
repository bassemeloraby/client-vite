import React from "react";
import { Form } from "react-router-dom";
import { SubmitBtn } from "../components";


export const action = async ({ request }) => {
  const formData = await request.formData();
console.log(formData)
}

const AddDrug = () => {
  return (
    <section className="row d-flex justify-content-center col-3">
      <div>AddDrug</div>
      <Form
        method='POST'
        className='card'
      >
      <h4 className='text-center text-3xl font-bold'>AddDrug</h4>
      <FormInput type='text' label='username' name='username' />
      <div className='mt-4'>
      <SubmitBtn text='AddDrug' />
    </div>
      </Form>
    </section>
  );
};

export default AddDrug;
