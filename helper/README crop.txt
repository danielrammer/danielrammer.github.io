bashpip install Pillow
Usage:
bashpython script.py <input_folder> <output_folder> <name_prefix>
Example:
bashpython script.py ./images ./output Converge
This will:

Scan all images in ./images (supports JPG, PNG, WebP, GIF, BMP)
Create two versions of each image:

1920x810 → named Converge-01.jpg, Converge-02.jpg, etc.
150x150 → named converge-01-150.jpg, converge-02-150.jpg, etc.


Save everything to ./output
Use center cropping with minimal cropping to preserve image content
Sort images alphabetically before processing

The script will display progress as it processes each file and report how many were successfully completed.WiederholenClaude hat noch nicht die Fähigkeit, den von ihm generierten Code auszuführen.