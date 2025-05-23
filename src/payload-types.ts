/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Brisbane'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    users: User;
    media: Media;
    pages: Page;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    pages: PagesSelect<false> | PagesSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt?: string | null;
  prefix?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  title: string;
  slug: string;
  layout?:
    | (
        | {
            video: number | Media;
            fallbackImage: number | Media;
            headline: string;
            subheadline: string;
            bottomNote: string;
            locations: {
              label?: string | null;
              phone?: string | null;
              id?: string | null;
            }[];
            id?: string | null;
            blockName?: string | null;
            blockType: 'hero-banner';
          }
        | {
            name: string;
            heading: string;
            body: string;
            alignment: 'left' | 'center' | 'reverse';
            id?: string | null;
            blockName?: string | null;
            blockType: 'brand-statement';
          }
        | {
            name: string;
            cars: {
              model: string;
              price: number;
              image: number | Media;
              orderLink?: string | null;
              id?: string | null;
            }[];
            id?: string | null;
            blockName?: string | null;
            blockType: 'car-grid';
          }
        | {
            name: string;
            items: {
              images: {
                image: number | Media;
                id?: string | null;
              }[];
              request: string;
              solution: string;
              model: string;
              price: number;
              timeframe: string;
              id?: string | null;
            }[];
            id?: string | null;
            blockName?: string | null;
            blockType: 'case-studies';
          }
        | {
            name?: string | null;
            colors: {
              label: string;
              hex: string;
              textColor?: string | null;
              backgroundPattern?: (number | null) | Media;
              id?: string | null;
            }[];
            rightImage: number | Media;
            caption?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'color-accordion';
          }
        | {
            name?: string | null;
            topText: string;
            ctaText: string;
            ctaLink: string;
            id?: string | null;
            blockName?: string | null;
            blockType: 'cta-banner';
          }
        | {
            name: string;
            lines: {
              columns: {
                text: string;
                id?: string | null;
              }[];
              id?: string | null;
            }[];
            id?: string | null;
            blockName?: string | null;
            blockType: 'split-headline';
          }
        | {
            name?: string | null;
            features: {
              text: string;
              id?: string | null;
            }[];
            id?: string | null;
            blockName?: string | null;
            blockType: 'striped-features';
          }
        | {
            name?: string | null;
            items: {
              title: string;
              tagline?: string | null;
              description: string;
              ctaLabel?: string | null;
              ctaLink?: string | null;
              id?: string | null;
            }[];
            id?: string | null;
            blockName?: string | null;
            blockType: 'support-accordion';
          }
        | {
            name: string;
            title: string;
            features: {
              title: string;
              description: string;
              id?: string | null;
            }[];
            image: number | Media;
            badgeTextTop?: string | null;
            badgeTextBottom?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'why-us';
          }
      )[]
    | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'pages';
        value: number | Page;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  prefix?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  title?: T;
  slug?: T;
  layout?:
    | T
    | {
        'hero-banner'?:
          | T
          | {
              video?: T;
              fallbackImage?: T;
              headline?: T;
              subheadline?: T;
              bottomNote?: T;
              locations?:
                | T
                | {
                    label?: T;
                    phone?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        'brand-statement'?:
          | T
          | {
              name?: T;
              heading?: T;
              body?: T;
              alignment?: T;
              id?: T;
              blockName?: T;
            };
        'car-grid'?:
          | T
          | {
              name?: T;
              cars?:
                | T
                | {
                    model?: T;
                    price?: T;
                    image?: T;
                    orderLink?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        'case-studies'?:
          | T
          | {
              name?: T;
              items?:
                | T
                | {
                    images?:
                      | T
                      | {
                          image?: T;
                          id?: T;
                        };
                    request?: T;
                    solution?: T;
                    model?: T;
                    price?: T;
                    timeframe?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        'color-accordion'?:
          | T
          | {
              name?: T;
              colors?:
                | T
                | {
                    label?: T;
                    hex?: T;
                    textColor?: T;
                    backgroundPattern?: T;
                    id?: T;
                  };
              rightImage?: T;
              caption?: T;
              id?: T;
              blockName?: T;
            };
        'cta-banner'?:
          | T
          | {
              name?: T;
              topText?: T;
              ctaText?: T;
              ctaLink?: T;
              id?: T;
              blockName?: T;
            };
        'split-headline'?:
          | T
          | {
              name?: T;
              lines?:
                | T
                | {
                    columns?:
                      | T
                      | {
                          text?: T;
                          id?: T;
                        };
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        'striped-features'?:
          | T
          | {
              name?: T;
              features?:
                | T
                | {
                    text?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        'support-accordion'?:
          | T
          | {
              name?: T;
              items?:
                | T
                | {
                    title?: T;
                    tagline?: T;
                    description?: T;
                    ctaLabel?: T;
                    ctaLink?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        'why-us'?:
          | T
          | {
              name?: T;
              title?: T;
              features?:
                | T
                | {
                    title?: T;
                    description?: T;
                    id?: T;
                  };
              image?: T;
              badgeTextTop?: T;
              badgeTextBottom?: T;
              id?: T;
              blockName?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}