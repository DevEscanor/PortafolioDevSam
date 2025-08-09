# 🔒 Política de Seguridad

## 📊 Configuración de Analytics

### **Google Analytics**
Este proyecto utiliza Google Analytics para rastrear las interacciones de usuarios y el rendimiento del sitio web.

**Variable de Entorno:**
```
REACT_APP_GA_TRACKING_ID=tu-ga-tracking-id
```

**Qué rastrea:**
- Visualizaciones de páginas y navegación
- Envíos de formularios
- Clicks en redes sociales
- Interacciones de usuarios
- Métricas de rendimiento

**Notas de Seguridad:**
- ✅ **Público por diseño** - El ID de GA está destinado a ser público
- ✅ **Sin datos sensibles** - Solo rastrea interacciones anónimas de usuarios
- ✅ **Cumple GDPR** - Respeta las preferencias de privacidad del usuario
- ✅ **Visible en navegador** - Se puede ver en el código fuente del navegador

## 🛡️ Prácticas de Seguridad

### **Variables de Entorno**
- **Variables públicas** (seguras para commit):
  - `REACT_APP_GA_TRACKING_ID` - ID de Google Analytics
  - `REACT_APP_EMAILJS_SERVICE_ID` - ID de Servicio EmailJS
  - `REACT_APP_EMAILJS_TEMPLATE_ID` - ID de Plantilla EmailJS
  - `REACT_APP_EMAILJS_USER_ID` - ID de Usuario EmailJS

- **Variables privadas** (nunca hacer commit):
  - Claves API con acceso de escritura
  - Credenciales de base de datos
  - Secretos del servidor
  - Tokens privados

### **Dependencias**
- Todas las dependencias se actualizan regularmente
- Se monitorean las vulnerabilidades de seguridad
- Solo se usan paquetes confiables

### **Seguridad del Código**
- No hay datos sensibles en el código del cliente
- Validación de entrada en todos los formularios
- Protección XSS implementada
- Protección CSRF para formularios

## 🚨 Reportar Problemas de Seguridad

Si descubres una vulnerabilidad de seguridad, por favor:

1. **NO** crear un issue público en GitHub
2. **Enviar email** al mantenedor: devsamsuarez@gmail.com
3. **Incluir** información detallada sobre la vulnerabilidad
4. **Esperar** reconocimiento y resolución

## 📋 Lista de Verificación de Seguridad

- [x] No hay datos sensibles en el código del cliente
- [x] Variables de entorno configuradas correctamente
- [x] Dependencias actualizadas regularmente
- [x] Validación de entrada implementada
- [x] Analytics configurado de forma segura
- [x] Política de privacidad implementada

## 🔐 Privacidad

Este portafolio respeta la privacidad del usuario:
- El rastreo de analytics es transparente
- No se recopilan datos personales
- Los usuarios pueden optar por no ser rastreados
- Se mantiene el cumplimiento GDPR

---

**Última actualización:** Diciembre 2024
**Mantenedor:** David Suárez (devsamsuarez@gmail.com) 