import { sleep } from "k6";
import http from "k6/http";

export const options = {
  stages: [
    { duration: "30s", target: 1 },
    { duration: "1m", target: 1000 },
    // { duration: "30s", target: 50 },
    // { duration: "1m", target: 20 },
    // { duration: "3m", target: 20 },
    // { duration: "30s", target: 5 },
  ],
  ext: {
    loadimpact: {
      distribution: {
        "amazon:us:ashburn": { loadZone: "amazon:us:ashburn", percent: 100 },
      },
    },
  },
};

export default function main() {
  let response;

  // GET ALL REVIEWS FOR SINGLE USER
  // response = http.get(`http://localhost:3003/api/users/${Math.floor(Math.random() * 20000)}/reviews`);

  // GET ALL REVIEWS FOR SINGLE ROOM
  // response = http.get(`http://localhost:3003/api/rooms/${Math.floor(Math.random() * 20000)}/reviews`);

  // POST A REVIEW TO A SINGLE ROOM
  response = http.post(`http://localhost:3003/api/rooms/${Math.floor(Math.random() * 20000)}/reviews`);


  // Automatically added sleep
  sleep(1);
}
