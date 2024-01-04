import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
  <Layout pageTitle="sean mcleaish"
    headerContent={
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <StaticImage
        src="../images/selfie.jpeg" 
        alt="sean mcleaish"
        style={{
          borderRadius: '50%', 
          width: '30%', 
          height: '30%', 
          marginRight: '1rem', 
        }}
        imgStyle={{ borderRadius: '50%' }}
      />
      <div>
          <h1>sean mcleaish</h1>
          <p>I'm a soldier figuring out software development. This blog is to share what I'm learning along the way.</p>
      </div>
    </div>
  }>
    <h2>about me</h2>
  <p>I've been in the US Army for the past 10 years, serving as a medic and a civil affairs specialist. In May of 2023, I attended a 16-week full-stack software development bootcamp where we built apps using react and express. I also got a solid understanding of containerization, version control, and Agile methodologies. After graduating the bootcamp I began a six-month internship where I've worked on an end-to-end (e2e) testing team and an application team responsible for frontend and backend development.</p>

    <p>I am passionate about security. During my internship, I gained valuable insights into the DevOps process. I'd like to chart a path towards a career in cloud security or DevSecOps. I'm working toward a BS in Cybersecurity and have already achieved certifications in CompTIA Security+, Network+, Linux+, CySA+, and Pentest+. My aim is to broaden my experience with cloud engineering, focusing on AWS, before entering the job market in October of 2024. </p>

    <p>My time in the military was an opportunity for continual technical growth. I've acquired skills in digital force protection, Python, network analysis, OSINT research, GIS, encryption, and RF.</p>

<p>I'd be excited to connect with potential employers, like-minded technology enthusiasts, and especially any other service members who are looking to make the most of the education opportunities the Department of Defense makes available to us. Feel free to connect with me on <a href="https://www.linkedin.com/in/sean-mcleaish"> LinkedIn</a>.
    </p>
<p style={{ fontSize: 'small', fontStyle: 'italic' }}>
  Disclaimer: The views, thoughts, and opinions expressed in this website belong solely to the author, and not necessarily to the author's employer, organization, committee, or any other group or individual, including the Department of Defense. The content provided is for informational purposes only and is not intended to be an endorsement by the Department of Defense or any other official government agency.
</p>
  </Layout>
  )
}

export const Head = () => <Seo title="about me"/>

export default AboutPage
