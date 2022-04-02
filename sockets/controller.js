const socketController = (socket) => {
  console.log("Usuario conectado", socket.id);

  socket.on("disconnect", () => {
    console.log("Usuario desconectado", socket.id);
  });

  socket.on("enviar-mensaje", (payload, callback) => {
    const id = socket.id;
    callback(id);

    // realizar broadcast desde servidor a todos los clientes
    socket.broadcast.emit("enviar-mensaje", payload);
  });
};

module.exports = { socketController };
