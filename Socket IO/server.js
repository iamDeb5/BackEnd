import app from "./src/app.js";
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
	console.log("a user connected");
	socket.on("disconnect", () => {
		console.log("user disconnected");
	});
	socket.on("chat message", (msg) => {
		io.emit("chat message", msg);
	});
});

httpServer.listen(3000, () => {
	console.log("listening on *:3000");
});
