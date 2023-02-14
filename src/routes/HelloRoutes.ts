import { Router, Request, Response } from 'express';

const helloRoute = () => {
  const router = Router();
  
  router.post('/hello',(req: Request, res: Response)=>{
    const reqBody = String(req.body);
    console.log(reqBody);
    res.send('OK');
  });

  router.put('/hello',(req, res)=>{
    //TODO
  });
}