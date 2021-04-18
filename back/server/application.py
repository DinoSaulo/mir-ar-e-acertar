import os
from flask import Flask, flash, request, redirect, url_for
from analysis import Analysis
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = './uploads/'

application = Flask(__name__)
application.secret_key = b'test'


@application.route('/analyse', methods=['POST'])
def uploadfile():
    if request.method == 'POST':
        if 'file' not in request.files:
            return 'No file'

        file = request.files['file']
        if file.filename == '':
            return 'No selected file'
        if file:
            if not os.path.exists(UPLOAD_FOLDER):
                os.makedirs(UPLOAD_FOLDER)
            file_path = UPLOAD_FOLDER + secure_filename(file.filename)
            file.save(file_path)
            print(Analysis.analyse(file_path))
            os.remove(file_path)
            return 'Success'


if __name__ == "__main__":
    application.run(debug=True)
