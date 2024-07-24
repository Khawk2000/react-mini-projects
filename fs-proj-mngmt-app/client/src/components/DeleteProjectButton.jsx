import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";
import { GET_PROJECTS } from "../queries/projectQueries";
import { DEL_PROJECT } from "../mutations/projectMutations";

const DeleteProjectButton = ({ projectId }) => {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DEL_PROJECT, {
    variables: {
      id: projectId,
    },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger m-2" onClick={deleteProject}>
        <FaTrash className="icon" /> Delete Project
      </button>
    </div>
  );
};

DeleteProjectButton.propTypes = {
  projectId: PropTypes.string,
};

export default DeleteProjectButton;
