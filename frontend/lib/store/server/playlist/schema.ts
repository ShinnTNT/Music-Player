import {
  ApiReponseTypeArray,
  ApiResponseValidator,
} from "@/lib/types/ApiResponseValidator";
import * as z from "zod";

const playlistDataSchema = z.object({
  name: z.string(),
  createdAt: z.string().datetime(),
  updated: z.string().datetime().nullish(),
  publishedAt: z.string().datetime(),
  song_count: z.number(),
  duration: z.number(),
  music: z.object({
    data: z.array(
      z.object({
        id: z.number(),
        attributes: z.object({
          name: z.string(),
          createdAt: z.string().datetime(),
          updatedAt: z.string().datetime(),
          publishedAt: z.string().datetime(),
          artist: z.string(),
        }),
      })
    ),
  }),
  image: z.object({
    data: z.object({
      id: z.number(),
      attributes: z.object({
        name: z.string(),
        alternativeText: z.string().nullish(),
        caption: z.string().nullish(),
        width: z.number().nullish(),
        height: z.number().nullish(),
        formats: z
          .object({
            thumbnail: z
              .object({
                name: z.string(),
                hash: z.string(),
                ext: z.string(),
                mime: z.string(),
                path: z.string().nullish(),
                width: z.number(),
                height: z.number(),
                size: z.number(),
                url: z.string(),
              })
              .nullish(),
            small: z
              .object({
                name: z.string(),
                hash: z.string(),
                ext: z.string(),
                mime: z.string(),
                path: z.string().nullish(),
                width: z.number(),
                height: z.number(),
                size: z.number(),
                url: z.string(),
              })
              .nullish(),
          })
          .nullable(),
        hash: z.string(),
        ext: z.string(),
        mime: z.string(),
        size: z.number(),
        url: z.string(),
        previewUrl: z.string().nullish(),
        provider: z.string(),
        provider_metadata: z.string().nullish(),
        createdAt: z.string().datetime(),
        updatedAt: z.string().datetime(),
      }),
    }),
  }),
});

const playlistArrayDataSchema = ApiReponseTypeArray({
  schema: playlistDataSchema,
});

export const playlistApiResSchema = ApiResponseValidator({
  dataSchema: playlistArrayDataSchema,
});
