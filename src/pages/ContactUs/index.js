import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-2">
        <div>
          <Link to="#">
            <img
              src="images/pareto-economics-logo.png"
              alt="Pareto Economics"
              width="60%"
              height="auto"
              //   className="w-full h-auto"
            />
          </Link>
        </div>
        <div className="col-span-3">
          <form>
            <label></label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
