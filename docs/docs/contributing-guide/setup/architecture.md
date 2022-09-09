---
id: architecture
title: Architecture
---
# Introduction

Tele-CMS have two main components: **Tele-CMS Server** and **Tele-CMS Client**.

### 1. Tele-CMS Server

Tele-CMS server is a Node.js API application. Server is responsible for authentication, authorization, persisting application definitions, running queries, storing data source credentials securely and more.

**Dependencies:**

- **PostgreSQL** - Tele-CMS server persists data to a postgres database.
- **Email service** (SMTP/Sendgrid/Mailgun/etc) - Required to send user invitations and password reset emails.

### 2. Tele-CMS Client

Tele-CMS client is a ReactJS application. Client is responsible for visually editing the applications, building & editing queries, rendering applications, executing events and their trigger, etc.

## Requirements

1. **Node version 14.x**
