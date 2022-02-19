const {join} = require('path')

module.exports = ({ env }) => ({
  // other plugins' configuration

  graphql: {
    enabled: true,
    config: {
      generateArtifacts: true,
      artifacts: {
        schema: join(__dirname, '..', 'schema.graphql'),
        typegen: join(__dirname, '..', 'types.d.ts'),
      },
    }
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.example.com"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
        secure: true,
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: "info@artcoded.net",
        defaultReplyTo: "info@artcoded.net",
      },
    },
  },
  // ...
});
