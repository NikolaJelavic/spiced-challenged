import { server } from "./server.js";

// server.list800en(…
server.listen(8000, () => {
    console.log(`Server running at http://127.0.0.1:8000/`);
  });