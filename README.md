# **Gam3r.store**

## **Visão Geral**

Este repositório contém o código fonte da aplicação web Gam3r.store, uma loja online especializada em produtos para gamers. O projeto foi desenvolvido com o objetivo de oferecer uma experiência de compra intuitiva e completa para os amantes de games.

## **Tecnologias Utilizadas**

* **Front-end:**
    * **Next.js:** Framework React para criação de aplicações web rápidas e escaláveis.
    * **React:** Biblioteca JavaScript para construção de interfaces de usuário.
    * **Tailwind CSS:** Framework CSS para estilo rápido e eficiente.
    * **Next/Font:** Ferramenta para gerenciar fontes customizadas.
    * **@tabler/icons-react:** Biblioteca de ícones para a interface.
* **Backend:**
    * **NestJS:** Framework Node.js para a construção de APIs eficientes e escaláveis.
    * **TypeScript:** Linguagem de tipagem estática para JavaScript.

## **Estrutura do Projeto**

* **Frontend:**
    * `components`: Contém os componentes reutilizáveis da aplicação.
    * `pages`: Contém as páginas da aplicação.
    * `public`: Contém arquivos estáticos como imagens.
    * `styles`: Contém os arquivos de estilo globais.
* **Backend:**
    * `src`: Contém o código fonte da aplicação backend.
        * `controllers`: Controla as requisições HTTP.
        * `services`: Contém a lógica de negócio.
        * `entities`: Define as entidades do domínio.

## **Como Executar o Projeto**

**Pré-requisitos:**
* Node.js e npm (ou yarn) instalados.

**Clonando o repositório:**
```bash
git clone https://github.com/seu-usuario/gam3r-store.git
```

**Instalando as dependências:**
```bash
cd gam3r-store
npm install
```

**Executando o projeto:**
* **Frontend:**
    ```bash
    npm run dev
    ```
* **Backend:**
    ```bash
    npm run start
    ```

### **Configurando o Front-end (React com Next.js):**

1. **Criando um novo projeto Next.js:**
   ```bash
   npx create-next-app@latest frontend
   ```
   * Cria um novo projeto Next.js chamado "frontend" utilizando a versão mais recente disponível.

2. **Acessando o diretório do projeto:**
   ```bash
   cd frontend
   ```
   * Navega para o diretório recém-criado.

3. **Iniciando o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   * Inicia um servidor de desenvolvimento local, permitindo visualizar o aplicativo em tempo real no navegador.

4. **Instalando os ícones Tabler:**
   ```bash
   npm install @tabler/icons-react
   ```
   * Instala o pacote `@tabler/icons-react`, que fornece uma biblioteca de ícones para serem utilizados na interface do usuário.

### **Configurando o Back-end (NestJS):**

1. **Instalando a CLI do NestJS globalmente:**
   ```bash
   npm i -g @nestjs/cli
   ```
   * Instala a ferramenta de linha de comando do NestJS globalmente, permitindo criar e gerenciar projetos NestJS.

2. **Criando um novo projeto NestJS:**
   ```bash
   nest new backend
   ```
   * Cria um novo projeto NestJS chamado "backend".

3. **Acessando o diretório do projeto:**
   ```bash
   cd backend
   ```
   * Navega para o diretório do projeto backend.

4. **Exibindo a ajuda da CLI do NestJS:**
   ```bash
   nest --help
   ```
   * Mostra uma lista de todos os comandos disponíveis da CLI do NestJS, como gerar módulos, controladores, serviços, etc.

5. **Gerando um módulo:**
   ```bash
   nest g mo produto
   ```
   * Gera um novo módulo chamado "produto" dentro do diretório `src`. Módulos organizam a estrutura do projeto em partes lógicas.

6. **Gerando um controlador dentro do módulo:**
   ```bash
   cd src/produto
   nest g co produto --flat
   ```
   * Navega para o diretório do módulo "produto" e gera um controlador chamado "produto.controller.ts". Controladores são responsáveis por lidar com as requisições HTTP.

7. **Iniciando o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   * Inicia o servidor de desenvolvimento para o backend, permitindo testar as APIs.

**Observações:**

* **npm:** É o gerenciador de pacotes do Node.js, utilizado para instalar e gerenciar as dependências de um projeto.
* **npx:** É uma ferramenta que permite executar comandos de pacotes sem a necessidade de instalá-los globalmente.
* **@nestjs/cli:** É a interface de linha de comando do NestJS, utilizada para criar e gerenciar projetos NestJS.
* **módulo:** Representa uma parte lógica do projeto, como um conjunto de controladores, serviços e entidades relacionados a um determinado domínio (por exemplo, produtos).
* **controlador:** É responsável por lidar com as requisições HTTP e retornar as respostas adequadas.

**Comandos adicionais:**

* **Atualizando as dependências:**
   ```bash
   npm update
   ```
* **Instalando uma dependência específica:**
   ```bash
   npm install <nome-do-pacote>
   ```
* **Executando testes:**
   ```bash
   npm test
   ```
* **Criando uma build para produção:**
   ```bash
   npm run build
   ```

Com estes comandos e explicações, você estará pronto para iniciar o desenvolvimento do seu projeto Gam3r.store!

### **Contribuindo**

Agradecemos sua contribuição para o projeto Gam3r.store! Para contribuir, siga estes passos:

1. **Fork** o repositório.
2. **Clone** o seu fork para sua máquina local.
3. **Crie um novo branch** para sua feature ou correção de bug.
4. **Faça as suas alterações** e commit.
5. **Envie um pull request** para o repositório original.
