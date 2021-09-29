import {
  Card,
  Container,
  Grid,
  ListItemButton,
  ListItemText,
  Typography,
  Button
} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

interface InputData {
  id: string;
  name: 'test';
}

export default function Question2() {
  // I chose to put all the validation and transformation logic in the api/questionTwoApi file to seperate
  const handleApiRequest = async (inputData: InputData[]) => {
    try {
      console.log('request input:', inputData);
      const res = await axios({
        method: 'post',
        url: '/api/questionTwoApi',
        data: inputData
      });
      console.log('response:', res.data);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <Container sx={{ pt: 2 }}>
      <Grid>
        <Link href="/question1" passHref>
          <ListItemButton component="a">
            <ListItemText>Go to Question 1</ListItemText>
          </ListItemButton>
        </Link>
        <Link href="/question3" passHref>
          <ListItemButton component="a">
            <ListItemText>Go to Question 3</ListItemText>
          </ListItemButton>
        </Link>
      </Grid>
      <Typography variant="h5">Question 2</Typography>

      <Container style={styles.containerStyle}>
        <Button
          style={styles.buttonStyle}
          onClick={() =>
            handleApiRequest([
              {
                id: '8',
                name: 'test'
              },
              { id: '5', name: 'test' }
            ])
          }
          variant="contained"
          color="primary"
        >
          Send Request
        </Button>
      </Container>
    </Container>
  );
}
const styles = {
  containerStyle: {
    marginTop: '2em',
    display: 'flex',
    justifyContent: 'center'
  },
  buttonStyle: {
    backgroundColor: '#07a7e3',
    width: '10em',
    color: '#FFFFFF'
  }
};
