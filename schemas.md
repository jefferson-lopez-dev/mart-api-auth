# Documentación del Esquema \`awgap\` (Accounts with Gmail Password)

Este esquema define la estructura de los documentos almacenados en la colección \`awgap\` de la base de datos MongoDB. Estos documentos representan registros de usuarios de una aplicación que utilizan Gmail como nombre de usuario y contraseña.

## Campos del Esquema

1.  **\`gmail\`**
    - Tipo: \`String\`
    - Requerido: Sí
    - Único: Sí
    - Descripción: El correo electrónico (Gmail) del usuario.
    - Restricciones:
      - Debe ser una cadena de caracteres.
      - Es obligatorio proporcionar un valor.
      - Debe ser único en la colección.
      - Se realiza un recorte de los espacios en blanco alrededor del valor.
2.  **\`password\`**
    - Tipo: \`String\`
    - Requerido: Sí
    - Descripción: La contraseña del usuario.
    - Restricciones:
      - Debe ser una cadena de caracteres.
      - Es obligatorio proporcionar un valor.
3.  **\`createdAt\`**
    - Tipo: \`Date\`
    - Valor Predeterminado: Fecha y hora actual
    - Descripción: La fecha y hora en que se creó el registro de usuario.
    - Nota: Este campo se completará automáticamente con la fecha y hora actual si no se proporciona un valor.

## Uso del Modelo

Este esquema se utiliza para crear modelos de usuario en la aplicación. Un modelo se crea de la siguiente manera:

```javascript
import Gmail from "./schema/schema_wgap";
```

Luego, puedes utilizar `UserModel` para realizar operaciones de base de datos, como la creación, lectura, actualización y eliminación de registros de usuario.

### Ejemplo de creación de un nuevo usuario:

```javascript
const newGmail = new Gmail({
  gmail: "ejemplo@gmail.com",
  password: "contrasenaSegura",
});

newGmail.save();
```

## Notas Adicionales

- Este esquema es adecuado para representar registros de usuarios en una aplicación que utiliza Gmail como nombre de usuario y contraseña. Asegúrate de manejar de forma segura las contraseñas almacenadas, por ejemplo, mediante el uso de técnicas de hash y salting.
- El campo \`createdAt\` se llenará automáticamente con la fecha y hora actual cuando se cree un nuevo registro de usuario, por lo que no es necesario proporcionar un valor para este campo explícitamente.

---

ultima actualizacion (2023/26/9) aa/mm/dd
