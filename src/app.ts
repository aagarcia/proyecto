import express, {Application} from "express";
import routerUser from "@user/adapter/user.route";
import routerDriver from "@driver/adapter/driver.route";
import routerMedic from "@medic/adapter/medic.route";

class App {
  expressApp: Application;

  constructor() {
    this.expressApp = express();
    this.mountMiddelwares();
    this.mountRoutes();
    this.mountErrors();
  }

  mountMiddelwares() {
    this.expressApp.use(express.urlencoded({ extended: true }));
    this.expressApp.use(express.json());
  }

  mountRoutes() {
    this.expressApp.use("/users", routerUser);
    this.expressApp.use("/drivers", routerDriver);
    this.expressApp.use("/medics", routerMedic);
  }

  mountErrors() {
    this.expressApp.use("**", (request: any, response: any) => {
      response.writeHead(404, { "content-type": "text/plain" });
      response.write("Not found");
      response.end();
    });
  }
}

export default new App().expressApp;