# Running on iPhone - Setup Guide

This guide will help you run the Project Deep Blue app on your iPhone without needing your computer.

## Prerequisites Completed ✅

The following has been configured in this repository:

1. ✅ Installed `expo-dev-client` package
2. ✅ Updated `app.json` with expo-dev-client plugin
3. ✅ Configured `eas.json` with iOS build profiles
4. ✅ Created GitHub Actions workflows for automated builds and updates

## What You Need To Do

### Step 1: Get Your Expo Access Token

1. Go to [https://expo.dev/accounts/[your-username]/settings/access-tokens](https://expo.dev/accounts/[your-username]/settings/access-tokens)
2. Create a new access token (name it something like "GitHub Actions")
3. Copy the token (you won't be able to see it again!)

### Step 2: Add Expo Token to GitHub Secrets

1. Go to your GitHub repository: https://github.com/mkkurt/projectDeepBlue-expo
2. Click on **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `EXPO_TOKEN`
5. Value: Paste the token from Step 1
6. Click **Add secret**

### Step 3: Trigger Your First Build

1. Go to the **Actions** tab in your GitHub repository
2. Click on **EAS Build** workflow on the left
3. Click **Run workflow** button
4. Select:
   - Profile: `development` (for testing)
   - Platform: `ios`
5. Click **Run workflow**

The build will take 15-30 minutes. You'll receive an email when it's complete.

### Step 4: Install on Your iPhone

Once the build completes, you have two options:

#### Option A: Direct Install (Recommended for Development)
1. Check your email for the build notification from Expo
2. Open the email on your iPhone
3. Tap the link to install the development build
4. When prompted, allow the installation
5. The app will be installed on your iPhone!

#### Option B: Via Expo Dashboard
1. Go to [https://expo.dev/accounts/[your-username]/projects/projectDeepBlue-expo/builds](https://expo.dev)
2. Find your latest build
3. Scan the QR code with your iPhone camera or click the install link
4. Follow the prompts to install

### Step 5: Launch the App

1. Open the "projectDeepBlue-expo" app on your iPhone (it will have the dev client icon)
2. The app will load and connect to the latest update on the "development" channel

## Making Updates

After the initial build is installed, you can push updates without rebuilding:

1. Make your code changes in the repository
2. Commit and push to the `main` branch
3. The **EAS Update** workflow will automatically publish the update
4. Reopen the app on your iPhone to receive the update

OR manually trigger an update:

1. Go to **Actions** → **EAS Update**
2. Click **Run workflow**
3. Select the channel (e.g., `development`)
4. Add a message (optional)
5. Click **Run workflow**

## Understanding Build Profiles

- **development**: For testing with development tools. Install this first!
- **preview**: For testing production-like builds before release
- **production**: For App Store submission (requires Apple Developer account)

## Troubleshooting

### Build Failed?
- Check the GitHub Actions logs for errors
- Ensure `EXPO_TOKEN` secret is set correctly
- Verify your Expo account is linked to the project ID in `app.json`

### Can't Install on iPhone?
- Make sure you're using Safari on iPhone
- For development builds, you may need to trust the certificate:
  - Go to Settings → General → VPN & Device Management
  - Tap on the developer profile
  - Tap "Trust"

### App Won't Load?
- Make sure you have an internet connection
- Try force-quitting and reopening the app
- Check if a new update is available by reopening the app

## Additional Resources

- [Expo Dev Client Documentation](https://docs.expo.dev/develop/development-builds/introduction/)
- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)
- [EAS Update Documentation](https://docs.expo.dev/eas-update/introduction/)

## Summary

You now have a fully automated setup:
- Push code → GitHub Actions builds/updates automatically
- Install once on iPhone → Receive updates over-the-air
- No computer needed after initial GitHub setup!

**First time setup:**
1. Add `EXPO_TOKEN` to GitHub secrets (one time)
2. Run EAS Build workflow for iOS (wait ~20 mins)
3. Install on iPhone from email/Expo dashboard
4. Done! Future updates are automatic.
