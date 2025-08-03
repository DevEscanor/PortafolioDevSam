# 🔒 Security Guidelines

## 🚨 Critical Security Measures

### Environment Variables
This project uses environment variables to protect sensitive information. **NEVER commit the following files:**
- `.env`
- `.env.local`
- `.env.development.local`
- `.env.test.local`
- `.env.production.local`

### EmailJS Configuration
The EmailJS credentials are now stored in environment variables:

```bash
# Create .env.local file (DO NOT COMMIT THIS FILE)
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id
```

### Production Deployment
For GitHub Pages deployment, you need to set these as repository secrets:

1. Go to your GitHub repository
2. Settings > Secrets and variables > Actions
3. Add the following secrets:
   - `REACT_APP_EMAILJS_SERVICE_ID`
   - `REACT_APP_EMAILJS_TEMPLATE_ID`
   - `REACT_APP_EMAILJS_USER_ID`

## 🔍 Security Checklist

### Before Committing
- [ ] No hardcoded API keys or secrets
- [ ] No database credentials
- [ ] No personal information in code
- [ ] Environment files are in .gitignore
- [ ] No console.log statements with sensitive data

### Before Deploying
- [ ] All environment variables are set
- [ ] No development URLs in production
- [ ] HTTPS is enabled
- [ ] Security headers are configured

## 🛡️ Best Practices

### Code Security
- Use environment variables for all sensitive data
- Validate user inputs
- Sanitize data before rendering
- Use HTTPS in production
- Keep dependencies updated

### Repository Security
- Never commit `.env` files
- Use `.gitignore` properly
- Review code before pushing
- Use branch protection rules
- Enable security scanning

## 🚨 Emergency Actions

If you accidentally commit sensitive information:

1. **Immediately** change the exposed credentials
2. Remove the commit from history:
   ```bash
   git filter-branch --force --index-filter \
   'git rm --cached --ignore-unmatch path/to/file' \
   --prune-empty --tag-name-filter cat -- --all
   ```
3. Force push to remove from remote:
   ```bash
   git push origin --force --all
   ```

## 📞 Security Contact

If you discover a security vulnerability, please contact:
- Email: [your-email@example.com]
- GitHub: [@DevEscanor](https://github.com/DevEscanor)

---

**Remember: Security is everyone's responsibility!** 🔒 