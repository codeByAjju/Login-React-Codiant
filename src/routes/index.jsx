import { userRoutes } from "./User";

export const routes = () => {
  return [...userRoutes()];
};

export const routesList = () => {
  return userRoutes().reduce((prev, curr) => {
    curr.children?.forEach((child) => {
      if (child.children) {
        prev.push(...child.children);
      }
    });
    return prev;
  }, []);
};

export const getCompletePathList = () => {
  return routesList().reduce((prev, curr) => {
    prev.push(curr);
    if (curr.children) {
      prev.push(...curr.children);
    }
    return prev;
  }, []);
};
