const chooseFile = document.querySelector('#filex');
const imgPreview = document.querySelector('#img-preview');

chooseFile.addEventListener('change', () => {
  //change detector
  getImgData(); // inserts an image into the page with the base64
});
const getImgData = () => {
  const files = chooseFile.files[0];

  if (files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener('load', function () {
      imgPreview.style.display = 'block';
      imgPreview.innerHTML = '<img src="' + this.result + '" />';
    });
  }
};
