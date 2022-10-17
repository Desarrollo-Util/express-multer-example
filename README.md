<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<div align="center">
  <a href="">[![Contributors][contributors-shield]][contributors-url]</a>
  <a href="">[![Forks][forks-shield]][forks-url]</a>
  <a href="">[![Stargazers][stars-shield]][stars-url]</a>
  <a href="">[![Issues][issues-shield]][issues-url]</a>
  <a href="">[![MIT License][license-shield]][license-url]</a>
</div>

<div align="center">
  <h1>Subida y descarga de archivos</h1>
</div>

## Conceptos teóricos

-   La subida de archivos por http tiene un estandar marcado
-   Este estandar indica que el content-type de la solicitud debe ser de tipo multipart/form-data y un boundary.
-   Lo primero indica el tipo de solicitud, que habitualmente es una serie de campos de un formulario, estos campos pueden contener texto plano o un archivo.
-   El boundary, es una secuencia de caracteres que sirve para diferenciar cada una de las partes del mensaje http, ya que todos los campos que se envian van juntos entonces es necesario saber cuando acaba uno y empieza el siguiente.
-   Cuando enviamos la solicitud desde un cliente HTTP o un navegador web, el boundary y el body se crean automaticamente, no tenemos que poner manualmente los content-disposition o content-type. En JS simplemente añadimos la información del formulario y el content type multipart
-   En el servidor debemos obtener cada uno de los valores o archivos, validarlos y almacenarlos o lo que queramos hacer con ellos.

## Ejemplo de una solicitud HTTP

**Headers**

POST /uploads HTTP/1.2  
Host: example.com  
Content-Type: multipart/form-data;boundary=------------------------d74496d66958873e

**Body**

**--------------------------d74496d66958873e**  
Content-Disposition: form-data; name="person"  
**--------------------------d74496d66958873e**  
Content-Disposition: form-data; name="secret"; filename="file.txt"  
Content-Type: text/plain

contents of the file  
**--------------------------d74496d66958873e**  
Content-Disposition: form-data; name="imagen1"; filename="Solucion.png"  
Content-Type: image/png

�PNG
→
IHDR♦9☺♠`�D�☺sRGB��∟�♦gAMA�� �a♣ pHYs��☺�o�d��IDATx^���D ND�B`�
**--------------------------d74496d66958873e**--

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Desarrollo-Util/express-multer-example.svg?style=for-the-badge&color=92DCE5
[contributors-url]: https://github.com/Desarrollo-Util/express-multer-example/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Desarrollo-Util/express-multer-example.svg?style=for-the-badge
[forks-url]: https://github.com/Desarrollo-Util/express-multer-example/network/members
[stars-shield]: https://img.shields.io/github/stars/Desarrollo-Util/express-multer-example.svg?style=for-the-badge
[stars-url]: https://github.com/Desarrollo-Util/express-multer-example/stargazers
[issues-shield]: https://img.shields.io/github/issues/Desarrollo-Util/express-multer-example.svg?style=for-the-badge
[issues-url]: https://github.com/Desarrollo-Util/express-multer-example/issues
[license-shield]: https://img.shields.io/github/license/Desarrollo-Util/express-multer-example.svg?style=for-the-badge
[license-url]: https://github.com/Desarrollo-Util/express-multer-example/blob/main/LICENSE
