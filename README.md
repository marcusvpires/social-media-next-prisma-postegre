# Social media with rich text editor
## Next js, Prisma, PostegreSQL 

### Funcionalidades
- Editor de texto completo
- Upload de imagens nos artigos com drag and drop
- Dashboard dos artigos
- Pode funcionar como um Blog com CMS integrado
- Autenticação com o Google

### Tecnologias
- Next js (React js)
- Prisma
- PostegreSQL
- Next auth
- styled-components (styled-icons)

# Clonar
Meu pc tem o Node js na versão v14.18.1 e o Postegres na versão 11.16, tambêm é possível rodar direto no Heroku --> [Configurar um banco de dados PostgreSQL gratuito no Heroku](https://dev.to/prisma/how-to-setup-a-free-postgresql-database-on-heroku-1dc1)
```
gh repo clone marcusvpires/social-media-next-prisma-postegre
```
### Banco de dados
Abra o arquivo `.env.example` e substitua a URL de conexão fictícia pela URL de conexão do seu banco de dados PostgreSQL e depois renomeie para `.env`
```
npx prisma db push
```
Esse comando cria as tabelas em seu banco de dados
```
npx prisma studio
```
Se tudo der certo, você verá a interface do prisma para visualizar e editar o banco de dados.

### Next js
```
npm run dev
```
### Autenticação com o Google
- Siga os passos da [documentação do next auth](https://next-auth.js.org/providers/google)
- Autualize o arquivo .env e coloce o GOOGLE_CLIENT_ID e o GOOGLE_SECRET

### Importante
Execute esse comando sempre que você atualizar o Schema
```
npx prisma generate
```

# Coisas para melhorar
- Link não pode ser adcionado no editor de texto por conta de conflitos com o Next Link
- Imagem de Banner para cada artigo
- Melhorar o feed
- Dashboard para administradores com mais funcionalidades
- Sistema de pesquisa

## License

MIT ✨