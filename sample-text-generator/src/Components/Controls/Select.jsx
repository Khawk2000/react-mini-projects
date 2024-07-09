import { useState } from "react";

const Select = ({ paras, changeParas }) => {
  const [num, setNum] = useState(paras)
    
    const change = (e) => {
        setNum(e.target.value)
        changeParas(e.target.value)
    }

    return (
    <div>
      <input 
        type="number"
        value={num}
        onChange={(e) => change(e)}
        className="col-form-label mt-4 mx-auto"
      />
    </div>
  );
};

export default Select;
