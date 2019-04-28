import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <div align="center">
        <br/>
          <p style={{color: "cornflowerblue", fontSize: 50, fontWeight: 'bold'}}>
            React Advance Workshop
          </p>
          <h2>Huge big line saying something cool</h2>
          <br/>
          <Link to="/docs/1-get-started/introduction">
            <Button type="primary" size="large" style={{marginRight: 10}}>Get Started</Button>
          </Link>
          <Button type="primary" size="large" href="https://github.com/manjula91/Docs-ReactAdvance-workshop">Github</Button>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage