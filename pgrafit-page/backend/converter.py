import xmltodict
import json

def convert_xml_to_json(xml_content: str) -> str:
    """
    Converte uma string XML para JSON formatado.
    
    Args:
        xml_content (str): Conteúdo XML em texto.
    
    Returns:
        str: JSON formatado (indentado).
    """
    try:
        # Converte XML em dicionário Python
        dict_data = xmltodict.parse(xml_content)

        # Converte dicionário em JSON
        json_data = json.dumps(dict_data, indent=2, ensure_ascii=False)

        return json_data
    except Exception as e:
        raise ValueError(f"Erro ao converter XML para JSON: {e}")
