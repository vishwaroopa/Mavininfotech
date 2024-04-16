import React, { useEffect, useState } from "react";
import PageBanner from "@/components/Common/PageBanner";

const Job = (props) => {
  const {
    company,
    contract,
    featured,
    id,
    languages,
    level,
    location,
    position,
    postedAt,
    role,
    tools,
  } = props.data;

  let keywords = [...languages, ...tools];

  const [icon, setIcon] = useState("");

 

  return (
    <div className="col-md-4">
    <div
      className={
        featured ? "job-container testimonial job-container--borderLeft" : "testimonial"
      }
    >

      <div className="testimonial-content">
      <div className="part1">
        <div className="company">
          <span className="cname">{company}</span>
          
        </div>
        <div className="role">
          <span className="cname">{role}</span>
          
        </div>

       <div className="testimonial-meta"> 
<h3>{position}</h3></div>

       <div className="testimonial-meta">
<h5>Work From Home </h5>
</div>
  <div className="part2">
        {keywords.map((key, id) => (
          <span onClick={() => props.setkeywords(key)} key={id}>
            {key}
          </span>
        ))}
      </div>
      </div>
</div></div>

    
    </div>
  );
};

export default Job;
