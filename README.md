# API de Agendamento de contactos

Esta é a documentação de requisitos para a API de agendamento de contactos. Essa API permite aos usuários gerenciarem contactos, categorizá-los e realizar operações de CRUD.

## Funcionalidade

Os usuários devam poder adicionar novos contactos com informações como nome de telemóvel, endereço de e-mail entre outros.

## Requisitos Funcionais

1 - Cadastrar contacto
2 - Visuzlizar contacto
3 - Atualizar contacto
4 - Exluir contacto

## Requisitos de autenticação e autorização
1 - Autenticação de usuário
2 - Autorização de acesso as operações
3 - Criação de usuário

## Regras de negócio
1 - O sistema permitir os cadastro de usuários com nome
2 - O e-mail deve ser uma chave única.
3 - Os contactos devem conter pelo menos um nome e uma forma de contacto (número de telemóvel, endereço de e-mail)
4 - Somente os usários autorizados podem executar operações de criação, atualização e execução de contactos.
5 - A autorização é baseada em funções de usuário, como administrador e usuário regular.
6 - Todos os dados da API devem ser armazenados de forma segura e protegida contra acesso não autorizado
7-  As entradas do usuário devem ser validados para evitar inserção de doados incorretos ou maliciosos.