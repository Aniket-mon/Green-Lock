import { defineManifest } from 'wxt';

export default defineManifest({
    "manifest_version": 3,
    "name": "Green Lock",
    "description": "Advanced file protection for WhatsApp Web",
    "version": "0.1.0",
    "permissions": ["downloads", "notifications", "storage", "scripting"],
    "host_permissions": ["*://web.whatsapp.com/*"],
    "action": {
      "default_popup": "popup.html",
      "default_title": "Green Lock"
    },
    "icons": {
      "16": "icons/icon16.png",
      "48": "icons/icon48.png",
      "128": "icons/icon128.png"
    }
  }); 

