import mock from "~/mocks/$mock.js";

export default ({ $axios }) => {
  mock($axios).setDelayTime(1000);
};
