export const state = () => ({
  menuItems: [
    {
      title: "HOME",
      to: "/",
      privilage: "anyone",
    },
    {
      title: "LOGIN",
      to: "/login",
      privilage: "anyone",
    },
    {
      title: "AFTER LOGIN",
      to: "/",
      privilage: "general",
    },
  ],
});
