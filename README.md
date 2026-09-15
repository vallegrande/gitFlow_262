# Funcionalidades básicas con Flask

- **dev1:** formulario con validación JavaScript de campos obligatorios y correo.
- **dev2:** carrusel de tres imágenes locales con botones anterior y siguiente.
- **dev3:** endpoint `POST /send-email` conectado al formulario y con validación en Python.

## Ejecutar

```bash
python -m pip install -r requirements.txt
python app.py
```

Abre http://127.0.0.1:5000 en el navegador.

El envío es **simulado**, como indica la guía: los datos se imprimen en la
consola de Python. No se envían correos reales ni se necesitan credenciales.

## Comprobar

1. Pulsa Anterior y Siguiente: al llegar al final, el carrusel vuelve al inicio.
2. Envía el formulario vacío o con un correo incorrecto: aparecerá un aviso.
3. Completa todos los campos: aparecerá la confirmación del envío simulado
   y los datos en la consola.
