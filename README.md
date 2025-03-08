# Real State User Microservice

This is a backend microservice for the real-state app, specifically for the user module. It is built using Express and TypeScript.

## Project Structure

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/GloodBuster/real-state-user-microservice.git
   cd real-state-user-microservice
   ```

2. Install dependencies using pnpm:
   ```sh
   pnpm install
   ```

## Scripts

- **Start the application:**

  ```sh
  pnpm start
  ```

  This will compile the TypeScript files and start the server.

- **Start the application in development mode:**
  ```sh
  pnpm dev
  ```
  This will start the server using `nodemon` to automatically restart it on file changes.

## Configuration

The TypeScript configuration is defined in [tsconfig.json](http://_vscodecontentref_/6).

## Usage

After starting the server, it will be listening on port `8001`. You can access the server by navigating to `http://localhost:8001` in your browser or using a tool like `curl` or `Postman`.

## License

This project is licensed under the ISC License.
