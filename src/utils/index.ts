import type { ComponentObjectPropsOptions } from 'vue';
export const defineComponentsProps = <PP extends ComponentObjectPropsOptions>(props: PP) => {
  return props;
};
