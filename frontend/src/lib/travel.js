import axios from "axios";

class Travel {
  constructor() {
    this.client = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true
    });
  }

  routes() {
    return this.client
      .get("/api/routes")
      .then(({
        data
      }) => data.routes);
  }

  search(from, to, depart) {
    return this.client.get("/api/flights/search", {
      params: {
        from,
        to,
        depart
      }
    }).then(({
      data
    }) => data.flights);
  }

  createTrip(outboundFlightId, inboundFlightId) {
    return this.client
      .post("/api/trips", {
        data: {
          outboundFlightId,
          inboundFlightId
        } 
      }).then(({
        data
      }) => data._id);
  }
}

const travel = new Travel();

export default travel;