# 🔒 Política de Seguridad

## 📋 Versiones Soportadas

Actualmente damos soporte de seguridad a las siguientes versiones de **gta5-mexican-page**:

| Versión | Soporte            | Estado         |
| ------- | ------------------ | -------------- |
| 1.x.x   | ✅ Soportada       | Producción     |


### 📌 Notas sobre versiones:

- **Versión 1.x.x**: Recibe actualizaciones de seguridad inmediatas

## 🚨 Reportar una Vulnerabilidad

La seguridad de **Calles de México** es nuestra prioridad. Si descubres una vulnerabilidad de seguridad, te pedimos que nos ayudes a proteger a nuestros usuarios siguiendo este proceso:

### 📧 Cómo Reportar

**IMPORTANTE: NO crees un issue público para vulnerabilidades de seguridad.**

En su lugar, reporta la vulnerabilidad de forma privada:

1. **Via GitHub Security Advisories** (Recomendado)
   - Ve a: https://github.com/MiguelMort09/gta5-mexican-page/security/advisories
   - Haz clic en "Report a vulnerability"
   - Completa el formulario con los detalles

2. **Via Email Directo**
   - Envía un correo a: **security@miguelmort.dev**
   - Asunto: `[SECURITY] Vulnerabilidad en Calles de México`

### 📝 Información a Incluir

Para ayudarnos a entender y resolver el problema rápidamente, incluye:

- **Descripción detallada** de la vulnerabilidad
- **Pasos para reproducir** el problema
- **Impacto potencial** (qué puede hacer un atacante)
- **Versión afectada** del proyecto
- **Entorno** donde se descubrió (navegador, sistema operativo, etc.)
- **Proof of Concept** (si es posible)
- **Posible solución** (opcional)

### 🔍 Ejemplo de Reporte

```markdown
**Tipo**: Cross-Site Scripting (XSS)

**Descripción**: 
Se encontró una vulnerabilidad XSS en el campo de búsqueda de vehículos.

**Pasos para reproducir**:
1. Ir a /vehiculos
2. En el campo de búsqueda, ingresar: `<script>alert('XSS')</script>`
3. El script se ejecuta sin sanitización

**Impacto**: 
Un atacante podría ejecutar código JavaScript malicioso en el navegador de otros usuarios.

**Versión afectada**: v1.2.0

**Entorno**: Chrome 120, macOS Sonoma
```

## ⏱️ Proceso de Respuesta

### Tiempos de Respuesta

| Severidad | Primera Respuesta | Resolución Objetivo |
| --------- | ---------------- | ------------------- |
| 🔴 Crítica | 24 horas | 7 días |
| 🟠 Alta | 48 horas | 14 días |
| 🟡 Media | 5 días | 30 días |
| 🟢 Baja | 7 días | 60 días |

### Qué Esperar

1. **Confirmación (24-48h)**: Confirmaremos la recepción de tu reporte
2. **Validación (2-5 días)**: Verificaremos y reproduciremos la vulnerabilidad
3. **Actualización**: Te mantendremos informado del progreso semanalmente
4. **Resolución**: Te notificaremos cuando se publique el fix
5. **Crédito**: Reconoceremos tu contribución (si lo deseas)

### Si la Vulnerabilidad es Aceptada

- ✅ Se creará un parche de seguridad
- ✅ Se publicará un Security Advisory
- ✅ Se te notificará antes de la divulgación pública
- ✅ Serás acreditado en el changelog (opcional)
- ✅ Recibirás una mención en nuestro Hall of Fame

### Si la Vulnerabilidad es Rechazada

- ❌ Te explicaremos por qué no se considera una vulnerabilidad
- ❌ Se cerrará el reporte con documentación
- ❌ Puedes apelar la decisión con información adicional

## 🏆 Programa de Reconocimiento

Aunque este es un proyecto de código abierto sin programa de recompensas monetarias, reconocemos públicamente a quienes reportan vulnerabilidades:

### Hall of Fame de Seguridad

Los contribuidores de seguridad serán listados aquí:

<!-- Lista de contribuidores se actualizará aquí -->

*¡Sé el primero en aparecer aquí reportando una vulnerabilidad de forma responsable!*

## 🛡️ Mejores Prácticas de Seguridad

Si estás contribuyendo al proyecto, sigue estas prácticas:

### Para Desarrolladores

- ✅ **Nunca** hagas commit de secretos, API keys o credenciales
- ✅ Usa variables de entorno para información sensible
- ✅ Sanitiza todas las entradas de usuario
- ✅ Implementa Content Security Policy (CSP)
- ✅ Mantén las dependencias actualizadas
- ✅ Usa HTTPS en todos los endpoints
- ✅ Valida datos en el cliente Y en el servidor

### Para Usuarios

- ✅ Mantén tu navegador actualizado
- ✅ No compartas tu información personal en issues públicos
- ✅ Reporta comportamiento sospechoso
- ✅ Usa contraseñas fuertes y únicas

## 🔐 Medidas de Seguridad Implementadas

Actualmente, **Calles de México** implementa:

- ✅ **HTTPS obligatorio** en producción
- ✅ **Content Security Policy** (CSP) headers
- ✅ **Dependabot** para actualizaciones automáticas de dependencias
- ✅ **CodeQL** analysis para detección de vulnerabilidades
- ✅ **Secret scanning** habilitado
- ✅ **Input sanitization** en todos los formularios
- ✅ **Rate limiting** en endpoints públicos
- ✅ **CORS** configurado correctamente

## 📚 Recursos Adicionales

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [Vercel Security Documentation](https://vercel.com/docs/security)
- [Next.js Security Headers](https://nextjs.org/docs/advanced-features/security-headers)

## 📞 Contacto

Para consultas no relacionadas con seguridad:
- **Issues**: https://github.com/MiguelMort09/gta5-mexican-page/issues
- **Discussions**: https://github.com/MiguelMort09/gta5-mexican-page/discussions

Para consultas de seguridad:
- **Security Advisories**: https://github.com/MiguelMort09/gta5-mexican-page/security/advisories
- **Email**: security@miguelmort.dev

## 🙏 Agradecimientos

Agradecemos a todos los investigadores de seguridad y contribuidores que ayudan a mantener **Calles de México** seguro para todos los usuarios.

---

<div align="center">

**Gracias por ayudarnos a mantener el proyecto seguro** 🔒

*Última actualización: Diciembre 2024*

</div>
