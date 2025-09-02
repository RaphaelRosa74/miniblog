//CSS
import styles from "./Home.module.css";

//hooks
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

//components
import PostsDetails from "../../components/PostsDetails";

const Home = () => {
  const [query, setQuery] = useState();
  const {documents: posts, loading} = useFetchDocuments("posts")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(query){
      return navigate(`/search?q=${query.toLowerCase()}`)
    }
  };
  return (
    <div className={styles.home}>
      <h1>Veja nosso posts mais recentes!</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          type="text"
          placeholder="ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post) => (
          <PostsDetails key={post.id} post={post}/>
        ))}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram enconstrados posts</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
