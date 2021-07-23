import Header from "@components/Header";
import Head from "next/head";
import response from "@utils/response";
import { useRouter } from "next/dist/client/router";
import SearchResults from "@components/SearchResults";

const Search = ({ results }) => {
  const router = useRouter();
  console.log(results);

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <SearchResults results={results} />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  // Change based on development or in production
  const useDummyData = true;
  const startIndex = context.query.start || "0";

  const API_KEY = process.env.API_KEY;
  const CONTEXT_KEY = process.env.CONTEXT_KEY;

  const data = useDummyData
    ? response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1/?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
};

export default Search;
