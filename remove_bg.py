from PIL import Image

def make_transparent(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    for item in datas:
        r, g, b, a = item
        # If pixel is near white, make transparent
        if r > 240 and g > 240 and b > 240:
            avg = (r + g + b) / 3
            # Smooth edge alpha transition
            diff = 255 - avg
            if diff < 5:
                alpha = 0
            else:
                alpha = int(min(255, diff * 15))
            new_data.append((r, g, b, alpha))
        else:
            new_data.append((r, g, b, 255))

    img.putdata(new_data)
    
    # Crop tight around the logo content
    bbox = img.getbbox()
    if bbox:
        # Add a tiny padding
        pad = 10
        w, h = img.size
        crop_box = (
            max(0, bbox[0] - pad),
            max(0, bbox[1] - pad),
            min(w, bbox[2] + pad),
            min(h, bbox[3] + pad)
        )
        img = img.crop(crop_box)

    img.save(output_path, "PNG")
    print("Logo processed with transparent background successfully!")

if __name__ == "__main__":
    src = r"C:\Users\alexc\.gemini\antigravity\brain\5463a388-288e-482d-82b3-76f2a0fbdf54\.user_uploaded\media_1790031188205.png"
    dest = r"c:\xampp\htdocs\web lara\images\logo.png"
    make_transparent(src, dest)
