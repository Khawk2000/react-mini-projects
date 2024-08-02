import { useEffect, useState } from "react";
import client from "../appwriteConfig";
import {
  databases,
  DATABASE_ID,
  COLLECTION_ID_MESSAGES,
} from "../appwriteConfig";
import { ID, Query } from "appwrite";
import { Trash2 } from "react-feather";
import Header from "../components/Header";

const Room = () => {
  const [messages, setMessages] = useState([]);
  const [messageBody, setMessageBody] = useState("");

  useEffect(() => {
    getMessages();

    const unsub = client.subscribe(
      `databases.${DATABASE_ID}.collections.${COLLECTION_ID_MESSAGES}.documents`,
      (res) => {
        if (
          res.events.includes("databases.*.collections.*.documents.*.create")
        ) {
          console.log("Created Message");
          setMessages((prevState) => [res.payload, ...prevState]);
        }
        if (
          res.events.includes("databases.*.collections.*.documents.*.delete")
        ) {
          console.log("Deleted Message");
          setMessages((prevState) =>
            messages.filter((message) => message.$id !== res.payload.$id)
          );
        }
        console.log(res);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const handleSumbit = async (e) => {
    e.preventDefault();

    var payload = {
      body: messageBody,
    };

    var response = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID_MESSAGES,
      ID.unique(),
      payload
    );

    console.log(response);

    // setMessages((prevState) => [response, ...messages]);

    setMessageBody("");
  };

  const getMessages = async () => {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID_MESSAGES,
      [Query.orderDesc("$createdAt"), Query.limit(5)]
    );
    setMessages(response.documents);
  };

  const deleteMessage = async (message_id) => {
    const response = await databases.deleteDocument(
      DATABASE_ID,
      COLLECTION_ID_MESSAGES,
      message_id
    );
    // setMessages((preState) =>
    //   messages.filter((message) => message.$id !== message_id)
    // );
  };

  return (
    <main className="container">
      <Header />
      <div className="room--container">
        <form id="message--form" onSubmit={handleSumbit}>
          <div>
            <textarea
              name=""
              id=""
              required
              maxLength="1000"
              placeholder="Say something..."
              onChange={(e) => setMessageBody(e.target.value)}
              value={messageBody}
            ></textarea>
            <div className="send-btn--wrapper">
              <input
                className="btn btn--secondary"
                type="submit"
                value="Send"
              />
            </div>
          </div>
        </form>

        <div>
          {messages.map((message) => (
            <div key={message.$id} className="message--wrapper">
              <div className="message--header">
                <small className="message-timestamp">
                  {new Date(message.$createdAt).toLocaleString()}
                </small>

                <Trash2
                  className="delete--btn"
                  onClick={() => deleteMessage(message.$id)}
                />
              </div>
              <div className="message--body">
                <span>{message.body}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Room;
