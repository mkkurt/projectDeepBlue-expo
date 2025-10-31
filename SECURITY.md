# Security Best Practices

This document outlines security best practices for the Project Deep Blue application.

## Environment Variables

### Configuration
- Never commit `.env` files to version control
- Use `.env.example` as a template for required environment variables
- Set up different environment files for development, staging, and production

### Required Variables
```bash
API_BASE_URL=http://localhost:3000
CHAT_API_URL=http://localhost:8001
SOCKET_URL=http://localhost:4000
NODE_ENV=development
```

## API Security

### 1. Timeout Configuration
All API requests should have timeouts configured to prevent hanging requests:
- Default timeout: 30 seconds
- Chat API timeout: 60 seconds (for longer LLM responses)

### 2. Error Handling
- Never expose internal error details to users in production
- Log errors appropriately for debugging
- Provide user-friendly error messages

### 3. Input Validation
- Always validate user input before sending to APIs
- Sanitize data to prevent injection attacks
- Use TypeScript or PropTypes for type safety

## Dependency Management

### Regular Updates
```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### Security Vulnerabilities
- **FIXED**: Updated axios from 1.6.8 to latest to fix SSRF and DoS vulnerabilities
- **FIXED**: Updated other dependencies with known vulnerabilities
- **REMAINING**: 3 low-severity vulnerabilities in Expo dependencies (require breaking changes to fix)
  - These are in `@expo/cli` → `send` package
  - Would require updating to Expo 54 (breaking change)
  - Risk is low as these affect dev server only, not production build
  - Recommendation: Plan Expo upgrade in next major version
- Regularly run `npm audit` to check for new vulnerabilities

## Network Security

### HTTPS in Production
- Always use HTTPS in production
- Never hardcode HTTP URLs for production APIs
- Use environment variables for all API endpoints

### API Keys and Secrets
- Never commit API keys or secrets to version control
- Use environment variables or secure key management services
- Rotate keys regularly

## Code Quality

### ESLint Rules
The project uses ESLint to enforce code quality:
- No inline styles (use StyleSheet)
- No color literals (use constants)
- No raw text outside Text components
- Proper error handling

### Code Reviews
- All code should be reviewed before merging
- Use the code review tool to catch issues early
- Address security feedback promptly

## Error Boundaries

The app uses Error Boundaries to catch and handle errors gracefully:
- Prevents app crashes from propagating
- Shows user-friendly error messages
- Logs errors for debugging in development

## Testing

### Security Testing
- Test error handling paths
- Test with invalid/malicious inputs
- Test network failure scenarios
- Test timeout scenarios

## Monitoring

### Production Monitoring
Consider implementing:
- Error tracking (e.g., Sentry, Bugsnag)
- Performance monitoring
- API usage monitoring
- Security event logging

## Updates and Maintenance

### Regular Tasks
- [ ] Weekly: Check `npm audit` for vulnerabilities
- [ ] Monthly: Update dependencies
- [ ] Quarterly: Review and update security practices
- [ ] Review error logs regularly

## Incident Response

If a security issue is discovered:
1. Assess the severity and impact
2. Document the issue
3. Create a fix
4. Test thoroughly
5. Deploy the fix
6. Notify affected users if necessary
7. Post-mortem: Learn and improve processes

## Resources

- [OWASP Mobile Top 10](https://owasp.org/www-project-mobile-top-10/)
- [React Native Security](https://reactnative.dev/docs/security)
- [Expo Security](https://docs.expo.dev/guides/security/)
- [npm Security Best Practices](https://docs.npmjs.com/security-best-practices)

## Contact

For security concerns, please contact the project maintainer.
