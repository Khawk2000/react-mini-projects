import AddClientModal from "../components/AddClientModal";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import AddProjectModal from "../components/AddProjectModal";
import { GET_CLIENTS } from "../queries/clientQueries";
import { useAuthContext } from "../hooks/useAuthContext";
import Spinner from "../components/Spinner";
import { useQuery } from "@apollo/client";

const Home = () => {
  const token = useAuthContext();
  const { loading, error, data } = useQuery(GET_CLIENTS, {
    variables: {
      userId: token.token.userId,
    },
  });
  if (loading) return <Spinner />;
  if (error) {
    window.location.reload();
  }

  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal clients={data} />
      </div>
      <Projects clients={data} />
      <hr />
      <Clients clients={data} />
    </>
  );
};

export default Home;
