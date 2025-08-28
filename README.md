# Lista-de-compra-App
# Supermaket List

Aplicativo de lista de compras desenvolvido com React Native e Expo.

## Descrição

O Supermaket List é um aplicativo móvel que permite aos usuários criar e gerenciar listas de compras. Os usuários podem adicionar itens, marcar como concluídos, filtrar por status e remover itens conforme necessário.

## Funcionalidades

- Adicionar itens à lista de compras
- Marcar itens como pendentes ou concluídos
- Filtrar itens por status (pendentes/concluídos)
- Remover itens individuais
- Limpar toda a lista de compras
- Armazenamento local usando AsyncStorage

## Tecnologias

- React Native
- Expo
- TypeScript
- AsyncStorage para armazenamento local
- Lucide Icons para interface

## Pré-requisitos

- Node.js
- npm ou yarn
- Expo CLI

## Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd compra
   ```

3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

## Executando o projeto

### Modo de desenvolvimento

```bash
# Para iniciar o aplicativo
npm start
# ou
yarn start
```

### Executando em plataformas específicas

```bash
# Para Android
npm run android
# ou
yarn android

# Para iOS
npm run ios
# ou
yarn ios

# Para Web
npm run web
# ou
yarn web
```

## Estrutura do Projeto

```
src/
├── app/
│   └── Home/          # Tela principal do aplicativo
├── components/         # Componentes reutilizáveis
│   ├── Button/         # Componente de botão
│   ├── Input/          # Componente de entrada de texto
│   ├── Item/           # Componente de item da lista
│   ├── filter/         # Componente de filtro
│   └── statusIcon/     # Componente de ícone de status
├── Storage/            # Gerenciamento de armazenamento
└── Types/              # Definições de tipos TypeScript
```

## Scripts Disponíveis

- `start`: Inicia o servidor de desenvolvimento do Expo
- `android`: Executa o aplicativo no Android
- `ios`: Executa o aplicativo no iOS
- `web`: Executa o aplicativo na web

## Deploy

O projeto está configurado para deploy usando Expo Application Services (EAS):

- `development`: Build para desenvolvimento
- `preview`: Build para pré-visualização
- `production`: Build para produção

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto é privado e não possui uma licença pública.
