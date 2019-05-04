import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true
    });
  }

  signup(user) {
    const { fullname, username, password } = user;
    return this.auth
      .post("/auth/signup", { fullname, username, password })
      .then(({ data }) => data);
  }

  login(user) {
    const { username, password } = user;
    return this.auth
      .post("/auth/login", { username, password })
      .then(({ data }) => data);
  }

  update(user) {
    return this.auth
      .post("/auth/profile", user)
      .then(({ data }) => data);
  }

  logout() {
    return this.auth
      .post("/auth/logout", {})
      .then(response => response.data);
  }

  me() {
    return this.auth
      .get("/auth/me")
      .then(response => response.data);
  }
}

const auth = new Auth();

export default auth;
