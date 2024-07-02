import { Fragment, useState } from "react";
import axios from "axios";
import Message from "./Message";
import Progress from "./Progress";

const FileUpload = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("No File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPer, setUploadPer] = useState(0);

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          setUploadPer(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
          //clear percentage
          setTimeout(() => setUploadPer(0), 10000);
        }
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });
      setMessage("File has been uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("there was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label htmlFor="formFile" className="form-label">
            {filename}
          </label>
          <input
            type="file"
            className="form-control"
            id="formFile"
            onChange={onChange}
          />
        </div>
        <Progress percentage={uploadPer} />
        <div className="d-grid">
          <input
            type="submit"
            value="Upload"
            className="btn btn-primary btn-block mt-4"
          />
        </div>
      </form>
      {uploadedFile ? (
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <h3 className="text-center">{uploadedFile.fileName}</h3>
            <img style={{ width: "100%" }} src={uploadedFile.filePath} alt="" />
          </div>
        </div>
      ) : null}

    </Fragment>
  );
};

export default FileUpload;
