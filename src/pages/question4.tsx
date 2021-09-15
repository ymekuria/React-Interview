import { Container, Grid, ListItemButton, ListItemText, Typography } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';

export default function Question3() {
	return <Container sx={ { pt: 2 } }>
		<Grid>
			<Link href='/question3' passHref>
				<ListItemButton component='a'>
					<ListItemText>Go Question 3</ListItemText>
				</ListItemButton>
			</Link>
			<Link href='/' passHref>
				<ListItemButton component='a'>
					<ListItemText>Go to Home</ListItemText>
				</ListItemButton>
			</Link>
		</Grid>
		<Typography variant='h5'>Question 4</Typography>
		<Typography>In src/pages/dataBase create a trigger/function which will calculate the age on insert or modify given the birthday</Typography>
	</Container>;
}
