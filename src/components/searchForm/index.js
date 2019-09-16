import React from "react";
import { Formik } from "formik";
import { Form, Button } from "semantic-ui-react";
import "./searchForm.css";
let SearchForm = props => {
  const { onSubmit } = props;
  return (
    <Formik
      initialValues={{
        address: ""
      }}
      onSubmit={(values, action) => {
        onSubmit(values);
        action.setSubmitting(false);
      }}
      render={({ values, handleChange, handleBlur, handleSubmit }) => {
        return (
          <Form>
            <Form.Field>
              <input
                className="searchInput"
                id="searchInput"
                placeholder="Please input your address here"
                type="text"
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <Button
                className="searchInput"
                type="submit"
                onClick={handleSubmit}
              >
                Search Doctor
              </Button>
            </Form.Field>
          </Form>
        );
      }}
    />
  );
};
export default SearchForm;
