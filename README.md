# Documentación del Servidor de Autenticación "auth" por Jefferson Lopez

## Descripción

El servidor de autenticación "auth" desarrollado por Mart es una aplicación Node.js que proporciona servicios de autenticación para usuarios. Permite a los usuarios registrarse y autenticarse utilizando correo electrónico y contraseña, así como autenticarse a través de Facebook y Google.

## Configuración del Entorno

### Desarrollo

Para desarrollar en el entorno local, puedes utilizar el siguiente comando:

```bash
pnpm run dev
```

Este comando ejecuta el servidor en modo de desarrollo y proporciona recarga automática en los cambios del código.

### Producción

Para ejecutar el servidor en un entorno de producción, utiliza el siguiente comando:

```bash
pnpm start
```

## Autenticación de Usuarios

### Autenticación por Correo Electrónico y Contraseña

Para autenticar a los usuarios mediante correo electrónico y contraseña, sigue estos pasos:

1.  Envía una solicitud POST al endpoint `/api/login` con las credenciales del usuario en el cuerpo de la solicitud en formato JSON:

    ```json
    {
      "email": "usuario@example.com",
      "password": "contraseña_secreta"
    }
    ```

2.  El servidor verificará las credenciales y responderá con un token de acceso si las credenciales son válidas. El token de acceso se utiliza para realizar operaciones autenticadas.

### Autenticación con Facebook

Para permitir que los usuarios se autentiquen a través de Facebook, sigue estos pasos:

1.  Implementa la autenticación de Facebook en tu aplicación cliente.
2.  Una vez que un usuario esté autenticado a través de Facebook, obtén el token de acceso de Facebook.
3.  Envía una solicitud POST al endpoint `/api/auth/facebook` con el token de acceso de Facebook en el cuerpo de la solicitud en formato JSON:

    ```json
    {
      "facebookToken": "token_de_facebook"
    }
    ```

4.  El servidor verificará el token de Facebook y responderá con un token de acceso propio si la autenticación es exitosa.

### Autenticación con Google

Para permitir que los usuarios se autentiquen a través de Google, sigue estos pasos:

1.  Implementa la autenticación de Google en tu aplicación cliente.
2.  Una vez que un usuario esté autenticado a través de Google, obtén el token de acceso de Google.
3.  Envía una solicitud POST al endpoint `/api/auth/google` con el token de acceso de Google en el cuerpo de la solicitud en formato JSON:

    ```json
    {
      "googleToken": "token_de_google"
    }
    ```

4.  El servidor verificará el token de Google y responderá con un token de acceso propio si la autenticación es exitosa.

## Endpoints Adicionales

Aquí hay una lista de otros endpoints disponibles en el servidor "auth". Para obtener más detalles sobre cómo usarlos, consulta la documentación técnica completa.

- `/api/register`: Permite a los usuarios registrarse proporcionando un correo electrónico y una contraseña.
- `/api/logout`: Cierra la sesión del usuario y revoca el token de acceso.

## Notas Adicionales

- Asegúrate de proteger adecuadamente los endpoints y verificar la autenticación en las rutas que requieran acceso autorizado.
- Considera implementar medidas de seguridad adicionales, como la verificación de correos electrónicos y la recuperación de contraseñas olvidadas.

## Contacto

Para obtener soporte técnico o hacer preguntas relacionadas con este servidor de autenticación, comunícate con Mart en [support@mart.com](mailto:contacto@mart.com).

Esta documentación proporciona una visión general de alto nivel del servidor de autenticación "auth" desarrollado por Mart. Consulta la documentación técnica completa para obtener información detallada sobre los endpoints y las características específicas.

---

ultima actualizacion (2023/26/9) aa/mm/dd
