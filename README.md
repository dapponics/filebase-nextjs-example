---
name: Filebase Next.js Car File Upload Example
slug: filebase-nextjs-example
description: Learn to use Filebase to upload car files to your bucket under the same CID.
framework: Next.js
deployUrl: https://vercel.com/new/clone?repository-url=https://github.com/Dapponics/filebase-nextjs-example&repository-name=filebase-nextjs-example&env=FILEBASE_ACCESS_KEY_ID,FILEBASE_SECRET_ACCESS_KEY,FILEBASE_BUCKET_NAME
---

# Filebase Next.js .car File Upload

This is an example of a Next.js application allowing you to upload .car file to an S3 Filebase bucket. This example is an adaptation of [vercel's official template](https://github.com/vercel/examples/tree/main/solutions/aws-s3-image-upload).

## How to Use

**Option 1: Vercel deploy usign Filebase API.**

Retrieve your existing access key, secret key, and bucket name from Filebase dashboard. Provide those values after clicking "Deploy" to automatically set the environment variables.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Dapponics/filebase-nextjs-example&env=FILEBASE_ACCESS_KEY_ID,FILEBASE_SECRET_ACCESS_KEY,FILEBASE_BUCKET_NAME)

**Option 2: Run local.**

1. Create a new [Filebase user](https://console.filebase.com/signup)
2. Create an IPFS Bucket. If you have any doubt you can follow this [guide](https://docs.filebase.com/getting-started/getting-started-guides/ipfs-getting-started-guide#how-to-create-an-ipfs-bucket).
3. Create an `.env.local` file similar to `.env.example`.
   1. Enter your access key and secret key from [filebase console](https://console.filebase.com/keys).
   2. Add also the name of the bucket you just created in step 2.
4. Run `yarn dev` to start the Next.js app at `localhost:3000`.
5. Choose one or multiples `.png` or `.jpg` files.
6. You should see your files successfully uploaded to S3 Filebase bucket under the same CID.

Please note that this example uses [`getSignedUrl`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getSignedUrl-property) instead of [`createPresignedPost`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#createPresignedPost-property) this is due to filebase limitation and you have to take care about max/min file sizes.


## Commands

- `yarn dev` – Starts the Next.js app at `localhost:3000`.

### Clone and Deploy

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/lozanoSergio/filebase-nextjs-example aws-s3-image-upload
# or
yarn create next-app --example https://github.com/lozanoSergio/filebase-nextjs-example aws-s3-image-upload
```

Copy the `.env.example` file in this directory to `.env.local` and set your AWS settings

```bash
cp .env.example .env.local
```

Next, run Next.js in development mode:

```bash
npm install
npm run dev

# or

yarn
yarn dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=edge-middleware-eap) ([Documentation](https://nextjs.org/docs/deployment)).
