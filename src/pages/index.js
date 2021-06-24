import * as React from "react";
import YAMLData from '../../static/resume.yaml';
import ResumeLayout from '../layouts/resume-layout';
import SEO from '../components/seo';
import Basics from '../resume/basics';
import About from '../resume/about';

// styles
const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const resume = YAMLData;
const { basics } = resume;

// markup
const IndexPage = ({ location }) => {
  const wasRedirected = location.state ? location.state.wasRedirected : false;
  return (
    <main style={pageStyles}>
      <ResumeLayout>
        <SEO title={`Resume`} description={basics.name} />
        <Basics data={resume} resume={resume} showHomeButton={wasRedirected} />
        <About data={resume} resume={resume} />
      </ResumeLayout>
    </main>
  )
}
export default IndexPage;