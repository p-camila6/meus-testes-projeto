const reservas = [];

function criarReserva() {
  // Implementar criação de reserva
}

 function visualizarReservas(reservas) {
    console.log("Você digitou 2. Iremos mostrar todas as reservas");
    console.log(reservas);
  }

function editarReserva() {
  // Implementar edição de reserva
}

function deletarReserva(reservas) {
    const deletar = Number(prompt(`Você digitou 4. Iremos cancelar sua reserva! Digite o indice da sua reserva para confirmar.`))
    reservas.splice(deletar, 1);
    console.log(`Tudo certo! Sua reserva de índice ${deletar} $foi cancelada`)
}

function exibirMenu() {
  console.log("Menu:");
  console.log("1. Criar Reserva");
  console.log("2. Visualizar Reservas");
  console.log("3. Editar Reserva");
  console.log("4. Deletar Reserva");
  console.log("5. Sair");

  const opcao = prompt("Digite o número da opção desejada: (1) Para criar reserva, (2) Para visualizar reserva, (3) Para editar reserva, (4) Para deletar reserva");

  switch (opcao) {
    case "1":
      criarReserva()
      break;
    case "2":
      visualizarReservas()
      break;
    case "3":
      editarReserva()
      break;
    case "4":
      deletarReserva()
      break;
    case "5":
      console.log("Saindo do programa. Até logo!");
      return;
    default:
      console.log("Opção inválida. Tente novamente.");
  }

  // Chamar função de exibir menu novamente
}

exibirMenu();
