import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

//hooks
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { document: posts, loading } = useFetchDocuments("posts", null, uid);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Gerencie suas postagens!</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrado posts!</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <div>
          <p>Tem posts!</p>
        </div>
      )}
      {posts && posts.map((post) => <h3>{post.title}</h3>)}
      {/*não esta funcionando essa parte de mostrar os posts*/ }
    </div>
  );
};

export default Dashboard;
