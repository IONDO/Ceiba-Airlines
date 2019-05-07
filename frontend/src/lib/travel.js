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

  flights() {
    return this.client
      .get("/api/flights")
      .then(({
        data
      }) => data.flights);
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

  createTrip(outboundFlightId, departureDate, inboundFlightId, returnDate) {
    return this.client
      .post("/api/trips", {
        data: {
          outboundFlightId,
          departureDate,
          inboundFlightId,
          returnDate
        } 
      }).then(({
        data
      }) => data._id);
  }

  trips() {
    return this.client
      .get(`/api/trips/`)
      .then(({
        data
      }) => data.trips);
  }

  trip(tripId) {
    return this.client
      .get(`/api/trips/${tripId}`)
      .then(({
        data
      }) => data);
  }
}

const travel = new Travel();

export default travel;