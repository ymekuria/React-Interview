import {
  Button,
  Card,
  Container,
  Grid,
  FormControl,
  InputLabel,
  ListItemButton,
  ListItemText,
  MenuItem,
  TextField,
  Select,
  Switch,
  FormControlLabel
} from '@material-ui/core';

import React from 'react';
import Link from 'next/link';

import {
  Formik,
  Form,
  Field,
  FormikHelpers,
  ErrorMessage,
  yupToFormErrors
} from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().min(1).required('Enter a Name'),
  date: yup.date().required('Select a Date'),
  active: yup.boolean().required('Required'),
  age: yup.string().required('Enter an Age between 1 -70')
});

export default function Question1() {
  interface FormValues {
    name: string;
    date: Date;
    active: boolean;
    age: string;
  }

  // renders age 1-70 menuItem componets for age select dropdown
  const renderAgeSelectItems = () => {
    return [...new Array(70)].map((item, index) => {
      return (
        <MenuItem key={index + 1} value={index + 1}>
          {index + 1}
        </MenuItem>
      );
    });
  };

  return (
    <div>
      <Grid>
        <Link href="/" passHref>
          <ListItemButton component="a">
            <ListItemText>Back to Home</ListItemText>
          </ListItemButton>
        </Link>
        <Link href="/question2" passHref>
          <ListItemButton component="a">
            <ListItemText>Go to Question 2</ListItemText>
          </ListItemButton>
        </Link>
      </Grid>

      <Container style={styles.cardContainerStyle} sx={{ pt: 2 }}>
        <Card raised sx={styles.cardStyle}>
          <Formik
            initialValues={{
              name: '',
              date: new Date(),
              active: false,
              age: '0'
            }}
            validationSchema={validationSchema}
            onSubmit={(
              values: FormValues,
              { setSubmitting }: FormikHelpers<FormValues>
            ) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 500);
            }}
          >
            {({
              handleChange,
              handleSubmit,
              values,
              isSubmitting,
              touched,
              errors
            }) => (
              <Form onSubmit={handleSubmit}>
                <Grid container spacing={5}>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <Field
                        name="name"
                        size="small"
                        label="Name"
                        variant="standard"
                        onChange={handleChange}
                        value={values.name}
                        helperText={touched.name && errors.name}
                        error={touched.name && Boolean(errors.name)}
                        as={TextField}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel>Age</InputLabel>
                      <Field
                        name="age"
                        type="age"
                        variant="standard"
                        label="Age"
                        as={Select}
                        style={styles.selectStyle}
                        onChange={handleChange}
                        value={values.age}
                        helperText={touched.age && errors.age}
                        error={touched.age && Boolean(errors.age)}
                      >
                        {renderAgeSelectItems()}
                      </Field>
                    </FormControl>
                  </Grid>
                  <Grid item sx={{ height: '100%}' }} xs={12}>
                    <FormControlLabel
                      control={
                        <Field
                          name="date"
                          type="date"
                          style={styles.datePickerStyle}
                          onChange={handleChange}
                          value={values.date}
                          helperText={touched.date && errors.date}
                          error={touched.date && Boolean(errors.date)}
                        />
                      }
                      label="Date"
                      labelPlacement="end"
                    />
                    {errors.date}
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Field
                          name="active"
                          as={Switch}
                          onChange={handleChange}
                          value={values.active}
                          helperText={touched.active && errors.active}
                          error={touched.active && Boolean(errors.active)}
                        />
                      }
                      label={values.active ? 'Active' : 'Not Active'}
                      labelPlacement="end"
                    />
                  </Grid>

                  <Grid item xs={12} style={styles.buttonContainerStyle}>
                    <Button
                      type="submit"
                      variant="outlined"
                      size="large"
                      color="primary"
                      sx={styles.buttonStyle}
                      disabled={isSubmitting}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Card>
      </Container>
    </div>
  );
}
const styles = {
  cardContainerStyle: {
    marginTop: '2em',
    display: 'flex',
    justifyContent: 'space-around'
  },
  cardStyle: {
    padding: '30px',
    width: '20em'
  },
  selectStyle: {
    paddingLeft: '.7em'
  },
  datePickerStyle: {
    marginRight: '1em',
    marginLeft: '.85em',
    // paddingRight: '.3em',
    paddingLeft: '3.5em',
    height: '3em'
  },
  buttonContainerStyle: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  buttonStyle: {
    backgroundColor: '#07a7e3',
    width: '10em',
    color: '#FFFFFF'
  }
};
