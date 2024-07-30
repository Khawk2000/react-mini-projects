import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../queries/userQueries";
import Spinner from "./Spinner";

const NameTag = ({ token }) => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      userId: token.userId,
    },
  });
  if (loading) return <Spinner />;
  if (error) return <p>{error.message}</p>;
  return <p className="m-2">Welcome Back, {data.user.firstname}</p>;
};

NameTag.propTypes = {
  token: PropTypes.object,
};

export default NameTag;
