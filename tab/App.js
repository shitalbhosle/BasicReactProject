import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight, FangleDoubleRight } from 'react-icons/fa';
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setvalue] = useState(0);


  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  
  if (loading) {
    return (
      <section>
        <h1>Loading</h1>
      </section>
    );
  }

const { company, dates, duties, title } = jobs[value];
  return (
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>

      <div className="jobs-center">
        <div className="btn-container">
          {
            jobs.map((item,index)=>{
              return <button key={item.id} onClick={() => setvalue(index)}
                className={`job-btn ${index === value && 
                  'active-btn'}`}
                  >{item.company}</button>

            })
          }
          </div>
        <article className="jobs-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>

    </section>
  );


}
export default App;