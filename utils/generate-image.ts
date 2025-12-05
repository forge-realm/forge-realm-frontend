import { toPng } from "html-to-image"


export const generateImage = async (element: HTMLDivElement): Promise<File | null> => {
  if (element) {
    toPng(element, { cacheBust: true })
      .then((dataUrl) => {
        // Convert data URL to a Blob
        const arr = dataUrl.split(',');
        const mime = arr[0].match(/:(.*?);/)?.[1] || '';
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while(n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        const file = new File([u8arr], 'nft-character.png', { type: mime });
        // Return file for use in upload function
        return file;
      });
  }
  return null;
};