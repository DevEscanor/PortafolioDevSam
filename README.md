# 🚀 David Suárez - Portfolio Web

[![React](https://img.shields.io/badge/React-18.0.0-blue.svg)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-3.0-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![HTML5](https://img.shields.io/badge/HTML5-5.0-red.svg)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-brightgreen.svg)](https://devescanor.github.io/PortafolioDevSam/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<div align="center">
  <img src="public/favicon.ico" alt="Portfolio Logo" width="100" height="100">
</div>

## 📋 Tabla de Contenidos

- [🎯 Descripción](#-descripción)
- [✨ Características](#-características)
- [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [🚀 Instalación](#-instalación)
- [📱 Uso](#-uso)
- [🎨 Características del Diseño](#-características-del-diseño)
- [🌐 Despliegue](#-despliegue)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🔒 Seguridad](#-seguridad)
- [🤝 Contribución](#-contribución)
- [📄 Licencia](#-licencia)
- [📞 Contacto](#-contacto)

## 🎯 Descripción

Portfolio web profesional desarrollado con React que muestra mis habilidades, proyectos y experiencia en desarrollo web. El sitio incluye un diseño moderno, responsive y accesible con funcionalidades avanzadas como modo oscuro, internacionalización, navegación suave y formulario de contacto funcional.

## ✨ Características

### 🎨 **Diseño y UX**
- ✨ **Diseño Moderno y Profesional**: Interfaz elegante con gradientes y efectos visuales
- 🌙 **Modo Oscuro/Claro**: Toggle automático con persistencia de preferencias
- 📱 **Diseño Responsive**: Optimizado para todos los dispositivos
- 🔄 **Animaciones Suaves**: Transiciones y efectos visuales profesionales
- 🎨 **Transiciones de Color**: Separación visual elegante entre secciones

### 🌍 **Internacionalización**
- 🇪🇸 **Español**: Idioma principal
- 🇺🇸 **Inglés**: Soporte completo
- 🔄 **Cambio Dinámico**: Intercambio de idiomas en tiempo real

### 🧭 **Navegación**
- 📍 **Indicador de Scroll**: Puntos de navegación visual
- 📱 **Menú Móvil**: Navegación optimizada para dispositivos móviles

### 📧 **Funcionalidades**
- 📝 **Formulario de Contacto**: Integrado con EmailJS y validaciones robustas
- 🔗 **Enlaces Sociales**: Conexión directa a redes profesionales
- 📊 **Sección de Proyectos**: Showcase de trabajos realizados
- 💼 **Sección de Habilidades**: Visualización de competencias técnicas
- 📈 **Analytics**: Seguimiento de interacciones con Google Analytics

### 🔒 **Seguridad y Privacidad**
- 🛡️ **Validaciones Robustas**: Formularios con validación en tiempo real
- 🔐 **Variables de Entorno**: Configuración segura de servicios
- 📊 **Analytics Seguro**: Rastreo transparente y GDPR compliant
- 🚫 **Sin Datos Sensibles**: No se almacenan datos personales

## 🛠️ Tecnologías Utilizadas

### **Frontend**
- ![React](https://img.shields.io/badge/React-18.0.0-61DAFB?logo=react) - Biblioteca de JavaScript para interfaces de usuario
- ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript) - Lenguaje de programación
- ![CSS3](https://img.shields.io/badge/CSS3-3.0-1572B6?logo=css3) - Estilos y diseño
- ![HTML5](https://img.shields.io/badge/HTML5-5.0-E34F26?logo=html5) - Estructura semántica

### **Librerías y Herramientas**
- ![React Router](https://img.shields.io/badge/React%20Router-6.0-CA4245?logo=react-router) - Navegación y routing
- ![React i18next](https://img.shields.io/badge/React%20i18next-22.4.9-000000?logo=i18next) - Internacionalización
- ![EmailJS](https://img.shields.io/badge/EmailJS-3.2.0-FF6B6B?logo=emailjs) - Servicio de email
- ![Formik](https://img.shields.io/badge/Formik-2.2.9-000000?logo=formik) - Manejo de formularios
- ![React Scroll](https://img.shields.io/badge/React%20Scroll-1.8.9-000000?logo=react-scroll) - Scroll suave
- ![React Icons](https://img.shields.io/badge/React%20Icons-4.3.1-000000?logo=react) - Iconografía

### **Despliegue**
- ![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-222222?logo=github-pages) - Hosting gratuito
- ![gh-pages](https://img.shields.io/badge/gh--pages-6.3.0-222222?logo=github) - Herramienta de despliegue

## 🚀 Instalación

### **Prerrequisitos**
- Node.js (versión 16 o superior)
- npm o yarn

### **Pasos de Instalación**

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/DevEscanor/PortafolioDevSam.git
   cd PortafolioDevSam
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   # Crear archivo .env.local
   REACT_APP_EMAILJS_SERVICE_ID=tu_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=tu_template_id
   REACT_APP_EMAILJS_USER_ID=tu_user_id
   REACT_APP_GA_TRACKING_ID=tu_ga_tracking_id
   ```

4. **Ejecutar en modo desarrollo**
   ```bash
   npm start
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📱 Uso

### **Comandos Disponibles**

```bash
# Desarrollo
npm start          # Inicia el servidor de desarrollo
npm test           # Ejecuta las pruebas
npm run eject      # Expone la configuración de webpack

# Producción
npm run build      # Construye la aplicación para producción
npm run deploy     # Despliega en GitHub Pages
```

### **Funcionalidades Principales**

- **🌙 Modo Oscuro**: Click en el botón de tema en la navbar
- **🌍 Cambio de Idioma**: Botones de idioma en la esquina superior derecha
- **🧭 Navegación**: Usa la navbar o los puntos de scroll para navegar
- **📧 Contacto**: Llena el formulario para enviar mensajes
- **📱 Responsive**: Optimizado para móviles y tablets

## 🎨 Características del Diseño

### **Paleta de Colores**
```css
/* Modo Claro */
--azul: #2563eb
--blanco: #ffffff
--gris-claro: #f8fafc
--gris-medio: #64748b
--gris-oscuro: #334155

/* Modo Oscuro */
--azul-obscuro: #1e40af
--verde: #10b981
--rojo: #ef4444
--bg-dark: #1a1a2e
```

### **Tipografía**
- **Títulos**: Fuente moderna con gradientes
- **Texto**: Legibilidad optimizada
- **Responsive**: Escalado automático por dispositivo

### **Efectos Visuales**
- **Gradientes**: Fondos y textos con gradientes profesionales
- **Sombras**: Sistema de sombras consistente
- **Animaciones**: Transiciones suaves y efectos hover
- **Glassmorphism**: Efectos de cristal modernos

## 🌐 Despliegue

### **GitHub Pages (Recomendado)**

1. **Configurar el repositorio**
   ```bash
   git add .
   git commit -m "Configurar para GitHub Pages"
   git push origin main
   ```

2. **Hacer deploy**
   ```bash
   npm run deploy
   ```

3. **Configurar GitHub Pages**
   - Ve a Settings > Pages
   - Source: "Deploy from a branch"
   - Branch: "gh-pages"
   - Folder: "/(root)"

### **URL del Sitio**
🌐 **https://devescanor.github.io/PortafolioDevSam/**

## 📁 Estructura del Proyecto

```
PortafolioDevSam/
├── public/                 # Archivos públicos
│   ├── index.html         # HTML principal
│   └── favicon.ico        # Icono del sitio
├── src/                   # Código fuente
│   ├── website/           # Componentes del sitio web
│   │   ├── components/    # Componentes React
│   │   │   ├── navbar/    # Barra de navegación
│   │   │   ├── hero/      # Sección principal
│   │   │   ├── sections/  # Secciones del sitio
│   │   │   ├── footer/    # Pie de página
│   │   │   └── contacto/  # Formulario de contacto
│   │   ├── pages/         # Páginas principales
│   │   ├── assets/        # Recursos estáticos
│   │   └── media/         # Archivos multimedia
│   ├── hooks/             # Hooks personalizados
│   ├── context/           # Contexto de React
│   ├── translations/      # Archivos de traducción
│   ├── config/            # Configuraciones
│   └── utils/             # Utilidades
├── package.json           # Dependencias y scripts
├── README.md             # Documentación principal
└── SECURITY.md           # Política de seguridad
```

## 🔒 Seguridad

### **Política de Seguridad**
Este proyecto incluye una política de seguridad completa que cubre:

- 📊 **Configuración de Analytics**: Google Analytics seguro
- 🛡️ **Variables de Entorno**: Manejo seguro de configuraciones
- 🔐 **Privacidad**: Cumplimiento GDPR
- 🚨 **Reporte de Vulnerabilidades**: Proceso de reporte seguro

**Ver [SECURITY.md](SECURITY.md) para más detalles.**

### **Características de Seguridad**
- ✅ Validación de formularios robusta
- ✅ Variables de entorno para configuraciones sensibles
- ✅ Sin datos sensibles en el código del cliente
- ✅ Protección XSS y CSRF
- ✅ Dependencias actualizadas regularmente

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Por favor, sigue estos pasos:

1. **Fork el proyecto**
2. **Crea una rama para tu feature**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit tus cambios**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push a la rama**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Abre un Pull Request**

### **Guías de Contribución**
- Mantén el código limpio y bien documentado
- Sigue las convenciones de nomenclatura
- Añade pruebas para nuevas funcionalidades
- Actualiza la documentación según sea necesario
- Revisa la política de seguridad antes de contribuir

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License

Copyright (c) 2025 David Suárez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 📞 Contacto

### **David Suárez**
- 🌐 **Portfolio**: [https://devescanor.github.io/PortafolioDevSam/](https://devescanor.github.io/PortafolioDevSam/)
- 📧 **Email**: [devsamsuarez@gmail.com](mailto:devsamsuarez@gmail.com)
- 💼 **LinkedIn**: [David Suárez](https://www.linkedin.com/in/david-samuel-suarez-montoya-242059150)
- 🐙 **GitHub**: [@DevEscanor](https://github.com/DevEscanor)

### **Redes Sociales**
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/david-samuel-suarez-montoya-242059150)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DevEscanor)

---

<div align="center">
  <p>⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!</p>
  <p>🔄 Actualizado por última vez: <strong>Agosto 2025</strong></p>
</div>
