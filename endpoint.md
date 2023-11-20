# Documentación de Endpoints

A continuación se describen los endpoints disponibles en esta API y su propósito:

## `/login` (POST)

- **Propósito:** Este endpoint se utiliza para que los usuarios inicien sesión en la aplicación utilizando sus credenciales de Gmail.
- **Requiere Autenticación:** No.
- **Validación de Datos:** Se valida que los datos proporcionados cumplan con el esquema especificado en `validatedLoginGmail`.
- **Controlador:** El controlador `useLoginGmail` se encarga de procesar la solicitud de inicio de sesión.

## `/register` (POST)

- **Propósito:** Este endpoint permite a los usuarios registrarse en la aplicación utilizando su correo electrónico de Gmail y una contraseña.
- **Requiere Autenticación:** No.
- **Validación de Datos:** Se verifica que los datos proporcionados cumplan con el esquema definido en `validatedRegisterGmail`.
- **Controlador:** El controlador `useRegisterGmail` se encarga de procesar la solicitud de registro de usuario.

## `/logout` (POST)

- **Propósito:** Este endpoint permite a los usuarios cerrar sesión en la aplicación, lo que invalida su token de autenticación.
- **Requiere Autenticación:** Sí.
- **Validación de Datos:** No es necesario, ya que solo requiere que el usuario esté autenticado.
- **Controlador:** El controlador `useLogoutAccount` maneja la acción de cierre de sesión.

## `/verify-token` (GET)

- **Propósito:** Este endpoint se utiliza para verificar si el token de autenticación de un usuario es válido y está vigente.
- **Requiere Autenticación:** Sí.
- **Validación de Datos:** No es necesario, ya que solo requiere que el usuario esté autenticado.
- **Controlador:** El controlador `useVerifyToken` se encarga de verificar la validez del token de autenticación.

## `/account` (GET)

- **Propósito:** Este endpoint se utiliza para obtener la cuenta del usuario como el gmail y la contraseña que previamente se entrega encryptada.
- **Requiere Autenticación:** Sí.
- **Validación de Datos:** No es necesario, ya que solo requiere que el usuario esté autenticado.
- **Controlador:** El controlador `useAccount` se encarga de buscar el user y entregarle su infomacion correcta cuendo se haga la peticion a este endpoint

---

ultima actualizacion (2023/26/9) aa/mm/dd
