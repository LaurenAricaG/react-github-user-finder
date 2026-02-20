import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import SearchBar from "../components/search/SearchBar";

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center px-4 pt-10 pb-15 max-w-5xl mx-auto">
        <SearchBar />
      </main>
      <Footer />
    </>
  );
};

export default Home;
