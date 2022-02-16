class ImgUploader {
  // file을 서버에 업로드를 한다.
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "qzixnloy");
    const result = await fetch(
      "https://api.cloudinary.com/v1_1/sanghun/upload",
      {
        method: "POST",
        body: data,
      }
    );

    return await result.json();
  }
}

export default ImgUploader;
