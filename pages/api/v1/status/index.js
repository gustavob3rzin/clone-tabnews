function status(request, response) {
  response.status(200).json({ chave: "são pessoas" });
}

export default status;
