from flask import Flask, request, send_file, render_template
from PIL import Image
import io

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/convert', methods=['POST'])
def convert_image():
    file = request.files['image']
    from_format = request.form['fromFormat']
    to_format = request.form['toFormat']
    
    image = Image.open(file.stream)

    output = io.BytesIO()
    image.save(output, format=to_format.upper())
    output.seek(0)

    return send_file(output, mimetype=f'image/{to_format}', as_attachment=True, download_name=f'converted_image.{to_format}')

if __name__ == '__main__':
    app.run(debug=True)
