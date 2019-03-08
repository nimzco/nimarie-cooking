import Head from 'next/head';

function PageHead() {
  return (
    <Head>
      <meta charset="utf-8" />
      <title>NiMarie's dinner - Let’s have a French dinner together</title>
      <link href="./dist/application.css" rel="stylesheet" />
      {/* <link href='./dist/images/TODO' rel='shortcut icon' type='image/ico'> */}
      {/* <link color='black' href='./dist/images/TODO' rel='mask-icon'> */}
      {/* <link href='TODO' rel='me'> */}
      <link href="/humans.txt" rel="author" type="text/plain" />
      <meta content="width=device-width, initial-scale=1, maximum-scale=1" name="viewport" />
      <meta content="NiMarie's dinner" property="og:site_name" />
      <meta content="NiMarie's dinner - Let’s have a French dinner together" property="og:title" />
      <link
        href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Montserrat:900|Montserrat:400"
        rel="stylesheet"
      />
      <meta content="en_US" property="og:locale" />
      <link href="https://nimz.co" rel="canonical" />
      <meta content="https://nimz.co" property="og:url" />
      <meta content="600" property="og:image:width" />
      <meta content="600" property="og:image:height" />
      <meta content="image/png" property="og:image:type" />
      {/* <meta content='nimz_co' property='profile:username'> */}
    </Head>
  );
}

export default PageHead;
