
<script lang="ts" setup>
  const props = withDefaults(defineProps<{
    header?: string,
    collection: string,
    preview?: "show_stripes" | "show_empty" | "none"
  }>(), { preview: "show_stripes" })
  const { data: projects } = await useAsyncData(props.collection, () => {
    return queryCollection(props.collection as any).all();
  });
  const { active, greater } = useBreakpoints()

  function item_has_preview(item: any) {
    return item.image || item.video
  }
</script>

<template>
  <div>
    <h2 class="inline-block font-bebas text-5xl mb-4 text-sky-600">
      {{  (props.header ?? props.collection) }}
    </h2>
    <div class="flex flex-col gap-16 sm:gap-8">
      <div
        class="flex flex-col h-auto gap-4 sm:flex-row sm:gap-8 relative"
        v-for="project in projects"
        :key="project.id"
      >
        <template v-if="props.preview && (item_has_preview(project) || greater('sm'))">
          <img
            class="w-full aspect-video sm:min-w-64 sm:w-64 sm:max-w-64 sm:min-h-64 sm:aspect-square object-cover border-solid border border-sky-600 bg-sky-600"
            :src="project.image"
            v-if="project.image"
          />
          <video
            class="w-full aspect-video sm:min-w-64 sm:w-64 sm:max-w-64 sm:min-h-64 sm:aspect-square object-cover border-solid border border-sky-600 bg-sky-600"
            :src="project.video"
            v-if="project.video"
            autoplay
            muted
            loop
          />
          <template v-if="!item_has_preview(project)">
            <div
              class="w-full aspect-video sm:min-w-64 sm:w-64 sm:max-w-64 sm:min-h-64 sm:aspect-square border-solid border border-slate-300 opacity-50 bg-stripes"
              v-if="props.preview == 'show_stripes'"
            ></div>
            <div
              class="w-full aspect-video sm:min-w-64 sm:w-64 sm:max-w-64 sm:min-h-64 sm:aspect-square"
              v-if="props.preview == 'show_empty'"
            ></div>
          </template>
        </template>
        <div class="flex flex-col flex-grow">
          <div class="flex flex-col md:flex-row">
            <div class="flex flex-col items-start">
              <div class="mb-1 flex flex-col">
                <div>
                  <h2
                    class="inline font-bold bg-sky-600 px-1 py-1 text-slate-200 box-decoration-clone"
                  >
                    {{ project.name }}
                  </h2>
                </div>
                <h2
                  class="inline italic text-sky-600"
                >
                  {{ project.subtitle }}
                </h2>
              </div>
              <div class="flex flex-row gap-4 mb-3" v-if="project.links">
                <a
                  target="_blank"
                  :href="link[1]"
                  v-for="link in (Object.entries(project.links) as any as [string, string])"
                  :key="link[0]"
                  >{{ link[0] }}
                </a>
              </div>
            </div>
            <p
              class="text-sky-600 flex-grow text-left mb-2 md:text-right md:mb-0 min-w-40"
            >
              {{ project.date }}
            </p>
          </div>
          <ul>
            <li v-for="line in project.desc">{{ line }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>