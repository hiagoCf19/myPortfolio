# FullCar - Marketplace de Veículos

**FullCar** é uma plataforma de marketplace desenvolvida para facilitar a compra e venda de veículos, permitindo que os usuários criem e gerenciem seus anúncios de forma rápida e simples. Com uma integração direta à API da Tabela Fipe, os dados dos veículos são automaticamente preenchidos com base em informações oficiais, tornando o processo mais ágil e preciso.

## Funcionalidades

- **Cadastro de Usuário:** Os usuários podem criar uma conta com um único cadastro por e-mail.
- **Anúncio de Veículos:** Após o cadastro, o usuário pode anunciar veículos gratuitamente.
- **Gerenciamento de Anúncios:** O usuário pode visualizar, editar e gerenciar seus anúncios.
- **Integração com a Tabela Fipe:** A plataforma obtém informações atualizadas sobre o veículo durante o cadastro do anúncio, utilizando a API da Tabela Fipe.
- **Autenticação Segura:** Utilizamos JWT para autenticação e segurança das sessões dos usuários.
- **Compatibilidade Multi-dispositivo:** A plataforma é responsiva, garantindo uma boa experiência tanto em desktops quanto em dispositivos móveis.
- **Armazenamento de Imagens:** As imagens dos veículos são armazenadas em um **bucket da AWS S3**, garantindo escalabilidade e segurança.

## Tecnologias Utilizadas

### Frontend:

- **Next.js**: Utilizado para o desenvolvimento da interface com Server Side Rendering (SSR) para maior desempenho.
- **TypeScript**: Para uma tipagem estática e maior confiabilidade do código.
- **TailwindCSS**: Framework CSS utilizado para estilização da interface.
- **ShadCN UI**: Utilizado para os componentes de interface, semelhante ao Radix.

### Backend:

- **Spring Boot**: Framework Java para a criação da API REST.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar informações dos usuários e anúncios.
- **JWT (JSON Web Token)**: Usado para autenticação de usuários.
- **Flyway**: Para gerenciar e versionar as migrações do banco de dados.
- **Lombok**: Usado para reduzir o código boilerplate no backend.
- **AWS S3**: Utilizado para o armazenamento de imagens dos anúncios em um bucket seguro e escalável.

## Estrutura do Projeto

A aplicação está dividida em dois repositórios principais:

1. **Frontend**:

   - Diretório responsável pela interface do usuário (UI) e pela interação com a API.
   - Principais rotas incluem:
     - `/login`: Página de login do usuário.
     - `/anunciar`: Fluxo para criação de anúncios.
     - `/meus-anuncios`: Exibição dos anúncios do usuário.

2. **Backend**:
   - API REST que fornece os dados e gerencia as requisições.
   - Conexão com o banco de dados PostgreSQL e uso de migrações com Flyway.
   - Implementação de autenticação com JWT para controle de sessão.
   - Integração com a **API da Tabela Fipe** para busca automática de dados de veículos.
   - Armazenamento de imagens dos anúncios no **AWS S3**.

## Requisitos

- **Node.js**: v14 ou superior
- **Java**: 8 ou superior
- **PostgreSQL**: 13 ou superior
- **Conta AWS**: Para o armazenamento de imagens no S3

## Como Executar o Projeto

### Backend

1. Clone o repositório backend:
   ```bash
   git clone https://github.com/hiagoCf19/fullcar-backend.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd fullcar-backend
   ```
3. Configure o banco de dados PostgreSQL e as variáveis de ambiente.
4. Execute o projeto:
   ```bash
   ./mvnw spring-boot:run
   ```

### Frontend

1. Clone o repositório frontend:
   ```bash
   git clone https://github.com/hiagoCf19/fullcar-frontend.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd fullcar-frontend
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Execute o projeto:
   ```bash
   npm run dev
   ```

### Migrações do Banco de Dados

Para rodar as migrações do banco de dados (caso esteja configurado o Flyway):

```bash
./mvnw flyway:migrate
```

## Armazenamento de Imagens no AWS S3

Para utilizar o **AWS S3** no armazenamento de imagens:

1. Crie um bucket na sua conta AWS.
2. Adicione as chaves de acesso no arquivo `.env` do backend:

   ```bash
   AWS_ACCESS_KEY_ID=your-access-key
   AWS_SECRET_ACCESS_KEY=your-secret-key
   AWS_S3_BUCKET_NAME=your-bucket-name
   ```

3. As imagens dos veículos serão automaticamente armazenadas no bucket S3 durante o processo de upload.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma nova branch para a sua feature (`git checkout -b feature/nova-feature`).
3. Faça o commit das suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Envie as alterações para o repositório remoto (`git push origin feature/nova-feature`).
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a **MIT License**.
