from flask import Flask, request, jsonify
from flask_cors import CORS
from converter import convert_xml_to_json

app = Flask(__name__)
CORS(app)  # Permite requisições do React

@app.route('/convert', methods=['POST'])
def convert_endpoint():
    if 'file' not in request.files:
        return jsonify({'error': 'Nenhum arquivo enviado'}), 400

    file = request.files['file']

    if not file.filename.endswith('.xml'):
        return jsonify({'error': 'O arquivo precisa ser XML'}), 400

    try:
        xml_data = file.read().decode('utf-8')
        json_data = convert_xml_to_json(xml_data)

        return jsonify({'json_content': json_data})
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(port=5000, debug=True)


# pra rodar : python app.py
