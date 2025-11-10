# 💻 Backend: Servidor de Conversão (Python/Flask)

Este diretório contém o servidor de API responsável por operações de backend específicas do projeto P-GRAFIT, neste caso, a conversão de arquivos.

## 🛠️ Tecnologia

* **Linguagem:** Python
* **Framework Web:** Flask (API)
* **Módulos Adicionais:** `flask_cors` (para permitir requisições do frontend Next.js) e o módulo de conversão customizado (`converter.py`).

## ⚙️ Pré-requisitos

Para rodar este servidor localmente, você precisa ter o Python instalado e as seguintes bibliotecas Python:
# 💻 Backend: Servidor de Conversão (Python/Flask)

Este diretório contém o servidor de API responsável por operações de backend específicas do projeto P-GRAFIT, neste caso, a conversão de arquivos XML para JSON.

## 🛠️ Tecnologia

* **Linguagem:** Python
* **Framework Web:** Flask (API)
* **Servidor de Produção:** Gunicorn (para estabilidade e múltiplos *workers*)
* **Módulos Adicionais:** `flask_cors` (para permitir requisições do frontend Next.js) e o módulo de conversão customizado (`converter.py`).

## ⚙️ Pré-requisitos

Para rodar este servidor localmente, você precisa ter o **Python** instalado.

## 🚀 Configuração Inicial

Siga os passos para configurar o ambiente virtual e instalar as dependências necessárias.

### 1. Criação e Ativação do Ambiente Virtual (`venv`)

Navegue até o diretório `project-root/backend` e crie/ative o ambiente virtual:

```bash
# Navegue para o diretório
cd project-root/backend

# 1. Crie o ambiente virtual (se não existir)
python3 -m venv venv

# 2. Ative o ambiente virtual
source venv/bin/activate  # Linux/macOS
# OU
.\venv\Scripts\activate   # Windows (CMD/PowerShell)