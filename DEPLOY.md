# 🚀 Guía de Deploy - GitHub Pages

## Pasos para Publicar tu Portfolio

### 1. Preparar el Repositorio

```bash
# Asegúrate de estar en la rama main
git checkout main

# Actualiza el package.json con tu usuario de GitHub
# Cambia "tu-usuario" por tu nombre de usuario real
```

### 2. Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Ve a **Settings** > **Pages**
3. En **Source**, selecciona **Deploy from a branch**
4. En **Branch**, selecciona **gh-pages** y **/(root)**
5. Haz click en **Save**

### 3. Configurar GitHub Actions

El workflow ya está configurado en `.github/workflows/deploy.yml`

### 4. Hacer Commit y Push

```bash
# Añadir todos los cambios
git add .

# Hacer commit
git commit -m "Configurar GitHub Pages"

# Hacer push
git push origin main
```

### 5. Verificar el Deploy

1. Ve a la pestaña **Actions** en tu repositorio
2. Verifica que el workflow se ejecute correctamente
3. Una vez completado, tu sitio estará disponible en:
   `https://tu-usuario.github.io/PortafolioDevSam`

### 6. Configuraciones Adicionales

#### Actualizar Homepage en package.json
```json
{
  "homepage": "https://tu-usuario.github.io/PortafolioDevSam"
}
```

#### Configurar Dominio Personalizado (Opcional)
1. Ve a **Settings** > **Pages**
2. En **Custom domain**, añade tu dominio
3. Crea un archivo `CNAME` en la carpeta `public/` con tu dominio

### 7. Solución de Problemas

#### Si el deploy falla:
1. Verifica que el nombre del repositorio coincida con la homepage
2. Asegúrate de que el workflow tenga permisos para escribir
3. Revisa los logs en la pestaña Actions

#### Si las rutas no funcionan:
- El archivo `404.html` y el script en `index.html` manejan el routing de SPA

### 8. Actualizaciones Futuras

Para actualizar el sitio:
```bash
git add .
git commit -m "Actualizar portfolio"
git push origin main
```

El deploy automático se ejecutará y actualizará el sitio en unos minutos.

---

**¡Tu portfolio estará vivo en GitHub Pages! 🎉** 