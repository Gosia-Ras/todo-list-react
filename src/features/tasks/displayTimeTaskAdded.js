export const displayTimeTaskAdded = () => {
  const date = new Date();
  date.toLocaleDateString("en-GB", {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long",
  });
};
