import { Outlet } from "react-router-dom";

const ResumePage = () => {
  return (
    <>
      <h1>Tom Burzynski</h1>
      <h2>SEO Analyst</h2>
      <p>
        1961 N Summit Ave
        <br />
        Milwaukee, WI 53202
        <br />
        (262) 470-3729
        <br />
        <a href="mailto:tburzynski2@yahoo.com">tburzynski2@yahoo.com</a>
      </p>
      <h3>Summary</h3>
      <p>
        Experienced SEO professional driving organic web traffic and revenue
        growth through data-driven strategies. Expertise in computer science,
        analytics, and industry best practices for measurable results.
      </p>
      <h3>Experience</h3>
      <h4>iNET Marketing, Waukesha, WI — SEO Analyst</h4>
      <p>June 2021 - Present</p>
      <ul>
        <li>
          Increased organic traffic by 20% and mobile calls by 193% for a
          national CNC service
        </li>
        <li>Manage the business’s largest ecommerce client</li>
        <li>
          Lead strategic planning for new websites, coordinating
          cross-functional teams on content optimization
        </li>
        <li>
          Meet with business owners to establish measurable goals based on
          data-driven metrics
        </li>
        <li>
          Develop comprehensive keyword lists based on search volume, user
          intent, and the competitive landscape
        </li>
        <li>
          Present quarterly reports identifying causal sources of growth,
          roadblocks and potential industry targets
        </li>
      </ul>
      <h4>Optimal Blue, Mequon, WI — Software Developer Intern</h4>
      <p>August 2019 - May 2020</p>
      <ul>
        <li>Unit tested ASP.Net web apps in C#</li>
        <li>Set up CI/CD pipelines on Microsoft’s Azure cloud platform</li>
        <li>Implemented error checking within pipeline tasks</li>
        <li>
          Participated in daily stand-up meetings in agile DevOps environment
        </li>
      </ul>
      <h3>Education</h3>
      <h4>University of Wisconsin – Milwaukee — Computer Science</h4>
      <p>Graduated December 2020</p>
      <ul>
        <li>Front-end development with HTML, CSS & JavaScript</li>
        <li>Django full-stack web development</li>
        <li>Java programming</li>
      </ul>
      <h3>Skills</h3>
      <ul>
        <li>Organic SEO</li>
        <li>UX Optimization</li>
        <li>Keyword research</li>
        <li>Trends analysis</li>
        <li>Schema.org structured data</li>
        <li>Google Analytics</li>
        <li>Search Console</li>
        <li>Data Studio</li>
        <li>Google Business Profile</li>
        <li>HTML, CSS & JavaScript</li>
      </ul>
    </>
  );
};

export default ResumePage;
