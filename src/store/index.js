const moment = require("moment");
const { toast } = require("react-hot-toast");
const create = require("zustand").create;
const persist = require("zustand/middleware").persist;
const createJSONStorage = require("zustand/middleware").createJSONStorage;

const usePreference = create(
  persist(
    (set, get) => ({
      mode: "light",
      toggleMode: () =>
        set({ mode: get().mode === "light" ? "dark" : "light" }),
      isLightMode: () => get().mode === "light",
    }),
    {
      name: "preference-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

const useAuth = create((set) => ({
  auth: false,
  validate: (code) => {
    if (moment().format("hhmm") === code) {
      set({ auth: true });
      toast.success("Authentication successfull! Welcome.");
    } else {
      set({ auth: false });
      toast.error("Invalid code! Try again.");
    }
  },
}));

module.exports = { useAuth, usePreference };
