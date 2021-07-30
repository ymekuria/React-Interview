import { Container, Divider, List, ListItem, ListItemButton, ListItemText, Typography, Grid } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';

export default function Question1() {
	return <Container sx={{ pt: 2 }}>
		<Grid>
			<Link href='/' passHref>
				<ListItemButton component='a'>
					<ListItemText>Back to Home</ListItemText>
				</ListItemButton>
			</Link>
			<Link href='/question2' passHref>
				<ListItemButton component='a'>
					<ListItemText>Go to Question 2</ListItemText>
				</ListItemButton>
			</Link>
		</Grid>

		<Typography variant='h5'>Question 1</Typography>
		<Typography>Design a form with Formik and Material UI</Typography>
		<Typography>Contains the following items: </Typography>
		<List>
			<ListItem>
				<ListItemText>Name</ListItemText>
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText>Date (datetime)</ListItemText>
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText>Active (boolean switch)</ListItemText>
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText>Age (select from 1 to 70)</ListItemText>
			</ListItem>
		</List>
	</Container>;
}
