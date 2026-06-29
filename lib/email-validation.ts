// Shared client + server email validation

export const FREE_EMAIL_DOMAINS = new Set([
  // Google
  'gmail.com', 'googlemail.com',
  // Yahoo
  'yahoo.com', 'yahoo.co.uk', 'yahoo.co.in', 'yahoo.com.au', 'yahoo.ca',
  'yahoo.fr', 'yahoo.de', 'yahoo.es', 'yahoo.it', 'yahoo.co.jp',
  'ymail.com', 'rocketmail.com',
  // Microsoft
  'hotmail.com', 'hotmail.co.uk', 'hotmail.fr', 'hotmail.de', 'hotmail.es', 'hotmail.it',
  'outlook.com', 'outlook.co.uk', 'outlook.fr', 'outlook.de',
  'live.com', 'live.co.uk', 'live.fr', 'live.ca', 'live.com.au',
  'msn.com',
  // Apple
  'icloud.com', 'me.com', 'mac.com',
  // AOL
  'aol.com', 'aim.com',
  // Privacy/encrypted
  'proton.me', 'protonmail.com', 'protonmail.ch',
  'tutanota.com', 'tutanota.de', 'tuta.io', 'tutamail.com',
  // Zoho free tier
  'zoho.com', 'zohomail.com',
  // Russian
  'yandex.com', 'yandex.ru', 'mail.ru', 'rambler.ru', 'bk.ru', 'list.ru', 'inbox.ru',
  // GMX / Web.de
  'gmx.com', 'gmx.de', 'gmx.net', 'gmx.us', 'gmx.at', 'gmx.ch', 'web.de',
  // Other common free
  'mail.com', 'inbox.com', 'fastmail.com', 'fastmail.fm',
  'rediffmail.com', 'lycos.com', 'excite.com',
  // Temporary / disposable
  'mailinator.com', 'guerrillamail.com', 'guerrillamail.info', 'guerrillamail.biz',
  'guerrillamail.de', 'guerrillamail.net', 'guerrillamail.org',
  'guerrillamailblock.com', 'sharklasers.com', 'grr.la',
  'yopmail.com', 'yopmail.fr', 'cool.fr.nf', 'jetable.fr.nf',
  'tempmail.com', 'temp-mail.org', 'throwam.com', 'trashmail.com',
  'maildrop.cc', '10minutemail.com', 'dispostable.com',
  'spamgourmet.com', 'spamgourmet.net', 'spamgourmet.org',
  'mailnull.com', 'getairmail.com', 'filzmail.com',
]);

export function getEmailDomain(email: string): string {
  return email.split('@')[1]?.toLowerCase().trim() ?? '';
}

export function isFreeEmail(email: string): boolean {
  return FREE_EMAIL_DOMAINS.has(getEmailDomain(email));
}

/** Client-side email field validator for react-hook-form */
export function validateBusinessEmail(email: string): true | string {
  if (!email) return 'Email is required';
  if (!/^\S+@\S+\.\S+$/.test(email)) return 'Enter a valid email address';
  if (isFreeEmail(email)) return 'Please use your company or business email address';
  return true;
}
