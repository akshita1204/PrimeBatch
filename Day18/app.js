const http=require("http")
const PORT=1200
const server=http.createServer((req,res)=>
{
    console.log("Req is beigng processed");
    console.log(req.url);

    res.setHeader("Content-Type",'text/html');
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Two Cards Example</title>
  <style>
    .card-container {
      display: flex;
      gap: 20px;
      padding: 20px;
      justify-content: center;
    }

    .card {
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 20px;
      width: 250px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      text-align: center;
    }

    .card h2 {
      margin-top: 0;
    }

    .card button {
      margin-top: 10px;
      padding: 8px 16px;
      border: none;
      background-color: #007BFF;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }

    .card button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>
  <h1 style="text-align:center;">Two Simple Cards</h1>
  <div class="card-container">
    <div class="card">
      <h2>Card 1</h2>
      <p>This is the content of the first card.</p>
      <button onclick="alert('Card 1 clicked')">Click Me</button>
    </div>
    <div class="card">
      <h2>Card 2</h2>
      <p>This is the content of the second card.</p>
      <button onclick="alert('Card 2 clicked')">Click Me</button>
    </div>
  </div>
</body>
</html>
`)
    //res.end("Done")
})
server.listen(PORT,()=>
{
    console.log(`Server is running on ${PORT}`)
})
