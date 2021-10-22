import { Router } from "express";
import { AuthenticateuserController } from "./controllers/AuthenticateuserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileuserController } from "./controllers/ProfileUserController";
import { ensureIsAuthenticated } from "./middleware/ensureIsAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateuserController().handle)

router.post("/messages", ensureIsAuthenticated, new CreateMessageController().handle)

router.get("/messages/last3", new GetLast3MessagesController().handle)

router.get("/profile", ensureIsAuthenticated, new ProfileuserController().handle)

export { router }