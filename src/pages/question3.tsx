import { Container, Typography } from '@material-ui/core';
import React from 'react';

export default function Question3() {
	return <Container sx={{ pt: 2 }}>
		<Typography variant='h5'>Question 3</Typography>
		<Typography>Convert the providers in src/pages/_app.tsx to use the providerComposer provided in src/providerComposer.tsx</Typography>
	</Container>;
}
