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
<div className="header page-banner-area page-banner-content ">

<div className="container">
<div className="row align-items-center justify-content-center">
<div className="col-lg-12 col-md-12">
<div className="page-banner-content">
<h2>Jobs</h2>
</div>
</div>
</div>
</div>
</div>
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
