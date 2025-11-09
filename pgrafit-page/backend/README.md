# 💻 Backend: Servidor de Conversão (Python/Flask)

Este diretório contém o servidor de API responsável por operações de backend específicas do projeto P-GRAFIT, neste caso, a conversão de arquivos.

## 🛠️ Tecnologia

* **Linguagem:** Python
* **Framework Web:** Flask (API)
* **Módulos Adicionais:** `flask_cors` (para permitir requisições do frontend Next.js) e o módulo de conversão customizado (`converter.py`).

## ⚙️ Pré-requisitos

Para rodar este servidor localmente, você precisa ter o Python instalado e as seguintes bibliotecas Python:

```bash
pip install Flask flask-cors
# Nota: certifique-se de que todas as dependências do seu converter.py também estejam instaladas