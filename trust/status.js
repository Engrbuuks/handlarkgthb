/* The service status page's content. The operator edits this file and uploads it again (with the website folder, or on its own)
   when something is wrong, and again when it is fixed. overall and each state: ok, degraded, down or maintenance.
   Dates are YYYY-MM-DD. Keep incidents from the last 90 days. Plain words: what people noticed, what we did, what is next. */
window.HANDLARK_STATUS = {
  updated: '2026-10-16',
  overall: 'ok',
  message: 'Everything is working.',
  parts: [
    { name: 'App and website', state: 'ok' },
    { name: 'Server and API', state: 'ok' },
    { name: 'Emails', state: 'ok' },
    { name: 'Payments', state: 'ok' },
    { name: 'Backups', state: 'ok' }
  ],
  incidents: [
    // { date: '2026-10-02', title: 'Emails were slow', state: 'resolved', text: 'Reminder emails arrived up to an hour late because the email service was busy. They all went out; nothing was lost.' }
  ]
};
