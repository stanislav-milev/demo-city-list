import { useState } from "react";
import { useRef } from "react";

const DivUploadData = () => {
  const ref = useRef(null);
  const [cityData, setCityData] = useState("");

  const handleCityData = (event: any) => {
    console.log(event);
    // setCityData(event.target.value);
  };

  const handleClick = (event: any) => {
    console.log(event);
    // 👇️ access textarea value
    if (ref.current) {
      console.log(ref.current);
    }
  };

  return (
    <>
      <div>DivUploadData</div>
      <button
        type="button"
        className="btn btn-primary"
        disabled={!cityData}
        onClick={handleClick}
      >
        Upload
      </button>
      <textarea
        ref="ref"
        className="form-control"
        aria-label="city data"
        value={cityData}
      ></textarea>
    </>
  );
};

export default DivUploadData;
