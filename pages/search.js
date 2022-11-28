import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";
import SearchResults from "../components/SearchResults";
import Footer from "../components/Footer";
import logo from "../public/noodle.png"

const Search = ({ results }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.q} - Noodle Search</title>
        <meta
          name="description"
          content="Noodle, The best search engine in the universe"
        />
        <link rel="icon" href="./noodle_top.svg" />
      </Head>

      {/* Header */}
      <Header />

      {/* Search Result */}
      <SearchResults results={results} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.q}&start=${startIndex}`
      ).then((res) => res.json());

  // After the server has rendered pass the result to the client...

  return {
    props: {
      results: data,
    },
  };
}
