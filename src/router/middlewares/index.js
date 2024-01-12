import { ADMIN } from "../../constants/layouts";

export async function layoutMiddleware(route) {
  const { layout } = route.meta;

  const layoutName = layout || ADMIN;

  const component = await import(`../../layouts/${layoutName}.vue`);

  route.meta.layoutComponent = component.default;
}
