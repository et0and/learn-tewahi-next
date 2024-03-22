import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "assets",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "howto",
        label: "How to",
        path: "pages/how-to",
        format: 'mdx',
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: 'iframe',
                label: 'YouTube',
                fields: [
                  {
                    name: 'src',
                    label: 'YouTube link. This needs to be in https://youtube.com/embed/ format. Insert the video ID (comes after v=)',
                    type: 'string',
                    required: true,
                  },
                  {
                    name: 'height',
                    label: 'Height',
                    type: "string",
                    options: ['430'],
                    required: true,
                  },
                  {
                    name: 'width',
                    label: 'Width',
                    type: "string",
                    options: ['100%'],
                    required: true,
                  },
                ],
              },

              
            ],
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/how-to/${document._sys.filename}`,
        },
      },
      {
        name: "projects",
        label: "Projects",
        path: "pages/projects",
        format: 'mdx',
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: 'iframe',
                label: 'YouTube',
                fields: [
                  {
                    name: 'src',
                    label: 'YouTube link. This needs to be in https://youtube.com/embed/ format. Insert the video ID (comes after v=)',
                    type: 'string',
                    required: true,
                  },
                  {
                    name: 'height',
                    label: 'Height',
                    type: "string",
                    options: ['430'],
                    required: true,
                  },
                  {
                    name: 'width',
                    label: 'Width',
                    type: "string",
                    options: ['100%'],
                    required: true,
                  },
                ],
              },

              
            ],
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/projects/${document._sys.filename}`,
        },
      },
      {
        name: "print",
        label: "3D printing tools",
        path: "pages/tools/3D-printing",
        format: 'mdx',
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: 'iframe',
                label: 'YouTube',
                fields: [
                  {
                    name: 'src',
                    label: 'YouTube link. This needs to be in https://youtube.com/embed/ format. Insert the video ID (comes after v=)',
                    type: 'string',
                    required: true,
                  },
                  {
                    name: 'height',
                    label: 'Height',
                    type: "string",
                    options: ['430'],
                    required: true,
                  },
                  {
                    name: 'width',
                    label: 'Width',
                    type: "string",
                    options: ['100%'],
                    required: true,
                  },
                ],
              },

              
            ],
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/tools/3D-printing/${document._sys.filename}`,
        },
      },
      {
        name: "other",
        label: "Other tools",
        path: "pages/tools/other",
        format: 'mdx',
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: 'iframe',
                label: 'YouTube',
                fields: [
                  {
                    name: 'src',
                    label: 'YouTube link. This needs to be in https://youtube.com/embed/ format. Insert the video ID (comes after v=)',
                    type: 'string',
                    required: true,
                  },
                  {
                    name: 'height',
                    label: 'Height',
                    type: "string",
                    options: ['430'],
                    required: true,
                  },
                  {
                    name: 'width',
                    label: 'Width',
                    type: "string",
                    options: ['100%'],
                    required: true,
                  },
                ],
              },

              
            ],
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/tools/other/${document._sys.filename}`,
        },
      },
      {
        name: "tewahitools",
        label: "Te Wahi tools",
        path: "pages/tools/te-wahi-tools",
        format: 'mdx',
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: 'iframe',
                label: 'YouTube',
                fields: [
                  {
                    name: 'src',
                    label: 'YouTube link. This needs to be in https://youtube.com/embed/ format. Insert the video ID (comes after v=)',
                    type: 'string',
                    required: true,
                  },
                  {
                    name: 'height',
                    label: 'Height',
                    type: "string",
                    options: ['430'],
                    required: true,
                  },
                  {
                    name: 'width',
                    label: 'Width',
                    type: "string",
                    options: ['100%'],
                    required: true,
                  },
                ],
              },

              
            ],
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/tools/te-wahi-tools/${document._sys.filename}`,
        },
      },
    ],
  },
});
