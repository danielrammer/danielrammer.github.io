#!/usr/bin/env python3
"""
Image Crop & Scale Script
Processes all images in a folder and resizes them to specified dimensions.
Usage: python script.py <input_folder> <output_folder> <name_prefix>
"""

import os
import sys
from pathlib import Path
from PIL import Image

def get_center_crop_box(img_width, img_height, target_width, target_height):
    """Calculate center crop box to minimize cropping."""
    img_aspect = img_width / img_height
    target_aspect = target_width / target_height
    
    if img_aspect > target_aspect:
        # Image is wider, crop width
        new_width = img_height * target_aspect
        left = (img_width - new_width) / 2
        box = (left, 0, left + new_width, img_height)
    else:
        # Image is taller, crop height
        new_height = img_width / target_aspect
        top = (img_height - new_height) / 2
        box = (0, top, img_width, top + new_height)
    
    return box

def process_image(input_path, output_folder, name_prefix, index):
    """Process a single image to create two versions."""
    try:
        img = Image.open(input_path)
        
        # Define output sizes
        sizes = [
            (1920, 810, f"{name_prefix}-{index:02d}.jpg"),
            (150, 150, f"{name_prefix.lower()}-{index:02d}-150.jpg")
        ]
        
        for width, height, filename in sizes:
            # Get center crop box
            box = get_center_crop_box(img.width, img.height, width, height)
            
            # Crop and resize
            cropped = img.crop(box)
            resized = cropped.resize((width, height), Image.Resampling.LANCZOS)
            
            # Save
            output_path = os.path.join(output_folder, filename)
            resized.save(output_path, quality=95)
            print(f"✓ Created: {filename}")
        
        return True
    except Exception as e:
        print(f"✗ Error processing {input_path}: {e}")
        return False

def main():
    if len(sys.argv) != 4:
        print("Usage: python script.py <input_folder> <output_folder> <name_prefix>")
        print("Example: python script.py ./images ./output Converge")
        sys.exit(1)
    
    input_folder = sys.argv[1]
    output_folder = sys.argv[2]
    name_prefix = sys.argv[3]
    
    # Validate input folder
    if not os.path.isdir(input_folder):
        print(f"Error: Input folder '{input_folder}' not found.")
        sys.exit(1)
    
    # Create output folder if it doesn't exist
    Path(output_folder).mkdir(parents=True, exist_ok=True)
    
    # Supported image extensions
    supported_extensions = {'.jpg', '.jpeg', '.png', '.webp', '.gif', '.bmp'}
    
    # Get all image files
    image_files = sorted([
        f for f in os.listdir(input_folder)
        if os.path.splitext(f)[1].lower() in supported_extensions
    ])
    
    if not image_files:
        print(f"No image files found in '{input_folder}'")
        sys.exit(1)
    
    print(f"Found {len(image_files)} image(s)")
    print(f"Output folder: {output_folder}")
    print(f"Name prefix: {name_prefix}\n")
    
    # Process each image
    successful = 0
    for index, filename in enumerate(image_files, 1):
        input_path = os.path.join(input_folder, filename)
        print(f"\nProcessing {index}/{len(image_files)}: {filename}")
        if process_image(input_path, output_folder, name_prefix, index):
            successful += 1
    
    print(f"\n✓ Successfully processed {successful}/{len(image_files)} images")

if __name__ == "__main__":
    main()