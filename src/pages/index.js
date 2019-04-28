import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import { Link } from "gatsby"


const IndexPage = () => {
  return (
    <Layout>
      <div style={{backgroundColor: "#A667EC"}}>
        <div align="center" >
        <img src="https://cdn.dribbble.com/users/102974/screenshots/2754723/duller_muller.gif" alt="Strong Girl" height="auto" width="auto"/>

          <div style={{color: "cornflowerblue", fontSize: 50, fontWeight: 'bold'}}>
          
            React Advance Workshop
          </div>
          <h2>Huge big line saying something cool</h2>
         
        
         
             <Link to="/docs/1-get-started/introduction">
            <Button type="primary" size="large" style={{marginRight: 10}}>Get Started</Button>
          </Link>
          <Button type="primary" size="large" href="https://github.com/manjula91/Docs-ReactAdvance-workshop">Github</Button>
            <div style={{marginTop :'200px'}}>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage