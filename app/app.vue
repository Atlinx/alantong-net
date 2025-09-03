<script setup lang="ts">
const email_address = useState("email_address", () => "");
function reveal_email() {
  email_address.value = atob("YWp0MjA4QHJ1dGdlcnMuZWR1");
}
</script>

<template>
  <div
    class="bg-slate-200 text-slate-900 min-h-dvh font-ubuntu px-8 py-16 md:px-16 flex justify-center"
  >
    <div class="max-w-screen-md">
      <div class="flex flex-col gap-8 sm:flex-row sm:max-w-full">
        <div class="sm:flex-grow flex flex-col gap-2 items-start">
          <h1 class="inline-block font-bebas text-8xl text-sky-600">
            alan tong
          </h1>
          <div class="flex gap-2">
            <a target="_blank" href="https://github.com/atlinx">github</a>
            <a target="_blank" href="https://linkedin.com/in/alantong88"
              >linkedin</a
            >
          </div>
          <p>
            I am a post-baccalaureate research assistant for Professor Bekris'
            <a target="_blank" href="https://pracsys.cs.rutgers.edu/"
              >Pracsys Lab</a
            >
            at Rutgers. I'm interested in robot learning, including
            reinforcement learning and imitation learning. I also do a little
            bit of
            <a target="_blank" href="https://fracturalstudios.com/"
              >game development</a
            >
            in my free time. You can contact me through the email listed below.
          </p>
          <div class="flex flex-wrap gap-4 mt-4">
            <button class="btn" @click="reveal_email">show email</button>
            <p>{{ email_address }}</p>
          </div>
        </div>
        <img
          class="w-full aspect-square max-w-100 sm:max-w-none sm:h-64 md:h-80 object-cover max-sm:object-[100%_40%] border border-sky-600 bg-sky-600"
          src="/images/portrait.webp"
        />
      </div>
      <AContentSection class="mt-16" collection="projects" preview="show_stripes"/>
      <AContentSection class="mt-16" collection="experience" preview="none"/>
      <div class="mt-16">
        <h2 class="inline-block font-bebas text-5xl mb-4 text-sky-600">
          education
        </h2>
        <div class="flex">
          <p class="flex-grow">Rutgers University New Brunswick</p>
          <p class="text-sky-600">2021 - 2025</p>
        </div>
        <div class="grid grid-cols-[1.5fr_1.2fr] ml-4">
          <p>B.S. in Computer Science</p>
          <p>Summa Cum Laude</p>
          <p>B.A. in Leadership and Management</p>
          <p>Phi Beta Kappa Honors Society</p>
        </div>
      </div>
    </div>
  </div>
</template>
