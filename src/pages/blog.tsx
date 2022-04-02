import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Layout } from '../layout/Layout'
import Seo from '../components/Seo'

const IndexPage = () => (
  <Layout location="Blog">
    <Seo title="Blog" />
  </Layout>
)

export default IndexPage