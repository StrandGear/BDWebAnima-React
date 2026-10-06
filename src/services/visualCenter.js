/**
 * Loads an image and calculates its visual center (center of mass) 
 * by ignoring fully transparent pixels.
 * 
 * @param {string} src - The URL or path to the image
 * @returns {Promise<{ x: number, y: number, offsetX: number, offsetY: number }>}
 */
export const getVisualCenter = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Prevents CORS issues if loading from external CDN
    
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      let totalWeight = 0;
      let sumX = 0;
      let sumY = 0;

      // Loop through every pixel (RGBA array, 4 values per pixel)
      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const index = (y * canvas.width + x) * 4;
          const alpha = data[index + 3]; // The Alpha (transparency) channel

          if (alpha > 0) {
            // Use alpha value as a weight for semi-transparent anti-aliased edges
            totalWeight += alpha;
            sumX += x * alpha;
            sumY += y * alpha;
          }
        }
      }

      if (totalWeight === 0) {
        // Fallback to geometric center if image is completely invisible
        resolve({ 
          x: canvas.width / 2, 
          y: canvas.height / 2,
          offsetX: 0,
          offsetY: 0
        });
        return;
      }

      const visualCenterX = sumX / totalWeight;
      const visualCenterY = sumY / totalWeight;
      const geometricCenterX = canvas.width / 2;
      const geometricCenterY = canvas.height / 2;

      // Calculate how far the visual center deviates from the dead center of the file
      resolve({
        x: visualCenterX,
        y: visualCenterY,
        offsetX: visualCenterX - geometricCenterX,
        offsetY: visualCenterY - geometricCenterY
      });
    };

    img.onerror = reject;
    img.src = src;
  });
};