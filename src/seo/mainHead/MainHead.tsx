import Head from "next/head";

interface MainHeadProps {
  title: string;
  noindex: boolean;
  description: string;
  canonical?: string | boolean;
}

const MainHead: React.FC<MainHeadProps> = ({
  title,
  noindex,
  description,
  canonical = false,
}) => {
  const host = "https://test.com";
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="icon" href="/favicon.ico" />
      {canonical && <link rel="canonical" href={`${ host }${ canonical }`}></link>}
    </Head>
  );
};

export default MainHead;
