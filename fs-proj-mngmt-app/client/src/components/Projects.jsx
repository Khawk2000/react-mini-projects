import { GET_PROJECTS } from "../queries/projectQueries";
import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import ProjectCard from "./ProjectCard";
import PropTypes from "prop-types";

const Projects = ({ clients }) => {
  var ids = [];
  clients.clients.forEach((client) => {
    ids.push(client.id);
  });
  const { loading, error, data } = useQuery(GET_PROJECTS, {
    variables: {
      clientIds: ids,
    },
  });

  console.log(data);
  if (loading) return <Spinner />;
  if (error) return <h1>{error.message}</h1>;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row mt-4">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
};

Projects.propTypes = {
  clients: PropTypes.object,
};

export default Projects;
