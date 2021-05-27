# node-doctor-system
API - Cadastro de Médicos.

Desenvolver um sistema que faça a gestão de cadastros de médicos. O Sistema deve suportar as seguintes operações:

- [ ] Insert
- [ ] Update
- [ ] Select
- [ ] Soft Delete

# No cadastro do médico, devem ser cadastrados os seguintes itens:

- [ x ] Nome do médico com no máximo 120 caractéres
- [ x ] CRM: somente números e no formato XX.XXX.XX
- [ x ] Telefone fixo
- [ x ] Telefone celular
- [ x ] CEP: formato XXXXX-XX (Ao cadastrar o CEP, deve ser feita uma reqisição via XHR para a API dos correios e retornar todos os dados de endereço do cliente).
- [ ] Especialidade médica (mínimo de duas especialidades)

# Itens importantes:
- Se possivel realizar pesquisas por todos os campos do cadastro do médico, incluindo o endereço
- Estar no padrão REST
- Utilizar ferramenta de validação (exemplo: YUP)
- Funções especialistas (Realizam somente uma operação)
- Para documentação e requisição utilizar o Postman ou Insomnia
- Subir o código em repositório público do GitHub

# Diferenciais

- Docker
- Testes unitários
- Testes de integração
- AWS (ECS, RDS)
- Estruturação de banco de dados MySQL
- Conhecimento em NoSQL
- Metodologias ágeis
- Filas (RabbitMQ ou SQS)

# Ferramentas para serem utilizadas no desenvolvimento (Pode escolher entre as duas linguagens citadas abaixo)

## Node.JS (Seguir as seguintes orientações)
- TypeScript
- Sequelize ou TypeORM
- Express
- Migrations e Seeds
- React ou HTM e CSS 

## Java (Seguir as seguintes orientações)
- SpringBoot
- Hibernate

# No banco de dados devem estar cadastradas as seguintes especialidades:

Alergologia
Angiologia
Buco maxilo
Cardiologia clínca
Cardiologia infantil
Cirurgia cabeça e pescoço
Cirurgia cardíaca
Cirurgia de tórax


