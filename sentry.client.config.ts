import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn:
    "https://f6656014d2ba4b54713e5a316fd3af94@o4509496577294336.ingest.us.sentry.io/4509496592629760",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
      isNameRequired: true,
    }),
  ],
});
