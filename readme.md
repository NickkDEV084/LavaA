2. Os 8 módulos: o que adicionar e como deve funcionar
Cada quadro traz, à esquerda, o que deve existir no módulo e, à direita, as regras de funcionamento.
1. Cadastro de clientes e veículos
O QUE ADICIONAR COMO DEVE FUNCIONAR
• Cliente: nome, CPF, telefone, e-mail, data de cadastro
• Veículo: placa, marca, modelo, cor, ano e porte (moto, carro
pequeno, SUV, caminhonete)
• Um cliente pode ter vários veículos
• Busca por nome, telefone ou placa
• Histórico de serviços por cliente e por veículo
• Editar e inativar cadastros
• Cadastra o cliente primeiro e depois o veículo
• Valida CPF e placa (modelo antigo ABC-1234 e Mercosul
ABC1D23)
• Placa duplicada é bloqueada
• Cliente com histórico só é inativado, nunca excluído
• O porte do veículo define o preço do serviço (módulo 2)
2. Serviços e preços
O QUE ADICIONAR COMO DEVE FUNCIONAR
• Catálogo: lavagem simples, completa, higienização interna,
polimento, cera, lavagem de motor
• Tabela de preço serviço x porte do veículo
• Duração estimada (em minutos) de cada serviço
• Pacotes/combos com desconto
• Serviço ativo/inativo
• Histórico de alteração de preço
• O preço é copiado para o pedido na hora: mudar o preço
depois não altera pedidos antigos
• A duração dos serviços soma o tempo ocupado na agenda
• Serviço inativo não aparece para agendar
• Só o gerente altera preços
• Cada serviço informa quais produtos consome (módulo 5)
3. Agenda, reagendamentos e fila de atendimento
O QUE ADICIONAR COMO DEVE FUNCIONAR
• Horário de funcionamento e bloqueio de dias (feriados)
• Capacidade: número de boxes/vagas simultâneas
• Agendamento: cliente, veículo, serviços, data/hora e previsão
de término
• Reagendamento com histórico (data antiga e nova)
• Fila para quem chega sem agendar (senha numerada)
• Lista de espera e lembrete ao cliente (opcional)
• Só mostra horários livres, considerando duração e boxes
• Conflito de horário é bloqueado
• Reagendar libera o horário antigo
• Atraso de 15 min vira não compareceu e a vaga é liberada
• Fila segue ordem de chegada; cliente agendado tem prioridade
sobre a fila
• Vaga liberada chama o próximo da lista de espera
4. Pedidos e pagamentos
O QUE ADICIONAR COMO DEVE FUNCIONAR
• Pedido (ordem de serviço) com número, cliente, veículo e itens
• Itens: serviços e produtos extras vendidos no balcão
• Desconto e total
• Formas: dinheiro, Pix, cartão de débito e de crédito
• Sinal / pagamento parcial
• Recibo e fechamento de caixa diário
• O pedido nasce do agendamento ou da fila
• Total = soma dos itens - desconto
• Status de pagamento: pendente, parcial, pago, estornado
• O veículo só é entregue após o pagamento (ou fiado
autorizado pelo gerente)
• Estorno exige motivo e fica registrado
• O caixa soma os pagamentos do dia por forma de pagamento
5. Produtos e estoque
O QUE ADICIONAR COMO DEVE FUNCIONAR
• Produto: nome, unidade, custo, preço de venda, fornecedor
• Estoque atual e estoque mínimo
• Movimentações: entrada (compra), saída e ajuste
• Consumo padrão de produtos por serviço
• Alerta de estoque baixo
• Venda de produtos no balcão (aromatizante, pano etc.)
• Ao concluir um serviço, o sistema dá baixa automática
conforme o consumo padrão
• Entrada de compra aumenta o estoque
• Estoque não fica negativo (aviso ou bloqueio)
• Ajuste manual exige motivo e usuário
• Estoque atual igual ou abaixo do mínimo gera alerta ao
gerente
LavaAjato  |  Escopo do repositório Git
Página 3
6. Status do serviço
O QUE ADICIONAR COMO DEVE FUNCIONAR
• Etapas: Agendado, Aguardando, Em lavagem, Em
acabamento, Pronto para retirada, Entregue
• Estados especiais: Cancelado e Não compareceu
• Registro de data/hora e funcionário em cada mudança
• Observações e fotos de entrada (avarias já existentes)
• Aviso ao cliente quando estiver pronto
• Tempo real x tempo estimado
• Só são permitidas as transições válidas (não pula de
Agendado para Pronto)
• Toda mudança grava uma linha no histórico (quem, quando,
de qual para qual)
• Painel do lavador mostra a fila do dia
• Entregue só depois do pagamento (módulo 4)
• Pronto para retirada dispara a notificação
7. Cancelamentos
O QUE ADICIONAR COMO DEVE FUNCIONAR
• Motivo obrigatório (desistência, clima, imprevisto da loja etc.)
• Quem cancelou: cliente ou loja
• Prazo mínimo sem taxa (ex.: até 2 h antes)
• Taxa de cancelamento tardio
• Estorno ou reembolso do sinal
• Relatório de cancelamentos por motivo
• Cancelar libera o horário e chama o próximo da lista de
espera
• Pedido cancelado não é apagado: só muda de status
• Se houve pagamento, abre o fluxo de estorno (módulo 4)
• Depois de "Em lavagem", só o gerente autoriza o
cancelamento
• Produtos já baixados do estoque são ajustados
8. Avaliações e relatórios
O QUE ADICIONAR COMO DEVE FUNCIONAR
• Nota de 1 a 5 e comentário após a entrega
• Relatórios: faturamento (dia, semana, mês), serviços mais
vendidos, ocupação da agenda, tempo médio de atendimento
• Cancelamentos, consumo e estoque baixo, clientes
frequentes, média de avaliações
• Filtro por período
• Exportar em CSV ou PDF
• Avaliação liberada só para pedidos entregues, uma por
pedido
• Nota 2 ou menos gera alerta ao gerente
• Relatórios apenas leem os dados dos outros módulos
• Relatórios financeiros só para o gerent