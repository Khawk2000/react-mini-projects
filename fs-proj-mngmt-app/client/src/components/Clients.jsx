import ClientRow from "./ClientRow";
import PropTypes from "prop-types";

const Clients = ({ clients }) => {
  return (
    <>
      {
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {clients.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      }
    </>
  );
};

Clients.propTypes = {
  clients: PropTypes.object,
};

export default Clients;
