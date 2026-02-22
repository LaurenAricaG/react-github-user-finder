import { useEffect, useState } from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import SearchBar from "../components/search/SearchBar";
import ProfileHeader from "../components/profile/ProfileHeader";
import RepoList from "../components/repos/RepoList";
import axios from "axios";

const URL = "https://api.github.com/users/";

const Home = () => {
  const [layout, setLayout] = useState(() => {
    return localStorage.getItem("layout") || "horizontal";
  });
  const [open, setOpen] = useState(false);

  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (!username) return;

    const fetchUserAndRepos = async () => {
      try {
        const { data: userdata } = await axios.get(URL + username);
        const { data: reposdata } = await axios.get(userdata.repos_url);

        setUser(userdata);
        setRepos(reposdata);
      } catch (error) {
        console.error(error);
        setUser(null);
        setRepos([]);
      }
    };

    fetchUserAndRepos();
  }, [username]);

  useEffect(() => {
    localStorage.setItem("layout", layout);
  }, [layout]);

  return (
    <>
      <Header
        open={open}
        setOpen={setOpen}
        layout={layout}
        onChangeLayout={setLayout}
      />

      <main className="flex-1 flex flex-col items-center px-4 pt-8 pb-8 max-w-6xl mx-auto w-full">
        <SearchBar onSearch={setUsername} />
        <section
          className={`w-full grid gap-6 items-start ${
            layout === "horizontal"
              ? "md:grid-cols-[280px_1fr]"
              : "md:grid-cols-1"
          }`}
        >
          <ProfileHeader user={user} layout={layout} />
          <RepoList repos={repos} layout={layout} />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
