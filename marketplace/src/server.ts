import express from 'express'
import { getPayloadClient } from './getPayload'
import { NextApp, nextHandler } from './nextUtils'

const app = express()


const PORT = Number(process.env.PORT) || 3000


const start = async ()=>{
  //starting CMS (admin dashboard)
  const payload = await getPayloadClient({
     initOptions:{
      express: app, 
      onInit:async (cms) => {
        cms.logger.info(`Admin URL ${cms.getAdminURL()}`)
      }
     }
  })
  app.use((req,res)=>nextHandler(req,res))
  NextApp.prepare().then(()=>{
    //payload.logger.info("Next.js Started"),
    app.listen(PORT,async () => {
      //payload.logger.info(`Next.js App URL:${process.env.NEXT_PUBLIC_SERVER_URL}`)
    })
  })

}

start() 