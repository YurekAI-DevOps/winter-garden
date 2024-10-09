import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const projectId = "eGDxXfXjSnZ6V11oAs2rn3";
export const projectApiToken = "3lxIVSUWATiUvIMhCq8pRHYPqpoTf4boKNQViapnsdtwhFWHWbHhcn2RU9NJZOrtLnsmcVOzXr1lOzfEl5Ug";
export const host = "https://builder.yurekai.com";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: projectId,
      token: projectApiToken,
    },
  ],
  host,
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
