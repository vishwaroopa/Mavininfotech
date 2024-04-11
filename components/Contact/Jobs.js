import data from "/components/data.json";
import Jobs from "/components/Jobs";
import { useState } from "react";
import Search from "/components/Search";
import PageBanner from "@/components/Common/PageBanner";

function App() {
  const [filterKeywords, setfilterKeywords] = useState([]);

   const setSearchKeyword = (data) => {
    setfilterKeywords(data);
   };

  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setfilterKeywords([...filterKeywords, data]);
    }
  };

  const deleteKeyword = (data) => {
    const newKeywords = filterKeywords.filter((key) => key !== data);
    setfilterKeywords(newKeywords);
  };

  const clearAll = () => {
    setfilterKeywords([]);
  };

  return (
<div>
<div className="header"></div>
<PageBanner title="What We Do" homeText="Home" homeUrl="/" />
<div id="testimonials234">
<div class="container">
<div class="row">
<div class="col-md-4">
<div class="testimonial">
<div class="testimonial-content">
<div class="testimonial-meta"> 
<h4>Russell Tobin </h4>
</div>
<a class="uk-link-reset" href="/jobs/mern_full_stack_developer_027">
<div class="testimonial-meta"> 
<h1>MERN Full Stack Developer - 027 </h1>
</div>
</a>
<div class="testimonial-meta">
<h4>Work From Home </h4>
</div>
</div>
</div>
</div>
</div></div></div>
      <Search setSearchKeyword={setSearchKeyword} /> 

    

      <Jobs
        keywords={filterKeywords}
        data={data}
        setKeywords={addFilterKeywords}
      />
    </div>
  );
}

export default App;
