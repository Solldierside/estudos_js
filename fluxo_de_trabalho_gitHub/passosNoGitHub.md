# Entendimento básico de um fluxo de trabalho cooperativo com Git e GitHub

Trabalhar em equipe utilizando Git e GitHub envolve seguir um fluxo de trabalho padronizado que facilita o desenvolvimento colaborativo de projetos. Abaixo estão os principais conceitos e etapas:

# Passos no Git e GitHub

## O que são branches?

Uma branch (ramificação) é uma cópia paralela do código onde você pode desenvolver funcionalidades ou corrigir problemas sem interferir diretamente na versão principal (geralmente chamada de main ou master).

## Por que usar branches?

Muitas vezes, a branch principal contém o código em produção ou o código mais estável. Trabalhar em branches permite que você desenvolva novas funcionalidades ou corrija bugs sem afetar a estabilidade do código principal (em produção).

## Criar uma nova branch a partir da main

```bash
git status # Verifica o status do repositório

# Caso você esteja em uma branch diferente da main, primeiro volte para a main e atualize-a
git checkout main # Vai para a branch principal
git pull # Atualiza com o conteúdo mais recente do repositório remoto
git checkout -b nova-feature # Cria e muda para a nova branch chamada 'nova-feature'
```

## Criar um commit

Um commit registra mudanças feitas no código. Deve ser acompanhado por uma mensagem clara e objetiva.

```bash
git add .
git commit -m "feat: adiciona botão de login"
git add . # Adiciona todos os arquivos modificados
git commit -m "feat: adiciona botão de login"
```

## Tipos de commit (convenção comum)

Tipo Descrição
feat: Nova funcionalidade
fix: Correção de bug
docs: Alterações na documentação
style: Formatação, identação, ponto e vírgula
refactor: Refatoração de código (sem mudança de comportamento)
test: Adição ou modificação de testes
chore: Outras tarefas como configuração, build

## Abrindo um Pull Request (PR)

Depois de fazer seus commits e subir sua branch para o GitHub, você pode abrir um Pull Request para que seu código seja revisado e, se aprovado, integrado à branch principal.

```bash
git push origin nova-feature
```

Depois, vá até o GitHub e clique em "Compare & Pull Request" para abrir o PR.

## Implementando as alterações sugeridas

Caso alguém revise seu PR e sugira mudanças, basta fazer as alterações localmente, comitar e fazer push novamente:

```bash
# Fazer as alterações solicitadas

git add .
git commit -m "fix: ajusta nome do componente conforme revisão"
git push origin nova-feature
```

As mudanças aparecerão automaticamente no mesmo PR.

## Mergear um Pull Request

Depois que o PR for aprovado, alguém (ou você mesmo, se tiver permissão) pode fazer o merge para a main.

No GitHub: Clique no botão "Merge pull request" e depois em "Confirm merge".

Após isso, é comum deletar a branch
