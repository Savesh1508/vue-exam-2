import { HOME } from "../../constants/layouts";

export async function layoutMiddleware(route) {
  const { layout } = route.meta;

  const layoutName = layout || HOME;

  const component = await import(`../../layouts/${layoutName}.vue`);

  route.meta.layoutComponent = component.default;
}
