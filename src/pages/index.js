import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import { Link } from "gatsby"


const IndexPage = () => {
  return (
    <Layout>
      <div style={{backgroundColor: "#A667EC",position: 'absolute', left:0, right:0, top:0, bottom: 0}}>
        <div align="center" >
        <img src="https://cdn.dribbble.com/users/102974/screenshots/2754723/duller_muller.gif" alt="Image Credit" href="https://dribbble.com/shots/2754723-Strong-flexing-emoticon-girl" width="400"/>

          <div style={{color: "white", fontSize: 50, fontWeight: 'bold'}}>
          
            React Advance Workshop
          </div>
          <h3>LETS GET PUMPED WITH REACT ADVANCE</h3>
         
        
         
             <Link to="/docs/1-get-started/introduction">
            <Button type="primary" size="large" style={{borderColor: "212121",marginRight: 10, background:"#FFEB3B", color: "#212121"}}>Get Started</Button>
          </Link>
          <Button style={{borderColor: "212121", background:"#FFEB3B",color:'#212121'}}type="primary" size="large" href="https://github.com/manjula91/Docs-ReactAdvance-workshop">Github</Button>
            <div style={{marginTop :'200px'}}>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage