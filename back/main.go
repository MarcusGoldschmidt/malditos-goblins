package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", handler)    // Aqui declaramos o path e o Handler
	http.ListenAndServe(":3000", nil) // Aqui ficará a porta em que nosso Web server vai responder
}

// Aqui vamos tratar nossa requisição: o writer irá permitir
// definir o que desejamos escrever de volta para o client que enviou a requisiçao.
func handler(writer http.ResponseWriter, request *http.Request) {
	fmt.Fprintf(writer, "Hello")
}