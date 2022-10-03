import S3 from 'aws-sdk/clients/s3';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const s3 = new S3({
    endpoint: 'https://s3.filebase.com',
    apiVersion: '2006-03-01',
    accessKeyId: process.env.FILEBASE_ACCESS_KEY_ID,
    secretAccessKey: process.env.FILEBASE_SECRET_ACCESS_KEY,
    signatureVersion: 'v4',
    region: 'us-east-1',
  });

  const params = {
    Bucket: process.env.FILEBASE_BUCKET_NAME,
    Key: req.query.keyName,
    ContentType: req.query.fileType,
    Metadata: {
      import: 'car',
    },
    Expires: 60,
  };

  const url = s3.getSignedUrl('putObject', params);

  res.status(200).json(url);
}
