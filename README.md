# Desafio tecnico leitor de arquivos CNAB

### Atenção
Ante de executar a CLI é importante estar utilizando a versão do node.js 16.16.0, e instalar os pacotes, deixei configurado os arquivos NVM e ASDF

hoje ao rodar:

```bash
node cnabRows.js
```

temos o seguinte output:

```bash
node cnabRows.js --help
Uso: cnabRows.js [options]

Opções:
      --help      Exibe ajuda                                         [booleano]
      --version   Exibe a versão                                      [booleano]
  -f, --from      posição inicial de pesquisa da linha do Cnab
                                                          [número] [obrigatório]
  -t, --to        posição final de pesquisa da linha do Cnab
                                                          [número] [obrigatório]
  -s, --segmento  tipo de segmento                        [string]

  -c  --company  lista pelo nome da empresa               [string]

  -e  --export  Salva em json  (pasta exported na raiz)   [booleano]


Exemplos:
  cnabRows.js -f 21 -t 34 -s "p"  lista a linha e campo que from e to do cnab
  cnabRows.js -f 21 -t 34 -c "ZENVIA MOBILE SERVICOS DIGITAIS AS"   Lista pelo nome da empresa (ignore case e espaços)
  cnabRows.js -f 21 -t 34 -c "ZENVIA MOBILE SERVICOS DIGITAIS AS" -s "r", Lista pelo nome da empresa e segmento
  cnabRows.js -f 21 -t 34 -c "ZENVIA MOBILE SERVICOS DIGITAIS AS" -s "r" -e ', Lista pelo nome da empresa e segmento e exporta

```