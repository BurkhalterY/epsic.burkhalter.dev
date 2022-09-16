export default {
  path: "/misc",
  component: () => import("@/views/misc/Base.vue"),
  meta: {
    favicon: "todo",
  },
  children: [
    {
      path: "",
      component: () => import("@/views/misc/Index.vue"),
      meta: {
        title: "Divers",
      },
    },
    {
      path: "shortcuts",
      component: () => import("@/views/misc/ShortcutsIndex.vue"),
      meta: {
        title: "Raccourcis clavier",
      },
    },
    {
      path: "shortcuts/:app",
      component: () => import("@/views/misc/Shortcuts.vue"),
      meta: {
        title: "Raccourcis clavier",
      },
    },
  ],
}
