import React from 'react'

import Layout from '../components/templates/layout'
import SEO from '../components/seo'

const WebPage = () => (
  <Layout display={`web`}>
    <SEO title="Graphics" keywords={[`gatsby`, `application`, `react`]} />
  </Layout>
)

export default WebPage
