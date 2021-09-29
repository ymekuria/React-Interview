// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import * as yup from 'yup';

type ResponseData = { [id: string]: 'test' }[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const inputData = req.body;
  const inputObjectShape = {
    id: yup.string().required('you must have an id that is a string'),
    name: yup
      .string()
      .is(['test'])
      .required('you must have a name field of test')
  };

  const inputDataSchema = yup.array().of(yup.object().shape(inputObjectShape));

  try {
    // if input doesn't fit the required shape and types the rest of the code in the try block won't execute and an error will be thrown
    let validatedData = await inputDataSchema.validate(inputData);
    let transformedResponseData;

    // performing the validation and data shape transformation here for sake for seperation of concerns and readability
    // this logic can easily be moved to the pages/question2 files.
    if (validatedData) {
      transformedResponseData = validatedData.map(({ id, name }) => {
        return { [id]: name };
      });
      res.status(200).send(transformedResponseData);
    }
    console.log('Success, transformedData:', transformedResponseData);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
}
